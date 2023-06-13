import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CustomTextInput = (props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >
                {props.text}
            </Text>
            <TextInput
                placeholder={props.placeholder}
                style={styles.textInput}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                value={props.value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    textInput: {
        width: '85%',
        padding: 5,
        margin: 8,
        borderColor: '#ff8000',
        borderBottomWidth: 1,
        alignSelf: 'center',
        color: '#ff8000'
    },
    text: {
        color: 'white',
        paddingLeft: 25,
    }

});

export default CustomTextInput;