import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BookWheel from './components/BookWheel';
import { BOOKS } from './constants';
import Root from './components/Root';

export default function App() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <GestureHandlerRootView>
        <StatusBar style="auto" />
        <Root />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12
  },
});
