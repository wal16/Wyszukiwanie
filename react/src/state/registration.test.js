import reducer from './registration'

describe('Registration reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      data: null,
      fetching: false,
      error: null
    })
  })

  it('should handle FETCH__BEGIN action', () => {
    expect(
      reducer({
        data: null,
        fetching: false,
        error: null
      }, { type: 'registration/FETCH__BEGIN' })
    ).toEqual({
      data: null,
      fetching: true,
      error: null
    })
  })

  it('should handle FETCH__SUCCESS action', () => {
    expect(
      reducer({
        data: null,
        fetching: true,
        error: null
      }, { type: 'registration/FETCH__SUCCESS', data: 'Bar' })
    ).toEqual({
      data: 'Bar',
      fetching: false,
      error: null
    })
  })

  it('should handle FETCH__FAIL action', () => {
    expect(
      reducer({
        data: null,
        fetching: true,
        error: null
      }, { type: 'registration/FETCH__FAILED', error: 'Foo' })
    ).toEqual({
      data: null,
      fetching: false,
      error: 'Foo'
    })

    expect(
      reducer({
        data: 'Foo',
        fetching: true,
        error: null
      }, { type: 'registration/FETCH__FAILED', error: 'Bar' })
    ).toEqual({
      data: 'Foo',
      fetching: false,
      error: 'Bar'
    })
  })
})