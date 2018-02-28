import request from 'superagent'
import {FETCHED_PLAYERS, UPDATED_PLAYER} from './type'

const baseUrl = 'http://localhost:3001'

export const fetchPlayers = () => {
  return (dispatch) => {
    request
      .get(`${baseUrl}/players`)
      .then((res) => {
        const players = res.body
        dispatch({
          type: FETCHED_PLAYERS,
          payload: players
        })
      })
      .catch((err) => {
        console.error('Something went wrong!', err)
      })
  }
  
}

export const plusOne = (playerId) => {
  return (dispatch, getState) => {
    const {players} = getState()
    const player = players.filter(p => p.id === playerId)[0]
    if (!player) return

    request
      .patch(`${baseUrl}/players/${playerId}`)
      .send({ score: player.score + 1 })
      .then((res) => {
        const player = res.body
        dispatch({
          type: UPDATED_PLAYER,
          payload: player
        })
      })
      .catch((err) => {
        console.error('Something went wrong!', err)
      })
  }
  
}