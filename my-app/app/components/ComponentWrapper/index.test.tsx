import { render } from '@testing-library/react'
import ComponentWrapper from 'elements/ComponentWrapper/index'

describe('elements > ComponentWrapper', () => {
  it('should wrap the component inside the provided container', () => {
    const { container, getByTestId } = render(
      <ComponentWrapper wrapperElement={<div data-testid={'wrapper'}></div>}>
        <span data-testid={'child'}>children</span>
      </ComponentWrapper>,
    )

    expect(getByTestId('wrapper')).toBeInTheDocument()
    expect(getByTestId('wrapper').children[0]).toHaveTextContent('children')
    expect(container).toMatchSnapshot()
  })

  it('should return the children if no wrapper was provided', () => {
    const { container, queryByTestId } = render(
      <ComponentWrapper>
        <span data-testid={'child'}>children</span>
      </ComponentWrapper>,
    )
    expect(queryByTestId('wrapper')).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
