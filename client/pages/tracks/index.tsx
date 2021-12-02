import React from 'react'
import {useRouter} from "next/router"
import {Box, Button, Card, Grid} from "@material-ui/core"

import MainLayout from "../../layouts/MainLayout"
import TrackList from "../../components/TrackList"

import {ITrack} from "../../types/track"

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '61a783e6c0ab1e2fa5862bb3',
            name: "Million",
            artist: "Kizaru",
            text: "Ты помнишь, как мы слайдили, мы снайперы и таперы, мы не были богатыми, картье для моей матери, мы сказочно богаты ща",
            listens: 10,
            audio: "http://127.0.0.1:5000/audio/16d57682-8e32-4941-8914-2895afaaa3a4.mp3",
            picture: "http://127.0.0.1:5000/images/ff4f4b10-dcee-449f-9eca-16d7964fdc45.jpg",
            comments: []
        },
        {
            _id: '61a783e6c0ab1e2fa5862bb3',
            name: "Million",
            artist: "Kizaru",
            text: "Ты помнишь, как мы слайдили, мы снайперы и таперы, мы не были богатыми, картье для моей матери, мы сказочно богаты ща",
            listens: 10,
            audio: "http://127.0.0.1:5000/audio/16d57682-8e32-4941-8914-2895afaaa3a4.mp3",
            picture: "http://127.0.0.1:5000/images/ff4f4b10-dcee-449f-9eca-16d7964fdc45.jpg",
            comments: []
        },
        {
            _id: '61a783e6c0ab1e2fa5862bb3',
            name: "Million",
            artist: "Kizaru",
            text: "Ты помнишь, как мы слайдили, мы снайперы и таперы, мы не были богатыми, картье для моей матери, мы сказочно богаты ща",
            listens: 10,
            audio: "http://127.0.0.1:5000/audio/16d57682-8e32-4941-8914-2895afaaa3a4.mp3",
            picture: "http://127.0.0.1:5000/images/ff4f4b10-dcee-449f-9eca-16d7964fdc45.jpg",
            comments: []
        }
    ]

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index