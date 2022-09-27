import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,ScrollView} from "react-native";
import react,{useState} from "react";
import GetCat from "./comp/getCat";
import AddCat from "./comp/addCat";

export default function App() {
  const [refresh, setCatrefresh] = useState(true);
  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddCat refresh={refresh} setCatrefresh={setCatrefresh}/>
      <Text style={{fontSize:30,marginBottom :1}}> your cats</Text>
      <Text style={{borderBottomWidth: StyleSheet.hairlineWidth,marginBottom :30}}></Text>
      <GetCat refresh={refresh} setCatrefresh={setCatrefresh} />
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
