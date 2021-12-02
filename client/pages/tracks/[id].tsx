import React from 'react'
import {useRouter} from "next/router"
import {Button, Grid, TextField} from "@material-ui/core"

import {ITrack} from "../../types/track"
import MainLayout from "../../layouts/MainLayout"

const TrackPage = () => {
    const router = useRouter()
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

    return (
        <MainLayout>
            <Button
                variant="outlined"
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{marginLeft: 30}}>
                <img src={track.picture} alt="cover image" width={200} height={200}/>
                <div>
                    <h1>Название трека: {track.name}</h1>
                    <h1>Исполнитель: {track.artist}</h1>
                    <h1>Прослушиваний: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Текст трека:</h1>
            <p>{track.text}</p>
            <Grid container>
                <h1>Раздел с комментариями:</h1>
                <TextField
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map((comment, ind) => (
                    <div key={`${ind}_${comment.username}`}>
                        <div> Автор: {comment.username}</div>
                        <div> Комментарий: {comment.text}</div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default TrackPage