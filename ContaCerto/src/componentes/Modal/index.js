import React from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ModalProduto({ modalVisible, setModalVisible }) {
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
              //   onChangeText={onChangeNumber}
              //   value={number}
              placeholder="ex.: Picolé de Cobertura"
              keyboardType="default"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Estoque</Text>
            <TextInput
              //   onChangeText={onChangeNumber}
              //   value={number}
              placeholder="ex.: 8"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Custo</Text>
            <TextInput
              //   onChangeText={onChangeNumber}
              //   value={number}
              placeholder="ex.: 1,00"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <Text style={styles.textStyle}>Valor Final</Text>
            <TextInput
              //   onChangeText={onChangeNumber}
              //   value={number}
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
