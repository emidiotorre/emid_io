import Head from 'next/head';
import Image from 'next/image';
import Trail from '../components/Trail.tsx';
import HomeSection from '../components/HomeSection.tsx';

export default function Home() {
  return (
    <div className="bg-[#111] text-[#efefef]">
      <Head>
        <title>Emid.io</title>
      </Head>

      <main className="">
        <HomeSection>
          <div className="">
            <Trail className=" relative t-8 l-12" open height={50}>
              <span className="text-3xl font-bold ">Hello, I'm Emidio</span>
              <span className="text-3xl font-bold ">I am a developer</span>
              <span className="text-3xl font-bold ">I am a designer.</span>
            </Trail>
            <Image
              className="z-0"
              src="/1.jpg"
              width="500"
              height="500"
              objectFit="contain"
            ></Image>
            <Image
              src="/5.jpg"
              width="500"
              height="500"
              objectFit="contain"
            ></Image>
          </div>
        </HomeSection>
        <HomeSection>
          <div className="flex align-center justify-between">
            <Trail style={{ position: 'fixed' }} open height={50}>
              <span className="text-3xl font-bold ">Lorem ipsum dolor sit</span>
              <span className="text-3xl font-bold ">
                amet consectetur adipisicing elit.
              </span>
              <span className="text-3xl font-bold ">Nam, consequuntur.</span>
            </Trail>
          </div>
        </HomeSection>
        <HomeSection>
          <Trail style={{ position: 'fixed' }} open height={50}>
            <span className="text-3xl font-bold ">Lorem ipsum dolor sit</span>
            <span className="text-3xl font-bold ">
              amet consectetur adipisicing elit.
            </span>
            <span className="text-3xl font-bold ">Nam, consequuntur.</span>
          </Trail>
        </HomeSection>
        <Image
          src="/2.jpg"
          width="500"
          height="500"
          objectFit="contain"
        ></Image>
        <Image
          src="/3.jpg"
          width="500"
          height="500"
          objectFit="contain"
        ></Image>
        <Image
          src="/4.jpg"
          width="500"
          height="500"
          objectFit="contain"
        ></Image>
        <Image
          src="/5.jpg"
          width="500"
          height="500"
          objectFit="contain"
        ></Image>
      </main>

      <footer className="bg-[#303030] px-8 py-8 text-white">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
