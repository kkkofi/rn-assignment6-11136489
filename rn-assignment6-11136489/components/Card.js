import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Cards({
  image,
  icon,
  title,
  description,
  price,
  addToCart,
  product,
  removeFromCart,
  style,
  cartView, // New prop to indicate cart view
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // State for showing message

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product);
    setIsAdding(false);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000); // Hide message after 2 seconds
  };

  return (
    <View style={[styles.container, cartView && styles.rowContainer]}>
      <View
        style={[styles.imageContainer, cartView && styles.rowImageContainer]}
      >
        <Image style={styles.image} source={image} />
        {addToCart && (
          <TouchableOpacity onPress={handleAddToCart} disabled={isAdding}>
            <Image style={styles.icon} source={icon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.info, cartView && styles.rowInfo]}>
        {removeFromCart && (
          <TouchableOpacity onPress={removeFromCart} style={styles.removeIcon}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../assets/images/remove.png")}
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.title, cartView && styles.cartTitle]}>
          {title}
        </Text>
        <Text style={[styles.description, cartView && styles.cartDescription]}>
          {description}
        </Text>
        <Text style={[styles.price, cartView && styles.cartPrice]}>
          {price}
        </Text>
      </View>
      {showMessage && (
        <Text style={styles.addToCartMessage}>Item added to cart!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 165,
    position: "relative", // Added for absolute positioning of the message
  },
  rowContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    height: 220,
    width: 165,
  },
  rowImageContainer: {
    height: 210,
    width: 155,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 6,
    bottom: 6,
  },
  removeIcon: {
    position: "absolute",
    right: -2,
    bottom: 5,
  },
  info: {
    marginTop: 15,
  },
  rowInfo: {
    justifyContent: "center",
    marginLeft: 10,
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartTitle: {
    fontSize: 20, // Larger font size for cart view
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
  },
  cartDescription: {
    fontSize: 13, // Larger font size for cart view
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "orange",
  },
  cartPrice: {
    fontSize: 24, // Larger font size for cart view
  },
  addToCartMessage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    backgroundColor: "orange",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
});
