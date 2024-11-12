import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF4",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "#117E6C",
    marginVertical: 10,
  },
  picker: {
    width: "100%",
    backgroundColor: "#17B59A",
    color: "#fff",
  },
  boxLine: {
    width: "100%",
    height: 100,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonEdit: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#00A368",
    backgroundColor: "#E6FFFA",
  },
  textEdit: {
    fontSize: 30,
    color: "#00A368",
  },
  buttonAdd: {
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#00A368",
    position: "absolute",
    bottom: 15,
    left: 40,
  },
  buttonGrafico: {
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#00A368",
    position: "absolute",
    bottom: 15,
    right: 40,
  },
  textAdd: {
    fontSize: 20,
    color: "#fff",
  },
  boxHighlight: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: "#E6FFFA",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#B2F5EA",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  boxHighlightText: {
    fontSize: 18,
    color: "#006D3A",
    fontWeight: "600",
  },
  boxDescription: {
    fontSize: 14,
    color: "#00A368",
    marginTop: 5,
  },
});

export default styles;
