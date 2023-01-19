import { combineReducers } from "redux";

const songReducer = () => {
    return [
        {title: 'Because of you', duration: '4:08'},
        {title: 'Helplessly', duration: '5:32'},
        {title: 'I want it to be you', duration: '2:45'},
        {title: 'Lift you head up', duration: '3:00'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});