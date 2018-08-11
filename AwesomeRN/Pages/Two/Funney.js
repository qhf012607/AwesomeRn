import React from 'react';
import NiceScreen from "../../page/Nice";
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import { Image, FlatList, StyleSheet, Text, View,RefreshControl } from "react-native";
import NetTool from "../../Tool/NetTool";
export default class funneyScreen extends NiceScreen{
    constructor(props){
        super(props)
        this.state = {
            tech:[],
            sports:[],
            ent:[],
            money:[],
            toutiao:[],
            war:[],
            auto:[],
            news:[],
            loaded:false,
        }
    }
    componentDidMount(){
        this.fetchData
    }
    render(){
        return <ScrollableTabView
        style={{marginTop: 0, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2 word word'>favorite</Text>
        <Text tabLabel='Tab #3 word word word'>project</Text>
        <Text tabLabel='Tab #4 word word word word'>favorite</Text>
        <Text tabLabel='Tab #5'>project</Text>
      </ScrollableTabView>;
    }

    fetchData(){
      //  NetTool.get('satinApi',)
    }
}