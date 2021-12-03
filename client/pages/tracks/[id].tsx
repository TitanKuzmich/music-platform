import React, {useState} from 'react'
import axios from "axios"
import {GetServerSideProps} from "next"
import {useRouter} from "next/router"
import {Button, Grid, TextField} from "@material-ui/core"

import {ITrack} from "../../types/track"
import {useInput} from "../../hooks/useInput"

import MainLayout from "../../layouts/MainLayout"

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()
    const username = useInput('')
    const text = useInput('')

    const addComment = async () => {
        try {
            const response = await axios.post("http://localhost:5000/comment", {
                username: username.value,
                text: text.value,
                trackId: track._id
            })

            setTrack({...track, comments: [...track.comments, response.data]})
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <MainLayout title={track.name + " - " + track.artist}>
            <Button
                variant="outlined"
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{marginLeft: 30}}>
                <img src={"http://localhost:5000/" + track.picture} alt="cover image" width={200} height={200}/>
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
                    {...username}
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    {...text}
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={addComment}>Отправить</Button>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get("http://localhost:5000/tracks/" + params.id)

    return {
        props: {
            serverTrack: response.data
        }
    }
}