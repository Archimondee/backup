import React, { Component } from 'react';
import {  View, ListView, Image} from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body,
    Card,
    CardItem,
    Button,
    Icon,
    Left,
    Right
} from 'native-base';

const datas = [
    'John Doe',
    'Lorem Ipsum',
    'Dolor',
    'Sit Amet'
];

export default class JobHistory extends Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 
        });
        this.state={
            basic: true,
            listViewData: datas
        };
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
      }
      static navigationOptions = ({navigation}) => ({
        title: 'History',
        headerStyle:{backgroundColor:'#3f51b5'},
        headerTintColor: 'white',
        headerTitleStyle:{textAlign:'center', alignSelf:'center', alignItems: 'center', flex: 1},
      });
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem style={{borderBottomColor:'gray', borderBottomWidth:0.5, marginTop:5}}>
                        <Left>
                        <Thumbnail square size={100} source={{ uri: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-03-27/159746031889_77753ab40a2fa603bd53_512.png' }} />
                            <Body>
                                <Text> Sales </Text>
                                <Text note> 10 Maret 2018 </Text> 
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem body style={{marginBottom:10}}>
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem>
                    
                                <Left>
                                <Image source={{uri: 'https://vignette.wikia.nocookie.net/recipes/images/1/1c/Avatar.svg/revision/latest/scale-to-width-down/480?cb=20110302033947'}} style={{height: 35, width: 35}}/>  
                                    <Text> {data} </Text>
                                </Left>
                                <Right>
                                    <Icon name='ios-arrow-dropright'/> 
                                </Right>
                            </ListItem>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={()=>this.props.navigation.navigate('ReportScreen')}>
                                <Icon active name="ios-alert-outline" />
                            </Button>}
                        rightOpenValue={-75}
                    />
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={{borderBottomColor:'gray', borderBottomWidth:0.5, marginTop:5}}>
                        <Left>
                        <Thumbnail square size={100} source={{ uri: 'https://3.bp.blogspot.com/-5Mlc-N7xyrc/WQBmmazMWDI/AAAAAAAAAmI/W_VZhqdrlykP3EhjiAvFsKZVxqjJmBPRQCLcB/s1600/cara-menghapus-history-gojek.png' }} />
                            <Body>
                                <Text> Engineer </Text>
                                <Text note> 12 Maret 2018 </Text> 
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem body style={{marginBottom:10}}>
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem>
                    
                                <Left>
                                <Image source={{uri: 'https://vignette.wikia.nocookie.net/recipes/images/1/1c/Avatar.svg/revision/latest/scale-to-width-down/480?cb=20110302033947'}} style={{height: 35, width: 35}}/>  
                                    <Text> {data} </Text>
                                </Left>
                                <Right>
                                    <Icon name='ios-arrow-dropright'/> 
                                </Right>
                            </ListItem>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={()=>this.props.navigation.navigate('ReportScreen')}>
                                <Icon active name="ios-alert-outline" />
                            </Button>}
                        rightOpenValue={-75}
                    />
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}
