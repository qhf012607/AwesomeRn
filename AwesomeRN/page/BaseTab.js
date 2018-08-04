import {
    createBottomTabNavigator,
    createStackNavigator,
  } from 'react-navigation';
  import React from 'react';
import { Button, Text, View } from 'react-native';
import {CoolScreen} from './Nice'
import NiceScreen from './Nice'
import PropTypes from 'prop-types'
import MovieList from './MovieList'
  class DetailsScreen extends NiceScreen {
 // 定义属性
 static propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  ifshow:PropTypes.bool,
}
// 初始值
static defaultProps = {
  name:'xmg',
  age:2,
  ifshow:false,
}
static navigationOptions = {
  header: () => null,  //this will hide the Stack navigator's header (TabA_StackNavigator)
  tabBarVisible: false //this will hide the TabBar navigator's header (LoggedIn_TabNavigator)
}
constructor(props) {
  super(props);
//初始按钮的颜色和文字 
 var that = this
  this.state = {
      names:'进到详情页'
  };
  this.readBook = this.readBook.bind(this)
 // this.ppp.bind(this)
}
    render() {
        let text = this.props.ifshow?'show':'false';
      return (
         
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>detail {text}</Text>
          <Button
            title = "setting"
            onPress={() => this.props.navigation.navigate('nice',{title:'f',loadView:this.readBook})}
        />
         <Text> haha{this.state.names}</Text>
        </View>
      );
    }

    readBook(){
    //  this.props.name = 'b'
      this.setState({
          names:'b'
      })
    }
  }
  
  class HomeScreen extends NiceScreen {
    
    static navigationOptions = {
      header: () => null,  //this will hide the Stack navigator's header (TabA_StackNavigator)
      tabBarVisible: false //this will hide the TabBar navigator's header (LoggedIn_TabNavigator)
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* other code from before here */}
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }
  
  class SettingsScreen extends React.Component {
    static navigationOptions = {
      header: () => null,  //this will hide the Stack navigator's header (TabA_StackNavigator)
      tabBarVisible: false //this will hide the TabBar navigator's header (LoggedIn_TabNavigator)
    }
    
    render() {
      this.readBook = this.readBook.bind(this)
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* other code from before here */}
          <Button
            title = "setting"
            onPress={() => this.props.navigation.navigate('nice',{title:'f',loadView:this.readBook})}
          />
        <Text>  names  name</Text>
        </View>
      );
    }
    readBook(){
      //  this.props.name = 'b'
        this.setState({
            names:'b'
        })
      }
 }
  
const haStack = createStackNavigator(
   {
   
    Details:  {
      screen:DetailsScreen,
      navigationOptions:{
        tabBarVisible:false,
      }
    },
    nice:{
       screen:NiceScreen,
       navigationOptions:(props)=>{
         const {params} = props.navigation.state;
         return{
           title:params.title?params.title:'nice',
           tabBarVisible:false,
         }
       }
     },
     Movie: {
      screen:MovieList,
      navigationOptions:{
        tabBarVisible:false,
      }
  },
    
   }
)

haStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
  
  const SettingsStack = createStackNavigator({
    Cool: {
        screen:SettingsScreen,
    },
   Details: {
    screen:DetailsScreen,
},
  });

  
  export default createBottomTabNavigator(
    { 
      CO: haStack,
      Ha: SettingsStack,
    
    },{
        activeTintColor: '#f0edf6',
        inactiveTintColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
        swipeEnabled:true,
        tabBarVisible:false
      }
  );

  