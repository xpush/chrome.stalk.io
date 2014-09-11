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
      }
    }





  var stalkio = function(){
    console.log(location);
    if(location.protocol=='http:'){
      var url = chrome.extension.getURL("stalk.js");
      //var url = 'http://www.stalk.io/stalk.js'

      _S_BK.loadScript(url, function(){

        var s = document.createElement('script');
          //s.innterHTML = 'alert(STALK.init())';
        s.innerHTML = 'eval("STALK.init();")';

        document.getElementsByTagName("head")[0].appendChild(s);
      });
    }else{
      console.log("Only http protocol");
    }




  };



  stalkio();




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

$(document).ready(function(){
  $(document).keypress(function(e){
    if(e.keyCode==13) alert('enter');

  });


});
