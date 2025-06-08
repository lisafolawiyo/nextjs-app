import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Lisa Folawiyo Online Store | Shop Luxury Fashion",
  description: "Shop Lisa Folawiyo's online store for luxury fashion pieces, from dresses to accessories.",
};


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


