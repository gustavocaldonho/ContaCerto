import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function boxMinusPlus({ value, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.boxMinusPlus}>
        <TouchableOpacity>
          <Icon name="minus-circle" color="#ff0000" style={styles.icon} />
        </TouchableOpacity>
        <Text style={[styles.value, { height: "100%" }]}>{value}</Text>
        <TouchableOpacity>
          <Icon name="plus-circle" color="#000" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
