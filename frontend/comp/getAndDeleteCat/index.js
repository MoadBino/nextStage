import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Modalp from "../modal";
import axios from "axios";
export default function GetCat({ refresh, setCatrefresh }) {
  const [cat, setCat] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");
  const deleteCat = (id) => {
    axios
      .delete(
        `https://8829-2a01-9700-1034-6000-756b-1154-b102-27d4.eu.ngrok.io/cat/deleteCat/${id}`
      )
      .then((result) => {
        console.log(result);
        refresh ? setCatrefresh(false) : setCatrefresh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("here");
    axios
      .get(
        "https://8829-2a01-9700-1034-6000-756b-1154-b102-27d4.eu.ngrok.io/cat/allCats"
      )
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
            <ScrollView>
              <View key={i}>
                <View style={styles.Text}>
                  <View>
                    <Text> Name </Text>
                    <Text> {element.Name} </Text>
                  </View>
                  <View>
                    <Text> Breed </Text>
                    <Text> {element.Breed} </Text>
                  </View>
                  <View>
                    <Text> Description </Text>
                    <Text> {element.Description} </Text>
                  </View>
                </View>
                <View style={styles.Button}>
                  <Button
                    style={styles.ButtonUpdate}
                    title="Delete"
                    onPress={() => {
                      deleteCat(element.cat_id);
                    }}
                  />
                  <Button
                    title="update"
                    onPress={() => {
                      setId(element.cat_id);
                      openModal ? setOpenModal(false) : setOpenModal(true);
                    }}
                  />
                </View>
                <Text
                  style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
                ></Text>
              </View>
            </ScrollView>
          );
        })}
      <StatusBar style="auto" />
      <Modalp
        id={id}
        openModal={openModal}
        setOpenModal={setOpenModal}
        refresh={refresh}
        setCatrefresh={setCatrefresh}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Button: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row",
    margin: 20,
  },
  Text: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
