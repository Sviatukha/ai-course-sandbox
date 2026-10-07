import { act, renderHook } from '@testing-library/react'
import { useToggle } from './useToggle'

describe('useToggle', () => {
  it('переключает значение', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current[0]).toBe(false)
    act(() => result.current[1]())
    expect(result.current[0]).toBe(true)
  })
})
