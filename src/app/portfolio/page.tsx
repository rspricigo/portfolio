import PortfolioCard from "../components/PortfolioCard";

export default function PortfolioPage() {
  const portfolios = [
    {
      id: "1",
      title: "Projeto A",
      description: "Primeiro projeto",
      imgUrl: "placeholder.svg",
      tags: ["React", "Next.js", "Typescript"],
    },
    {
      id: "2",
      title: "Projeto B",
      description: "Segundo projeto",
      imgUrl: "placeholder.svg",
      tags: ["React", "Next.js"],
    },
    {
      id: "3",
      title: "Projeto C",
      description: "Terceiro projeto",
      imgUrl: "placeholder.svg",
      tags: ["React", "Next.js", "Typescript", "TailwindCSS"],
    },
    {
      id: "4",
      title: "Projeto D",
      description: "Quarto projeto",
      imgUrl: "placeholder.svg",
      tags: ["React", "Next.js", "Typescript", "TailwindCSS"],
    },
    {
      id: "5",
      title: "Projeto E",
      description: "Quinto projeto",
      imgUrl: "placeholder.svg",
      tags: ["React", "Next.js", "Typescript", "TailwindCSS"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Portfolio Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            description={portfolio.description}
            imgUrl={portfolio.imgUrl}
            tags={portfolio.tags}
            id={portfolio.id}
            title={portfolio.title}
          />
        ))}
      </div>
    </div>
  );
}
