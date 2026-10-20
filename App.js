import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import products from './src/data/products';
import ProductScreen from './src/screens/ProductScreen';


const App = () => {
  return (
    <View style={styles.container}>
      <ProductScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});