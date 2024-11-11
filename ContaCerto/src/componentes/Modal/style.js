import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    margin: 20,
    backgroundColor: "#F0FFF4",
    borderRadius: 20,
    padding: 35,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#117E6C",
    fontWeight: "700",
    marginTop: 40,
    marginBottom: 30,
  },
  textStyle: {
    color: "#117E6C",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
  textInput: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 16,
    borderColor: "#117E6C",
    color: "#117E6C",
    backgroundColor: "#fff",
  },
  buttonAdd: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    borderRadius: 100,
    backgroundColor: "#00A368",
    alignSelf: "center",
  },
  textAdd: {
    fontSize: 20,
    color: "#fff",
  },
  buttonClose: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default styles;
