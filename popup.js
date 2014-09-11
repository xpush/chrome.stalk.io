function clickHandler(e) {
	
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
    	console.log(response);
        this.close(); // close the popup when the background finishes processing request
    });
}

function changeHandler(e) {
	
	if(document.getElementById('alwaysstalk').checked){
		setCookie("alwaysstalk",true);
	}else{
		delCookie("alwaysstalk");
	}

}


function setCookie(name,value) {
	
	var today = new Date();
    today.setDate(today.getDate() + 30);
    document.cookie = name + "=" + escape(value) + "; path=/; expires="
            + today.toGMTString() + ";";
    alert("cookie Save Complete!!");
}


function getCookie(name){
	var cook = document.cookie + ";";
    var idx = cook.indexOf(name, 0);
    var val = "";

    if (idx != -1) {
        cook = cook.substring(idx, cook.length);
        begin = cook.indexOf("=", 0) + 1;
        end = cook.indexOf(";", begin);
        val = unescape(cook.substring(begin, end));
    }

    return val;
}

function delCookie(name) {
	var today = new Date();
	today.setTime(today.getTime(-1)); 
	var value = getCookie(name);

	if(value != " "){
		document.cookie = name + "=" + value + "; expires=" + today.toGMTString();
	}

	
}

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('click-me').addEventListener('click', clickHandler);
    document.getElementById('alwaysstalk').addEventListener('change', changeHandler);

    var cook = getCookie("alwaysstalk");
    if(cook!=""){
    	document.getElementById('alwaysstalk').checked=true;
    	clickHandler();
    }
    
})


