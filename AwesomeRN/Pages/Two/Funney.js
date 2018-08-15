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
        this.fetchData(2,1);
        this.fetchData(3,1);
        this.fetchData(4,1);
        this.fetchData(4,1);
    }
    render(){
        return <ScrollableTabView
        style={{marginTop: 0, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        {
            this.state.all.map((itemTitleCell,index)=>{
                return  <FlatList tabLabel={itemTitleCell} data={this.getData(index)} renderItem={this.getCellitem}></FlatList>
            })
        }
      </ScrollableTabView>;
    }

    getData(index){
        var arr = []
        switch (index) {
            case 0:
            arr = this.state.alls
                break;
           case 1:
           arr = this.state.movies
                break;
           case 2:
           arr = this.state.pics
                break;  
            case 3:
            arr = this.state.texts
                break;
            case 4:
            arr = this.state.voices
                break;
            default:
                break;
        }
       return arr
    }
    getCellitem({item,index}){
        return <View>
            <Text>{item.text}</Text>

            </View>
    };

    fetchData(index,page){
        NetTool.get('satinApi',{type:index,page:page},(json)=>{
            const{data} = json
            switch (index) {
                case 1:
                this.setState({
                    alls:data
                });
                    break;
               case 41:
                this.setState({
                    movies:data
                });
                    break;
               case 10:
                this.setState({
                    pics:data
                });
                    break;  
                case 29:
                this.setState({
                    texts:data
                });
                    break;
                case 31:
                this.setState({
                    voices:data
                });
                    break;
                default:
                    break;
            }
            
        },(error)=>{

        })
    }
}