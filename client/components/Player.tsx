import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons"
import {Grid, IconButton} from "@material-ui/core"

import TrackProgress from "./TrackProgress"

import styles from "../styles/Player.module.scss"

import {ITrack} from "../types/track"

const Player = () => {
    const track: ITrack = {
        _id: '61a783e6c0ab1e2fa5862bb3',
        name: "Million",
        artist: "Kizaru",
        text: "Ты помнишь, как мы слайдили, мы снайперы и таперы, мы не были богатыми, картье для моей матери, мы сказочно богаты ща",
        listens: 10,
        audio: "http://127.0.0.1:5000/audio/16d57682-8e32-4941-8914-2895afaaa3a4.mp3",
        picture: "http://127.0.0.1:5000/image/ff4f4b10-dcee-449f-9eca-16d7964fdc45.jpg",
        comments: []
    }
    const active = false

    return (
        <div className={styles.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {
                    active
                        ? <Pause/>
                        : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => {}}/>
        </div>
    );
};

export default Player;