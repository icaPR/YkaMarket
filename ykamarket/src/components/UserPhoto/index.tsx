import { Image, ImagePropsComponent } from "./styles";

export function UserPhoto({ size = 42, ...rest }: ImagePropsComponent) {
  return <Image size={size} {...rest} />;
}
