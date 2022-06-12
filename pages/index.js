import Head from 'next/head';
import Image from 'next/image';
import Trail from '../components/Trail.tsx';
import HomeSection from '../components/HomeSection.tsx';
import ParallaxContent from '../components/ParallaxContent.tsx';
import { relative } from 'next/dist/shared/lib/isomorphic/path';

export default function Home() {
  return (
    <div className=" text-[#efefef]">
      <Head>
        <title>Emid.io</title>
      </Head>
      <div className="fixed w-full flex justify-between px-8 py-8 z-50 text-black">
        <div className="text-xl uppercase"></div>
        <div className="text-xl uppercase">Creative Developer</div>
      </div>
      <div className="fixed bottom-0 w-full flex justify-between px-8 py-8 z-50 text-black">
        <div className="text-xl uppercase">Works</div>
        <div className="text-xl uppercase">About</div>
      </div>
      <main className="">
        <HomeSection bg="/loogking_out.jpg">
          <div className="">
            <Image
              src="/loogking_out.jpg"
              layout="fill"
              objectFit="cover"
            ></Image>
            <Trail className=" relative t-8 l-12 mt-64" open height={50}>
              <span className="text-3xl font-bold ">
                Hello, I'm Emidio Torre
              </span>
              <h3 className="text-xl">
                I SUPPORT DESIGNERS AND AGENCIES WITH CREATIVE DEVELOPMENT.
              </h3>
            </Trail>
            <h3 className="text-xl mt-32">
              PASSIONATE ABOUT WEB TECHNOLOGIES. <br></br> I LOVE WORKING AT THE
              INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. <br></br>
              I CREATE MEMORABLE WEB EXPERIENCES.
            </h3>
          </div>
        </HomeSection>
        <HomeSection>
          <div className="grid grid-cols-2 py-32">
            <h3 className="text-xl">A blend of UI and product engineering.</h3>
            <h3 className="text-xl">
              With a background in design, I work closely with design focused
              teams to build websites and microsites for companies and
              individuals. I have years of experience working and collaborating
              on product teams and leading engineering efforts. With my
              experience in UI and product engineering, I solve product problems
              and build appealing usable web experiences.
            </h3>
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
        <HomeSection>
          <Trail style={{ position: 'fixed' }} open height={50}>
            <span className="text-3xl font-bold ">Lorem ipsum dolor sit</span>
            <span className="text-3xl font-bold ">
              amet consectetur adipisicing elit.
            </span>
            <span className="text-3xl font-bold ">Nam, consequuntur.</span>
          </Trail>
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
      </main>

      <footer className="bg-[#303030] px-8 py-8 text-white">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
