import TitleSection from "@/components/TitleSection";
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Menu, Provider } from "react-native-paper";

export default function ProductScreen() {
  const [price, setPrice] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const markets = [
    { label: "Super Muffato", value: "muffato" },
    { label: "Pão de Açúcar", value: "pao" },
    { label: "Assaí Atacadista", value: "assai" },
  ];

  async function handleBarcodeScanRequest() {
    const { granted } = await requestPermission();
    if (granted || permission?.granted) {
      setIsCameraVisible(true);
    } else {
      Alert.alert("Permissão negada", "Você precisa permitir acesso à câmera.");
    }
  }

  function handleBarcodeScanned({ data }: { data: string }) {
    Alert.alert("Código de barras escaneado", `Código: ${data}`);
  }

  function handlePriceChange(text: string) {
    const clean = text.replace(/\D/g, "");
    const numeric = (Number(clean) / 100).toFixed(2);
    const formatted = `R$ ${numeric}`.replace(".", ",");
    setPrice(formatted);
  }

  function handleSubmit() {
    if (!price || !selectedMarket) {
      Alert.alert("Preencha todos os campos obrigatórios.");
      return;
    }

    Alert.alert(
      "Produto enviado!",
      `Preço: ${price}\nMercado: ${selectedMarket}`
    );
  }

  if (permission?.granted && isCameraVisible) {
    return (
      <CameraView
        style={{ flex: 1, width: "100%" }}
        onBarcodeScanned={(result) => {
          console.log(result);
          setIsCameraVisible(false);
        }}
      >
        <View
          style={{
            position: "absolute",
            paddingTop: 44,
            paddingLeft: 16,
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "100%",
          }}
        >
          <Pressable
            style={styles.backCard}
            onPress={() => {
              setIsCameraVisible(false);
            }}
          >
            <Ionicons name="chevron-back" size={20} color="#05833E" />
            <Text style={styles.textBack}>Voltar</Text>
          </Pressable>

          <TitleSection title="escaneie o código de barras do produto" />
        </View>
      </CameraView>
    );
  }

  return (
    <Provider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <TitleSection
            title="cadastro de produto"
            text="ajude a comunidade economizaê a estar sempre atualizada!"
          />

          <View style={styles.form}>
            <View>
              <View>
                <Pressable
                  style={styles.scanButton}
                  onPress={handleBarcodeScanRequest}
                >
                  <Ionicons name="barcode-outline" size={20} color="#05833E" />
                  <Text style={styles.scanButtonText}>
                    escanear código de barras
                  </Text>
                </Pressable>

                <Text style={styles.manualEntry}>
                  ou digite o código manualmente
                </Text>
              </View>

              <Text style={styles.label}>preço *</Text>
              <TextInput
                style={styles.input}
                placeholder="R$ 00,00"
                placeholderTextColor="#5F605F"
                keyboardType="numeric"
                value={price}
                onChangeText={handlePriceChange}
              />

              <Text style={styles.label}>mercado *</Text>
              <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={
                  <Pressable
                    style={styles.dropdown}
                    onPress={() => setMenuVisible(true)}
                  >
                    <Text
                      style={
                        selectedMarket
                          ? styles.dropdownText
                          : styles.dropdownPlaceholder
                      }
                    >
                      {selectedMarket
                        ? markets.find((m) => m.value === selectedMarket)?.label
                        : "selecione o mercado"}
                    </Text>
                    <Ionicons name="chevron-down" size={16} color="#05833E" />
                  </Pressable>
                }
              >
                {markets.map((market) => (
                  <Menu.Item
                    key={market.value}
                    onPress={() => {
                      setSelectedMarket(market.value);
                      setMenuVisible(false);
                    }}
                    title={market.label}
                  />
                ))}
              </Menu>
            </View>

            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>enviar produto</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    paddingBottom: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: "space-between"
  },
  scanButton: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#05833E",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  backCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textBack: {
    color: "#05833E",
    fontFamily: "FunnelDisplayRegular",
  },
  scanButtonText: {
    color: "#05833E",
    fontFamily: "FunnelDisplayRegular",
  },
  manualEntry: {
    marginTop: 12,
    marginBottom: 24,
    color: "#05833E",
    textAlign: "center",
    fontSize: 13,
    fontFamily: "FunnelDisplayRegular",
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 14,
    color: "#1A281B",
    fontFamily: "FunnelDisplayRegular",
  },
  input: {
    borderWidth: 1,
    borderColor: "#05833E",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 8,
    fontSize: 14,
    color: "#1A281B",
    fontFamily: "FunnelDisplayRegular",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#05833E",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  dropdownText: {
    color: "#1A281B",
    fontSize: 14,
    fontFamily: "FunnelDisplayRegular",
  },
  dropdownPlaceholder: {
    color: "#5F605F",
    fontSize: 14,
    fontFamily: "FunnelDisplayRegular",
  },
  submitButton: {
    marginTop: 24,
    backgroundColor: "#05833E",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "FunnelDisplaySemiBold",
  },
});
