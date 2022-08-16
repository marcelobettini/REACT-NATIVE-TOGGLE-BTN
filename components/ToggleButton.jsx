import React, {useState} from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
const icon = require("../assets/like_small.png");


const ToggleButton = () => {
  
  const [liked, setLiked] = useState(false);
  const onPressBtn = () =>{    
    setLiked(prevLiked => !prevLiked)    
  };
  const likedStyles = liked ? styles.liked : null
  

  return (
    <>
      <TouchableOpacity
        style={styles.btn}
        underlayColor="#fefefe"
        onPress={onPressBtn}
      >
        <Image  source={icon} style={[styles.icon, likedStyles]} />
      </TouchableOpacity>
      <Text style={styles.text}>Do you like this app? </Text>
    </>

  )

}
const styles = StyleSheet.create({  

  btn: {
  borderRadius: 5,
  padding: 10,
  },
  icon: {
  width: 180,
  height: 180,
  tintColor: '#4e4e4e73',
  },
  liked: {
  tintColor: '#5159ea',
  },
  text: {
  marginTop: 20,
  },
  });


export default ToggleButton


