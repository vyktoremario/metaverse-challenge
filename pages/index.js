import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
// import Loader from 'react-loader-spinner';
import SpinLoader from "../ui/Loader/Loader";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { authenticate, isAuthenticated, isInitializing } = useMoralis();
  // const isAuthenticated = false;
  if (!isAuthenticated) return <Login authenticate={authenticate}/>
  if (isInitializing) return <SpinLoader />
  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-br from-black to-fuchsia-800 overflow-hidden'>
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to metaverse Challenge!</h1>
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div>
    </div>
  )
}
