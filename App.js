/**
 * Sample Todo App
 */
import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import TextField from './src/TextField'
import CustomTextInput from './src/CustomTextInput'

export default class App extends Component {

  constructor(){
    super()

    this.state = {
      noteArray: []
    }
  }

  saveNote = text => {
    if(text){
      var d = new Date()
      this.state.noteArray.push({note: text, date: d.getDate()+'/'+(d.getMonth() +1)+'/'+d.getFullYear(), isDone: false})
      this.setState({
        noteArray: this.state.noteArray
      })
    }
  }

  done = index => {
    this.state.noteArray[index].isDone = true
    this.setState({noteArray: this.state.noteArray})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerText}>Todo App</Text>
        </View>
        <ScrollView>
          {this.state.noteArray && this.state.noteArray.map((item, index) => (
              <TextField item = {item} index= {index} doneCallback= {this.done}/>
            )
          )}
        </ScrollView>
        <CustomTextInput callback= {this.saveNote}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000333',
  },
  header: {
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10
  },
  headerText: {
    color: 'black',
    fontSize: 20
  },
  inputField: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0
  }
});
