import { Container, Photo } from "./styles";

type PhotoProps = {
  name: string;
  uri: string;
  type: string;
};

type PhotosProps = {
  photos: string[];
};

export function ProductPhotos({ photos }: PhotosProps) {
  return (
    <Container>
      {photos.map((item) => (
        <Photo src={item} />
      ))}
    </Container>
  );
}
