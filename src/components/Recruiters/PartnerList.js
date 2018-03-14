import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Content, 
  List, 
  ListItem, 
  Thumbnail, 
  Text, 
  Body, 
  Right, 
  Left, 
  Button, 
  Title
 } from 'native-base';
import {SearchBar} from 'react-native-elements';

export default class PartnerList extends React.Component{
  render(){
    return (
      
      <Container>
        <Text style={{
          marginTop: 10,
          marginBottom: 10,
          textAlign:'center',
          color: 'gray'
        }}> Your Partners Are Here </Text>
          <SearchBar 
                showLoading
                icon={{type:'font-awesome', name:'search'}}
                lightTheme
                platform="android"
                placeholder='Search'
                cancelButtonTitle="Cancel"
                inputStyle={{color:'black'}}
            />
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-03-27/159746031889_77753ab40a2fa603bd53_512.png' }} />
              <Body>
                <Text>Software Engineering Manager</Text>
                <Text note style={{width:160}}>InVision App - Remote</Text>
              </Body>
              <Right>
                <Button light style={{marginLeft:10, height:30, width:70, backgroundColor: '#476DC5'}} ><Text style={{color:'white'}}>View</Text></Button>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-03-27/159746031889_77753ab40a2fa603bd53_512.png' }} />
              <Body>
                <Text>Software Engineering Manager</Text>
                <Text note style={{width:160}}>InVision App - Remote</Text>
              </Body>
              <Right>
                <Button light style={{marginLeft:10, height:30, width:70, backgroundColor: '#476DC5'}} ><Text style={{color:'white'}}>View</Text></Button>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-03-27/159746031889_77753ab40a2fa603bd53_512.png' }} />
              <Body>
                <Text>Software Engineering Manager</Text>
                <Text note style={{width:160}}>InVision App - Remote</Text>
              </Body>
              <Right>
                <Button light style={{marginLeft:10, height:30, width:70, backgroundColor: '#476DC5'}} ><Text style={{color:'white'}}>View</Text></Button>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-03-27/159746031889_77753ab40a2fa603bd53_512.png' }} />
              <Body>
                <Text>Software Engineering Manager</Text>
                <Text note style={{width:160}}>InVision App - Remote</Text>
              </Body>
              <Right>
                <Button light style={{marginLeft:10, height:30, width:70, backgroundColor: '#476DC5'}} ><Text style={{color:'white'}}>View</Text></Button>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-03-27/159746031889_77753ab40a2fa603bd53_512.png' }} />
              <Body>
                <Text>Software Engineering Manager</Text>
                <Text note style={{width:160}}>InVision App - Remote</Text>
              </Body>
              <Right>
                <Button light style={{marginLeft:10, height:30, width:70, backgroundColor: '#476DC5'}} ><Text style={{color:'white'}}>View</Text></Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}