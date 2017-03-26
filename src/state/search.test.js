import reducer from './search'

describe('Search reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      searchString: ''
    })
  })
})