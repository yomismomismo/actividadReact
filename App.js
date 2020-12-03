/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Input,Button, Card  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const App: () => React$Node = () => {
  return (
    <>
    
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, flexDirection: 'row'}}>

        <View style={{height: 70, backgroundColor: '#2389dd', flex:1, alignContent:"center"}}>
        <Text style={styles.title}>Excercici de Borja</Text>
        <Icon style={styles.iconHome} name="home" size={30} color="white" />
        <Image source = {{uri:'https://www.wallpaperup.com/uploads/wallpapers/2013/08/19/135949/00297a2528269ffcd01955cb6acb0a12.jpg'}}
   style = {styles.imageTop}
       />
               <Image source = {{uri:'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'}}
   style = {styles.imageMiddle}
       />
 <Input
   placeholder="Login"
   leftIcon={{ type: 'font-awesome', name: 'user' }}
  style={styles.Input}
   onChangeText={value => this.setState({ comment: value })}
  />
   <Input
   placeholder="Password"
   leftIcon={{ type: 'font-awesome', name: 'lock' }}
  style={styles.Input}
   onChangeText={value => this.setState({ comment: value })}
  />
  <Button
  icon={
    <Icon
      name="check-circle"
      size={18}
      color="blue"
    />
  }
  title=" Entrar.."
    type="outline"
/>
<Card>
  <Card.Title>2n DAM</Card.Title>
  <Card.Divider/>
  <Card.Image  source = {{uri:'https://blogs.florida.es/floridauniversitariablog/wp-content/uploads/sites/19/2018/10/FLORIDA-UNIVERSITARIA.png'}} />
  <Text style={{marginBottom: 10}}>
      Cicle Formatiu de Desenvolupament D'aplicacions Multiplataforma
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
          </View>

      </View>

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  title:{
    textAlign:"center",
    marginTop:25,
    color:"white"
  },
  imageTop:{width: "100%",
     height: 200,
    marginTop:18,
},
imageMiddle:{ height: 50,
   width:50},
  iconHome:{
    marginTop:-23,
    marginLeft:10
  },
  body: {
    backgroundColor: Colors.white,
  },
  Input:{
    marginTop:20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
