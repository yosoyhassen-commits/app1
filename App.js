import { StyleSheet, View } from 'react-native';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ProductDetailsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
});