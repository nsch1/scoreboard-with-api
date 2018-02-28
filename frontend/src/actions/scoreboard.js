import {SCORE_PLUS_ONE} from './type'

export const scorePlusOne = (id) => {
  return {
    type: SCORE_PLUS_ONE,
    id
  }
}