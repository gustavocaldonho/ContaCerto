import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    // borderWidth: 1,
  },
  value: {
    height: "60%",
    fontSize: 40,
    color: "#0F6C5B",
  },
  description: {
    fontSize: 20,
    height: "40%",
    color: "#16A288",
  },
  boxMinusPlus: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    fontSize: 40,
  },
});

export default styles;
