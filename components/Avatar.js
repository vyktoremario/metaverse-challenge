import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
    className="rounded-full bg-black cursor-pointer hover:opacity-80"
      layout="fill"
      src={`https://avatars.dicebear.com/api/avataaars/${
        username || user.get("username")
      }.svg`}
      onClick={() => logoutOnPress && logout()}
    />
  );
}

export default Avatar;
