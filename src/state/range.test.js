import reducer, {minLabel, maxLabel} from './range'

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
})