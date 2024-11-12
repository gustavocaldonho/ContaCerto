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

  // Parâmetro de aumento de custo com quantidade vendida para função quadrática
  const a = -1; // Ajustado para um valor menor, assim a parábola fica mais visível
  const b = 100 - produto.custo * 2; // A diferença entre o valor final de venda e o custo do produto

  // Cálculo do vértice (quantidade máxima)
  const qMax = -b / (2 * a); // Quantidade vendida no ponto de lucro máximo

  // Corrigindo o cálculo do lucro máximo com a fórmula correta
  const lucroMax = a * qMax ** 2 + b * qMax - (1600 + custoFixo); // Lucro no ponto máximo considerando o custo fixo

  // Gerando dados para o gráfico
  const generateChartData = () => {
    const data = [];
    for (let q = 0; q <= produto.estoque; q++) {
      // Aplicando a fórmula de lucro ajustada
      const lucro = a * q ** 2 + (100 - produto.custo) * q - (1600 + custoFixo);
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
        <Text style={styles.modalTitle}>Lucro (R$) X Qtd. Vendida</Text>

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
