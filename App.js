import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppRouter from './src/AppRouter';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AppRouter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  statusBar: {
    backgroundColor: 'rgb(255, 255, 255)',
    // barStyle='dark-content'
  }
});
