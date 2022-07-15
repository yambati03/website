import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Head from "next/head";
import ExternalLink from "../components/ExternalLink";

const Home: NextPage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      sessionStorage.getItem("theme") === "dark"
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Yashas Ambati</title>
      </Head>
      <div className='flex flex-col space-y-4 m-8'>
        <h1 className='text-2xl font-bold'>Hi, I&apos;m Yashas.</h1>
        <p>
          Welcome to my little corner of the internet. Thanks for stopping by!
        </p>
        <p>
          I&apos;m a sophomore at the{" "}
          <ExternalLink href='https://www.gatech.edu/'>
            Georgia Institute of Technology
          </ExternalLink>{" "}
          studying artificial intelligence and robotics. In the future, I hope
          to start my own company at the intersection of robotics, smart cities,
          and ethics. In all my work, my goal is to pioneer ethically.
        </p>
        <p>
          I always like to mention that I&apos;m a{" "}
          <ExternalLink href='https://www.firstinspires.org/'>
            FIRST
          </ExternalLink>{" "}
          alumni. It amazes me how tight knit our community is! I was a software
          lead on{" "}
          <ExternalLink href='https://www.team900.org/'>
            The Zebracorns
          </ExternalLink>
          . During my time there, I{" "}
          <ExternalLink href='https://team900.org/blog/ZebraVision-7.0/'>
            co-authored a paper
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href='https://vimeo.com/649646066'>
            did some talks
          </ExternalLink>
          .
        </p>
      </div>
    </>
  );
};

export default Home;
