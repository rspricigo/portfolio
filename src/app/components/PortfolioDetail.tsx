import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PortfolioDetailParams = {
  id: string;
};

interface Item {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  techs: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const item: Item = {
  id: "1",
  title: "Projeto 1",
  description: "Descrição do projeto 1",
  imgUrl: "/placeholder.svg",
  techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  githubUrl: "https://github.com/rspricigo",
  demoUrl: "https://github.com/rspricigo",
};

export default function PortfolioDetail({ id }: PortfolioDetailParams) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost">
        <Link href="/portfolio">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para o portfólio
        </Link>
      </Button>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={item.imgUrl}
            alt={item.title}
            fill
            className="rounded-lg"
            priority={true}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
          {item.techs.map((tech) => (
            <Badge variant="secondary" key={tech} className="mr-2 mb-2">
              {tech}
            </Badge>
          ))}
          <div className="flex mt-2">
            <Button asChild>
              <a href={item.githubUrl || "#"} target="_blank">
                Github
              </a>
            </Button>
            <Button>
              <a href={item.demoUrl || "#"} target="_blank">
                Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
