import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
  // 1. Borrar registros previos
  await prisma.producImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  
  const { categories, products } = initialData;

  // Categorias
  const categoriesData = categories.map((name) => ({ name }));
  
  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDB = await prisma.category.findMany();
  
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  // Productos
  products.forEach(async(product) => {
    const { type, images, sizes, ...rest } = product;

    // Mapear sugar-free a sugar_free para que coincida con el schema
    const mappedType = type === 'sugar-free' ? 'sugar_free' : type;
    
    // Convertir sizes de string a enum
    const mappedSizes = sizes.map(size => 
      size === '250ml' ? 'ML_250' : 
      size === '355ml' ? 'ML_355' : 
      size === '473ml' ? 'ML_473' : 
      size === '500ml' ? 'ML_500' : 
      size === '710ml' ? 'ML_710' : 'ML_355'
    );

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        type: mappedType,
        sizes: mappedSizes,
        categoryId: categoriesMap[type]
      }
    });

    // Images
    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.producImage.createMany({
      data: imagesData
    });
  });

  console.log('Seed ejecutado correctamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();