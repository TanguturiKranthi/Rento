import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import TSurvey from '../../images/TSurvey.png';
import TopNavbar from '../Topnavbar';
import Bottomnavbar from '../Bottomnavbar';
import Q from '../../images/Q.png';
import ellipse from '../../images/Ellipse 9.png';

const Survey = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitSurvey = () => {
    if (!selectedOption) {
      Alert.alert('Please select an option before submitting.');
    } else {
      navigation.navigate('SurveyAnalysis', { selectedOption });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavbar />
      <View style={styles.content}>
        <Image source={TSurvey} style={styles.image} />
        <Text style={styles.title}>Tenancy Survey</Text>
        <View style={styles.questionContainer}>
          <View style={styles.questionRow}>
            <View style={styles.iconContainer}>
              <Image source={Q} style={styles.icon} />
            </View>
            <Text style={styles.questionText}>Which tenant is creating the most noise in the apartment?</Text>
          </View>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('Joe Goldberg')}>
            <View style={styles.optionContent}>
              <Image source={ellipse} style={styles.ellipseIcon} />
              <Text style={styles.optionText}>Joe Goldberg</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('Don Draper')}>
            <View style={styles.optionContent}>
              <Image source={ellipse} style={styles.ellipseIcon} />
              <Text style={styles.optionText}>Don Draper</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('Walden Schmidt')}>
            <View style={styles.optionContent}>
              <Image source={ellipse} style={styles.ellipseIcon} />
              <Text style={styles.optionText}>Walden Schmidt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('Harvey Spectra')}>
            <View style={styles.optionContent}>
              <Image source={ellipse} style={styles.ellipseIcon} />
              <Text style={styles.optionText}>Harvey Spectra</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmitSurvey}>
          <Text style={styles.buttonText}>Submit Survey</Text>
        </TouchableOpacity>
      </View>
      <Bottomnavbar />
    </SafeAreaView>
  );
};

export default Survey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    marginTop: 70,
  },
  questionContainer: {
    width: '100%',
    marginTop: 20,
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#C7C8CC', 
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#B51B75',
    padding: 8,
    borderRadius: 12,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  questionText: {
    fontSize: 16,
    marginLeft: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C7C8CC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 10,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ellipseIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#B51B75',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
