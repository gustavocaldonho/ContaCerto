import { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";
import BoxHilight from "./src/componentes/BoxHilight";
import BoxMinusPlus from "./src/componentes/BoxMinusPlus";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#17B59A" />
      <Text style={styles.title}>ContaCerto</Text>

      <Picker
        selectedValue={selectedProduct}
        onValueChange={(itemValue, itemIndex) => setSelectedProduct(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Picolé Simples" value="picolesimples" />
        <Picker.Item label="Picolé de Cobertura" value="picoledecobertura" />
        <Picker.Item label="Moreninha" value="moreninha" />
      </Picker>

      <View style={styles.boxLine}>
        <BoxHilight value={7} description={"Estoque"} />
        <BoxMinusPlus value={3} description={"Qtd. Vendida"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={"1,00"} description={"Custo"} />
        <BoxHilight value={"1,50"} description={"Valor Final"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={"0,50"} description={"M. de Lucro"} />
        <BoxHilight value={"50%"} description={"M. Lucro (%)"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={"7,25"} description={"Despesa"} />
        <BoxHilight value={"4,75"} description={"Lucro"} />
      </View>
      <View style={styles.boxLine}>
        <BoxHilight value={"12,00"} description={"Faturamento"} />
        <TouchableOpacity style={styles.buttonEdit}>
          <Text style={styles.textEdit}>Editar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonAdd}>
        <Text style={styles.textAdd}>Adicionar Produto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
