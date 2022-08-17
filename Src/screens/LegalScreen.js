import {useNavigation} from '@react-navigation/native';
import React, { useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView,Animated,
  ScrollView,Image, FlatList, StatusBar} from 'react-native'
import 'react-native-gesture-handler';
import DynamicHeader from '../components/Header';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29df2",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29g72",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },{
    id: "58694a0f-3da1-471f-bd96-145571e29r72",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },{
    id: "58694a0f-3da1-471f-bd96-145571e27d72",
    name: "John Doe",
    designation:"Advocate",
    image:require("../../public/images/Advocate.fw_-300x298.png"),
    location:"Rohini Sector-16",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
      source={item.image}
      style={{width:100,height:100}}
      resizeMode={"cover"}
      
    />
    <View>
      <Text style={[styles.name, textColor]}>{item.name}</Text>
      <Text style={[styles.designation, textColor]}>{item.designation}</Text>
      <Text style={[styles.location, textColor]}>{item.location}</Text>
    </View>
  </TouchableOpacity>
);

const LegalScreen= () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "black" : "white";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DynamicHeader animHeaderValue={scrollOffsetY} /> 
      <ScrollView scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 5,
    flex:1,
    width:"96%",
    flexDirection: 'row',
    alignItems:'center',
    borderRadius:10,
    
  },
  name: {
    fontSize: 22,
  },
  designation:{
    fontSize:12,
  },
  location:{
     fontSize:14,
  },
});

export default LegalScreen;