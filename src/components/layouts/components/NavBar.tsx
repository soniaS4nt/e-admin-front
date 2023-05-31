import LogoIcon from "@/components/icons/LogoIcon";
import SearchIcon from "@/components/icons/SearchIcons";
import UserIcon from "@/components/icons/UserIcon";
import { TextInput } from "@tremor/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex flex-row justify-between">
      <Link href="/" className=" flex flex-row items-center p-5">
        <LogoIcon width={"60px"} height={"60px"} />
        <h1 className="font-bold text-lg">
          E-admin <span className="text-orange-400 font-extrabold">.</span>
        </h1>
      </Link>

      <div className="flex flex-row items-center p-5 mx-5">
        <TextInput
          icon={SearchIcon}
          placeholder="Buscar..."
          className="p-1 mr-4 "
        />
        <div className="flex flex-row justify-around "></div>
        <h1 className="mr-2">Perfil</h1>
        <UserIcon />
      </div>
    </nav>
  );
}
