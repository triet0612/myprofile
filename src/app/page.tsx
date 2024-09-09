import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import CopyToClipboard from "./_components/mail-menu";

export default async function Home() {
  return (
    <main className="h-full">
      <div className="hero bg-base-200 h-full w-full">
        <div className="hero-content flex-col w-full lg:flex-row">
          <div className="w-full max-w-sm">
            <Image
              src="./profile.png"
              className="rounded-lg fill shadow-2xl brightness-75 w-full h-auto"
              alt={"my-profile"}
              sizes="100vw"
              width={0}
              height={0}
              priority
            />
          </div>
          <div>
            <span>{"Hello, I'm"}</span>
            <h1 className="text-5xl font-bold">Terry Dang</h1>
            <p className="py-6 w-full max-w-sm flex-wrap">
              {`I'm a passionate software engineer who love building high-quality
              and large scale web application`}
            </p>
            <div className="flex items-center gap-3 text-lg">
              <span>Contact me: </span>
              <Link
                href="https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-tri%E1%BA%BFt-770ab1202/"
                target="_blank"
              >
                <BsLinkedin size={24}/>
              </Link>
              <Link href="https://github.com/triet0612" target="_blank">
                <BsGithub size={24}/>
              </Link>
              <CopyToClipboard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
