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

  it('should handle uppercase characters', () => {
    expect(
      reducer(
        {searchString: ''}, search('Foo Bar')
      )
    ).toEqual({
      searchString: 'Foo Bar'
    })
  })

  it('should handle digits', () => {
    expect(
      reducer(
        {searchString: ''}, search('36')
      )
    ).toEqual({
      searchString: '36'
    })
  })

  it('should handle html as strings', () => {
    expect(
      reducer(
        {searchString: ''}, search('<footer>')
      )
    ).toEqual({
      searchString: '<footer>'
    })
  })

  it('should handle javascript as strings', () => {
    expect(
      reducer(
        {searchString: ''}, search("document.getElementsByClassName('Foo').append(div.bar)")
      )
    ).toEqual({
      searchString: "document.getElementsByClassName('Foo').append(div.bar)"
    })
  })
})