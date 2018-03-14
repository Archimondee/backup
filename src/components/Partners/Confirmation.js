import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { 
    Container,
    Header,
    Content,
    View,
    InputGroup,
    Input,
    Icon,
    Card,
    CardItem,
    Thumbnail,
    Button,
    Form,
    Left, Right
 } from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class Confirmation extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Partners Confirmation',
        headerStyle:{backgroundColor:'#3f51b5'},
        headerTintColor: 'white',
        headerTitleStyle:{textAlign:'center', alignSelf:'center', alignItems: 'center', flex: 1},
      });
  render() {
    return (
        <Container>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{
                        ...StyleSheet.absoluteFillObject
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
            </View>
            <Card style={styles.searchBox}>
				<Text style={styles.label}>You got a job</Text>
				<CardItem style={{borderBottomWidth:0.5}}>
                    <Thumbnail square size={80} source={{ uri: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-03-27/159746031889_77753ab40a2fa603bd53_512.png' }} />
                    <View style={{flex:1, flexDirection: 'column',}}>
                        <Text style={{marginLeft:'5%'}}> PT Senja Sentosa Sejahtera </Text>
                        <Text style={{marginLeft:'5%'}}> Sales </Text>
                    </View>
                </CardItem>
                <CardItem>
                    <View style={{flex:1, flexDirection: 'column',}}>
                        <Text> Time : 20:00 </Text>
                        <Text> Alamat : Jl Pamungkas blok b1 no 2 </Text>
                    </View>
                </CardItem>
                <CardItem>
                    <Left>
                <Button success style={{paddingRight:15}}>
                        <Icon name='md-checkmark' />
                        <Text>Accept</Text>
                    </Button>
                    </Left>
                    <Right>
                    <Button danger style={{paddingRight:15}}>
                        <Icon name='md-close' />
                        <Text>Reject</Text>
                    </Button>
                    </Right>
                </CardItem> 
            </Card>
        </Container>
    );
  }
}

const styles={
    searchBox:{
        bottom: 0,
        position: 'absolute',
        width:'96%',
        marginRight:'2%',
        marginLeft:'2%'
    },
    label:{
        fontSize:18,
        textAlign:'center',
        marginTop:10
    }   
}



















