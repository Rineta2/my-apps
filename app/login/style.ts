import { StyleSheet } from "react-native";

import Colors from "../../constant/Colors";

const styles = StyleSheet.create({
  //======== HOme Screen ========//
  img: {
    width: 250,
    height: 350,
  },

  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },

  textContainer: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    height: "100%",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    lineHeight: 35,
  },
  desc: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    marginTop: 15,
    lineHeight: 30,
  },
  button: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 99,
    marginTop: 20,
  },

  loginBtn: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.PRIMARY,
  },

  note: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 20,
  },

  //======== Signin ========//
  containerSignin: {
    padding: 25,
  },

  loginImage: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },

  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },

  formContainerLogin: {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: Colors.GRAY,
  },

  textInput: {
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "white",
  },

  buttonLogin: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },

  textLogin: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

  buttonToRegister: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },

  textToRegister: {
    color: Colors.PRIMARY,
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1,
  },

  //======== Signup ========//

  formContainerRegister: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  buttonRegister: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
  },

  buttonToLogin: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
});

export default styles;
