import { Dimensions } from "react-native";
import { Container, Imagem } from "./styles";
import Carousel from "react-native-snap-carousel";
import { ProductImagesProps } from "../../dtos/ProductDTO";

type CarouselImageProps = {
  imagens: ProductImagesProps[];
};

export function CarouselImage({ imagens }: CarouselImageProps) {
  const larguraTela = Dimensions.get("window").width;

  function renderItem({ item }: { item: { id: string; path: string } }) {
    return (
      <Imagem
        key={item.id}
        source={{ uri: `http://192.168.3.9:3333/images/${item.path}` }}
      />
    );
  }

  return (
    <Container>
      <Carousel
        data={imagens}
        renderItem={renderItem}
        sliderWidth={larguraTela}
        itemWidth={larguraTela}
        autoplay
        loop
      />
    </Container>
  );
}
