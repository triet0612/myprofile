import ProjectCard from "@/app/project/_components/card";

const projects = [
  {
    imgURL: "/projects/short_news.webp",
    title: "Short News app",
    description:
      "An app to help busy people listen to news from sources that they love in short. AI enhanced RSS reader with Gemma:2b text summarization and PiperTTS. App support English and Vietnamese RSS.",
    link: "https://github.com/triet0612/ShortNews",
    skills: [
      "Golang",
      "Javascript",
      "Svelte",
      "TailwindCSS",
      "DaisyUI",
      "Ollama",
      "Docker",
      "SQLite",
      "RSS",
    ],
  },
  {
    imgURL: "/projects/kryxa.webp",
    title: "Kryxa app",
    description:
      "An app to manage internet cafe. Admin can manage PCs, shop's stocks, terminate and open PC sessions. Customer can order food, extra time.",
    link: "https://github.com/triet0612/CS300_group10_Kryxa",
    skills: [
      "Python",
      "Javascript",
      "Svelte",
      "FastAPI",
      "TailwindCSS",
      "SQLite",
    ],
  },
  {
    imgURL: "/projects/wallet_app.webp",
    title: "Wallet app",
    description:
      "Flutter wallet app with financial news reader and book store. User can add their transaction history, set categories for the spending, set balance and view statistics of their financial usage. View financial news scrape from VNexpress, view daily book recommendation from Fahasa.",
    link: "https://github.com/triet0612/wallet_app",
    skills: ["Flutter", "SQLite", "RSS"],
  },
];

export default async function Projects() {
  return (
    <div className="bg-base-300 p-6 min-h-full">
      <div className="grid grid-cols-[repeat(auto-fill,24rem)] gap-10 w-full h-full justify-center bg-transparent p-10">
        {projects.map((val, id) => {
          return (
            <ProjectCard
              key={id}
              imgURL={val.imgURL}
              title={val.title}
              description={val.description}
              index={id}
              link={val.link}
              skills={val.skills}
            />
          );
        })}
      </div>
    </div>
  );
}
