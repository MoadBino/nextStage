import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import react,{useState} from "react";
import GetCat from "./comp/getCat";
import AddCat from "./comp/addCat";

export default function App() {
  const [refresh, setCatrefresh] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GetCat refresh={refresh} setCatrefresh={setCatrefresh} />
      <AddCat refresh={refresh} setCatrefresh={setCatrefresh}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
