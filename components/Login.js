import Image from "next/image";

function Login({ authenticate }) {
  return (
    <div className="bg-black relative text-white">
      <h1>I am a Login screen!</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          width={200}
          height={200}
        />

        <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
          Login with Wallet
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
