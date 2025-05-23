import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>React Native + TypeScript!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFFFE5',
  },
  text: {
    fontSize: 24,
    color: '#222',
    fontWeight:'700',
  },
});

export default App;
