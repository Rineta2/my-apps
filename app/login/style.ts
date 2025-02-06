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
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },

  loginImage: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },

  textHeader: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 8,
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

  buttonGoogle: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  textGoogle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
    marginTop: 20,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#404040",
    marginBottom: 8,
  },

  textInputRegister: {
    fontSize: 16,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    color: "#1a1a1a",
  },

  passwordContainerRegister: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#1a1a1a",
  },

  passwordInputRegister: {
    flex: 1,
    fontSize: 16,
    padding: 15,
    color: "#1a1a1a",
  },

  eyeIcon: {
    padding: 10,
  },

  buttonRegister: {
    backgroundColor: Colors.PRIMARY,
    padding: 18,
    borderRadius: 12,
    marginTop: 30,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonToLogin: {
    backgroundColor: "transparent",
    padding: 18,
    borderRadius: 12,
    marginTop: 15,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
  },

  textLoginRegister: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },

  textToRegisterRegister: {
    color: Colors.PRIMARY,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
