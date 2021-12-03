import {Dispatch} from "redux"
import axios from "axios"

import {ITrack, TrackAction, TrackActionTypes} from "../../types/track"
import {useTypedSelector} from "../../hooks/useTypedSelector"

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch(e) {
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: "Произошла ошибка при загрузке треков..."})
        }
    }
}

export const deleteTrack = (id: string, tracks: ITrack[]) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.delete('http://localhost:5000/tracks/' + id)
            const filteredTracks = tracks.filter(track => track._id !== response.data)
            dispatch({type: TrackActionTypes.DELETE_TRACK, payload: filteredTracks})
        } catch(e) {
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: "Произошла ошибка при удалении трека..."})
        }
    }
}

export const searchTracks = (query: string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks/search?query=' + query)
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch(e) {
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: "Произошла ошибка Отправить загрузке треков..."})
        }
    }
}