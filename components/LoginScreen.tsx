import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import CustomInput from "./CustomInput";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login email:", email);
    console.log("Login password:", password);
    // Şimdilik kontrol yok → direkt Home
    navigation.navigate("Home");
  };

  const handleGoRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KampusPost</Text>

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

      <View style={styles.buttonWrapper}>
        <Button title="Giriş Yap" onPress={handleLogin} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Kayıt Ol" onPress={handleGoRegister} />
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
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonWrapper: {
    marginTop: 8,
  },
});

export default LoginScreen;
