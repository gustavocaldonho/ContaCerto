import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./style";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ModalProduto({
  modalVisible,
  setModalVisible,
  produto,
}) {
  const screenWidth = Dimensions.get("window").width;

  // Parâmetro de aumento de custo com quantidade vendida para função quadrática
  const a = 0.05; // Esse valor pode ser ajustado conforme necessário

  // Gerando dados para o gráfico
  const generateChartData = () => {
    const data = [];
    for (let q = 0; q <= produto.estoque; q++) {
      const lucro = produto.valorFinal * q - (produto.custo * q + a * q ** 2);
      data.push(lucro);
    }
    return data;
  };

  const data = {
    labels: Array.from({ length: produto.estoque + 1 }, (_, i) => i.toString()),
    datasets: [
      {
        data: generateChartData(),
        color: () => `rgba(23, 181, 154, 1)`, // Cor da linha do gráfico
        strokeWidth: 2,
      },
    ],
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Gráfico de Lucro</Text>

        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForLabels: {
              fontSize: 10,
              fontWeight: "bold",
            },
          }}
          bezier
        />

        <Text style={styles.axisLabel}>Lucro (R$) X Qtd. Vendida</Text>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
        >
          <Icon name="close" size={25} color={"#107E6C"} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
