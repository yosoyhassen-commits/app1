import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import products from './src/data/products';

export default function ProductScreen() {
  return (
    
      <FlatList 
        data={products}
        renderItem={({item})=>(
          <View style={styles.itemContainer}> 
            <Image
              source={{ uri: item.image }} // Utilisation de l'URI de l'image
              style={styles.image}
            />
          </View>
        )}
        numColumns={2}
        key={2}
        keyExtractor={(item)=>item.id}
      />
    
  );
}