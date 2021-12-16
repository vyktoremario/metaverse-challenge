import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
// import Loader from 'react-loader-spinner';
import SpinLoader from "../ui/Loader/Loader";

export default function Home() {
  const { authenticate, isAuthenticated, logout, isInitializing } = useMoralis();
  // const isAuthenticated = false;
  if (!isAuthenticated) return <Login authenticate={authenticate}/>
  if (isInitializing) return <SpinLoader />
  return (
    <div className="h-screen flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to metaverse Challenge!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
