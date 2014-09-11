// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */
var QUERY = 'kittens';

var kittenGenerator = {
  /**
   * Flickr URL that will give us lots and lots of whatever we're looking for.
   *
   * See http://www.flickr.com/services/api/flickr.photos.search.html for
   * details about the construction of this URL.
   *
   * @type {string}
   * @private
   */
  searchOnFlickr_: 'https://secure.flickr.com/services/rest/?' +
      'method=flickr.photos.search&' +
      'api_key=90485e931f687a9b9c2a66bf58a3861a&' +
      'text=' + encodeURIComponent(QUERY) + '&' +
      'safe_search=1&' +
      'content_type=1&' +
      'sort=interestingness-desc&' +
      'per_page=20',

  /**
   * Sends an XHR GET request to grab photos of lots and lots of kittens. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
  requestKittens: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.searchOnFlickr_, true);
    req.onload = this.showPhotos_.bind(this);
    req.send(null);
  },

  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showPhotos_: function (e) {
    var kittens = e.target.responseXML.querySelectorAll('photo');
    for (var i = 0; i < kittens.length; i++) {
      var img = document.createElement('img');
      img.src = this.constructKittenURL_(kittens[i]);
      img.setAttribute('alt', kittens[i].getAttribute('title'));
      document.body.appendChild(img);
    }
  },

  /**
   * Given a photo, construct a URL using the method outlined at
   * http://www.flickr.com/services/api/misc.urlKittenl
   *
   * @param {DOMElement} A kitten.
   * @return {string} The kitten's URL.
   * @private
   */
  constructKittenURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  kittenGenerator.requestKittens();
});



/**
 * Copyright (c) 2013 JeongHoon Byun aka "Outsider", <http://blog.outsider.ne.kr/>
 * Licensed under the MIT license.
 * <http://outsider.mit-license.org/>
 */
(function() {
  'use strict';

  var makeUrl = function() {
    // check whether github repo or github page
    var regexp, currentUrl, matched;
    if (location.host === 'github.com') {
      regexp = /github\.com\/([\w-]+)\/([\w-]+)/;
      currentUrl = location.host + location.pathname;
      matched = currentUrl.match(regexp);

      return matched ? 'http://' + matched[1] + '.github.io/' + matched[2] : null;
    } else if (/github\.io/.test(location.host)) {
      regexp = /([\w-]+)\.github.io\/([\w-]+)\//;
      currentUrl = location.host + location.pathname;
      matched = currentUrl.match(regexp);

      return 'https://github.com/' + matched[1] + '/' + matched[2];
    }
  };

  var checkRepoOrPage = function(url, callback) {
    $.ajax({
      type: 'HEAD',
      async: true,
      url: url,
      success: function() {
        callback(true);
      },
      error: function() {
        callback(false);
      }
    });
  };

  var makeButton = function(url) {
    var text = '',
        alt = '';

    if (location.host === 'github.com') {
      text = 'P';
      alt = 'go to the github page';
    } else if (/github\.io/.test(location.host)) {
      text = 'R';
      alt = 'Go to the github repository';
    }

    $('<a>').text(text).attr('title', alt)
      .attr('href', url)
      .css({
        position:'fixed',
        right: '20px',
        bottom: '20px',
        backgroundColor: '#333332',
        color: '#fff',
        width: '30px',
        height: '30px',
        fontWeight: 700,
        fontSize: '25px',
        textAlign: 'center',
        lineHeight: '30px'
      }).appendTo('body');
  };

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
      _S_BK.loadScript('http://www.stalk.io/stalk.js', function(){
      
        var s = document.createElement('script');
          //s.innterHTML = 'alert(STALK.init())';
        s.innerHTML = 'eval("if(!STALK.init()) STALK.init();")';
          
        document.getElementsByTagName("head")[0].appendChild(s);  
      });
    }else{

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

