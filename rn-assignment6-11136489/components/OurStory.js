Products.js
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function OurStory() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text}> Our Story</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons name="sort" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="filter-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {},
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  right: {
    flexDirection: "row",
    gap: 8,
  },
  icon: {
    backgroundColor: "#f4f4f4",
    padding: 8,
    borderRadius: 100,
  },
});
