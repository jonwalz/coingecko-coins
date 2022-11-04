import { act, fireEvent, render, screen } from '@testing-library/react'
import { ExpandableCard, useExpandableCard } from '..'

describe('ExpandableCard', () => {
  it('should render correctly', async () => {
    const defaultProps = {
      title: 'Test title',
      isExpanded: false,
      handleOnExpand: jest.fn(),
      children: <div>content</div>,
    }
    render(<ExpandableCard {...defaultProps} />)

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(defaultProps.handleOnExpand).toHaveBeenCalled()
  })
})

describe('useExpandableCard', () => {
  function setup() {
    const returnVal = {}
    function TestComponent() {
      Object.assign(returnVal, useExpandableCard())
      return null
    }

    render(<TestComponent />)

    return returnVal as ReturnType<typeof useExpandableCard>
  }

  it('should behave correctly', () => {
    const hookData = setup()

    // initial state
    expect(hookData.isExpanded).toBe(false)

    act(() => {
      hookData.handleOnExpand()
    })

    expect(hookData.isExpanded).toBe(true)
  })
})
