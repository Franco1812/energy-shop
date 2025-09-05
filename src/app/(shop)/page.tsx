import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    page?: string;
  };
}

const products = initialData.products;

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect('/');
  }

  // Map database products to match Product interface
  const mappedProducts = products.map((product) => ({
    ...product,
    gender: product.type as any,
    type: (product.type === 'sugar_free' ? 'sugar-free' : product.type) as any,
    sizes: product.sizes.map((size) =>
      size === 'ML_250'
        ? '250ml'
        : size === 'ML_355'
        ? '355ml'
        : size === 'ML_473'
        ? '473ml'
        : size === 'ML_500'
        ? '500ml'
        : size === 'ML_710'
        ? '710ml'
        : '355ml'
    ) as any,
  }));

  return (
    <>
      <Title
        title="Energy Shop"
        subtitle="Las mejores bebidas energéticas"
        className="mb-2"
      />

      <ProductGrid products={mappedProducts} />

      <Pagination />
    </>
  );
}
