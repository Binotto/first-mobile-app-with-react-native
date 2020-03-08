/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      altura: 0, 
      massa:0 ,
      resultado:  ""
    }
    this.calcular = this.calcular.bind(this)

  }
  calcular(){
    let imc = this.state.massa / (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc
    

    if(s.resultado < 16){
      s.resultadoText = "Magreza grave"
    }else if(s.resultado < 17){
      s.resultadoText = "Magreza moderada"
    }else if(s.resultado < 18.5){
      s.resultadoText = "Magreza leve"
    }else if(s.resultado < 25){
      s.resultadoText = "Saudavel"
    }else if(s.resultado < 30){
      s.resultadoText = "Sobrepeso"
    }else if(s.resultado < 35){
      s.resultadoText = "Obesidade grau 1"
    }else if(s.resultado < 40){
      s.resultadoText = "Obesidade grau 2"
    }else{
      s.resultadoText = "Obesidade grau 3"
    }


    this.setState(s)

  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.entradas}>
            <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => {this.setState({altura})}}/>
            <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa) => {this.setState({massa})}}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
          <Text style={styles.resultado, {fontSize: 33}}>{this.state.resultadoText}</Text>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  entradas: {
    flexDirection: 'row',
  },  
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "#6dc4a4",

  },  
  button:{
    backgroundColor: '#89ffa5',
  },
  buttonText: {
    alignSelf: 'center',
    padding:  33,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: 'bold',
  },
  resultad: {
    alignSelf: "center",
    color: 'lightgrey',
    fontSize: 65,
    padding: 15,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
