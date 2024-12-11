import { cloneElement, PropsWithChildren, ReactElement } from 'react'

interface Props {
  wrapperElement?: ReactElement
}

/**
 * Wraps a component within the parent component.
 * Useful to be used when wanting to wrap a component inside a Tooltip, for example
 *
 * @param wrapperElement   Component that will wrap the children
 * @param children
 *
 */
const ComponentWrapper = ({
  wrapperElement,
  children,
}: PropsWithChildren<Props>) =>
  wrapperElement ? cloneElement(wrapperElement, {}, children) : children

export default ComponentWrapper
