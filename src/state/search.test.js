import reducer, {search} from './search'

describe('Search reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      searchString: ''
    })
  })

  it('should handle search action', () => {
    expect(
      reducer(
        {searchString: ''}, search('foo')
      )
    ).toEqual({
      searchString: 'foo'
    })
  })
})