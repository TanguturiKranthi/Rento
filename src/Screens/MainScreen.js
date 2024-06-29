import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React ,{}from 'react'
import { header } from '../CommonCss/logincss'
import Bottomnavbar from '../Components/Bottomnavbar'
import TopNavbar from '../Components/Topnavbar'
import MessageNotification from '../Components/Message/MessageNotification'
const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar/>
    <TopNavbar/>
    <MessageNotification/>
    <Bottomnavbar/>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
    },
  });