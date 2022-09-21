import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Expirience from '../components/Expirience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Siyabonga&apos;s Portfolio</title>
      </Head>
      <main>
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Expirience */}
        <section id="expirience" className="snap-center">
          <Expirience />
        </section>
        {/* Skills */}
        <section>
          <Skills />
        </section>
        {/* Projects */}
        <section>
          <Projects />
        </section>
        {/* Contact me */}
        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
