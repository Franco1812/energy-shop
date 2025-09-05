import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function({ params }: Props) {

  const { id } = params;
  const effectiveCategory: Category = id === 'sugar-free' ? 'zero' : id;
  const products = seedProducts.filter( product => product.gender === effectiveCategory );

  const labels: Record<Category, string>  = {
    'classic': 'Clásicas',
    'sugar-free': 'Sin Azúcar',
    'zero': 'Sin Azúcar',
    'gaming': 'Gaming',
    'premium': 'Premium'
  }

  return (
    <>
      <Title
        title={`Bebidas Energéticas ${ labels[id] }`}
        subtitle="Encuentra tu energía perfecta"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
      
    </>
  );
}