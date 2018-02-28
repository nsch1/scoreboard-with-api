import {SCORE_PLUS_ONE, FETCHED_PLAYERS, UPDATED_PLAYER} from '../actions/type'

export default function (state = [], { type, id, payload } = {}) {
  switch (type) {
    case FETCHED_PLAYERS :
      return [].concat(payload)
    case UPDATED_PLAYER :
      return state.map(player => {
        if (player.id !== payload.id) return player
        return { ...payload }
      })
    default:
      return state
  }
}