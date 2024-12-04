import '@tools/test-config/jest.basic.test-bundler.config'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './index'

describe('Button', () => {
  it('Should render the styled component', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()
  })

  it('Should be clickable', async () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<Button onClick={handleClick}>Test</Button>)
    const element = getByRole('button')

    // OnClick function
    await userEvent.click(element)
    expect(handleClick).toHaveBeenCalled()
  })

  it('Should not be clickable when is disabled', () => {
    const { getByRole } = render(<Button disabled={true}>Test</Button>)

    expect(getByRole('button')).toHaveStyleRule('pointer-events', 'none', {
      modifier: ':disabled',
    })
  })

  it('Should have a default secondary background with no variant set', () => {
    const { getByRole } = render(<Button />)
    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      testTheme.color.background.secondary,
    )
  })

  it('Should have a accent background when the variant is set to primary', () => {
    const { getByRole } = render(<Button $variant="primary" />)
    expect(getByRole('button')).toHaveStyleRule(
      `background-color','${testTheme.color.background.accentSubtle}`,
    )
  })

  it('Should have a border when is disabled', () => {
    const { getByRole } = render(<Button disabled={true} />)
    expect(getByRole('button')).toHaveStyleRule(
      'border',
      `1px solid ${testTheme.color.border.subtle}`,
      {
        modifier: ':disabled',
      },
    )

    expect(getByRole('button')).toHaveStyleRule('pointer-events', 'none', {
      modifier: ':disabled',
    })
  })

  it('Should have transparent background when variant text is set', () => {
    const { getByRole } = render(<Button $variant="text" />)
    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      'transparent',
    )
  })
})
