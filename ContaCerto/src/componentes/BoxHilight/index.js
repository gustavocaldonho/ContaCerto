import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function boxMinusPlus({ value, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
