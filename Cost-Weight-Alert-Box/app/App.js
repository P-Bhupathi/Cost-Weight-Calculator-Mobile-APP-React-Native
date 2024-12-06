import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button ,Alert, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
export default function App() {
  const [cost, setNumber1] = useState(0);
  const [weight, setNumber2] = useState(0);
  const [costonekg, setNumber3] = useState(0);  
  const [calweight, setWeight] = useState(0);
  function getWeight(){
    
    const expWeight = (1000/costonekg) * cost;
    if(isNaN(expWeight)){
      Alert.alert('Error!','Enter numeric value');
    }
    else{
      setWeight(expWeight);
      if(expWeight>=1000){
        Alert.alert('Weight for ₹'+cost,parseInt(expWeight/1000)+'kg + '+parseInt(expWeight%1000)+'gram'+'\n\nTotal: '+parseInt(expWeight)+'gram');
      }
      else if(expWeight<1){
        Alert.alert('Weight for ₹'+cost,expWeight+' milli-gram');
      }
      else{
        Alert.alert('Weight for ₹'+cost,parseInt(expWeight)+' gram');
      }
    }
    //se(expWeight+'-grams');
  }
  function getCost(){
    const expCost = (costonekg/1000)*weight;
    if(isNaN(expCost)){
      Alert.alert('Error!','Enter numeric value');
    }
    else{
        setWeight(expCost);
        Alert.alert('Cost for '+weight+'-grams', '₹'+expCost);
    }
  }
  function clearAll(){
    setNumber1('');
    setNumber2('');
    setNumber3('');
  }
  function clearCost(){
    setNumber1('');
  }
  function clearWeight(){
    setNumber2('');
  }
  function clearOneKgCost(){
    setNumber3('');
  }
  return (
  <SafeAreaView>
    
      <View>
          <Text style={styles.container}> Cost-Weight Calculator ⚖</Text>
          
      </View>
      <View style={styles.inputRupee}>
        <Text style={styles.rupee}>₹</Text>
        <TextInput 
           style={styles.costofkg}
           type='number'
           keyboardType='number-pad'
           value={costonekg}
           onChangeText={u => {
            setNumber3(Number.parseFloat(u));
           }}
           placeholder=' Enter Cost of 1kg'/>
        <View style={styles.clearbutrup1}>
           <Button onPress={clearOneKgCost} title='x'  color='red'/>
        </View>
        <TouchableOpacity style={styles.clearbutrup2} onPress={clearAll}>
          <Text style={styles.resetButton}>⥁</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
          <View style={styles.radi}>
              <Text style={styles.to}>Cost ➤ Weight</Text>
              <TextInput 
                type='number'
                keyboardType='number-pad'
                value={cost}
                style={styles.toinput}
                placeholder=' Enter Cost' 
                onChangeText={v => {
                  setNumber1(Number.parseFloat(v)); 
                }}
              />
              <View  style={styles.getbutton}>
                 <TouchableOpacity style={styles.getWCbutton} onPress={getWeight} >
                    <Text style={styles.wctext}>GET WEIGHT</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.clearBut} onPress={clearCost}>
                  <Text style={styles.x}>X</Text>
                </TouchableOpacity>
              </View>
              
              
          </View>
          <View style={styles.radi}>
              <Text style={styles.to}>Weight ➤ Cost</Text>
              <TextInput 
                type='number'
                keyboardType='number-pad'
                value={weight}
                style={styles.toinput}
                placeholder=' Enter Grams' 
                onChange={e => {
                  setNumber2(Number.parseFloat(e.nativeEvent.text)); 
                }}
              />
              <View  style={styles.getbutton}>
                 <TouchableOpacity style={styles.getWCbutton} onPress={getCost} >
                    <Text style={styles.wctext}>GET COST</Text>
                 </TouchableOpacity>
                <TouchableOpacity style={styles.clearBut} onPress={clearWeight}>
                  <Text style={styles.x}>X</Text>
                </TouchableOpacity>
              </View>
              
              
          </View>
          
      </View>
     
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color:'white',
    backgroundColor: 'black', 
    justifyContent: 'space-around',
    marginTop:0,
    paddingVertical:22,
    fontSize:20,
    fontWeight:'bold',
    alignItems:'center',
    paddingTop: 50
  },
  headcol:{
    color:'red',
    
  },
  row:
  {
     flexDirection:'row',
     paddingTop:20,
     justifyContent:'space-around',

  },
  radi:{
     borderRadius: 20,
     borderColor: 'black',
     borderWidth: 3,
     width:170,
     height:200,
     color:'red',
     //flexDirection:'column',
     //justifyContent:'center'
  },
  costofkg:{
    marginLeft:6,
    borderWidth:4,
    height:60,
    width:200,
    marginTop:25,
    justifyContent:'space-around',
    borderRadius:20,
    textAlign:'center'
  },
  costweightinput:{

  },
  to:{
    fontSize:18,
    fontWeight:'bold',
    color: 'blue',
    textAlign:'center',
    paddingTop:12,
    
  },
  toinput:{
    marginTop:17,
    marginLeft:22,
    borderWidth:3,
    width:120,
    height:50,
    borderRadius:7,
    textAlign:'center',
    justifyContent:'space-around'
  },
  getbutton: {
    
    justifyContent:'space-evenly',
    marginTop:10,
    flexDirection:'row',
  
  },
  clearBut:{
    width:40,
    height:40,
    backgroundColor:'red',
    borderWidth:1,
    paddingTop:6,
    borderRadius:9,
    justifyContent:'center',
    flexDirection:'row'
  },
  inputRupee:{
    flexDirection:'row',
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center'
  },
  rupee:{
    fontWeight:'bold',
    fontSize:40,
    marginTop:29,
    color:'green'
  },
  clearButrupee:{
    marginTop:30,
    //width:58,
    height:45,
    marginLeft:5,
    flexDirection:'row'
  },
  resetButton:{
    fontSize:30,
    fontWeight:'bold',
    flexDirection:'row',
    marginTop:-8,
    color:'red'

  },
  clearbutrup1:{
    marginTop:33,
    width:35,
    height:50,
    marginLeft:10,
    marginRight:6,
    padding:1
  },
  clearbutrup2:{
    marginTop:23,
    width:40,
    height:40,
    marginLeft:7,
    marginRight:6,
    padding:5,
    borderWidth:2,
    justifyContent:'center',
    flexDirection:'row',
    borderRadius:7,
    backgroundColor:'yellow',
    padding:0,
  
  },
  getWCbutton:{
    width:110,
    height:40,
    backgroundColor:'#7ef790',
    borderWidth:1,
    paddingTop:6,
    borderRadius:9,
    justifyContent:'center',
    flexDirection:'row',
  },
  x:{
    fontSize:15,
    fontWeight:'bold',
    color:'white'
  },
  wctext:{
    marginTop:2
  }
});