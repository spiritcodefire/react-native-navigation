import React, {useEffect} from 'react'
import { View, Text, StyleSheet} from 'react-native'

const HomeScreen = (props) => {
    // useEffect(() => {
    //     console.log(props.route.params.celibataire);
    //     console.log(props.route.params.frameworks);

    // },[]);
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text style={styles.textsecond}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey", 
        margin: "auto", 
        alignItems: "center", 
        
    }, 
    textsecond : {
        height: 100, 
        backgroundColor: "blue"
    }
})

export default HomeScreen