import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
    ballX: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.stagger(200, [
      Animated.timing(this.state.ballY, {
        toValue: 400,
        duration: 500
      }),

      Animated.timing(this.state.ballX, {
        toValue: 150,
        duration: 500
      })
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            { top: this.state.ballY, left: this.state.ballX }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F00"
  }
});
