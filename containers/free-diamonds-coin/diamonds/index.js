import Ads from '@components/Ads';
import Layout from '@components/Layout';
import React, { Fragment } from 'react'

function Diamonds() {
    const diamondOptions = [100, 310, 520, 1060, 2180, 5600];
    return (
        <Layout>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div className="grid grid-cols-2 justify-between mt-6 gap-x-9 gap-y-6">
                    {diamondOptions.map((amount) => (
                        <div key={amount}>
                            <a href='/players/'>
                                <div
                                    className="rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5"
                                    style={{
                                        boxShadow: 'rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset',
                                        background: 'rgb(160, 29, 186)',
                                    }}
                                >

                                    <div className="h-7">
                                        <img
                                            className="size-[27px] object-contain"
                                            alt="diamond"
                                            src="/resources/heart.png"
                                        />
                                    </div>
                                    <div className="text-white text-xs font-medium mt-2.5">
                                        Get Free Diamonds
                                    </div>
                                    <div className="mt-0.5 text-white text-[22px] font-medium leading-[29px]">
                                        {amount}
                                    </div>
                                </div>
                            </a>

                        </div>
                    ))}
                </div>
            </div>

        </Layout>

    )
}

export default Diamonds
