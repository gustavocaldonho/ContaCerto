import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";
import BoxHilight from "./src/componentes/BoxHilight";
import BoxMinusPlus from "./src/componentes/BoxMinusPlus";
import ModalProduto from "./src/componentes/Modal";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [produto, setProduto] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [produtoSelected, setProdutoSelected] = useState({});
  const [listProdutos, setListProdutos] = useState([
    {
      id: 1,
      nome: "Picolé Simples",
      estoque: 7,
      qtdVendida: 3,
      custo: 1.0,
      valorFinal: 1.5,
    },
    {
      id: 2,
      nome: "Picolé de Cobertura",
      estoque: 5,
      qtdVendida: 2,
      custo: 2.0,
      valorFinal: 3.5,
    },
    {
      id: 3,
      nome: "Moreninha",
      estoque: 10,
      qtdVendida: 12,
      custo: 3.0,
      valorFinal: 5.0,
    },
  ]);

  const setarProduto = (itemValue) => {
    for (p of listProdutos) {
      if (itemValue === p.nome) {
        setProduto(p);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#17B59A" />
      <Text style={styles.title}>ContaCerto</Text>

      <Picker
        selectedValue={selectedProduct}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedProduct(itemValue);
          setarProduto(itemValue);
        }}
        style={styles.picker}
      >
        {listProdutos.map((produto, index) => (
          <Picker.Item key={index} label={produto.nome} value={produto.nome} />
        ))}
      </Picker>

      <View style={styles.boxLine}>
        <BoxHilight value={produto.estoque} description={"Estoque"} />
        <BoxMinusPlus value={produto.qtdVendida} description={"Qtd. Vendida"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={produto.custo} description={"Custo"} />
        <BoxHilight value={produto.valorFinal} description={"Valor Final"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight
          value={produto.valorFinal - produto.custo}
          description={"M. de Lucro"}
        />
        <BoxHilight value={"50%"} description={"M. Lucro (%)"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={"7,25"} description={"Despesa"} />
        <BoxHilight value={"4,75"} description={"Lucro"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={"12,00"} description={"Faturamento"} />
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textEdit}>Editar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textAdd}>Adicionar Produto</Text>
      </TouchableOpacity>

      <ModalProduto
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        listProdutos={listProdutos}
        setListProdutos={setListProdutos}
        produto={produto}
      />
    </SafeAreaView>
  );
}
