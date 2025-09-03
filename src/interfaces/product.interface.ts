export interface Product {
  //todo: id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  type: Type;
  gender: Category;
}

export type Category = 'classic'|'sugar-free'|'gamer'|'premium';
export type Size = '250ml'|'355ml'|'473ml'|'500ml'|'710ml';
export type Type = 'classic'|'sugar-free'|'zero'|'gaming'|'premium';