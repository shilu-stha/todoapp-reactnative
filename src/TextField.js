import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export default class TextField extends React.Component {
    
    done = () => {
        this.props.doneCallback(this.props.index)
    }

    render(){
        return(
            <View style= {[style.mainContainer, this.props.item.isDone ? {backgroundColor : 'gray'} : {backgroundColor : '#F3FCFF'}]}>
                <View style= {style.container}>
                    <Text style= {style.date}>
                        {this.props.item.date}
                    </Text>
                    <Text style={style.text}>
                        {this.props.item.note}
                    </Text>
                </View>
                {!this.props.item.isDone && <TouchableOpacity onPress={this.done}>
                    <Text style={style.done}>
                        Done
                    </Text>
                </TouchableOpacity>}
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        alignSelf: 'flex-start'
    },
    date:{
        fontSize: 12,
        color: '#333333',
        marginBottom: 5,
        alignSelf: 'flex-start'
    }
})