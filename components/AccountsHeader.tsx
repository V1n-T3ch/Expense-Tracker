import {  StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.UserInfo}>
        <Image 
            source={{uri: 'https://i.pravatar.cc/250?u=12'}}
            style={{ height: 50, width: 50, borderRadius: 30}}
        />
        <View style={{marginLeft: 10}}>
        <Text style={{color: Colors.white, fontSize: 12}}>Hi, Eva</Text>
        <Text style={{color: Colors.white, fontSize: 16}}>Your <Text style={{fontWeight: 700}}>Accounts</Text></Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    UserInfo:{flexDirection: 'row',
        alignItems: 'center'
    },
    buttonWrapper:{
        borderColor: '#666',
        borderWidth: 1,
        padding: 8,
        borderRadius: 10
    },
    buttonText:{
        color: Colors.white,
        fontSize: 12
    }
})