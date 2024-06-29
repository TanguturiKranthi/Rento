import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, SafeAreaView, Modal, View } from 'react-native';
import { header, subHeader, input, button, buttonText, container, inputContainer, icon, logo1 } from '../CommonCss/logincss';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MainScreen from './MainScreen';
import logo from '../images/logo.png';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    if (username === 'ethan.hunt' && password === 'entity!2025') {
      navigation.navigate('MainScreen');
    } else {

      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={container}>
      <Image source={logo} style={logo1} />
      <Text style={subHeader}>All-in-1 Rent App</Text>

      <SafeAreaView style={input}>
        <FontAwesome5 name="user-alt" size={24} color="black" />
        <TextInput
          placeholder="Enter username"
          onChangeText={(text) => setUsername(text)}
          style={{ marginLeft: 10 }}
        />
      </SafeAreaView>

      <SafeAreaView style={input}>
        <Fontisto name="unlocked" size={24} color="black" />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={{ marginLeft: 10 }}
        />
      </SafeAreaView>

      <TouchableOpacity style={button} onPress={handleLogin}>
        <Text style={buttonText}>Login</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Invalid User</Text>
            <Text>Please check your username and password.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#B51B75',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

