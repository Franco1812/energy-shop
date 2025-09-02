import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export default function() {
  return (
    <>
      <Title 
        title="Todas las Bebidas Energéticas" 
        subtitle="Explora nuestra completa selección"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
    </>
  );
}