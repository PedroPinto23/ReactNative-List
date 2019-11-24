import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList
} from "react-native";
export default class App extends React.Component {
  state = {
    texto: "",
    lista: []
  };

  handleChange = e => {
    this.setState({ texto: e });
  };
  handleSubmit = () => {
    this.state.texto === ""
      ? alert("Por favor insira um item")
      : this.setState({
          texto: "",
          lista: this.state.lista.concat(this.state.texto)
        });
    handleDelete = () => {};
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Lista Teste</Text>
        <TextInput
          placeholder="Type here"
          defaultValue={this.state.texto}
          onChangeText={this.handleChange}
        />
        <Button title="Enviar" onPress={this.handleSubmit} />
        <FlatList
          data={this.state.lista.map((input, key) => {
            return <Text key={key + 1}>{input}</Text>;
          })}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item} 
            </Text>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

/*state = {
    username: "",
    password: ""
  };
  buttonPressed = () => {
    this.setState({ username: this._username._lastNativeText });
    this.setState({ password: this._password._lastNativeText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Username</Text>
        <TextInput
          style={{ color: "white" }}
          placeholder="Digite aqui"
          ref={input => (this._username = input)}
          defaultValue={this.state.username}
        />
        <Text style={{ color: "white" }}>Password</Text>
        <TextInput
          style={{ color: "white" }}
          placeholder="Digite aqui"
          ref={input => (this._password = input)}
          defaultValue={this.state.password}
        />
        <Button title="enviar" onPress={this.buttonPressed}></Button>
        <Text style={{ color: "white" }}>Username: {this.state.username}</Text>
        <Text style={{ color: "white" }}>Password: {this.state.password}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 20,
    color: "white"
  }
});
*/
