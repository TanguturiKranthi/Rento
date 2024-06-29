import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Message from '../images/Message.png';
import Invoice from '../images/Invoice.png';
import survey from '../images/Survey.png';

const Bottomnavbar = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(null);

  const handlePress = (screen, label) => {
    setActive(label); 
    setTimeout(() => navigation.navigate(screen), 0); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handlePress('MessageNotification', 'Message')}>
          <Image
            source={Message}
            style={[
              styles.logo1,
              { tintColor: active === 'Message' ? '#B51B75' : 'black' },
            ]}
          />
          <Text style={[styles.text, active === 'Message' && styles.activeText]}>
            Message
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handlePress('Invoice', 'Invoice')}>
          <Image
            source={Invoice}
            style={[
              styles.logo1,
              { tintColor: active === 'Invoice' ? '#B51B75' : 'black' },
            ]}
          />
          <Text style={[styles.text, active === 'Invoice' && styles.activeText]}>
            Invoice
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handlePress('Survey', 'Survey')}>
          <Image
            source={survey}
            style={[
              styles.logo1,
              { tintColor: active === 'Survey' ? '#B51B75' : 'black' },
            ]}
          />
          <Text style={[styles.text, active === 'Survey' && styles.activeText]}>
            Survey
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottomnavbar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: "#C7C8CC",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    zIndex: 100,
  },
  iconContainer: {
    alignItems: 'center',
    padding: 5,
  },
  logo1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
  activeText: {
    color: '#B51B75',
  },
});
