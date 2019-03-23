import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'

export default class CustomTextInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            text : null
        }
    }

    onSave = () => {
        this.props.callback(this.state.text)
        this.setState({text: null})
    }

    render(){
        return(
            <View style={style.container}>
                <TextInput 
                    multiline={true}
                    value={this.state.text}
                    onChangeText = {text => this.setState({text})}
                    placeholder={"Start taking notes"}
                />
                <TouchableOpacity style={style.button} onPress = {this.onSave}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#f2f2ff',
    },
    input: {
        borderColor: 'gray', 
        borderWidth: 1
    },
    button:{
        color: '#333333',
        margin: 5,
    }
})