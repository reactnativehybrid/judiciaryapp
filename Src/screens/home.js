import { useNavigation } from '@react-navigation/core'
import React,{useState, useRef} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView,
  ScrollView,ImageBackground,Animated} from 'react-native'
import { auth } from '../../firebase';
import AppLoading from 'expo-app-loading';
import { useFonts} from 'expo-font';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';
import DynamicHeader from '../components/Header';
 
// React native component Homescreen , first that appear after login. Where all the cards are present

const HomeScreen = () => {

  const navigation = useNavigation()

  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const Legal = () => {
    navigation.navigate("Legal")
     
  };
  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../public/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('../../public/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Regular': require('../../public/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('../../public/fonts/Roboto-Italic.ttf'),
    'Roboto-Medium': require('../../public/fonts/Roboto-Medium.ttf'),
    'Roboto-Black': require('../../public/fonts/Roboto-Black.ttf'),
    'Roboto-MediumItalic': require('../../public/fonts/Roboto-MediumItalic.ttf'),
  });

if (!fontsLoaded) {
    return <AppLoading/>;
}
       
  // Cards code is written below

  return(
    <SafeAreaView style={{flex: 1, backgroundColor:'#f0f2f5'}}>  
      <DynamicHeader animHeaderValue={scrollOffsetY} />    
      <ScrollView scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}>
        <View style={{flex:1}} >
          <Card  style={{borderRadius:25}}>

            <View  style={styles.cardtitle}>
              <TouchableOpacity >
               <ImageBackground
                 source={require('../../public/images/Advocate.fw_-300x298.png')}
                 style={{width:100, height: 100}}
                 imageStyle={{borderRadius: 25}}
                />
              </TouchableOpacity>
              <Text style={{fontSize:28, color:'white',marginRight:80,fontFamily:'Roboto-Regular',}}>
                Legal Expert
              </Text>
            </View>
            <Text style={{fontSize:15, color:'black',fontFamily:'Roboto-Regular',width:"100%",marginTop:20,marginBottom:20,paddingRight:20,paddingLeft:10,textAlign:"left"}}>Conducting legal analysis and researching legal matters. Providing advice on legal matters. Drafting legal opinions, memoranda, and briefing documents. Reviewing legal material.</Text>
            <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
               onPress={Legal}  
                title="Show"
                 color="#0044CC"
              />
            </CardAction>
          </Card>
          <Card  style={{borderRadius:25}}>

            <View  style={{    flex:1,
              flexDirection: 'row',
              width:'100%',
              alignItems:'center',
              paddingRight:15,
              height:120,
              backgroundColor:'#6346bc',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,}}
            >
              <TouchableOpacity >
               <ImageBackground
                 source={require('../../public/images/Advocate.fw_-300x298.png')}
                 style={{width:100, height: 100}}
                 imageStyle={{borderRadius: 25}}
                />
              </TouchableOpacity>
              <Text style={{fontSize:28, color:'white',marginRight:80,}}>
                Educational
              </Text>
            </View>
            <Text style={{fontSize:15, color:'black',fontFamily:'Roboto-Regular',width:"100%",marginTop:20,marginBottom:20,paddingRight:20,paddingLeft:10,textAlign:"left"}}>Develops curricula, prepares relevant presentations and materials, and organizes and delivers and/or facilitates classes, workshops, seminars, and other training services.</Text>
              <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
               onPress={() => {}}    
               title="Show"
               color="#0044CC"
              />
            </CardAction>
          </Card>
          <Card  style={{borderRadius:25}}>
            <View  style={{    flex:1,
              flexDirection: 'row',
              width:'100%',
              alignItems:'center',
              paddingRight:15,
              height:120,
              backgroundColor:'#85309a',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,}}
            >
              <TouchableOpacity >
               <ImageBackground
                 source={require('../../public/images/Advocate.fw_-300x298.png')}
                 style={{width:100, height: 100}}
                 imageStyle={{borderRadius: 25}}
                />
              </TouchableOpacity>
              <Text style={{fontSize:28, color:'white',marginRight:80,}}>
                Medical
              </Text>
            </View>
            <Text style={{fontSize:15, color:'black',fontFamily:'Roboto-Regular',width:"100%",marginTop:20,marginBottom:20,paddingRight:20,paddingLeft:10,textAlign:"left"}}>Health professionals study, diagnose, treat and prevent human illness, injury and other physical and mental impairments in accordance with the needs of the populations they serve.
</Text>
              <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
               onPress={() => {}}    
               title="Show"
               color="#0044CC"
              />
            </CardAction>
          </Card>
          <Card  style={{borderRadius:25}}>

            <View  style={{    flex:1,
              flexDirection: 'row',
              width:'100%',
              alignItems:'center',
              paddingRight:15,
              height:120,
              backgroundColor:'#a81e79',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,}}
            >
              <TouchableOpacity >
               <ImageBackground
                 source={require('../../public/images/Advocate.fw_-300x298.png')}
                 style={{width:100, height: 100}}
                 imageStyle={{borderRadius: 25}}
                />
              </TouchableOpacity>
              <Text style={{fontSize:28, color:'white',marginRight:80,}}>
                Environment
              </Text>
            </View>
            <Text style={{fontSize:15, color:'black',fontFamily:'Roboto-Regular',width:"100%",marginTop:20,marginBottom:20,paddingRight:20,paddingLeft:10,textAlign:"left"}}>Environmental specialists use their knowledge of natural sciences to protect the environment and human health. They may clean up polluted areas, advise policymakers, or work with specific industries to reduce waste and pollution.</Text>
              <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
               onPress={() => {}}    
               title="Show"
               color="#0044CC"
              />
            </CardAction>
          </Card>
          <Card  style={{borderRadius:25}}>

            <View  style={{    flex:1,
              flexDirection: 'row',
              width:'100%',
              alignItems:'center',
              paddingRight:15,
              height:120,
              backgroundColor:'#d73b4d',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,}}
            >
              <TouchableOpacity >
               <ImageBackground
                 source={require('../../public/images/Advocate.fw_-300x298.png')}
                 style={{width:100, height: 100}}
                 imageStyle={{borderRadius: 25}}
                />
              </TouchableOpacity>
              <Text style={{fontSize:28, color:'white',marginRight:80,}}>
                MOU
              </Text>
            </View>
            <Text style={{fontSize:15, color:'black',fontFamily:'Roboto-Regular',width:"100%",marginTop:20,marginBottom:20,paddingRight:20,paddingLeft:10,textAlign:"left"}}>Incididunt nisi enim incididunt occaecat esse dolore fugiat et tempor.Tempor laboris cillum quis sint velit labore sit culpa aliqua incididunt sit elit.</Text>
              <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
               onPress={() => {}}    
               title="Show"
               color="#0044CC"
              />
            </CardAction>
          </Card>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  ) 
}

//Styling
const styles = StyleSheet.create({
  cardtitle:{
    flex:1,
    flexDirection: 'row',
    width:'100%',
    alignItems:'center',
    paddingRight:15,
    height:120,
    //backgroundColor:'#192f6a',
    backgroundColor:'black',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default HomeScreen

