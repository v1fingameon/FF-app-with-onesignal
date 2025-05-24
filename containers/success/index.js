import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Success() {
  const route = useRouter()
  function goToCharacterDetails(name, type) {
    route.push({
      pathname: `/tools/characters/${name}`,
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
        <div className="flex flex-col gap-6 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none">
            <g filter="url(#filter0_d)">
              <ellipse cx="38.3289" cy="38.4065" rx="29.387" ry="28.6702" fill="url(#paint0_linear)" />
            </g>
            <path
              d="M26.3843 37.9236L34.4517 46.0005L50.615 29.8467"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="38.5"
              cy="38.5"
              r="37.5"
              stroke="url(#paint1_linear)"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            <defs>
              <filter id="filter0_d" x="4.94189" y="5.73633" width="66.7739" height="65.3408" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
              <linearGradient id="paint0_linear" x1="-4.26876" y1="-12.4179" x2="66.5689" y2="-24.0447" gradientUnits="userSpaceOnUse">
                <stop offset="0.00939447" stopColor="#FE652D" />
                <stop offset="1" stopColor="#FF8A26" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="-15.8578" y1="-27.9773" x2="74.6508" y2="-42.4704" gradientUnits="userSpaceOnUse">
                <stop offset="0.00939447" stopColor="#FE652D" />
                <stop offset="1" stopColor="#FF8A26" />
              </linearGradient>
            </defs>
          </svg>

          <div className="text-white text-xl font-semibold text-center">
            We will review it and <br /> update within 30 minutes.
          </div>

          <div className="flex flex-col gap-4 w-full">
            <a href='/'>
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                <div className="text-white text-lg font-bold text-center">Home Screen</div>
              </button></a>
            <a href='/elite-booyah-pass'>
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                <div className="text-white text-lg font-bold text-center">Elite Pass & Booyah Pass</div>
              </button>
            </a>
            <a href='/free-diamonds-coin'>
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                <div className="text-white text-lg font-bold text-center">Get Daily Free Coin & Diamond</div>
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-5">
          {gameData.characters.slice(1, 3).map((character) => (
            <div key={character.id} className="flex cursor-pointer justify-center relative" onClick={() => goToCharacterDetails(character.name, "characters")}>
              <div className="h-36 w-[67px]  bg-transparent relative z-20">
                <img
                  className="h-full w-full object-contain bg-transparent"
                  src={character.url}
                  alt={character.name}
                />
              </div>

              <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>

              <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
                {character.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Success
