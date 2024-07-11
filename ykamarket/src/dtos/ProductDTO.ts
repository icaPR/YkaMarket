export type PaymentProps = {
  key: "pix" | "card" | "boleto" | "cash" | "deposit";
  name: string;
};

export type ProductImagesProps = {
  id: string;
  path: string;
};

export type ProductsProps = {
  accept_trade: boolean;
  id: string;
  is_new: boolean;
  name: string;
  payment_method: PaymentProps[];
  price: number;
  user: { name: string; avatar: string };
  product_images: ProductImagesProps[];
};

export type ProductsGetProps = {
  accept_trade: boolean;
  description: string;
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  payment_method: PaymentProps[];
  price: number;
  product_images: ProductImagesProps[];
  user: { name: string; avatar: string; tel: string };
  user_id: string;
};
