import NiceScreen from "../../page/Nice";
import React from 'react';
import { Button,Image, View, Text ,StyleSheet,FlatList} from 'react-native';
import { yellow } from "../../node_modules/kleur";

export default  class newsScreen extends NiceScreen{
    constructor(props){
        super(props);
        this.state = {
            news:[{name:'wo'},{name:'ni'}],
            loaded:false,
        }
    }
    render(){
        if(this.state.loaded){
            return this.renderLoadingView();
        }
        return <FlatList  style={{backgroundColor:'red'}} data={this.state.news} renderItem={this.tableitem}/>

    //     if (this.state.loaded) {
    //         return <View>
    //                  <FlatList style={{flex: 1,backgroundColor:'red'}}  data={this.state.news} renderItem={this.tableitem}/>
    //               </View>
    //     }
    //     return<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>nice</Text>
    //     <Button
    //       title="Go to Details"
    //       onPress={() => this.pushtoNave('NewDetail')}
    //     />
    //   </View>
    }

    tableitem({item}){
        // return <View style={{backgroundColor:'yellow'}}>
        //         <Image source={require("../../Img/fg.png")} />
        //         <Text style={{left:10,bottom:0,height:20,position:'absolute'}}> {item.name} </Text>
        //     </View>
    }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    rightContainer: {
      flex: 1
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: "center"
    },
    year: {
      textAlign: "center"
    },
    thumbnail: {
      width: 53,
      height: 81
    },
    list: {
      paddingTop: 20,
      backgroundColor: "#F5FCFF",
      height:100,
    },
  });