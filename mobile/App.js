import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ConnectingScreen from './src/screens/ConnectingScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ConnectingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdfdfd' }
});
