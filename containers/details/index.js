import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

// Function to get data from any category
const getItemData = (category, item) => {
  return gameData[category]?.find((data) => data.name === item);
};

function Details() {
  const router = useRouter();
  const { item, category, url } = router.query;

  if (!router.isReady) return <p>Loading...</p>;
  console.log("item", item)
  console.log("category", category)

  const data = getItemData(category, item);

  console.log("Data", url)

  return (
    <Layout>
      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[365px] pt-[100px]">

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className="flex items-center justify-center px-5 pb-[150px]">
          {data ? (
            <div>
              <img src={data.url} alt={data.name} className="max-h-48 max-w-full" />
            </div>
          ) : (
            <div>
              <img src={url} className="max-h-48 max-w-full" />
            </div>
          )}
        </div>

        <div className='flex items-center justify-center pb-5'>
          <div className="bg-[url('/resources/bg-details.png')] bg-no-repeat bg-cover bg-top px-6 pb-6 pt-7 rounded-3xl  left-0 bottom-0 w-full  ">
            <div>
              <a href='/players'>
                <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-700 via-purple-500 to-blue-400">
                  <span className="text-white text-lg leading-6 font-bold text-center">Apply Now</span>
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Details;
