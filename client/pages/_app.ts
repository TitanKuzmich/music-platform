import React, {FC} from 'react'
import {AppProps} from 'next/app'
import {wrapper} from "../store"

// @ts-ignore
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
    // @ts-ignore
    return <Component {...pageProps}/>
}

export default wrapper.withRedux(WrappedApp)