import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddCat({ refresh, setCatrefresh }) {
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
      .post(
        "https://8829-2a01-9700-1034-6000-756b-1154-b102-27d4.eu.ngrok.io/cat/addCat",
        {
          Name: Name,
          Breed: Breed,
          Description: Description,
        }
      )
      .then((resulit) => {
        console.log(resulit);
        refresh ? setCatrefresh(false) : setCatrefresh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.centeredView}>
      {input("Name", setName)}
      {input("Breed", setBreed)}
      {input("Description", setDescription)}
      <Button
        title="addcat"
        onPress={() => {
          addCat();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    margin: 20,
    marginTop: 100,
  },
});
