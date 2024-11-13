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
  const custoFixo = 100;

  const a = -2 / 25;
  const b = produto.valorFinal - produto.custo;
  const qMax = -b / (2 * a);
  const lucroMax = a * qMax ** 2 + b * qMax + 8 * b;

  const generateChartData = () => {
    const data = [];
    const qValues = [];
    for (let q = -50; q <= 150; q += 2) {
      const lucro = a * q ** 2 + b * q + 8 * b;
      if (lucro > 0) {
        data.push(lucro);
        qValues.push(q);
      }
    }
    return { data, qValues };
  };

  const chartData = generateChartData();

  const data = {
    labels: chartData.qValues.map((q, index) =>
      index % 5 === 0 ? q.toString() : ""
    ),
    datasets: [
      {
        data: chartData.data,
        color: () => `rgba(23, 181, 154, 1)`, // Cor da linha do gráfico
        strokeWidth: 2,
        withDots: true, // Exibir pontos em cada valor de lucro
        dotColor: "rgba(23, 181, 154, 1)", // Cor dos pontos
        dotRadius: 4, // Tamanho dos pontos
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
        <Text style={styles.modalTitle}>Quantidade (UN) X Lucro (R$)</Text>

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
        />

        {/* Exibindo as informações do vértice */}
        <Text style={styles.vertexLabel}>
          Quantidade Máxima de Vendas: {qMax.toFixed(2)}
        </Text>
        <Text style={styles.vertexLabel}>
          Lucro Máximo: R$ {lucroMax.toFixed(2)}
        </Text>

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
