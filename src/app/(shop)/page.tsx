import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';


const products = initialData.products;



export default function Home() {
  return (
    <>
      <Title
        title="Energy Shop"
        subtitle="Las mejores bebidas energéticas"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
      
    </>
  );
}
