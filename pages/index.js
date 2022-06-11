import Head from 'next/head';
import Image from 'next/image';
import Trail from '../components/Trail.tsx';
import HomeSection from '../components/HomeSection.tsx';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Emid.io</title>
      </Head>

      <main className="">
        <HomeSection>
          <span>UEEEEEE</span>
          <h1 className="">
            Welcome to <a href="https://nextjs.org">Emid.io</a>
          </h1>
        </HomeSection>
        <HomeSection backgroundColor="yellow">
          <span>UEEEEEE</span>
          <h1 className="">
            Welcome to <a href="https://nextjs.org">Emid.io</a>
          </h1>
        </HomeSection>
        <HomeSection backgroundColor="green">
          <span>UEEEEEE</span>
          <h1 className="">
            Welcome to <a href="https://nextjs.org">Emid.io</a>
          </h1>
        </HomeSection>
        <Trail open height={600}>
          <Image
            src="/1.jpg"
            width="500"
            height="500"
            objectFit="contain"
          ></Image>
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
        </Trail>
      </main>

      <footer className="">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
