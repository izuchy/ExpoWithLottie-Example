import React, {useEffect, useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import AnimatedLottieView from "lottie-react-native";

const App = () => {
  const lottieRef = useRef<AnimatedLottieView>();
  const resetAnimation = () => {
    if(lottieRef.current){
      lottieRef.current.reset();
      lottieRef.current.play();
    }
  }
  useEffect(()=>{
    if(lottieRef.current){
      lottieRef.current.play();
    }
  },[lottieRef])

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={lottieRef}
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#eee',
        }}
        source={require('./assets/lottie_sample.json')}
      />
      <View style={{
        elevation: 1,
        backgroundColor: 'rgba(255,0,0,0.5)',
        padding: 10,
        position: "absolute",
        flex: 1
      }}>
        <Text style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 40
        }}>
          Hello World!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="アニメーションを最初から再生する" onPress={resetAnimation}/>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});