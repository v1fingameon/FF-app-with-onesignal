import Booyah from '@containers/elite-booyah-pass/booyah'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <div>
            <Fragment>
                <Head>
                    <title>{"Get Diamonds"}</title>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                        crossorigin="anonymous"></script>

                </Head>
                <Booyah />
            </Fragment>
        </div>
    )
}

export default index
