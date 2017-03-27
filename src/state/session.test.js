import reducer, {logOut, clearLoginErrors} from './session'

describe('Session reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      data: null,
      fetching: false,
      error: null
    })
  })

  it('should return initial state after logout', () => {
    expect(
      reducer(
        {
          data: 'Foo',
          fetching: false,
          error: null
        }, logOut()
      )
    ).toEqual({
      data: null,
      fetching: false,
      error: null
    })
  })

  it('should clear errors on refresh', () => {
    expect(
      reducer(
        {
          data: null,
          fetching: false,
          error: 'Bar'
        }, clearLoginErrors()
      )
    ).toEqual({
      data: null,
      fetching: false,
      error: null
    })
  })
})