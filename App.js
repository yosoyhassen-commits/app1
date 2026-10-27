import { StyleSheet, View } from 'react-native';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';

const App = () => {
  return (
    <View style={styles.container}>
      <ShoppingCart/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
});