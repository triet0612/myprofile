import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

async function BarMenu() {
  return (
    <div className="dropdown block md:hidden z-20">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <MdMenu size="1.5rem" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content flex flex-col bg-base-100 text-3xl rounded-box z-[1] mt-3 w-36 p-2 shadow"
      >
        <li>
          <Link href={"/about"} className="btn btn-ghost justify-start w-full">About</Link>
        </li>
        <li>
          <Link href={"/project"} className="btn btn-ghost justify-start w-full">My Projects</Link>
        </li>
      </ul>
    </div>
  );
}

async function MdBarMenu() {
  return (
    <ul className="flex gap-2 font-bold px-1">
      <li>
        <Link className="btn btn-ghost text-lg" href={"/about"}>
          About
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost text-lg" href={"/project"}>
          My Projects
        </Link>
      </li>
    </ul>
  );
}

export default async function TopBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <BarMenu />
        <Link
          href="/"
          className="btn btn-ghost text-2xl flex justify-center items-center"
        >
          <div className="w-10 h-10">
            <Image
              src={"./icon.webp"}
              className="w-full h-auto rounded-full bg-black"
              alt={"my-profile"}
              sizes="100vw"
              width={0}
              height={0}
              priority
            />
          </div>
          Terry Dang
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <MdBarMenu />
      </div>
    </div>
  );
}
