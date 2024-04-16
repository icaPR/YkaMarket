import {
  Container,
  Content,
  Footer,
  ImgLogo,
  Label,
  Subtitle,
  Title,
} from "./styles";

import { Controller, useForm } from "react-hook-form";

import LogoImg from "../../assets/logo.png";

import { Button } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppError } from "../../utils/AppError";
import * as yup from "yup";

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido."),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
});

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({ resolver: yupResolver(signInSchema) });

  function handleSignUp() {
    navigate("signup");
  }

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Content>
        <ImgLogo source={LogoImg} />
        <Title>ykamarket</Title>
        <Subtitle>Seu espaço de compra e venda</Subtitle>
        <Label> Acesse sua conta</Label>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Informe o e-mail" }}
          render={({ field: { onChange } }) => (
            <InputComponent
              placeholder={"E-mail"}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: "Informe a senha" }}
          render={({ field: { onChange } }) => (
            <InputComponent
              secretText={true}
              placeholder={"Senha"}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button
          title={"Entrar"}
          color={"BLUE"}
          onPress={handleSubmit(handleSignIn)}
        />
      </Content>
      <Footer>
        <Label> Ainda não tem acesso ? </Label>
        <Button title={"Criar uma conta"} onPress={handleSignUp} />
      </Footer>
    </Container>
  );
}
