import reducer from './favs'
import { logOut } from './session'

describe('Favs reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      favoriteGameIds: []
    })
  })

  it('should return initial state after logout', () => {
    expect(
      reducer(
        {
          favoriteGameIds: ['foo', 'bar', 1, 2]
        }, logOut()
      )
    ).toEqual({
      favoriteGameIds: []
    })
  })
})