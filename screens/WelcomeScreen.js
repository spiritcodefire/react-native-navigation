import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const WelcomeScreen = (props) => {

    const goTo = ()=> {
        // console.log('props', props);
       // props.navigation.push('Login') // est identique à navigate
        props.navigation.navigate('Login', {
            nom: 'elie', 
            age : '31'
        })
    }
    return(
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
            <TouchableOpacity onPress={goTo}>
                <View style={styles.button}>
                    <Text>Aller à Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "lightgrey"
    }, 
    button: {
        backgroundColor: "lightblue", 
        borderColor: "darkblue", 
        borderWidth: 2, 
        justifyContent: "center",
        alignItems: "center", 
        width: 100, 
        height: 40
    }
})

export default WelcomeScreen