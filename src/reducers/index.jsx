import {combineReducers} from 'redux';
import VideoReducer from './reducer_videos';

const rootReducer = combineReducers({contact: VideoReducer});

export default rootReducer;
