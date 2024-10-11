import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import AccountsHeader from '@/components/AccountsHeader'
import Colors from '@/constants/Colors'
import Cards from '@/components/Cards'
import cardList from '@/data/cards.json'

const Accounts = () => {
  return (
    <>
      <Stack.Screen options={{
        header: () => <AccountsHeader />
      }} />
      <View style={{backgroundColor: Colors.black, flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 70, paddingHorizontal: 20}}>
        <ScrollView>
          <Cards  cardList={cardList}/>
        </ScrollView>
      </View>
    </>
  )
}

export default Accounts

const styles = StyleSheet.create({})