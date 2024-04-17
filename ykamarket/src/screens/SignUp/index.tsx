import { useState } from "react";

import {
  Container,
  EditProfileIcon,
  FormContainer,
  ImgLogo,
  Intro,
  ProfileView,
  TextError,
  TextMessage,
  Title,
} from "./styles";

import { Button } from "../../components/Button";
import { InputComponent } from "../../components/Input";

import { Controller, useForm } from "react-hook-form";

import { useNavigation } from "@react-navigation/native";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

import LogoImg from "../../assets/logo-tiny.png";

import { UserPhoto } from "../../components/UserPhoto";
import * as ImagePicker from "expo-image-picker";
import AvatarDefault from "../../assets/avatar.png";

import { TouchableOpacity } from "react-native";
import { PencilSimpleLine } from "phosphor-react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormDataProps = {
  avatar: File | any;
  name: string;
  email: string;
  tel: string;
  password: string;
  password_confirm: string;
};

const phoneRegExp =
  /^(\((11|12|13|14|15|16|17|18|19|21|22|24|27|28|31|32|33|34|35|37|38|41|42|43|44|45|46|47|48|49|51|53|54|55|61|62|63|64|65|66|67|68|69|71|73|74|75|77|79|81|82|83|84|85|86|87|88|89|91|92|93|94|95|96|97|98|99)\)\s)?9?\d{4}-?\d{4}$/;

const signUpSchema = yup.object({
  avatar: yup
    .mixed()
    .required("Avatar")
    .test(
      "is-not-default-avatar",
      "Avatar must be different from default",
      function (value) {
        return value !== "AvatarDefault";
      }
    ),
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido."),
  tel: yup
    .string()
    .matches(phoneRegExp, "Numero invalido")
    .required("Informe o numero de telefone com DDD"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
  password_confirm: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password")], "A confirmação da senha não confere"),
});

export function SignUp() {
  const { signIn } = useAuth();
  const { goBack } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState();
  const [imagePicker, setImagePicker] =
    useState<ImagePicker.ImagePickerAsset | null>(AvatarDefault);

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormDataProps>({ resolver: yupResolver(signUpSchema) });

  async function handleUserPhotoSelected() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      if (photoSelected.canceled) {
        return;
      }
      if (photoSelected.assets[0].uri) {
        setImagePicker(photoSelected.assets[0]);
        const fileExtension = photoSelected.assets[0].uri.split(".").pop();

        const photoFile = {
          name: `${fileExtension}`.toLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any;

        setImageLoaded(photoFile);
      }
    } catch (error) {}
  }

  async function handleSignUp(data: FormDataProps) {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("tel", data.tel);
      formData.append("password", data.password);
      formData.append("avatar", data.avatar);

      await api.post("/users/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await signIn(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  }

  function tempSaveAvatar(uriAvatar: string) {
    if (imagePicker?.uri && uriAvatar === imagePicker.uri) {
      const fileExtension = uriAvatar.split(".").pop();
      const photoFile = {
        uri: uriAvatar,
        type: `${"image"}/${fileExtension}`,
        name: `avatar/${fileExtension}`.toLowerCase(),
      } as any;
      return photoFile;
    } else {
      return "AvatarDefault";
    }
  }

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <Intro>
        <ImgLogo source={LogoImg} />
        <Title>Boas vindas!</Title>
        <TextMessage>
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </TextMessage>
      </Intro>
      <FormContainer>
        <ProfileView>
          <Controller
            control={control}
            name="avatar"
            render={({ field: { onChange, value } }) => (
              <TouchableOpacity onPress={handleUserPhotoSelected}>
                <UserPhoto
                  size={90}
                  onLoad={(event) => {
                    const uriAvatar =
                      event.nativeEvent.source.uri || AvatarDefault;
                    onChange(tempSaveAvatar(uriAvatar));
                  }}
                  source={
                    imagePicker?.uri ? { uri: imagePicker.uri } : AvatarDefault
                  }
                />
                <EditProfileIcon>
                  <PencilSimpleLine size={16} color={"white"} />
                </EditProfileIcon>
              </TouchableOpacity>
            )}
          />
        </ProfileView>
        {errors.avatar?.message && (
          <TextError>O avatar é obrigatório.</TextError>
        )}
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder={"Nome"}
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder={"E-mail"}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="tel"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder={"Telefone"}
              onChangeText={onChange}
              errorMessage={errors.tel?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder={"Senha"}
              secretText={true}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange } }) => (
            <InputComponent
              placeholder={"Confirmar senha"}
              secretText={true}
              onChangeText={onChange}
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />
        <Button
          title={"Criar"}
          color={"DARK"}
          onPress={handleSubmit(handleSignUp)}
        />
        <TextMessage>Já tem uma conta ?</TextMessage>
        <Button title={"Ir para login"} onPress={handleGoBack} />
      </FormContainer>
    </Container>
  );
}
