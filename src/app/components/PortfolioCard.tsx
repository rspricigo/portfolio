import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type PortfolioCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  techs: string[];
};

export default function PortfolioCard({
  id,
  title,
  description,
  imageSrc,
  techs,
}: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          alt="Imagem do card"
          src={imageSrc}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button accessKey={id} asChild>
          <Link href={`/portfolio/${id}`}> Ver detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
