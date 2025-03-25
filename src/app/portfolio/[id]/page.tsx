import PortfolioDetail from "@/app/components/PortfolioDetail";

type PortfolioDetailParams = {
  params: {
    id: string;
  };
};

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailParams) {
  const { id } = await params; // Next.js recomenda que params seja await caso necessário

  return (
    <>
      <PortfolioDetail id={id} />
    </>
  );
}
