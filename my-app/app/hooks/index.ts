import { useEffect, useRef } from 'react'

export enum KeyCodes {
  KEY_ESC = 27,
}

/**
 * Creates a click handler that calls the callback function when the user clicks
 * outside the reference element.
 *
 * @param callback
 */
export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref])

  return ref
}

/**
 * Provides handler functionality for keyboard events of multiple keys.
 * Registers an event listener for the global `keyup` event and then maps
 * the events to the corresponding callback in the `handlerMap`.
 *
 * If the `condition` function is specified, the handlers will only be called
 * when this function returns true.
 *
 * Example:
 * ```tsx
 * useKeyPressHandler({
 *   38: e => moveUp(),
 *   40: e => moveDown(),
 * }, () => isActive)
 * ```
 *
 * @param     handlerMap      Record mapping a key code to a callback
 * @param     condition       Condition callback to determine whether the handlers should be called
 */
export function useKeyPressHandler(
  handlerMap: Record<number, (e: KeyboardEvent) => void>,
  condition?: (e: KeyboardEvent) => boolean,
) {
  const handleKeyPress = (e: KeyboardEvent) => {
    // eslint-disable-next-line no-prototype-builtins
    if (handlerMap.hasOwnProperty(e.key) && (!condition || condition(e))) {
      handlerMap[e.key](e)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  })
}
