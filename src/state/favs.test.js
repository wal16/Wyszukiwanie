import reducer, {favGame} from './favs'
import { logOut } from './session'

describe('Favs reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      favoriteGameIds: []
    })
  })

  // it('should handle fav game action', () => {
  //   expect(
  //     reducer(
  //       {
  //         favoriteGameIds: ['foo']
  //       }, favGame('')
  //     )
  //   ).toEqual({
  //     favoriteGameIds: []
  //   })
  // })

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