import axios from 'axios'
import config from '../config'
const serviceURL = config.api_url;

export const FETCH_MUSIC = 'FETCH_MUSIC'

export function fetchMusic() {
  const request = axios.get(serviceURL);

  return {type: FETCH_MUSIC, payload: request}
}
