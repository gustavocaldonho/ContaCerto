import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ModalProduto({
  modalVisible,
  setModalVisible,
  atualizarProduto,
  produto,
}) {
  const [nome, setNome] = useState(produto ? produto.nome : "");
  const [estoque, setEstoque] = useState(produto ? produto.estoque : "");
  const [custo, setCusto] = useState(produto ? produto.custo : "");
  const [valorFinal, setValorFinal] = useState(
    produto ? produto.valorFinal : ""
  );

  useEffect(() => {
    if (produto) {
      setNome(produto.nome);
      setEstoque(produto.estoque);
      setCusto(produto.custo);
      setValorFinal(produto.valorFinal);
    }
  }, [produto]);

  const handleSave = () => {
    const produtoAtualizado = {
      ...produto,
      nome,
      estoque: parseFloat(estoque),
      custo: parseFloat(custo),
      valorFinal: parseFloat(valorFinal),
      qtdVendida: 0,
    };
    atualizarProduto(produtoAtualizado);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close" size={30} color={"#117E6C"} />
            </TouchableOpacity>
            <Text style={styles.title}>Cadastro de Produtos</Text>
            <Text style={styles.textStyle}>Nome do Produto</Text>
            <TextInput
              onChangeText={setNome}
              value={nome}
              placeholder="ex.: Picolé de Cobertura"
              keyboardType="default"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Estoque</Text>
            <TextInput
              onChangeText={(value) => setEstoque(value.replace(/[^0-9]/g, ""))}
              value={estoque ? estoque.toString() : null}
              placeholder="ex.: 8"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Custo</Text>
            <TextInput
              onChangeText={(value) => setCusto(value.replace(",", "."))}
              value={custo ? custo.toString() : null}
              placeholder="ex.: 1.00"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Valor Final</Text>
            <TextInput
              onChangeText={(value) => setValorFinal(value.replace(",", "."))}
              value={valorFinal ? valorFinal.toString() : null}
              placeholder="ex.: 1.50"
              keyboardType="numeric"
              style={styles.textInput}
            />

            <TouchableOpacity style={styles.buttonAdd} onPress={handleSave}>
              <Text style={styles.textAdd}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
