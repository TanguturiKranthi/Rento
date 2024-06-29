import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import House from '../../images/House.png';
import Bottomnavbar from '../Bottomnavbar';
import TopNavbar from '../Topnavbar';
import J from './../../images/J.png';
import D from './../../images/D .png';
import H from './../../images/H.png';
import Green from './../../images/Green.png';
import Orange from './../../images/orange.png';
import Blue from './../../images/Blue.png';
import Voilet from './../../images/Voilet.png';
import { useNavigation } from '@react-navigation/native'; 
import ChatPage from './ChatPage';

const MessageNotification = () => {
  const navigation = useNavigation(); 

  const [tenants, setTenants] = useState([
    {
      name: 'Joe Goldberg',
      chats: '1',
      logo: J,
      color: Blue,
    },
    {
      name: 'Don Draper',
      chats: '3',
      logo: D,
      color: Green,
    },
    {
      name: 'Walden Schmidt',
      chats: '1',
      logo: J,
      color: Orange,
    },
    {
      name: 'Harvey Spectra',
      chats: '0',
      logo: H,
      color: Voilet,
    },
  ]);
  const navigateToChat = () => {
    navigation.navigate('ChatPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavbar />
      <View style={styles.content}>
        <Image source={House} style={styles.image} />
        <Text style={styles.text}>Tenant chat threads</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {tenants.map((tenant, index) => (
            <TouchableOpacity key={index} style={styles.input} onPress={navigateToChat}>
              <ImageBackground source={tenant.color} style={styles.logoContainer}>
                <Image source={tenant.logo} style={styles.icon} />
              </ImageBackground>
              <View style={styles.infoContainer}>
                <Text style={styles.tenantName}>{tenant.name}</Text>
                <View style={styles.chatBadge }>
                  <Text style={styles.chatText}>{tenant.chats}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Bottomnavbar />
    </SafeAreaView>
  );
};

export default MessageNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 55,
    fontSize: 25,
    marginVertical: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#C7C8CC',
  },
  logoContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tenantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:20,
    marginRight:20
  },
  chatBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#B51B75',
    marginLeft:10
  },
  chatText: {
    color: 'black',
    fontSize: 14,
  },
});
