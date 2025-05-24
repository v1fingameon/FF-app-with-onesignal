import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function Level() {
    return (
        <Layout>

            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div className="flex flex-col gap-4">
                    {gameData.level.map((level) => (
                        <a href='/apply'>
                            <div
                                key={level.id}
                                className="flex justify-center text-center border border-white/50 bg-white/15 backdrop-blur-[6px]  px-5 rounded-2xl cursor-pointer">

                                <div className="text-white text-lg text-center font-semibold leading-6 py-3.5" >{level.name}</div>

                            </div>

                        </a>

                    ))}

                </div>


            </div>
        </Layout>
    )
}

export default Level
