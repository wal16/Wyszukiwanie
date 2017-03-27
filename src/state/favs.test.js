import reducer, {FAV_GAME} from './favs'
import {logOut} from './session'

describe('Favs reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      favoriteGameIds: []
    })
  })

  it('should handle fav game action', () => {
    expect(
      reducer(
        {
          favoriteGameIds: []
        },
        {
          type: FAV_GAME,
          gameId: 'foo',
          favId: 'bar'
        })
    ).toEqual({
      favoriteGameIds: [{gameId: 'foo', favId: 'bar'}]
    })

    expect(
      reducer(
        {
          favoriteGameIds: [{gameId: 'foo', favId: 'bar'}]
        },
        {
          type: FAV_GAME,
          gameId: 'foo',
          favId: 'bar'
        })
    ).toEqual({
      favoriteGameIds: [{gameId: 'foo', favId: 'bar'}]
    })

    expect(
      reducer(
        {
          favoriteGameIds: [{gameId: 'foo', favId: 'bar'}]
        },
        {
          type: FAV_GAME,
          gameId: 'blah',
          favId: 'dummy'
        })
    ).toEqual({
      favoriteGameIds: [{gameId: 'foo', favId: 'bar'}, {gameId: 'blah', favId: 'dummy'}]
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