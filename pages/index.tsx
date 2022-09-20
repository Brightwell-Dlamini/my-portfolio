import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';

const Home: NextPage = () => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Siyabonga&apos;s Portfolio</title>
      </Head>
      <main>
        <Header />
        {/* Hero */}
        <section id="hero " className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Expirience */}
        {/* Skilld */}
        {/* Projects */}
        {/* Contact me */}
      </main>
    </div>
  );
};

export default Home;
