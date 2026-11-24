import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
export default function ProductItem({ name, quantity,onDelete}) {
return (
<View
style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:5}}
>
<Text style={{ fontSize: 20, fontWeight: '400' }}>{name} — {quantity} шт.</Text>
<Pressable onPress = {() => onDelete()}>
    <Text style={{fontSize: 20, paddingVertical: 8,color:'red'}}>Удалить</Text>
</Pressable>
</View>
);
}