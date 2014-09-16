// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!


/**
 * Copyright (c) 2013 JeongHoon Byun aka "Outsider", <http://blog.outsider.ne.kr/>
 * Licensed under the MIT license.
 * <http://outsider.mit-license.org/>
 */
(function() {
  'use strict';



  var _S_BK = {
      loadScript :  function(url, callback){

       

        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState){  //IE
          script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
              //script.onreadystatechange = null;
              callback();
            }
          };
        } else {  //Others
          script.onload = function(){
            callback();
          };
        }
        script.src = url;

        document.getElementsByTagName("head")[0].appendChild(script);
      },

      loadCss :  function(url, callback){


       

        var style = document.createElement("link");
        style.type = "text/css";
        style.rel = "stylesheet"


        style.href = url;


        document.getElementsByTagName("head")[0].appendChild(style);

        var img = document.createElement('img');
        img.onerror = function(){
            if(callback) callback();
        }
        img.src = url;
      }

       
    }


  var popUp = function(){
    var cs = document.createElement('script');
      //s.innterHTML = 'alert(STALK.init())';
    cs.innerHTML = 'eval("document.getElementById(\'stalk-layer-id\').style.display=\'block\'")';
    
    document.getElementsByTagName("head")[0].appendChild(cs);
  };


  var stalkio = function(){
    console.log(location);
    if(location.protocol=='http:'){
      //var url = chrome.extension.getURL("stalk.js");
      var url = 'http://www.stalk.io/stalk.js'

      _S_BK.loadScript(url, function(){

        var s = document.createElement('script');
          
        s.innerHTML = 'eval("STALK.init();")';

        document.getElementsByTagName("head")[0].appendChild(s);
      });
    }else{

      if(document.getElementsByTagName('html')[0].innerHTML.indexOf('stalk-layer-id')==-1){
        
        var layerDiv = document.createElement('div');
        layerDiv.setAttribute("id",'stalk-layer-id')
        layerDiv.style.display = "none";
        layerDiv.style.width = "170px";
        //layerDiv.style.height= "80px";
        layerDiv.style.background= "#3d3d3d";
        layerDiv.style.color= "#fff"; 
        layerDiv.style.position= "fixed";
        layerDiv.style.top= "50px";
        layerDiv.style.right= "20px";
        layerDiv.style.zIndex= "200";
        //layerDiv.style.textAlign= "center"; 
        //layerDiv.style.verticalAlign= "middle"; 
        layerDiv.style.border= "2px solid #000";

        var imgUrl =  chrome.extension.getURL("images/stalk_16.png");

        layerDiv.innerHTML = '<div style="margin:10px 10px 10px 10px;cursor:pointer" onclick=this.parentNode.style.display="none"><img src="'+imgUrl+'" align="top"/>orry.. http:// only.<br/>Can not use on https://</div>';  
        document.getElementsByTagName('body')[0].appendChild(layerDiv);
        
        popUp();
      }else{
        popUp();
      }
      
    }

  };

  if(document.getElementsByTagName('html')[0].innerHTML.indexOf('stalk.js')==-1&&document.getElementsByTagName('body').length>0){
    stalkio();  
  }

  




  //console.log(STALK);
  //STALK.init();

  /*makeButton(url);
  if (url) {
    checkRepoOrPage(url, function(isExist) {
      if (isExist) {
        makeButton(url);
      }
    });
  }*/

})();
