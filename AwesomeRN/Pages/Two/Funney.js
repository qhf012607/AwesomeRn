import React from 'react';
import NiceScreen from "../../page/Nice";
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import { Image, FlatList, StyleSheet, Text, View,RefreshControl } from "react-native";
import NetTool from "../../Tool/NetTool";
import { itemTitleCell } from '../One/News';
export default class funneyScreen extends NiceScreen{
    constructor(props){
        super(props)
        this.state = {
            all:['全部','视频','图片','段子','声音'],
            alls:[],
            movies:[],
            pics:[],
            texts:[],
            voices:[],
            loaded:false,
        }
    }
    componentDidMount(){
        this.fetchData(1,1);
        this.fetchData(41,1);
        this.fetchData(10,1);
        this.fetchData(29,1);
        this.fetchData(31,1);
    }
    render(){
        return <ScrollableTabView
        style={{marginTop: 0, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        {
            this.state.all.map((itemTitleCell,index)=>{
                return  <FlatList tabLabel={itemTitleCell}></FlatList>
            })
        }
      </ScrollableTabView>;
    }

    fetchData(index,page){
       
        NetTool.get('satinApi',{type:index,page:page},(json)=>{
            const{data} = json
            switch (index) {
                case 1:
                this.setState({
                    alls:data
                });
                    break;
            
                default:
                    break;
            }
            
        },(error)=>{

        })
    }
}