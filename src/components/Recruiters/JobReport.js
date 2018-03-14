import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Icon,
    Text,
    Body,
    Title,
    Left,
    Right,
    Card,
    CardItem,
    Thumbnail,
} from 'native-base';
import StarRating from 'react-native-star-rating';
import {CheckBox} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Image,
    StyleSheet,
    ScrollView,
    View
}from 'react-native';

export default class JobReport extends React.Component{
    renderHeader(){
        return(
                <View style={{alignItems:'center', backgroundColor:'green', width:'100%'}}>
                    <Title>Please Review Your Experience</Title>
                </View>
            
        )
    }
    constructor(props) {
        super(props);
        this.state = {
          starCount: 2.5
        };
      }
    
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
      static navigationOptions = ({navigation}) => ({
        title: 'Report',
        headerStyle:{backgroundColor:'#3f51b5'},
        headerTintColor: 'white',
        headerTitleStyle:{textAlign:'center', alignSelf:'center', alignItems: 'center'},
      });
    render(){

        return(
            
        <Container>
            {this.renderHeader()}
        <Content>
        
        <Card>
            <CardItem cardBody>
                <Thumbnail circle size={100} resizeMode={'contain'} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/John_F._Kennedy%2C_White_House_photo_portrait%2C_looking_up.jpg' }} style={{height: 150, width: 150, flex: 1, marginTop:15}} />
            </CardItem>
            <Text style={{textAlign:'center', marginTop:5}}>
                John Doe
            </Text>
           
            <StarRating
                containerStyle={{
                    alignSelf: 'center',
                    alignItems: 'center',   
                }}
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                starSize={30}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={'red'}
            />
            <Text style={{textAlign:'center', marginTop:5, opacity:0.5}}>
                Give 1 star for bad service, 5 for good
            </Text>
            <Form>
                <Item floatingLabel style={{marginRight:15}}>
                    <Icon name='ios-document-outline'/> 
                    <Label> Please Give a review </Label>
                    <Input />
                </Item>
                <Text style={{textAlign:'left',marginLeft:15 ,marginTop: 15, fontSize:13,marginBottom:5, opacity:0.5}}>
               Please give us more information
                </Text>
                <CheckBox
                        title='Partner ini melakukan kecurangan'
                        containerStyle={{backgroundColor:'#ffff0000', borderWidth:1}}
                        textStyle={{color:'gray'}}
                />
                <CheckBox
                        title='Partner ini tidak datang pada saat jam kerja'
                        containerStyle={{backgroundColor:'#ffff0000', borderWidth:1}}
                        textStyle={{color:'gray'}}
                    />
                <CheckBox
                        title='Partner ini tidak memberikan pelayanan yang baik'
                        containerStyle={{backgroundColor:'#ffff0000', borderWidth:1}}
                        textStyle={{color:'gray'}}
                    />
                <Button full style={styles.buttonSubmit}>
                    <Text style={styles.teks}> Submit </Text>
                </Button>
            </Form>

            
        </Card>
        </Content>
        </Container>
        );
    }
}
var styles = StyleSheet.create({
    teks: {
        
    },
    buttonSubmit: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: '2%',
        width: '96%',
        backgroundColor: 'green'
    }
  });