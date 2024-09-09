import Image from "next/image";
import Link from "next/link";
import { BsRss } from "react-icons/bs";
import { CgMore } from "react-icons/cg";
import { DiJavascript } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDaisyui,
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiPython,
  SiSqlite,
  SiSvelte,
} from "react-icons/si";

type CardProp = {
  index: number;
  imgURL: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
};

const IconMap = {
  Golang: <FaGolang key="go" size={24} />,
  Javascript: <DiJavascript key="js" size={24} />,
  Svelte: <SiSvelte key="sv" size={24} />,
  TailwindCSS: <RiTailwindCssFill key="tw" size={24} />,
  DaisyUI: <SiDaisyui key="ds" size={24} />,
  Docker: <SiDocker key="dk" size={24} />,
  SQLite: <SiSqlite key="sqlite" size={24} />,
  RSS: <BsRss key="rss" size={24} />,
  Python: <SiPython key="py" size={24} />,
  FastAPI: <SiFastapi key="fastapi" size={24} />,
  Flutter: <SiFlutter key="flutter" size={24} />,
} as { [key: string]: React.ReactNode };

export default async function ProjectCard(props: CardProp) {
  return (
    <div className="card bg-accent text-secondary-content w-96 max-w-[90%] shadow-2xl h-full mx-auto rotate-2 hover:rotate-0">
      <Image
        src={"./icon.webp"}
        className="absolute w-full h-full bg-base-200 brightness-[0.1] opacity-80 rounded-box"
        alt={"my-profile"}
        sizes="100vw"
        width={0}
        height={0}
        priority
      />
      <figure className="p-4 w-full h-56 z-10">
        <Image
          src={props.imgURL}
          alt="Shoes"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full rounded-box"
        />
      </figure>
      <div className="card-body p-4 pt-2 z-10 tooltip">
        <h2 className="card-title">
          {props.title}
          <div className="tooltip" data-tip={props.description}>
            <CgMore />
          </div>
        </h2>
        <p className="line-clamp-3 text-left pt-4">{props.description}</p>
        <p className="flex items-center gap-2 py-4">
          {props.skills.map((val) => {
            return IconMap[val];
          })}
        </p>
        <div className="card-actions justify-end px-3">
          <Link
            className="link-primary font-bold underline"
            href={props.link}
            target="_blank"
          >
            Learn more...
          </Link>
        </div>
      </div>
    </div>
  );
}
