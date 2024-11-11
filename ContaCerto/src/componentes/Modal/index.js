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
  listProdutos,
  setListProdutos,
  produto,
}) {
  const [nome, setNome] = useState(produto ? produto.nome : "");
  const [estoque, setEstoque] = useState(produto ? produto.estoque : "");
  const [custo, setCusto] = useState(produto ? produto.custo : "");
  const [valorFinal, setValorFinal] = useState(
    produto ? produto.valorFinal : ""
  );
  //qtdVendida começa com 0 (zero);

  useEffect(() => {
    console.log(produto);
  }, []);

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
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Icon name="close" size={30} color={"#117E6C"} />
            </TouchableOpacity>
            <Text style={styles.title}>Cadastro de Produtos</Text>
            <Text style={styles.textStyle}>Nome do Produto</Text>
            <TextInput
              onChangeText={(text) => {
                setNome(text);
              }}
              value={nome}
              placeholder="ex.: Picolé de Cobertura"
              keyboardType="default"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Estoque</Text>
            <TextInput
              onChangeText={(text) => {
                setEstoque(text);
              }}
              value={estoque}
              placeholder="ex.: 8"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Custo</Text>
            <TextInput
              onChangeText={(text) => {
                setCusto(text);
              }}
              value={custo}
              placeholder="ex.: 1,00"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Valor Final</Text>
            <TextInput
              onChangeText={(text) => {
                setValorFinal(text);
              }}
              value={valorFinal}
              placeholder="ex.: 1,50"
              keyboardType="numeric"
              style={styles.textInput}
            />

            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.textAdd}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
