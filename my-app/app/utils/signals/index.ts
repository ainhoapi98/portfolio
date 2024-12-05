import { computed, ReadonlySignal, signal } from '@preact/signals-react'

export function createSignal<T>(
  initialValue: T,
): [ReadonlySignal<T>, (data: T) => void] {
  const sig = signal(initialValue)

  const readOnly = computed(() => sig.value)

  function setSignal(data: T) {
    sig.value = data
  }

  return [readOnly, setSignal]
}
