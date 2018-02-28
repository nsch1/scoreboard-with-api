import {SCORE_PLUS_ONE} from '../actions/type'

const initialState = [
  {
    id:1,
    name: "Testplayer",
    score: 4
  },
  {
    id:2,
    name: "Testplayer2",
    score: 3
  }
]

export default function (state = initialState, { type, id } = {}) {
  switch (type) {
    case SCORE_PLUS_ONE :
      return state.map(player => {
        if (player.id !== id) return player
        return { ...player, score: player.score + 1}
      })
    default:
      return state
  }
}