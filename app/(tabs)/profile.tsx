import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';

const Profile = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={{ backgroundColor: Colors.white, gap: 10, padding: 20, borderColor: Colors.grey, borderRadius: 30, alignItems: 'center' }}>
          <Text style={styles.text}>Log In</Text>
          <TextInput
            style={{ height: 40, borderColor: Colors.grey, borderWidth: 1, borderRadius: 50, marginBottom: 10, paddingHorizontal: 10, color: '#000', width: 200 }}
            placeholder="Enter your text"
            placeholderTextColor="#888"
            onChangeText={newText => setText(newText)}
            value={text}
          />
          <TextInput
            style={{ height: 40, borderColor: Colors.grey, borderWidth: 1, borderRadius: 50, marginBottom: 10, paddingHorizontal: 10, color: '#000', width: 200 }}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            onChangeText={newPassword => setPassword(newPassword)}
            value={password}
          />
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => {}}>
            <Text style={{ backgroundColor: Colors.tintColor, width: 150, height: 40, borderRadius: 50, textAlign: 'center', lineHeight: 40 }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 700,
  },
});
