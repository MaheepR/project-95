import React, { Component } from 'react';
 import { Text, View, StyleSheet, Image } from 'react-native'; 

 let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};
 export default class WeatherScreen extends Component {
    constructor() {
       super();
        this.state = {
           weather: '', 
               }; 
           }
        
   getWeather = async () => { 
    //change latitude and longitude 
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=23&lon=76';
   return fetch(url)
    .then(response => response.json()) 
    .then(responseJson => {
       this.setState({
          weather: responseJson,
     }); 
  })
   .catch(error => {
      console.error(error);
    });
    };                        

  componentDidMount = () => {
   this.getWeather(); 
   }; 
   
   render() {
      if (this.state.weather === ''){
        return ( <View style={styles.container}>
         <Text>Loading...</Text> 
         </View> 
         );
         } else {
            return (
        <View style={styles.container}> 
      <View style={styles.subContainer}> 
        <Text style={styles.title}>
       Groudler
       </Text>
       <Image style={styles.logo}
        source={require('../assets/logo.png')}
       ></Image> 
       <Image 
       style={styles.cloudImage}
       source={require('../assets/clouds.png')} /> 
       <View style={styles.textContainer}> 
       <Text style={{ fontSize: 18, fontFamily:"Bubblegum-Sans"}}> 
       {this.state.weather.main.temp}°C 
       </Text> 
       <Text style={{ fontSize: 20, margin:10,fontFamily:"Bubblegum-Sans"}}>
        humidity : {this.state.weather.main.humidity} 
        </Text>
         <Text style={{fontSize: 20,fontFamily:"Bubblegum-Sans"}}> 
         {this.state.weather.weather[0].description} 
         </Text>
          </View> 
          </View> 
        </View> 
      ); 
    } 
  } 
} 
          
 const styles = StyleSheet.create({
  container: {
    flex:1 
    },
  subContainer : {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center' 
    }, 
  title:{
    marginTop:25, 
    fontSize: 28,
    fontWeight:'10',
    fontFamily:"Bubblegum-Sans",
    },
  cloudImage:{
    width: 200,
    height: 200,
    marginTop: 30 
    },
  textContainer : {
    flex: 1, 
    alignItems: 'center',
    flexDirection:'row',
    marginTop:-150 
    },
  logo:{
    marginRight:210,
    marginTop:-50
  }
   });


