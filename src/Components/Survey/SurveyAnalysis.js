import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView ,TouchableOpacity} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import TopNavbar from '../Topnavbar';
import Bottomnavbar from '../Bottomnavbar';
import Q from '../../images/Q.png';
import TSurvey from '../../images/TSurvey.png';
import ellipse from '../../images/Ellipse 9.png';
import { back,backText } from '../../CommonCss/logincss';
import Survey from './Survey';

const SurveyAnalysis = ({ route }) => {
  const { selectedOption } = route.params;
  const data = [
    { name: 'Joe Goldberg', count: 20, color: '#F44336' },
    { name: 'Don Draper', count: 15, color: '#2196F3' },
    { name: 'Walden Schmidt', count: 25, color: '#4CAF50' },
    { name: 'Harvey Spectra', count: 30, color: '#FFC107' },
  ];
  const selectedData = data.find(item => item.name === selectedOption);
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);
  const percentage = selectedData ? ((selectedData.count / totalCount) * 100).toFixed(2) : 0;

  return (
    <SafeAreaView style={styles.container}>
      <TopNavbar />
      <TouchableOpacity style={back} onPress={() => navigation.navigate('Survey')}>
          <Text style={backText}>Back</Text>
        </TouchableOpacity>
      <View style={styles.content}>
        <Image source={TSurvey} style={styles.image} />
        <Text style={styles.title}>Tenancy Survey Analysis</Text>
        <View style={styles.questionContainer}>
          <View style={styles.questionRow}>
            <View style={styles.iconContainer}>
              <Image source={Q} style={styles.icon} />
            </View>
            <Text style={styles.questionText}>Which tenant is creating the most noise in the apartment?</Text>
          </View>
        </View>
        {selectedData && (
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Survey Results</Text>
            <PieChart
              data={[
                { name: 'Joe Goldberg', population: selectedData.name === 'Joe Goldberg' ? selectedData.count : 0, color: '#F44336' },
                { name: 'Don Draper', population: selectedData.name === 'Don Draper' ? selectedData.count : 0, color: '#2196F3' },
                { name: 'Walden Schmidt', population: selectedData.name === 'Walden Schmidt' ? selectedData.count : 0, color: '#4CAF50' },
                { name: 'Harvey Spectra', population: selectedData.name === 'Harvey Spectra' ? selectedData.count : 0, color: '#FFC107' },
              ]}
              width={300}
              height={200}
              chartConfig={{
                backgroundColor: '#FFFFFF',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
            <Text style={styles.percentageText}>{`${percentage}% - ${selectedOption}`}</Text>
          </View>
        )}
      </View>
      <Bottomnavbar />
    </SafeAreaView>
  );
};

export default SurveyAnalysis;

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
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  percentageText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
