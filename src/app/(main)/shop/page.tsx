import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { Suspense } from "react";

export default async function ListPage({ searchParams }: {searchParams: Promise<{
  page?: string,
  search?: string,
  category?: string,
  tag?: string
}>}) 
{
  const per_page = 12;
  const { page = "1" } = await searchParams;
  const { search = "" } = await searchParams;
  const { category = ""} = await searchParams;
  const { tag = "" } = await searchParams;

  return (
    <div className="relative list-page">
      <Suspense fallback={<Skeleton/>}>
        <ProductList 
          page = {page}
          per_page = {per_page}
          search = {search}
          category = {category}
          tag = {tag}
        />
      </Suspense>
    </div>
  );
};


