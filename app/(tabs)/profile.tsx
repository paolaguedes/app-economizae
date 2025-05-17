import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  function handleLinkTest() {
    console.log("oi");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.marketCard}>
        <Image
          source={require("@/assets/images/market.png")}
          style={{ width: 40, height: 40 }}
          contentFit="cover"
        />

        <View style={styles.profileCard}>
          <Text style={styles.profileName}>Paola Guedes</Text>
          <Text style={styles.profileEmail}>
            paolaguedesbacca2002@gmail.com
          </Text>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [styles.linksCard, pressed && { opacity: 0.6 }]}
        onPress={handleLinkTest}
      >
        <Image
          source={require("@/assets/images/password.png")}
          style={{ width: 18, height: 18 }}
          resizeMode="contain"
        />
        <Text style={styles.textLink}>redefinir senha</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.linksCard,
          { marginTop: 0 },
          pressed && { opacity: 0.6 },
        ]}
        onPress={handleLinkTest}
      >
        <Image
          source={require("@/assets/images/website.png")}
          style={{ width: 18, height: 18 }}
          resizeMode="contain"
        />
        <Text style={styles.textLink}>ver site</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.linksCard,
          { marginTop: 0 },
          pressed && { opacity: 0.6 },
        ]}
        onPress={handleLinkTest}
      >
        <Image
          source={require("@/assets/images/logout.png")}
          style={{ width: 18, height: 18 }}
          resizeMode="contain"
        />
        <Text style={styles.textLink}>sair</Text>
      </Pressable>

      <Text style={styles.version}>v 1.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingHorizontal: 16,
  },
  marketCard: {
    marginTop: 24,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#E0EBE1",
  },
  profileCard: {
    gap: 4,
  },
  profileName: {
    color: "#1A281B",
    fontFamily: "FunnelDisplaySemiBold",
  },
  profileEmail: {
    color: "#5F605F",
    fontFamily: "FunnelDisplayRegular",
  },
  marketText: {
    gap: 4,
    justifyContent: "center",
  },
  marketName: {
    fontFamily: "FunnelDisplaySemiBold",
  },
  marketDetailsCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  marketDetails: {
    fontSize: 12,
    color: "#555",
    fontFamily: "FunnelDisplayRegular",
  },
  linksCard: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderColor: "#D0E1D2",
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textLink: {
    fontSize: 16,
    color: "#1A281B",
    fontFamily: "FunnelDisplayRegular",
  },
  version: {
    marginTop: 48,
    width: "100%",
    color: "#5F605F",
    textAlign: "center",
  },
});
