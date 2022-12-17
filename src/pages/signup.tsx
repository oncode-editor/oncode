import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GitBucket, GitHub, GitLab } from "../common/components/icons/Icons";
import logo from "/public/favicon/logo.svg";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>OnCode - Join The Community Of Online Coders</title>
      </Head>
      <div className='h-screen w-screen overflow-x-hidden flex'>
        <div className='w-2/5 h-full px-24 pt-24 flex flex-col gap-10'>
          <div className='flex items-center gap-4'>
            <h1 className='text-4xl font-normal'>Welcome to</h1>
            <Image src={logo} alt='logo' />
          </div>
          <p className='text-xl w-4/5'>
            Super Fast, automated cloud development environments for
            collaboration,no setup, in seconds.
          </p>
          <div className='flex flex-col gap-3'>
            <p className='text-lg text-gray-600'>
              Start with your favorite git client
            </p>
            <div className='flex flex-col gap-2 w-4/5'>
              <button className='bg-gray-300 py-1 rounded-lg flex items-center justify-center gap-2'>
                <GitHub />
                <span>Continue with GitHub</span>
              </button>
              <button className='bg-indigo-600 py-4 rounded-lg'>
                <GitLab />
                <span className='text-white'>Continue with GitLab</span>
              </button>
              <button className='bg-blue-600 py-4 rounded-lg'>
                <GitBucket />
                <span className='text-white'>Continue with BitBucket</span>
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className='w-3/5 h-full'></div>
      </div>
    </>
  );
};

export default Signup;
