import Head from 'next/head';
import Header from 'src/app/Header';
import AboutSection from 'src/app/AboutSection';
import PodcastSection from 'src/app/PodcastSection';
import PortfolioSection from 'src/app/PortfolioSection';
//import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maria Noelia Herne Portfolio</title>
      </Head>
      <Header />
      <main className='my-gradient-bg bg-center bg-cover bg-no-repeat'>
        <AboutSection />
        <PodcastSection />
        <PortfolioSection />
      </main>
    </div>
  );
}
