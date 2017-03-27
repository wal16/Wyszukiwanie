import reducer, {range, reset, minLabel, maxLabel} from './range'

describe('Range reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      minLabel: minLabel,
      maxLabel: maxLabel,
      changeRange: {min: minLabel, max: maxLabel}
    })
  })

  it('reset action should return initial state', () => {
    expect(
      reducer(
        {
          changeRange: {min: 10, max: 18}
        }, reset()
      )
    ).toEqual({
      minLabel: minLabel,
      maxLabel: maxLabel,
      changeRange: {min: minLabel, max: maxLabel}
    })
  })

  it('should handle changeRange action', () => {
    expect(
      reducer(
        {
          changeRange: {min: minLabel, max: maxLabel}
        }, range({min: 2, max: 8})
      )
    ).toEqual({
      changeRange: {min: 2, max: 8}
    })
  })
})