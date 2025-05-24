import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function FreeDiamondsCoin() {
    return (
        <Layout>

            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div class="text-center text-white text-xl font-bold">Choose Pass &amp; Rewards</div>
                <div className="mt-6 flex items-center justify-between gap-4">
                    <a href="/free-diamonds-coin/diamonds">
                        <img
                            className="object-contain max-w-full"
                            alt="Unlock Diamonds"
                            src="/resources/buttons/diamondCoin/unlock-diamond.png"
                        />
                    </a>
                    <a href="/free-diamonds-coin/coin">
                        <img
                            className="object-contain max-w-full"
                            alt="Unlock Coins"
                            src="/resources/buttons/diamondCoin/unlock-coin.png"
                        />
                    </a>
                </div>


            </div>
        </Layout>
    )
}

export default FreeDiamondsCoin
