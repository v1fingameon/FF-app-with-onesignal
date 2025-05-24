import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function Elite() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        {gameData.elite.map((elite) => (
          <div
            key={elite.id}
            className="bg-no-repeat bg-black py-4 ps-3 pe-5 overflow-hidden rounded-xl"
            style={{ backgroundImage: `url("/resources/elite-bg.png")`, backgroundSize: '100% 100%' }}
          >
            <a href='/players/'>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-[#A8C5F3] text-lg leading-6 font-bold">{elite.name}</div>
                  <div className="text-xs text-white font-semibold">{elite.description}</div>
                </div>
                <img className="object-contain w-[91px] cursor-pointer" alt="elite-button" src="/resources/elite-btn.png" />
              </div>
            </a>

          </div>
        ))}



      </div>
    </Layout>
  )
}

export default Elite
