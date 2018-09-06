import NiceScreen from "../../page/Nice";
import React from 'react';
import { Button,Image, View, Text ,StyleSheet,SectionList,ActivityIndicator} from 'react-native';
import { yellow } from "../../node_modules/kleur";
import NetTool from "../../Tool/NetTool";
import {newsApi} from "../../common/netUrl";


export default  class newsScreen extends NiceScreen{
    constructor(props){
        super(props);
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
       this.fetctData();
       
    }

    fetctData(){
      NetTool.get(newsApi,null,(newsinfo)=>{
          const{tech,sports,ent,money,toutiao,war,auto} = newsinfo['data'];
          this.setState(
            {
              tech : tech,
              sports:sports,
              ent:ent,
              money:money,
              toutiao:toutiao,
              war:war,
              auto:auto,
              loaded:true,
              news : [{title:'头条',data:toutiao},{title:'教育',data:tech},{title:'体育',data:sports},{title:'环境',data:ent},{title:'金融',data:money},{title:'军事',data:war},{title:'其他',data:auto}]
            }
          )
      },(error)=>{

      })
    };

    render(){
      if (this.state.loaded){
        return <SectionList  style={{}} stickySectionHeadersEnabled={false} sections={this.state.news} renderItem={this.tableitem}  renderSectionHeader={this.tableHeader} keyExtractor={(item, index) => index} />
      }else{
        return this.renderLoadingView()
      }
    
        // if(this.state.loaded){
        //     return this.renderLoadingView();
        // }else{
        //     return <FlatList  style={{backgroundColor:'red'}} data={this.state.news} renderItem={this.tableitem}/>
        // }

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
    };
    renderLoadingView() {
      return (
        <View style={{flex:1,justifyContent:'center'}} onStartShouldSetResponder={()=>true} onResponderGrant={
          (evt) => {
          }
        }>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{textAlign:'center'}}>正在加载..</Text>
        </View>
      );
    }
  
    tableHeader({section}){
      return <View style={{backgroundColor:'lightGray'}}>
                <View style={styles.thumbnail}/>
                <Text style={{left:0,bottom:0,height:30,right:0,textAlign:'center'}}>{section.title} </Text>
            </View>
    };

    tableitem({item}){
      var  picInfos = new Array
        picInfos = item['picInfo'];
        var url = ''
        url  = picInfos.length>0 ?  picInfos[0]['url'] : '';
       if (url.length > 0 ){
        return itemTitleCell.getImageView(item)
       }else{
        return itemTitleCell.getTitleView(item)
       };
    }
}

export  class itemTitleCell extends React.Component {
  static getTitleView(item){
    return <View >
      <View style={{height:10}} />
       <Text style={{left:10,top:0,fontSize:24}}>{item.title} </Text>
       <View style={{height:10}}/>
       <View style={{height:1,backgroundColor:'gray'}}/>
      </View>
   };
  static getImageView(item){
    var  picInfos = new Array
    picInfos = item['picInfo'];
    var url = ''
    url  = picInfos.length>0 ?  picInfos[0]['url'] : '';
    return  <View>
        <Image  style={{height:150}}  source={{uri:url}}/>
        <Text style={{left:10,bottom:10,height:20,position:'absolute'}}>{item.title} </Text>
        <View style={{height:1,backgroundColor:'red'}}/>
        <View style={{height:10}}/>
    </View>
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
      
      height: 20
    },
    list: {
      paddingTop: 20,
      backgroundColor: "#F5FCFF",
      height:100,
    },
  });