import Layout from '@components/Layout'
import React from 'react'

function Disclaimer() {
    return (
        <Layout>

            <div className="flex flex-col text-white gap-6 mx-auto h-max ls:w-[360px] pb-10">

                <div className='pt-[100px] font-bold'>{"Disclaimer :"}</div>
                <div>This is not an official website, This website is developed purely for entertainment and fun.
                </div>
                <div> if you have any suggestions or issues with this web then please contact us.
                </div>
                <div>This is a Guide and informative website that helps you to get Diamonds,skin,emotes and improve your game.
                </div>
                <div>We don't collect any user personal information.
                </div>
                <div>All images in the website are sourced from public domains. These images are not endorsed by their respective owners and are used solely for informational and entertainment purposes. 
                </div>
                <div>{"We Are Not Collecting Any Information And We Are Not Providing Any Cheats Or Hacks Of Any Games And Apps. This web Is Not Associated With Any Game Or Company.All property rights are owned by their respective holders."}</div>

            </div>

        </Layout>
    )
}

export default Disclaimer
