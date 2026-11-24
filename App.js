import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,TextInput, FlatList, } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import ProductItem from './components/ProductItem';

export default function App() {
    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState('')
    const [shoplist, setShoplist] = useState([
        {id: 1, name: 'Молоко',quantity:2},
        {id: 2, name: 'Хлеб',quantity:1},
        {id: 3, name: 'Яблоки',quantity:6},


    ])
    console.log(name);
    console.log(quantity);
    
    const addItem = () => {
      console.log(name,quantity)
      
        if (name.trim() === '' || quantity === '') return;
        setShoplist([...shoplist, {id: Date.now().toString(), name: name.trim(),quantity:quantity}])
        setName('')
        setQuantity('')
      
    }
    const deleteProduct = (id) =>{
      setShoplist(shoplist.filter((s) => s.id !== id))
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{padding: 20,flex:1}}>
                <StatusBar style='dark'/>
                 <Text style={{ fontSize: 36, fontWeight: 'bold',paddingBottom:20 }}>Список покупок</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Что купить?"
                style={{ height: 50,
                borderWidth: 1,        
                borderColor: '#ccc',    
                fontSize: 18 ,      
                paddingHorizontal: 12,  
                backgroundColor: '#fff' }}
            /> 
            <TextInput
                value={quantity}
                onChangeText={setQuantity}
                placeholder="Сколько штук?"
                keyboardType='numeric'
                style={{ height: 50,
                borderWidth: 1,         
                borderColor: '#ccc',   
                fontSize: 18 ,      
                paddingHorizontal: 12,  
                backgroundColor: '#fff',
                marginTop:10,
             }}
            /> 
            <Pressable onPress={addItem}
                style={{ height: 50,
                borderWidth: 1,  
                  borderColor: '#ccc',
                      
                paddingHorizontal: 12, 
                backgroundColor: '#3bca29',
                marginTop:10,
                marginBottom:15,
                 justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Добавить в список</Text>
            </Pressable>
            <FlatList

                data={shoplist}
                ListEmptyComponent={<Text>Список пуст</Text>}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ProductItem key={item.id} name={item.name} quantity={item.quantity} onDelete={() => deleteProduct(item.id)}/>
                )}
            />
            <Text style={{ fontSize: 18 ,marginTop:16}}>{"Всего товаров: "}{shoplist.length}</Text>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive:{color:'black'},
  buttonPressed: {textDecorationLine:'line-through',color:'gray'},
});
