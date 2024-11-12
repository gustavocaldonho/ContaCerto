import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";
import BoxHilight from "./src/componentes/BoxHilight";
import BoxMinusPlus from "./src/componentes/BoxMinusPlus";
import ModalProduto from "./src/componentes/Modal";
import ModalGrafico from "./src/componentes/ModalGrafico";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalGraficoVisible, setModalGraficoVisible] = useState(false);
  const [listProdutos, setListProdutos] = useState([
    {
      id: 1,
      nome: "Picolé Simples",
      estoque: 10,
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
  const [selectedProduct, setSelectedProduct] = useState(
    listProdutos[0]?.nome || ""
  );
  const [produto, setProduto] = useState(listProdutos[0] || {});

  const setarProduto = (itemValue) => {
    const produtoSelecionado = listProdutos.find((p) => p.nome === itemValue);
    setProduto(produtoSelecionado || {});
  };

  const atualizarEstoque = (novaQtdVendida) => {
    if (produto && novaQtdVendida >= 0) {
      const estoqueAlterado =
        produto.qtdVendida > novaQtdVendida
          ? produto.estoque + 1
          : produto.estoque - 1;

      const produtoAtualizado = {
        ...produto,
        qtdVendida: novaQtdVendida,
        estoque: Math.max(0, estoqueAlterado),
      };

      setProduto(produtoAtualizado);

      setListProdutos((prevProdutos) =>
        prevProdutos.map((p) =>
          p.id === produtoAtualizado.id ? produtoAtualizado : p
        )
      );
    }
  };

  const atualizarProduto = (produtoAtualizado) => {
    setListProdutos((prevProdutos) => {
      const existeProduto = prevProdutos.find(
        (p) => p.id === produtoAtualizado.id
      );
      return existeProduto
        ? prevProdutos.map((p) =>
            p.id === produtoAtualizado.id ? produtoAtualizado : p
          )
        : [
            ...prevProdutos,
            { ...produtoAtualizado, id: prevProdutos.length + 1 },
          ];
    });
    setSelectedProduct(produtoAtualizado.nome);
    setarProduto(produtoAtualizado.nome);
  };

  const calcularLucro = () =>
    produto?.qtdVendida * (produto?.valorFinal - produto?.custo) || 0;
  const calcularLucroPercentual = () =>
    produto ? ((produto.valorFinal - produto.custo) / produto.custo) * 100 : 0;
  const calcularFaturamento = () =>
    produto?.qtdVendida * produto?.valorFinal || 0;
  const calcularDespesa = () => produto?.qtdVendida * produto?.custo || 0;

  useEffect(() => {
    if (produto) {
      calcularFaturamento();
      calcularLucro();
    }
  }, [produto]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#17B59A" />
      <Text style={styles.title}>ContaCerto</Text>

      <Picker
        selectedValue={selectedProduct}
        onValueChange={(itemValue) => {
          setSelectedProduct(itemValue);
          setarProduto(itemValue);
        }}
        style={styles.picker}
      >
        {listProdutos.map((produto) => (
          <Picker.Item
            key={produto.id}
            label={produto.nome}
            value={produto.nome}
          />
        ))}
      </Picker>

      <View style={styles.boxLine}>
        <BoxHilight value={produto.estoque} description={"Estoque"} />
        <BoxMinusPlus
          estoque={produto.estoque}
          value={produto.qtdVendida}
          description={"Qtd. Vendida"}
          maxValue={produto.estoque}
          onIncrease={() => atualizarEstoque(produto.qtdVendida + 1)}
          onDecrease={() => atualizarEstoque(produto.qtdVendida - 1)}
        />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={produto.custo} description={"Custo"} />
        <BoxHilight value={produto.valorFinal} description={"Valor Final"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={calcularLucro()} description={"Lucro"} />
        <BoxHilight
          value={`${calcularLucroPercentual().toFixed(2)}%`}
          description={"Lucro (%)"}
        />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={calcularDespesa()} description={"Despesa"} />
        <BoxHilight value={calcularLucro()} description={"Lucro Total"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={calcularFaturamento()} description={"Faturamento"} />
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textEdit}>Editar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => {
          setModalVisible(true);
          setProduto({});
        }}
      >
        <Text style={styles.textAdd}>+ Produto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonGrafico}
        onPress={() => {
          setModalGraficoVisible(true);
        }}
      >
        <Text style={styles.textAdd}>Ver Gráfico</Text>
      </TouchableOpacity>

      <ModalProduto
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        listProdutos={listProdutos}
        setListProdutos={setListProdutos}
        produto={produto}
        atualizarProduto={atualizarProduto}
      />
      <ModalGrafico
        modalVisible={modalGraficoVisible}
        setModalVisible={setModalGraficoVisible}
        produto={produto}
      />
    </SafeAreaView>
  );
}
