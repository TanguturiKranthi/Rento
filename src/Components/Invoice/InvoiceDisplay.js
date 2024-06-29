import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Bill from '../../images/Bill.png';
import TopNavbar from '../Topnavbar';
import Bottomnavbar from '../Bottomnavbar';
import { container1, button1, buttonText1 } from '../../CommonCss/logincss';
import { FontAwesome5 } from '@expo/vector-icons';
import Amount from '../../images/Amount.png';
import circlecheck from '../../images/Check.png';
import Date from '../../images/Date.png';
import AddInvoice from './AddInvoice';
import { back,backText } from '../../CommonCss/logincss';
import MessageNotification from '../Message/MessageNotification';

const InvoiceDisplay = ({ noteList, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavbar />
      <TouchableOpacity style={back} onPress={() => navigation.navigate('MessageNotification')}>
          <Text style={backText}>Back</Text>
        </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={Bill} style={styles.image} />
          <Text style={styles.text}>Tenant rent invoices</Text>

          {noteList.map((note, index) => (
            <View key={index} style={container1}>
              <Text style={styles.text1}>Invoice ID #{index + 1}</Text>
              <View style={styles.input2}>
                <FontAwesome5 name="user-alt" size={25} style={styles.icon} color="black" />
                <Text style={styles.text2}>{note.name}</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.input2}>
                <Image source={Amount} style={styles.icon} />
                <Text style={styles.text2}>$ {note.amount}</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.input2}>
                <Image source={Date} style={styles.icon} />
                <Text style={styles.text2}>{note.date}</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.input2}>
                <Image source={circlecheck} style={styles.icon} />
                <TouchableOpacity style={note.status === 'paid' ? styles.paid : styles.due}>
                  <Text>{note.status}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate('AddInvoice')}
          >
            <Text style={styles.buttonText1}>Add Invoice</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Bottomnavbar />
    </SafeAreaView>
  );
}

export default InvoiceDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 100,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
  },
  icon: {
    height: 25,
    resizeMode: 'contain',
    marginLeft: 40,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 25,
    fontSize: 25,
    marginVertical: 20,
  },
  text1: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
    fontSize: 25,
    paddingBottom: 5,
    paddingRight: 10,
  },
  text2: {
    marginLeft: 60,
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 45,
  },
  paid: {
    backgroundColor: 'green',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 5,
    paddingRight: 30,
    marginLeft: 60,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  due: {
    backgroundColor: 'yellow',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 60,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  input2: {
    width: '100%',
    padding: 12,
    borderWidth: 0,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginLeft: 60,
    marginRight: 60,
  },
  button1: {
    width: '80%',
    backgroundColor: '#B51B75',
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
