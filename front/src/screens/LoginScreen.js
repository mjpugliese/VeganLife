import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../store/actions/users";

//Firebase
import firebase from "../utils/Firebase";
import "firebase/auth";

//hook
import useInputs from "../hooks/useInputs";

//Components
import Logo from "../components/Logo";
import InputData from "../components/InputData";
import AccessButtons from "../components/AccessButtons";

//Style
import styles from "../styles/login-register";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [inputs, handleChange] = useInputs();
  const { email, password } = inputs;
  const [errorMessage, setError] = useState("");

  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(dispatch(fetchLogin(email)))
      .then(() => navigation.navigate("Home"))
      // res = {user}
      .catch((err) => {
        if (
          String(err).includes("password is invalid") ||
          String(err).includes("no user record")
        )
          setError("Credenciales inválidas.");
        else if (String(err).includes("to many failed login attempts"))
          setError(
            "Demasiados intentos fallidos. Intente nuevamente más tarde."
          );
      });
  };
  useEffect(() => setError(""), [email, password]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo text="Iniciar Sesión" />
        <View style={styles.line} />
        <InputData
          title="Correo"
          handleChange={handleChange("email")}
          text={email}
        />
        <InputData
          title="Password"
          handleChange={handleChange("password")}
          text={password}
          secureTextEntry={true}
        />
        <Text style={styles.alert}>{errorMessage}</Text>
        <AccessButtons
          onPressBtn={handleSubmit}
          textBtn="Iniciar Sesión"
          question="¿No tienes cuenta?"
          onPressInvitation={() => navigation.navigate("Register")}
          invitation="Registrate"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

// firebase.auth().onAuthStateChanged(user => {
//     user ? navigation.navigate('Prueba') : console.log('Usuario no Logueado')
// })
