import _ from 'underscore';
import { FETCH_MUSIC } from '../actions/fetch_music';

export default function( state = [], action ) {
  let newState
  switch( action.type ) {
    case FETCH_MUSIC:
      return [ action.payload.data, ...state ]
    default:
      return state
  }
}
