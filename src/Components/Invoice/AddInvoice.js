import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import Bill from '../../images/Bill.png';
import TopNavbar from '../Topnavbar';
import Bottomnavbar from '../Bottomnavbar';
import { input1, container1, button1, buttonText1, back, backText } from '../../CommonCss/logincss';
import { FontAwesome5 } from '@expo/vector-icons';
import Amount from '../../images/Amount.png';
import circlecheck from '../../images/Check.png';
import Date from '../../images/Date.png';
import InvoiceDisplay from './InvoiceDisplay';
const AddInvoice = ({ addNote, navigation }) => {
  const [notes, setNotes] = useState({
    name: '',
    amount: '',
    date: '',
    status: '',
  });

  const handleChange = (name, value) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (notes.name && notes.amount && notes.date && notes.status) {
      addNote(notes);
      setNotes({
        name: '',
        amount: '',
        date: '',
        status: '',
      });
      navigation.navigate('InvoiceDisplay');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavbar />
      
        <TouchableOpacity style={back} onPress={() => navigation.navigate('InvoiceDisplay')}>
          <Text style={backText}>Back</Text>
        </TouchableOpacity>
      
      <View style={{ alignItems: 'center' }}>
        <Image source={Bill} style={styles.image} />
        <Text style={styles.text}>New Tenant Invoice</Text>
        <SafeAreaView style={container1}>
          <SafeAreaView style={input1}>
            <FontAwesome5 name="user-alt" size={24} color="black" />
            <TextInput
              placeholder="Enter Tenant"
              value={notes.name}
              onChangeText={(text) => handleChange('name', text)}
              style={{ marginLeft: 10 }}
            />
          </SafeAreaView>
          <SafeAreaView style={input1}>
            <Image source={Amount} style={styles.icon} />
            <TextInput
              placeholder="Enter Amount"
              value={notes.amount}
              onChangeText={(text) => handleChange('amount', text)}
              style={{ marginLeft: 10 }}
            />
          </SafeAreaView>
          <SafeAreaView style={input1}>
            <Image source={Date} style={styles.icon} />
            <TextInput
              placeholder="Enter Date"
              value={notes.date}
              onChangeText={(text) => handleChange('date', text)}
              style={{ marginLeft: 10 }}
            />
          </SafeAreaView>
          <SafeAreaView style={input1}>
            <Image source={circlecheck} style={styles.icon} />
            <TextInput
              placeholder="Status"
              value={notes.status}
              onChangeText={(text) => handleChange('status', text)}
              style={{ marginLeft: 10 }}
            />
            <TouchableOpacity style={styles.paid} onPress={() => handleChange('status', 'paid')}>
              <Text>paid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.due} onPress={() => handleChange('status', 'due')}>
              <Text>Due</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
        <View style={{ width: '55%' }}>
          <TouchableOpacity style={button1} onPress={handleSubmit}>
            <Text style={buttonText1}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Bottomnavbar />
    </SafeAreaView>
  );
};

export default AddInvoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
  },
  icon: {
    height: 25,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paid: {
    backgroundColor: 'green',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 2,
    borderRadius: 12,
    fontWeight: 'bold',
  },
  due: {
    backgroundColor: 'yellow',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft:2,
    marginBottom:2,
    marginTop:2,
    borderRadius: 12,
    fontWeight: 'bold',
  },
});
