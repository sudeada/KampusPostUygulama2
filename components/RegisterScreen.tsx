import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import CustomInput from "./CustomInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleRegister = () => {
    if (password !== passwordRepeat) {
      Alert.alert("Hata", "Şifreler uyuşmuyor!");
      return;
    }

    console.log("Kayıt başarılı:", { email, password });
    Alert.alert("Başarılı", "Kayıt başarılı! (Console.log yazıldı)");

    // eslint uyarısı olmasın diye navigation'ı da kullanalım:
    // Kayıt sonrası Login ekranına dön
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <CustomInput
        label="E-posta"
        placeholder="ornek@kampus.edu.tr"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomInput
        label="Şifre"
        placeholder="Şifreniz"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomInput
        label="Şifre Tekrar"
        placeholder="Şifrenizi tekrar girin"
        value={passwordRepeat}
        onChangeText={setPasswordRepeat}
        secureTextEntry
      />

      <View style={styles.buttonWrapper}>
        <Button title="Kayıt Ol" onPress={handleRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonWrapper: {
    marginTop: 16,
  },
});

export default RegisterScreen;
