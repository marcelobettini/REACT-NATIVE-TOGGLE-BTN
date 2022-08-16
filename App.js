import { StyleSheet, View } from 'react-native';
import ToggleButton from "./components/ToggleButton"


export default function App() {
  return (
    <View style={styles.container}>

<ToggleButton/>
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
