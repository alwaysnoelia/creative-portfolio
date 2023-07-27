import React from 'react';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import Noelia_Headshot from 'public/images/Noelia_Headshot.PNG';

export default function AboutSection() {
  return (
    <section>
      <div className='flex'>
        <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={Noelia_Headshot} layout="fill" objectFit="cover" />
        </div>
        <div className=" w-2/3 flex-2 p-5 mt-20">
          <div className="text-left bg-gray-50 bg-opacity-40 shadow-lg p-10  rounded-xl my-1">
            <h2 className="text-5xl py-2  font-medium">Maria Noelia Herne</h2>
            <h3 className="text-2xl py-2">Developer | Podcaster | Photographer</h3>
            <p className="text-md py-5 leading-8 ">
            Hey, I'm Maria! In addition to my technical pursuits, I have a creative side. 
            For the past couple of years, I have pursued podcasting and photography, so I highlighted a few of my favorite experiences. These passions
            have shaped my strongest skill - building meaningful, authentic relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
