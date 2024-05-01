export interface Review {
  rating: number;
  text: string;
}

export interface IProductResponse {
  id: number;
  name: string;
  brand_name: string;
  current_price: number;
  previous_price: number;
  discount_percent: number;
  currency: string;
  url: string;
  images: string[];
  product_code: number;
  selling_fast: boolean;
  updated_at: string;
}

export interface ICart {
  id: string;
  products: IProductResponse[];
}
