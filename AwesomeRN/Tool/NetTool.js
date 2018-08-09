import React from 'react';

export default class NetTool {
    /*
     *  post请求
     *  url:请求地址
     *  params:参数,这里的参数要用这种格式：'key1=value1&key2=value2'
     *  callback:回调函数
     * */
    static  postForm(url,params,sucess,fail){
        //fetch请求
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                sucess(responseJSON)
            })
            .catch((error) => {
                if(fail){
                    fail(error)
                }
            });
    };

    static postJSON(url,params,header,sucess,fail){
        var dic = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        if (header){
            for (key in header){
                dic[key] = header[key]
            }
        }
        //fetch请求
        fetch(url,{
            method: 'POST',
            headers: dic,
            body:JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                sucess(responseJSON)
            })
            .catch((error) => {
                if(fail){
                    fail(error)
                }
                console.log("error = " + error)
            });
    };

      static get(url,params,sucess,fail){
        if(params!=null){
            let paramasArray = [];
            Object.keys(params).forEach(key => paramasArray.push(key + '=' + params[key]))
            if(url.search(/\?/) === -1){
                url += '?' + paramasArray.join('&')
            }else{
                url += '&' + paramasArray.join('&')
            }
        }
        fetch(url,{
            method:'GET'
        }).then(response => response.json()).then(responseJson => {
            sucess(responseJson)
          }).catch((error)=>{
            if(fail){
                fail(error)
            }
        })
    };
    

}

