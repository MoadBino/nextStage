import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";
//the id come from getcat comp we use it to send api to update cat info
//openModal if it is true he will open the modal 
//setOpenModal to set state value false so we can open the modal agian when we close it
const Modalp = ({ id, openModal, setOpenModal, refresh, setCatrefresh }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Name, setName] = useState("");
  const [Breed, setBreed] = useState("");
  const [Description, setDescription] = useState("");
  useEffect(() => {
    if (openModal) {
      setModalVisible(true);
    }
  }, [openModal]);

  const input = (placeholder, set) => {
    return (
      <TextInput
        placeholder={placeholder}
        onChangeText={(newText) => set(newText)}
      />
    );
  };

  const updateCat = (Name, Breed, Description, id) => {
    axios
      .put(
        `https://8829-2a01-9700-1034-6000-756b-1154-b102-27d4.eu.ngrok.io/cat/updateCat/${id}`,
        {
          Name: Name,
          Breed: Breed,
          Description: Description,
        }
      )
      .then((result) => {
        refresh ? setCatrefresh(false) : setCatrefresh(true);
        setModalVisible(!modalVisible);
      })
      .catch((err) => {
        console.log(false);
        console.log(err);
      });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {input("Name", setName)}
            {input("Breed", setBreed)}
            {input("Description", setDescription)}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                updateCat(Name, Breed, Description, id);
                setModalVisible(!modalVisible);
                setOpenModal(false);
              }}
            >
              <Text style={styles.textStyle}>update</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                setOpenModal(false);
              }}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 100,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Modalp;
