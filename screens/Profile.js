import React, { Component } from "react";
import { StyleSheet, Text, View , Switch ,SafeAreaView,Platform,StatusBar,Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import firebase from  'firebase';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled:false,
      light_theme:true,
      profile_image:"",
      name:""
    };
  }

componentDidMount(){
  this.fetchUser();
}

  async fetchUser(){
    let theme,name,image
    await firebase.database()
    .ref("/users/" + firebase.auth().currentUser.uid)
    .on("value", function(snapshot){
      theme=snapshot.val().current_theme
      name=`${snapshot.val().first_name} ${snapshot.val().last_name}`
      image=snapshot.val().profile_picture
    })
    this.setState({
      light_theme:theme==="light"?true:false,
      isEnabled:theme==="light"?false:true,
      name:name,
      profile_image:image
    })
  }

 

  render() {
            return ( 
            <View style={styles.container}> 
            <SafeAreaView style={styles.droidSafeArea} />
             <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                   <Image source={require("../assets/logo.png")} style={styles.iconImage} ></Image>
                    </View> 
                    <View style={styles.appTitleTextContainer}>
                       <Text style={styles.appTitleText}>Groudler</Text> 
                       </View> 
                       </View> 
                       <View style={styles.screenContainer}> 
                       <View style={styles.profileImageContainer}> 
                       <Image source={{ uri: this.state.profile_image }} style={styles.profileImage} ></Image> 
                       <Text style={styles.nameText}>{this.state.name}</Text> 
                       </View>
                        <View style={{ flex: 0.3 }} /> 
                        </View>
                         <View style={{ flex: 0.08 }} /> 
                         </View> 
                         );
                          } 
                        }

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:""
  },
  droidSafeArea: {
     marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
    },
   appTitle: {
      flex: 0.07, flexDirection: "row" 
    }, 
    appIcon: { 
      flex: 0.3, justifyContent: "center", alignItems: "center" 
    }, 
    iconImage: { 
      width: "100%", height: "100%", resizeMode: "contain" 
    }, 
    appTitleTextContainer: {
       flex: 0.7, justifyContent: "center" 
      },
      appTitleText: {
           color: "#4C5D70", fontSize: RFValue(28), fontFamily: "Bubblegum-Sans" 
       }, 
      screenContainer: {
             flex: 0.85 
      },
      profileImageContainer: {
         flex: 0.5, justifyContent: "center", alignItems: "center" 
        },
         profileImage: {
            width: RFValue(140), height: RFValue(140), borderRadius: RFValue(70) 
          },
           nameText: {
              color: "#4C5D70", fontSize: RFValue(40), fontFamily: "Bubblegum-Sans", marginTop: RFValue(10) 
            },
           
});
