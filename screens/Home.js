import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TextInput} from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

let customFonts = {
  "Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")
}

const logo = require('../assets/logo.png')

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      fontsLoaded:false,
      playerId:"",
      timeId:"",
      playerName:"",
      timeName:""
    }
  }

async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
}

componentDidMount(){
  this._loadFontsAsync();
}

render(){
  const{playerId,timeId} = this.state
  if(!this.state.fontsLoaded){
    return <AppLoading/>
  }else{
    return(
      <View style = {styles.upperContainer}>
        <Image source={logo} style= {styles.logo}></Image>
        <Text style={styles.title}>Groudler</Text>
        <Text style={styles.subtitle}>A Scheduler Place</Text>
        <View style={styles.lowerContainer}>
          <TextInput
              style ={styles.textinput}
              placeholder={"Player Id"}
              placeholderTextColor={"#FFFFFF"}
              value={playerId}
            />
          
          <TextInput
              style ={styles.textinput}
              placeholder={"Time Id"}
              placeholderTextColor={"#FFFFFF"}
              value={timeId}
            />
          </View> 
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 80,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Bubblegum-Sans',
    paddingTop: 20,
    color: '#4C5D70',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Bubblegum-Sans',
    color: '#4C5D70',
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#4C5D70",
    borderColor: "#4C5D70"
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#4C5D70",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor:"#C04000",
    fontFamily: "BubbleGum-Sams",
    color: "#FFFFFF",
    width : "82%"
  },
});


