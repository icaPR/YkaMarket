import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  title: string;
  color?: "BLUE" | "DARK" | undefined;
  icon?: IconBoxProps;
  colorIcon?: boolean;
};

export function Button({
  icon: Icon,
  title,
  color = undefined,
  colorIcon,
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  return (
    <Container color={color} activeOpacity={0.7} {...rest}>
      {Icon && (
        <Icon
          size={18}
          color={colorIcon ? COLORS.gray_6 : COLORS.gray_2}
          style={{ marginRight: 8 }}
        />
      )}
      <Text color={color}>{title}</Text>
    </Container>
  );
}
