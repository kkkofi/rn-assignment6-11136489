import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Cards from "../components/Cards";
import { products } from "./Database";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to add item to cart and save it in AsyncStorage
const addToCart = async (item) => {
  try {
    const jsonValue = await AsyncStorage.getItem("cart");
    let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
    cart.push(item);
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
    console.log("Item added to cart");
  } catch (e) {
    console.error(e);
  }
};

export default function Products() {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Cards
              image={item.image}
              icon={item.icon}
              title={item.title}
              description={item.description}
              price={item.price}
              addToCart={addToCart}
              product={item}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
});
