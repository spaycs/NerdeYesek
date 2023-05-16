import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Minus, Plus } from '../../../res';

const Counter = ({onValueChange}) => {
    const [value, setValue] = useState(1);
    useEffect(() => {
        onValueChange(value);
    }, [onValueChange, value]);

    const onCount = type => {
        let result = value;
        if (type=== 'plus'){
            result = value + 1;
        }
        if (type=== 'minus'){
            if (value > 1) {
            result = value - 1;
        }
     }
     setValue(result);
     onValueChange(result);
 
    };
    
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <Plus/>
      </TouchableOpacity>
      <Text style={{marginHorizontal: 10}}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <Minus/>
      </TouchableOpacity>
    </View>
  )
}

export default Counter;

const styles = StyleSheet.create({})