import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Container, IconViewLeft, IconViewRight, Title } from "./styles";
import { IconProps } from "phosphor-react-native";

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  lefticon?: IconBoxProps;
  righticon?: IconBoxProps;
  title?: string;
  iconFunctionLeft?: () => void;
  iconFunctionRight?: () => void;
};

export function Header({
  lefticon: Lefticon,
  righticon: Righticon,
  iconFunctionLeft,
  iconFunctionRight,
  title,
  ...rest
}: Props) {
  function handleFunctionLeft() {
    if (iconFunctionLeft) {
      iconFunctionLeft();
    }
  }
  function handleFunctionRight() {
    if (iconFunctionRight) {
      iconFunctionRight();
    }
  }
  return (
    <Container>
      <IconViewLeft>
        {Lefticon && (
          <TouchableOpacity onPress={handleFunctionLeft}>
            <Lefticon size={28} weight={"bold"} />
          </TouchableOpacity>
        )}
      </IconViewLeft>
      <Title>{title}</Title>
      <IconViewRight>
        {Righticon && (
          <TouchableOpacity onPress={handleFunctionRight}>
            <Righticon size={28} weight={"bold"} />
          </TouchableOpacity>
        )}
      </IconViewRight>
    </Container>
  );
}
