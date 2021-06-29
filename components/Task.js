import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

const Task = (props) => {

    return (
        <React.Fragment>
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>            
                <Text style={styles.itemText}>{props.text}</Text>                
            </View>
            <View style={styles.circular}>

            </View>            
        </View>
        {/*<LottieView
            style={styles.heartLottie}
            source={require('../blueHeart.json')}
            autoPlay
            autoSize
            loop={false}                  
        ></LottieView>*/}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    heartLottie: {
        width: 200,
        height: 200,
        paddingLeft: 100,
        paddingTop: 1,
    },

});

export default Task;