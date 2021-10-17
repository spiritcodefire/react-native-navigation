import React  from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const LoginScreen = props => {

    const goTo = () => {
        props.navigation.push("Root", {
            params: {
                celibataire: true, 
                frameworks: [ "Next", "Express", "React-native" ]
            },
            screen: "Home"
        })
    }
    return(
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <TouchableOpacity onPress={goTo}>
                <View style={styles.button}>
                    <Text>Aller à Home</Text>
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

export default LoginScreen