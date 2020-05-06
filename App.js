/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const colors = ['white', 'red', 'green', 'blue'];

var arrayUndo = [0];

var arrayRedo = [];

const App = () => {
  const [colorProp, setcolorProp] = useState('white');

  const onUndo = () => {
    if (arrayUndo.length > 1) {
      arrayRedo.push(arrayUndo.pop());
      setcolorProp(colors[arrayUndo[arrayUndo.length - 1]]);
      console.log(`Undo: ${arrayUndo}`);
      console.log(`Redo: ${arrayRedo}`);
    }
  };

  const onRedo = () => {
    if (arrayRedo.length > 0) {
      setcolorProp(colors[arrayRedo.pop()]);
    }
    console.log(`Redo: ${arrayRedo}`);
  };

  const onChangeColor = (positionColor) => {
    if (arrayUndo[arrayUndo.length - 1] !== positionColor) {
      setcolorProp(colors[positionColor]);
      arrayUndo.push(positionColor);
      console.log(`Undo: ${arrayUndo}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors[1]}]}
          onPress={() => {
            onChangeColor(1);
          }}
        />
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors[2]}]}
          onPress={() => {
            onChangeColor(2);
          }}
        />
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors[3]}]}
          onPress={() => {
            onChangeColor(3);
          }}
        />

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            onUndo();
          }}>
          <Text style={styles.text}>Undo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            onRedo();
          }}>
          <Text style={styles.text}>Redo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <View style={[styles.boxResult, {backgroundColor: colorProp}]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container2: {
    flexDirection: 'row',
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    marginRight: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    borderWidth: 2,
    marginRight: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  text: {
    fontSize: 10,
  },
  boxResult: {
    height: 120,
    width: 120,
    borderWidth: 2,
  },
});

export default App;
