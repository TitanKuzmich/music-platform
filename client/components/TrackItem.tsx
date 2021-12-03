import React from 'react'
import {useRouter} from "next/router"
import {useDispatch} from "react-redux"
import {Card, Grid, IconButton} from "@material-ui/core"
import {PlayArrow, Pause, Delete} from "@material-ui/icons"

import { ITrack } from '../types/track'
import {useActions} from "../hooks/useAction"
import {deleteTrack} from "../store/action-creators/track"

import styles from '../styles/TrackItem.module.scss'

interface TrackItemProps {
    track: ITrack
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const {playTrack, pauseTrack, setActiveTrack} = useActions()

    const play = (e) => {
        e.stopPropagation()

        setActiveTrack(track)
        playTrack()
    }

    const deleteTrackRequest = async (e) => {
        e.stopPropagation()

        await dispatch(await deleteTrack(track._id))
    }

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {
                    active
                        ? <Pause />
                        : <PlayArrow />
                }
            </IconButton>
            <img src={"http://localhost:5000/" + track.picture} alt="cover picture" width={70} height={70}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={deleteTrackRequest} style={{marginLeft: 'auto'}}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem