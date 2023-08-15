import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



function TextButton() {
  return <Text>Olá Mundo </Text>;
  }


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <TextButton />
      <TextButton />
      <TextButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
