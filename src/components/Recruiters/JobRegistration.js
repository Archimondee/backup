import React, { Component } from 'react';
import {  View, StyleSheet, TextInput, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
  Title,
  Right,
  Left,
  Card,
  CardItem,
  Icon
} from 'native-base';
import {CheckBox} from 'react-native-elements';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Dropdown } from 'react-native-material-dropdown';

export default class JobRegistration extends Component {
    
  renderMap(){
    return(
      <Card style={{marginLeft:5, marginRight:5, marginTop:7}} >
          <CardItem CardBody style={{height:300}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          position: 'absolute',
          top:0,
          left:0,
          bottom:0,
          right:0
        }}
        region={{
          latitude: -6.3680193,
          longitude: 106.8325527,
          latitudeDelta: 0.04922,
          longitudeDelta: 0.0421
        }}
      >
      <MapView.Marker
          coordinate={{
              latitude: -6.3680193,
              longitude: 106.832557,
          }}
          title={'My marker title'}
          description={'My marker description'}
      />
      </MapView>
    </CardItem>
  </Card>
  )
  }
  render() {
      let data = [{
          value: 'Nurse'
      },{
          value: 'Doctor'
      },{
          value: 'Sales'
      },{
          value: 'Engineering'
      }]
    return (
      <Container>
        <Content>
          {this.renderMap()}
          <Form>
            <Dropdown
                label='List Job'
                data={data}
                containerStyle={{marginLeft:15, marginRight:15}}
            />
            
            <Item floatingLabel style={styles.managerForm} >
              <Label>Qty Requirement</Label>
              <Input />
            </Item>
            <Item style={{marginTop:12, marginBottom: 2, marginLeft:15}}>
                <Text style={{flexDirection:'row', color:'gray', fontSize:17}}>
                    Sex
                </Text>
                <CheckBox
                    title='Male'
                    containerStyle={{backgroundColor:'#ffff0000', borderWidth:1}}
                    
                />
                <CheckBox
                    title='Female'
                    containerStyle={{backgroundColor:'#ffff0000'}}
                    
                />
            </Item>
            <Item style={{flexDirection:'row', marginTop:12}}>
                <Text style={{color:'gray'}}>
                    Ages
                </Text>
                    <Input placeholder='From'
                        style={{width:20, marginLeft:10, marginRight:30, borderBottomWidth:0.4, borderColor:'gray', height:42}}
                    />
                    <Text style={{marginLeft:10, marginRight:35}}>
                        -
                    </Text>
                    <Input placeholder='To'
                        style={{width:20, marginRight:120, borderBottomWidth:0.4, borderColor:'gray', height:42}}
                    />
            </Item>
                
            
            <Button style={styles.buttonSubmit}>
                <Text style={styles.teks}> Submit </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  teks: {
      marginLeft:112
  },
  buttonSubmit: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 15,
      width: 330,
      backgroundColor: '#476DC5'
  },
  managerForm: {
      marginLeft: 15,
      width: 330,
      marginTop:3
  },
});