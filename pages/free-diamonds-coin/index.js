import Head from "next/head";
import { Fragment } from "react";

import FreeDiamondsCoin from "@containers/free-diamonds-coin";

export default function index   () {
  return (
    <Fragment>
      <Head>
        <title>{"Get Diamonds"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
     </Head>
      <div
        
      >
        <FreeDiamondsCoin />
      </div>
    </Fragment>
  );
}
