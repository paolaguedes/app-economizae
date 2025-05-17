import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

type TitleSectionProps = {
  title: string;
  text?: string;
};

export default function TitleSection({
    title,
    text
}: TitleSectionProps) {
  return (
    <View style={styles.titleCard}>
      <Text style={styles.titleSection}>
          {title}
      </Text>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
);
}

const styles = StyleSheet.create({
  titleCard: {
    fontSize: 16,
    fontFamily: "FunnelDisplayBold",
    marginTop: 24,
    marginBottom: 4,
  },
    titleSection: {
    fontSize: 16,
    fontFamily: "FunnelDisplayBold",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    fontFamily: "FunnelDisplayRegular",
    color: "#5F605F",
  }
});
