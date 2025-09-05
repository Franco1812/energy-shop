'use server';

import prisma from '@/lib/prisma';

interface paginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
}: paginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const products = await prisma.product.findMany({
      include: {
        productImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    const totalCount = await prisma.product.count({});
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: 10,
      products: products.map((product) => ({
        ...product,
        images: product.productImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error('No se pudo cargar los productos');
  }
};
