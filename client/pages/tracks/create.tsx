import React from 'react'
import {Button, Card, Grid} from "@material-ui/core"

import MainLayout from "../../layouts/MainLayout"

const Create = () => {
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: '900px'}}>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button>Загрузить</Button>
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Create;