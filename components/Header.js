import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-300 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid items-end lg:items-center">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-2 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the metaverse Chat</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
