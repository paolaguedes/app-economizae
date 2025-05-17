import React from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type CardViewHorizontalProps = {
  name: string;
  rating: number;
  distance: string;
  image?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function CardViewHorizontal({
  name,
  rating,
  distance,
  image = require("@/assets/images/market.png"),
  onPress,
}: CardViewHorizontalProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.marketCard,
        pressed && { opacity: 0.6 }, 
      ]}
      onPress={onPress}
    >
      <Image
        source={image}
        style={{ width: 40, height: 40 }}
        resizeMode="cover"
      />

      <View style={styles.marketText}>
        <Text style={styles.marketName}>{name}</Text>
        <View style={styles.marketDetailsCard}>
          <Image
            source={require("@/assets/images/star.png")}
            style={{ width: 12, height: 12 }}
          />
          <Text style={styles.marketDetails}>
            <Text style={{ color: "#E88712" }}>{rating}</Text> • {distance}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  marketCard: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginRight: 12,
    backgroundColor: "#E0EBE1",
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
});
