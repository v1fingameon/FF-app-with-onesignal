import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Weapons() {
    const route = useRouter()
    function goToWeaponDetails(name, type) {
        route.push({
            pathname: `/tools/weapons/${name}`,
            query: { item: name, category: type },
        })
    }
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
                    {gameData.weapons.map((weapon) => (
                        <div
                            key={weapon.id}
                            className="flex  justify-between items-center border border-white/50 bg-white/15 backdrop-blur-[6px] py-3.5 px-5 rounded-2xl cursor-pointer"
                            onClick={() => goToWeaponDetails(weapon.name, "weapon")}
                        >
                            <div className="text-white text-lg font-semibold leading-6" >{weapon.name}</div>
                            <img
                                alt={weapon.name}
                                className="h-7 w-14 object-contain"
                                src={weapon.url}
                            />
                        </div>
                    ))}

                </div>


            </div>
        </Layout>
    )
}

export default Weapons 
