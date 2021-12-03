import React from "react"
import Head from "next/head"
import {Container} from "@material-ui/core"

import Navbar from "../components/Navbar"
import Player from "../components/Player"

type MainLayoutProps = {
    title?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>MP | {title}</title>
                <meta name='keywords' content='next,javascript,nextjs,nestjs,nest,react,music,music-platform'/>
                <meta name='description' content='this is next and nest js practice site'/>
                <meta name='robots' content='index follow'/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet='utf8'/>
            </Head>
            <Navbar />
            <Container style={{ margin: '90px auto'}}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MainLayout