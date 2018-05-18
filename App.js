import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from "react-native";
import Todo from "./Todo";
const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodo: ""
  }
  render() {
    const { newTodo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>My To Do</Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            placeholder={"New To do"} 
            value={newTodo} 
            onChangeText={this.__controlnewTodo} 
            placeholderTextColor={"#375D7C"}
            returnKeyType={"done"}
            autoCorrect={false}
            />
          <ScrollView contentContainerStyle={styles.todos}>
            <Todo text={ "Hello, I am a To Do."}/>
          </ScrollView>  
        </View>
      </View>
    );
  }
  _controlNewTodo = text => {
    this.setState({
      newTodo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#375D7C",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "200",
    marginTop: 50,
    marginBottom: 30
  },
  input: {
    padding: 20,
    borderBottomColor: "#375D7C",
    borderBottomWidth: 1
  },
  todos: {
    alignItems: "center"
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    width: width -50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset:{
    height:-1,
    width: 0
  },
}
});
