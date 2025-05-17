import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CardViewHorizontal from "@/components/CardViewHorizontal";
import TitleSection from "@/components/TitleSection";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// Função para agrupar os dados em pares (2 por coluna)
function groupInPairs<T>(data: T[]): T[][] {
  const result = [];
  for (let i = 0; i < data.length; i += 2) {
    result.push(data.slice(i, i + 2));
  }
  return result;
}

export default function HomeScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  const markets = [
    {
      id: "1",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
    {
      id: "2",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
    {
      id: "3",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
    {
      id: "4",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
    {
      id: "5",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
    {
      id: "6",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
    {
      id: "7",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
    {
      id: "8",
      name: "Super Muffato Dahma",
      rating: 4.8,
      distance: "1.7km",
      price: "R$ 103,87",
    },
  ];

  const items = [
    {
      id: "1",
      name: "Pão de Açúcar",
      price: "R$ 129,03",
      distance: "2.9km",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Pão",
      price: "R$ 129,03",
      distance: "2.9km",
      rating: 4.8,
    },
    {
      id: "3",
      name: "Pão de Açúcar - Dahma",
      price: "R$ 129,03",
      distance: "2.9km",
      rating: 4.8,
    },
    {
      id: "4",
      name: "Pão de Açúcar - Dahma",
      price: "R$ 129,03",
      distance: "2.9km",
      rating: 4.8,
    },
    {
      id: "5",
      name: "Pão de Açúcar - Dahma",
      price: "R$ 129,03",
      distance: "2.9km",
      rating: 4.8,
    },
    {
      id: "6",
      name: "Pão de Açúcar - Dahma",
      price: "R$ 129,03",
      distance: "2.9km",
      rating: 4.8,
    },
  ];

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.greeting}>olá, paola</Text>
            <View style={styles.location}>
              <Image
                source={require("@/assets/images/location.png")}
                style={{ width: 14, height: 14 }}
                resizeMode="contain"
              />
              <Text style={styles.locationText}>são josé do rio preto ...</Text>
            </View>
          </View>

          <TitleSection title="mercados em destaque" />
          <FlatList
            data={groupInPairs(markets)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `market-col-${index}`}
            contentContainerStyle={{paddingRight: 16 }}
            renderItem={({ item }) => (
              <View style={{ gap: 10 }}>
                {item.map((market) => (
                  <CardViewHorizontal
                    key={market.id}
                    name={market.name}
                    rating={market.rating}
                    distance={market.distance}
                    image={require("@/assets/images/market.png")}
                  />
                ))}
              </View>
            )}
          />

          <TitleSection title="itens de cesta básica" />

          <FlatList
            data={groupInPairs(items)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `item-col-${index}`}
            contentContainerStyle={{ paddingRight: 16 }}
            renderItem={({ item }) => (
              <View style={{ gap: 10 }}>
                {item.map((product) => (
                  <View key={product.id} style={styles.itemCard}>
                    <Image
                      source={require("@/assets/images/cesta.png")}
                      style={styles.productImage}
                      resizeMode="cover"
                    />

                    <View style={styles.marketInfoCard}>
                      <Image
                        source={require("@/assets/images/market.png")}
                        style={{ width: 40, height: 40 }}
                        resizeMode="cover"
                      />
                      <Text style={styles.itemName}>{product.name}</Text>
                    </View>

                    <View style={styles.marketDetailsCard}>
                      <Image
                        source={require("@/assets/images/star.png")}
                        style={{ width: 12, height: 12 }}
                      />
                      <Text style={styles.marketDetails}>
                        <Text style={{color: "#E88712"}}>{product.rating}</Text> • {product.distance}
                      </Text>
                    </View>

                    <View style={styles.priceCard}>
                      <Image
                        source={require("@/assets/images/tag.png")}
                        style={{ width: 10, height: 10 }}
                      />
                      <Text style={styles.price}>{product.price}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          />
        </View>
      }
      data={[]}
      renderItem={null}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    paddingLeft: 16,
    paddingBottom: 24
  },
  header: {
    paddingTop: 30,
    paddingVertical: 10,
    paddingRight: 16,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 14,
    color: "#1A281B",
    fontFamily: "FunnelDisplayMedium",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    marginLeft: 4,
    color: "#5F605F",
    fontFamily: "FunnelDisplayRegular",
  },
  itemCard: {
    width: 150,
    gap: 12,
    marginRight: 12,
    marginBottom: 12,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  marketInfoCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  itemName: {
    fontSize: 14,
    fontFamily: "FunnelDisplaySemiBold",
    width: "65%",
    color: "#1A281B",
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
  priceCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#05833E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  price: {
    fontSize: 10,
    fontFamily: "FunnelDisplayRegular",
    color: "#fff",
  },
});