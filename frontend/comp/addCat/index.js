import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddCat({refresh ,setCatrefresh}) {
  const [Name, setName] = useState("");
  const [Breed, setBreed] = useState("");
  const [Description, setDescription] = useState("");
  const input = (placeholder, set) => {
    return (
      <TextInput
        placeholder={placeholder}
        onChangeText={(newText) => set(newText)}
      />
    );
  };
  const addCat = () => {
    console.log(false);
    axios
      .post("http://192.168.1.65:5000/cat/addCat", {
        Name: Name,
        Breed: Breed,
        Description: Description,
      })
      .then((resulit) => {
        refresh?setCatrefresh(false):setCatrefresh(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Button
        title="addcat"
        onPress={() => {
          addCat();
        }}
      />
      <Text>from add</Text>
      {input("Name", setName)}
      {input("Breed", setBreed)}
      {input("Description", setDescription)}
      <StatusBar style="auto" />
    </View>
  );
}
