import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  Avatar,
  Container,
  Currency,
  HeaderCard,
  ImageProduct,
  Price,
  PriceView,
  Tag,
  Tagtext,
  TextView,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ProductsProps } from "../../dtos/ProductDTO";
import { iplocal } from "@env";

type ProductProps = {
  product: ProductsProps;
  handleNavigate?: (product: ProductsProps) => void;
};

export function ProductCard({ handleNavigate, product }: ProductProps) {
  const { navigate } = useNavigation();
  const [avatarImage, setAvatarImage] = useState("");
  const [withAvatar, setWithAvatar] = useState(false);
  const [imageProduct, setImageProduct] = useState("");

  async function getImageAvatar() {
    try {
      if (product.product_images) {
        const productImage = product.product_images[0].path;
        const response = await api.get(`/images/${productImage}`);
        setImageProduct(productImage);
      }
      const response = await api.get(`images/${product.user?.avatar}`);
      if (product.user?.avatar) {
        setWithAvatar(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleProductNavigate() {
    console.log();
    if (handleNavigate) {
      handleNavigate(product);
    }
  }

  useEffect(() => {
    getImageAvatar();
  }, []);

  return (
    <Container onPress={handleProductNavigate}>
      <HeaderCard withAvatar={withAvatar}>
        {product.user?.avatar && (
          <Avatar
            source={{
              uri: `${iplocal}:3333/images/${product.user.avatar}`,
            }}
          />
        )}
        <Tag active={product.is_new}>
          <Tagtext>{product.is_new ? "NOVO" : "USADO"}</Tagtext>
        </Tag>
      </HeaderCard>
      <ImageProduct
        source={{
          uri: `${iplocal}:3333/images/${product.product_images[0].path}`,
        }}
      />
      <TextView>
        <Title>{product.name}</Title>
        <PriceView>
          <Currency>R$ </Currency>
          <Price>{product.price}</Price>
        </PriceView>
      </TextView>
    </Container>
  );
}
