import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import products from 'products';
import ProductScreen from './src/data/screens/ProductScreen';

const App = () => {
return (
<View>
<ProductScreen />
</View>
);
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer:{
    
    width:"50%",
    padding:1,
    
  },
});
