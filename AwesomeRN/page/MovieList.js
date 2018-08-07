import NiceScreen from './Nice';
import { Image, FlatList, StyleSheet, Text, View,RefreshControl } from "react-native";
import React, { Component } from "react";
import { red, yellow } from '../node_modules/ansi-colors';
var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
    export default class MovieList extends NiceScreen {
   constructor(props){
       super(props);
       this.state = {
           movies:[],
           name:'wo',
           loaded:false,
           text:'hahaha',
           backg:false
       }
       this.fetchData = this.fetchData.bind(this);
     //  this.renderListItem = this.renderListItem.bind(this);
   }
   componentDidMount(){
      this.fetchData();
   }
   render(){
   // return this.renderLoadingView();
       if(!this.state.loaded){
           return this.renderLoadingView();
       }
       return this.movieList()
   }
   movieList(){
       return <FlatList style={styles.list} refreshControl={this.refresh()} data={this.state.movies} renderItem={this.renderListItem.bind(this)}/>
   }

   refresh(){
       return <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)}  />
   }
   onRefresh(){
        this.setState({
          loaded:false
        });
      //  this.fetchData = this.fetchData.bind(this);
        this.fetchData()
   }
   renderListItem({item}){
        return <View> 
            <Text>{this.state.name}  {item.title}</Text>
            <Text>{this.state.name}  {item.year}</Text>
        </View>
   }
   renderLoadingView() {
    return (
      <View style={[styles.container,{backgroundColor:this.state.backg?'red':'yellow'}]} onStartShouldSetResponder={()=>true} onResponderGrant={
        (evt) => {
            this.setState(
              {text:'caonimei',
              backg:true,
            }
            )
        }
      }>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }
   fetchData(){
     //  var that = this
       fetch(REQUEST_URL).then((response)=>response.json()).then((responseData)=>{
             this.setState({
               movies:this.state.movies.concat(responseData.movies),
               loaded:true
           });
       })
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