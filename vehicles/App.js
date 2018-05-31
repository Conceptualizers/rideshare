import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Vehicles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicle_id: "",
      color: "",
      brand: "",
      model: "",
      type: "",
      number_of_seats: "",
      vehicles_server: []
    }
  }

  handleChangeText = (typedText) => {
    this.setState({ID: typedText});
  }

  render() {
    return (

      <ScrollView>

        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

          <View style={styles.container}>



            <Text style={styles.header}>- POST -</Text>

            <TextInput
              style = {styles.textInput}
              placeholder="Enter Vehicle ID"
              onChangeText={ (vehicle_id) => this.setState({vehicle_id}) }
            />
            <TextInput
              style = {styles.textInput}
              placeholder="Enter Vehicle Color"
              onChangeText={ (color) => this.setState({color}) }
            />
            <TextInput
              style = {styles.textInput}
              placeholder="Enter Vehicle Brand"
              onChangeText={ (brand) => this.setState({brand}) }
            />
            <TextInput
              style = {styles.textInput}
              placeholder="Enter Vehicle Model"
              onChangeText={ (model) => this.setState({model}) }
            />
            <TextInput
              style = {styles.textInput}
              placeholder="Enter Vehicle Type"
              onChangeText={ (type) => this.setState({type}) }
            />
            <TextInput
              style = {styles.textInput}
              placeholder="Enter Vehicle Seats"
              onChangeText={ (number_of_seats) => this.setState({number_of_seats}) }
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={this.enterVehicle}>
              <Text>Enter Vehicle Information</Text>
            </TouchableOpacity>



            <Text style={styles.header}>- GET -</Text>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.refreshVehicles}>
              <Text>Retrieve Vehicle Informations</Text>
            </TouchableOpacity>

            <FlatList
              ref={"FlatList"}
              data={
                this.state.vehicles_server
              }
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />


          </View>
          
        </KeyboardAvoidingView>

      </ScrollView>
    );
  }

  enterVehicle = () => {

    fetch('http://192.168.1.19:3000/vehicles/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vehicle_id: this.state.vehicle_id,
        color: this.state.color,
        brand: this.state.brand,
        model: this.state.model,
        type: this.state.type,
        number_of_seats: this.number_of_seats,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      alert('Vehicle successfully recorded.')
      return responseJson.vehicles;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getVehicle = () => {
    fetch('http://192.168.1.19:3000/vehicles/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }

  refreshVehicles = () => {
    this.getVehicle().then((vehicles) => {
      this.setState({ vehicles_server: vehicles });
    }).catch((error) => {
      this.setState({ vehicles_server: [] });
    });
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#2896d3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    marginTop: 70,
    fontSize: 24,
    marginBottom: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  }
});