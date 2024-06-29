import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Frame from '../../images/Frame (6).png';
import TopNavbar from '../Topnavbar';
import Bottomnavbar from '../Bottomnavbar';
import House from '../../images/House.png';
import { back, backText } from '../../CommonCss/logincss';
import MessageNotification from './MessageNotification';

const ChatPage = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length, text: inputMessage, sender: 'You' }]);
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TopNavbar />
      <TouchableOpacity style={back} onPress={() => navigation.navigate('MessageNotification')}>
        <Text style={backText}>Back</Text>
      </TouchableOpacity>
      <Image source={House} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.subtitle}>Tenant chat</Text>
        <View style={styles.messageContainer}>
           <Text style={styles.receivedMessage1}>Hi Ethan</Text>
            <Text style={styles.receivedMessage1}>How are you</Text>
         </View>
        <View style={styles.messageContainer}>
          {messages.map((item) => (
            <Text key={item.id} style={styles.receivedMessage}>{item.text}</Text>
          ))}
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBackground}>
            <TextInput
              placeholder="Type Something..."
              placeholderTextColor="black"
              style={styles.inputText}
              value={inputMessage}
              onChangeText={(text) => setInputMessage(text)}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Image source={Frame} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Bottomnavbar style={styles.bottomNavbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80,
    backgroundColor: '#f1f1f1', 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginTop: 10,
    color: 'black', 
  },
  messageContainer: {
    padding: 10,
  },
  receivedMessage: {
    backgroundColor: '#D9017A', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: 'black', 
    fontWeight: 'bold',
    textAlign:'right',
    marginLeft:80,
  },
  receivedMessage1: {
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: 'black', 
    fontWeight: 'bold',
    width:"70%"
    
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    textAlign:'right'
  },
  inputBackground: {
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  inputText: {
    flex: 1,
    height: 40,
    color: '#000',
    backgroundColor: '#f1f1f1',
    fontWeight: 'bold',
  
  },
  sendButton: {
    backgroundColor: '#D9017A',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    
  },
  sendIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bottomNavbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ChatPage;

