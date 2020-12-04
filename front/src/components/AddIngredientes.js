import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";

import MaterialChip from "react-native-material-chip"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OneButton from './OneButton'

const AddIngredientes = ({textbtn, bool, handleChange, ph, handleBoolean}) => {
 
    const [quantity, setQuantity] = useState(''); 
    const [ingredient, setIngredient] = useState('');    
    const [data, setData] = useState([]);

    {if(bool){
        

        return (
            
            <View style={{marginTop: 100}}>   
            <Text style={styles.title}>Ingresa tu propia receta</Text>
          <View style={styles.container}>


          <TextInput 
            style={styles.input}
            placeholder={"Cantidad"}
            onChangeText={setQuantity}
            value={quantity}
            
          />
          <TextInput 
            style={styles.input}
            placeholder={"Ingrediente"}
            onChangeText={setIngredient}
            value={ingredient}
            
          />


            <TouchableOpacity 
                onPress={()=>{setData([...data, {quantity, ingredient}]), setQuantity(""), setIngredient("")}}
                style={styles.icon}> 
                
                <MaterialIcons name="add" size={25} />
            </TouchableOpacity>
            </View>
            <FlatList
        
        data={data}
        renderItem={({ item, index }) => (
            
          <View >  
            {/* <Text style={styles.chip}> {item.quantity} de {item.ingredient}</Text> */}
            
            <MaterialChip
             text={item.quantity + " de " + item.ingredient}
             onPress={() => console.log('press')}
             onDelete={() => console.log('delete')}
             style={{borderStartColor: "green", borderTopColor: "green", borderBottomColor: "green", borderEndColor: "green"}}
             //style={{borderColor:"green"}}
             rightIcon={
               <View
                   style={{
                       height: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                       width: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                    borderRadius: MaterialChip.CHIP_RIGHT_ICON_RADIUS,
                      //backgroundColor: 'black',
                       borderWidth: 0,
                      default: true
                 }}
                  ><MaterialCommunityIcons name="close-circle-outline" size={20} /></View>}
            /> 



          </View>
        )}
        keyExtractor={(index) => index}
        
        />

           
            <TouchableOpacity 
                onPress={()=>{handleChange(data), handleBoolean()}}
                  style={styles.boton}> 
                
                  <Text style={styles.title}>{textbtn}</Text>
            </TouchableOpacity>
    
            </View>
 
    
             );

    }else{
        return null
    }}
    
   }

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 100,
      flexDirection: "row",
      marginBottom: 20,

    },
    title:{
      fontSize:20,
      textAlign: "center",
      fontWeight: "bold"
    },
    input:{
      //backgroundColor: '#000000',
      fontSize: 20, 
      borderBottomColor: "#35b056",
      borderBottomWidth: 2,
      //marginTop: 25,
      padding: 10 ,
      marginHorizontal: 10
    },
    icon:{
      alignItems: "flex-end",
      marginTop: 25,
      paddingTop: 10
    },
    boton: {
      marginTop: 75,
      alignItems: "center",
      backgroundColor: "#35b056",
      padding: 20,
      borderRadius: 20,
      marginHorizontal: 75
    }
  }
    
    )


 export default AddIngredientes;