import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import React, { Fragment } from 'react'

function Coin() {

    return (
        <Layout>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div className="grid grid-cols-2 justify-between mt-6 gap-9">
                    {gameData.coins.map((coins) => (

                        <div key={coins}>
                            <a href='/players/'>  <div className="">
                                <img
                                    className="w-full object-contain"
                                    alt="diamond"
                                    src={coins.url}
                                />
                            </div></a>


                        </div>
                    ))}
                </div>
            </div>

        </Layout>

    )
}

export default Coin
