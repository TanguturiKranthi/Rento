import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InvoiceDisplay from './InvoiceDisplay'; 
import AddInvoice from './AddInvoice';


const Stack = createStackNavigator();

const Invoice = () => {
  const [noteList, setNoteList] = useState([]);

  const addNote = (note) => {
    setNoteList(prevNoteList => [...prevNoteList, note]);
  };

  return (
   
      <Stack.Navigator initialRouteName="InvoiceDisplay" screenOptions={{headerShown:false,animation:'slide_from_right'}}>
        <Stack.Screen name="InvoiceDisplay">
          {(props) => <InvoiceDisplay {...props} noteList={noteList} />}
        </Stack.Screen>
        <Stack.Screen name="AddInvoice">
          {(props) => <AddInvoice {...props} addNote={addNote} />}
        </Stack.Screen>
      </Stack.Navigator>
   
  );
};

export default Invoice;
