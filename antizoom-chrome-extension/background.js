chrome.runtime.onInstalled.addListener(function () {
    alert('thank you for adding this extension! this extension closes zoom pages automatically after you enter the meeting!')
});

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (tab.url.split("#")[1] == "success" && tab.title == "Launch Meeting - Zoom") {
                setTimeout(function(){chrome.tabs.remove(tab.id, function () { });},10000) 
        }
    }
    //alert(document.getElementsByTagName("body")[0].innerText) 
    /*


    "obfuscate"
      /oo\
     |    |
 ^^  (vvvv)   ^^
 \\  /\__/\  //            - yo yarr33 yo cat
  \\/      \//               why is there an inactive line?!
   /        \                that's inefficient fix it NOW!
  |          |    ^  
  /          \___/ | 
 (            )     |
  \----------/     /
    //    \\_____/
   W       W
   
   
   */
}
);



//lol nobody got the reference
