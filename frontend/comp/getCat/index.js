import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
export default function GetCat({ refresh, setCatrefresh }) {
  const [cat, setCat] = useState("");
  const deleteCat = (id) => {
    axios
      .delete(`http://192.168.1.65:5000/cat/deleteCat/${id}`)
      .then((result) => {
        console.log(result);
        refresh ? setCatrefresh(false) : setCatrefresh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("http://192.168.1.65:5000/cat/allCats")
      .then((resulit) => {
        setCat(resulit.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  return (
    <View>
      {cat &&
        cat.map((element, i) => {
          return (
            <View style={styles.container} key={i}>
              <Text> {element.Name} </Text>
              <Text> {element.Description} </Text>
              <Text> {element.Breed} </Text>
              <Button
                title="Delete"
                onPress={() => {
                  deleteCat(element.cat_id);
                }}
              />
            </View>
          );
        })}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
