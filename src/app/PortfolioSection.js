import React from 'react';
import Image from 'next/image';
import kaavya from 'public/images/Kaavya.jpg';
import minjae from 'public/images/minjae1.JPG';
import robbiePortrait from 'public/images/robbie2.jpeg';
import watch from 'public/images/watch.JPG';
import mariel from 'public/images/mariel.JPG';
import earnest from 'public/images/earnest_look.JPG';
import robbieFashion from 'public/images/robbie3.jpeg';
import Leanna from 'public/images/_D200115.JPG';

export default function PortfolioSection() {
  return (
    <section>
      {/* Portfolio Title + Text */}
      <div class="container mx-auto">
        <h1 className="text-4xl font-bold">Portfolio </h1>
        <div className=" mt-1">
          <div className="text-left bg-gray-50 bg-opacity-40 shadow-lg p-2  rounded-xl my-1">
            <p className="text-md p-2 leading-8 ">
              With portrait and fashion photography, I can highlight someone's personality in a photo and share a story. I find that the toughest but 
              most rewarding challenge is helping people feel more comfortable during a shoot so they can express their full personality.
              Feel free to scroll down to see some photos from my portfolio.
            </p>
          </div>
        </div>
      </div>
      {/* Portfolio Photo Gallery */}
      <section>
        <div className="container w-full mx-auto">
          <div className="flex flex-wrap w-full">
            <div className="flex w-full md:w-1/2 flex-wrap">
              <div className="md:w-1/2 p-1">
                <Image src={mariel} className="rounded-lg object-cover" alt="Portfolio Item 3" />
              </div>
              <div className="md:w-1/2 p-1">
                <Image src={robbiePortrait} className="rounded-lg object-cover" alt="Portfolio Item 3" />
              </div>
              <div className="p-1">
                <Image src={kaavya} className="rounded-lg object-cover" alt="Portfolio Item 1" />
              </div>
              <div className="p-1">
                <Image src={watch} className="rounded-lg object-cover" alt="Portfolio Item 1" />
              </div>
            </div>
            <div className="flex w-full md:w-1/2 flex-wrap">
              <div class="md:w-1/2 p-1">
                <Image src={earnest} className="rounded-lg object-cover" alt="Portfolio Item 4" />
              </div>
              <div className="md:w-1/2 p-1">
                <Image src={robbieFashion} className="rounded-lg" alt="Portfolio Item 3" />
              </div>
              <div className="p-1">
                <Image src={minjae} className="rounded-lg object-cover" alt="Portfolio Item 1" />
              </div>
              <div className="p-1">
                <Image src={Leanna} className="rounded-lg object-cover" alt="Portfolio Item 1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
