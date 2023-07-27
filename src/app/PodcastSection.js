import React from 'react';
import Image from 'next/image';
import vrinda_GIF from 'public/images/vrinda_GIF_lg.gif';

export default function PodcastSection() {
  return (
    <section className="p-10 rounded-xl mx-auto">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold">Podcasting</h1>
      </div>
      {/* Podcast Information Text Section */}
      <div className='flex p-10'>
        <div className=''>
          <Image src={vrinda_GIF} className='mx-auto rounded-xl' alt="gif of a conversation with Vrinda Gupta" />
          <p className='text-center italic p-5 '> a conversation with Vrinda Gupta during a live episode</p>
        </div>
        <div className='flex flex-col w-1/2 bg-gray-50 bg-opacity-40 rounded-xl ml-5  p-5'>
          <div className="rounded-xl">
            <h1 className='text-center text-2xl font-bold'> Techsetters, a Podcast by Kode With Klossy</h1>
            <div class='mt-5 ml-10'>
              <p> Last summer, I had the amazing opportunity to cohost the Techsetters summer season! I interviewed 10 leaders and entrepreneurs, highlighting
                their journey as women navigating the tech space.</p>
              <h1 className='text-left font-bold mt-2'> What is Techsetters?</h1>
              <p>The vision of Techsetters is simply "You can't be what you can't see". If we share the stories of women in executive positions
              in the tech sphere, we can show young women that they belong in STEM.</p>
              <h1 className='text-left font-bold mt-2'> My Favorite Part?</h1>
              <p>Hearing how the speakers and students from the audience appreciated the quality of questions. 
                I discovered a way to foster an authentic connection between the audience and the speaker. </p>
              <h1 className='text-left font-bold mt-2'> Some speakers included...</h1>
              <ul className='list-disc mt-2 ml-5'>
                <li> Vrinda Gupta, Founder and CEO of Sequin, banking designed to empower women financially</li>
                <li> Crystal Sai, Executive Director, Chief of Staff for Global Online at the Estée Lauder Companies</li>
                <li> Deb Golden, US Cyber & Strategic Risk Leader at Deloitte</li>
              </ul>
            </div>
          </div>
          {/* Button to Learn More */}
          <div className=" text-center shadow-lg p-2 rounded-xl my-1 hover:shadow-lg hover:bg-gray-200">
            <a href="https://open.spotify.com/show/1SvheFXqq25NQNrJmspw0y?si=UeSUZ96BRWuJORokzGk9Jg" target="_blank">
              <button>Click Here To Check Out Techsetters</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
