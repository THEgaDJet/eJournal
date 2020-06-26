import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { HomeComponent } from './components/HomeComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles/styles';
import { LoginComponent } from './components/LoginComponent';
import { RegisterComponent } from './components/RegisterComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { OTPGetComponent } from './components/OTPGetComponent';
import { OTPVerifyComponent } from './components/OTPVerifyComponent';
import { SelectComponent } from './components/SelectComponent';
import { CalendarComponent } from './components/CalendarComponent';
import { AccountingComponent } from './components/AccountingComponent';
import { DashboardComponent } from './components/DashboardComponent';
import { ReceiptsComponent } from './components/ReceiptsComponent';
import { FilingComponent } from './components/FilingComponent';


const CalendarStack = createStackNavigator();
function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="Calendar" component={CalendarComponent} />
      <CalendarStack.Screen name="Accounting" component={AccountingComponent} />
      <CalendarStack.Screen name="Dashboard" component={DashboardComponent} />
      <CalendarStack.Screen name="Receipts" component={ReceiptsComponent} />
      <CalendarStack.Screen name="Filing" component={FilingComponent} />
    </CalendarStack.Navigator>
  );
}

const AccountingStack = createStackNavigator();
function AccountingStackScreen() {
  return (
    <AccountingStack.Navigator>
      <AccountingStack.Screen name="Accounting" component={AccountingComponent} />
      <AccountingStack.Screen name="Calendar" component={CalendarComponent} />
      <AccountingStack.Screen name="Dashboard" component={DashboardComponent} />
      <AccountingStack.Screen name="Receipts" component={ReceiptsComponent} />
      <AccountingStack.Screen name="Filing" component={FilingComponent} />
    </AccountingStack.Navigator>
  );
}

const DashboardStack = createStackNavigator();
function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={DashboardComponent} />
      <DashboardStack.Screen name="Calendar" component={CalendarComponent} />
      <DashboardStack.Screen name="Accounting" component={AccountingComponent} />
      <DashboardStack.Screen name="Receipts" component={ReceiptsComponent} />
      <DashboardStack.Screen name="Filing" component={FilingComponent} />
    </DashboardStack.Navigator>
  );
}

const ReceiptsStack = createStackNavigator();
function ReceiptsStackcreen() {
  return (
    <ReceiptsStack.Navigator>
      <ReceiptsStack.Screen name="Receipts" component={ReceiptsComponent} />
      <ReceiptsStack.Screen name="Calendar" component={CalendarComponent} />
      <ReceiptsStack.Screen name="Accounting" component={AccountingComponent} />
      <ReceiptsStack.Screen name="Dashboard" component={DashboardComponent} />
      <ReceiptsStack.Screen name="Filing" component={FilingComponent} />
    </ReceiptsStack.Navigator>
  );
}

const FilingStack = createStackNavigator();
function FilingStackScreen() {
  return (
    // <FilingStack.Navigator>
    //   <FilingStack.Screen name="Filing" component={FilingComponent} />
    //   <FilingStack.Screen name="Calendar" component={CalendarComponent} />
    //   <FilingStack.Screen name="Accounting" component={AccountingComponent} />
    //   <FilingStack.Screen name="Dashboard" component={DashboardComponent} />
    //   <FilingStack.Screen name="Receipts" component={ReceiptsComponent} />
    // </FilingStack.Navigator>
    <Stack.Navigator headerMode='screen'>
      {/* <Stack.Screen
        name="Home"
        component={HomeComponent}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterComponent} options={{ headerShown: false }} />
      <Stack.Screen name="OTP1" component={OTPGetComponent} options={{ headerShown: false }} />
      <Stack.Screen name="OTP2" component={OTPVerifyComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Select" component={SelectComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardTabs} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Filing" component={FilingComponent} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function DashboardTabs() {
  return (
    <Tab.Navigator initialRouteName='Dashboard' >
      <Tab.Screen name="Calendar" component={CalendarStackScreen} />
      <Tab.Screen name="Accounting" component={AccountingStackScreen} />
      <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
      <Tab.Screen name="Receipts" component={ReceiptsStackcreen} />
      <Tab.Screen name="Filing" component={FilingStackScreen} />
    </Tab.Navigator>
  );
}

// const FilingTab = createBottomTabNavigator();
// function FilingTabs() {
//   return (
//     <FilingTab.Navigator initialRouteName='Filing' >
//       <FilingTab.Screen name="Calendar" component={CalendarStackScreen} />
//       <FilingTab.Screen name="Accounting" component={AccountingStackScreen} />
//       <FilingTab.Screen name="Dashboard" component={DashboardStackScreen} />
//       <FilingTab.Screen name="Receipts" component={ReceiptsStackcreen} />
//       <FilingTab.Screen name="Filing" component={FilingComponent} />
//     </FilingTab.Navigator>
//   );
// }

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode='screen'>
          <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{ headerShown: false }}
            />

          <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterComponent} options={{ headerShown: false }} />
          <Stack.Screen name="OTP1" component={OTPGetComponent} options={{ headerShown: false }} />
          <Stack.Screen name="OTP2" component={OTPVerifyComponent} options={{ headerShown: false }} />
          <Stack.Screen name="Select" component={SelectComponent} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Filing" component={FilingComponent} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

{/* <SafeAreaView style={styles.container}>
        <HomeComponent />
      </SafeAreaView> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundImage: 'linear-gradient(#973FFD, #2CC2FD)',
//     //backgroundImage: 'linear-gradient(to bottom left, #973FFD, #2CC2FD)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
