import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingVertical: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderColor: "#107E6C",
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  closeButton: {
    position: "absolute",
    backgroundColor: "#fff",
    top: 10,
    right: 15,
    padding: 5,
  },
  vertexLabel: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#107E6C",
    marginTop: 10,
  },
});
