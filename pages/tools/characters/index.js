import Characters from '@containers/tools/characters'
import Head from 'next/head'
import React, { Fragment } from 'react'

function characters() {
  return (
    <Fragment>
            <Head>
                <title>{"Get Diamonds"}</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                    crossorigin="anonymous"></script>

            </Head>
            <Characters />
        </Fragment>
  )
}

export default characters
