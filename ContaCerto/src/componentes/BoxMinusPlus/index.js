import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function BoxMinusPlus({
  value,
  description,
  onIncrease,
  onDecrease,
  maxValue,
  estoque,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.boxMinusPlus}>
        <TouchableOpacity onPress={onDecrease} disabled={value <= 0}>
          <Icon
            name="minus-circle"
            color={value > 0 ? "#F38295" : "#d3d3d3"} // cinza se desativado
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={[styles.value, { height: "100%" }]}>{value}</Text>

        <TouchableOpacity onPress={onIncrease} disabled={estoque === 0}>
          <Icon
            name="plus-circle"
            color={estoque !== 0 ? "#107E6C" : "#d3d3d3"} // cinza se desativado
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
