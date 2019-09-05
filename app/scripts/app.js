!function(e,t,n,r){
    function s(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var n=t.getElementsByTagName("script")[0],r=t.createElement("script");r.async=!0,r.src=e.url,n.parentNode.insertBefore(r,n)}}catch(e){}}var o,p,a,i=[],c=[];e[n]={init:function(){o=arguments;var e={then:function(t){return c.push({type:"t",next:t}),e},catch:function(t){return c.push({type:"c",next:t}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},e.__onWebMessengerHostReady__=function(t){if(delete e.__onWebMessengerHostReady__,e[n]=t,o)for(var r=t.init.apply(t,o),s=0;s<c.length;s++){var u=c[s];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&t.render.apply(t,p),a&&t.destroy.apply(t,a);for(s=0;s<i.length;s++)t.on.apply(t,i[s])};var u=new XMLHttpRequest;u.addEventListener("load",s),u.open("GET",r+"/loader.json",!0),u.responseType="json",u.send()
}(window,document,"Bots", "https://odaclientsampleforjs.herokuapp.com/bots-client-sdk-js");


function loadAppId(){
    var appId = window.localStorage.getItem("appId");
    if(appId){
        document.getElementById("appId").value = appId;
    }
}

function saveAppId(e){
    e.preventDefault();
    let appId = document.getElementById("appId").value;
    console.log('Validate appId', appId);
    // validate app id
    initBots(appId)
        .then(function () {
            console.log('AppId is valid');
            window.localStorage.setItem("appId", appId);
            window.location.href = "home.html";
            document.getElementById("loader").style.display = "none";
        })
        .catch(function (err) {
            document.getElementById("loader").style.display = "none";
            document.getElementsByClassName("error")[0].style.display = 'block';
            console.log('AppId validating error', err);
        });

}

function loadChat(e){
    e.preventDefault();
    console.log('Init Bots SDK');
    var appId = window.localStorage.getItem("appId");
    initBots(appId)
        .then(function () {
            console.log("init complete");
            Bots.sendMessage('Hi');
            document.getElementById("loader").style.display = "none";
            Bots.open();
            document.getElementById("openChatButton").setAttribute("disabled", true)
        })
        .catch(function (err) {
            console.log(err);
        });
}

function clearChat(e){
    e.preventDefault();
    var keys = Object.keys(localStorage);
    for(var i = 0; i < keys.length; i++){
        if(keys[i] === 'appId'){
            continue;
        }
        localStorage.removeItem(keys[i]);
    }
    location.reload();
}


function initBots(appId){
    return Bots.init({
        appId: appId,

        // locale: 'en-US',
        // soundNotificationEnabled: true,
        // imageUploadEnabled: true,
        // displayStyle: 'button',
        // buttonIconUrl: '{Url to image at least 200 x 200 pixels and in either JPG, PNG, or GIF format}',
        // buttonWidth: '58px',
        // buttonHeight: '58px',
        businessName: 'Oracle, MCE',
        buttonIconUrl: 'https://odaclientsampleforjs.herokuapp.com/bots-client-sdk-js/mascot_565x565_New.png',
        businessIconUrl: 'https://odaclientsampleforjs.herokuapp.com/bots-client-sdk-js/mascot_565x565_New.png',
        
        customColors: {
            brandColor: '286090',
            // conversationColor: '65758e',
            // actionColor: '65758e',
        },

        customText: {
            // actionPostbackError: 'An error occurred while processing your action. Please try again.',
            // clickToRetry: 'Message not delivered. Click to retry.',
            // conversationTimestampHeaderFormat: 'MMMM D YYYY, h:mm A',
            // fetchHistory: 'Load more',
            // fetchingHistory: 'Retrieving history...',
            headerText: 'OMCE, How can we help?',
            // inputPlaceholder: 'Type a message...',
            // invalidFileError: 'Only images are supported. Choose a file with a supported extension (jpg, jpeg, png, gif, or bmp).',
            introductionText: 'Mobile Cloud Enterprise',
            // locationNotSupported: 'Your browser does not support location services or it’s been disabled. Please type your location instead.',
            // locationSecurityRestriction: 'This website cannot access your location. Please type your location instead.',
            // locationSendingFailed: 'Could not send location',
            // locationServicesDenied: 'This website cannot access your location. Allow access in your settings or type your location instead.',
            // messageError: 'An error occurred while sending your message. Please try again.',
            // messageIndicatorTitlePlural: '({count}) New messages',
            // messageIndicatorTitleSingular: '({count}) New message',
            // messageRelativeTimeDay: '{value}d ago',
            // messageRelativeTimeHour: '{value}h ago',
            // messageRelativeTimeJustNow: 'just now',
            // messageRelativeTimeMinute: '{value}m ago',
            // messageTimestampFormat: 'hh:mm A',
            // messageSending: 'Sending...',
            // messageDelivered: 'Delivered',
            // sendButtonText: 'Send',
            // settingsHeaderText: 'Settings',
            // tapToRetry: 'Message not delivered. Tap to retry.',
            // unsupportedMessageType: 'Unsupported message type.',
            // unsupportedActionType: 'Unsupported action type.'
        }
    }).then(function (res){
  /*      Bots.setDelegate({
  beforeDisplay: (message) => {
    // if message contains video pattern, make sure to filter it here and replace it with the WebView message action
    message.text = '';
    message.actions = [{
      type: 'webview', // type of message action
      text: 'Here is a calendar for you...', // button label
      uri: 'https://odaclientsampleforjs.herokuapp.com/calendar.html', //some frame to be loaded in the Web SDK UI
      fallback: 'https://www.youtube.com/embed/4vofALn_zHo?start=99&autoplay=1', //in case the channel/browser doesn't WebViews
      openOnReceive: true
    }];
    return message;
  }
});*/  Bots.updateUser({'surname': "mitch.blum", 
                                                     'properties': {
                                                           'accessToken':"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dCI6Ijd0cWNRWHBUY0hEZkwxZDFlTHdzZERNZ2hKcyIsImtpZCI6InRydXN0c2VydmljZSJ9.eyJleHAiOjE1Njc2OTExNTgsInN1YiI6Ik1JVENILkJMVU0iLCJpc3MiOiJ3d3cub3JhY2xlLmNvbSIsInBybiI6Ik1JVENILkJMVU0iLCJpYXQiOjE1Njc2NzY3NTh9.f4hrmVjeJXWGpmT06cXao6wN6XGefBVUk4KcsEvo_jc6K42lLOHIaU6X_CU_ERQ9st4b54flM-HXAND-CKTwuO8uih_2Agorgo8LbgwVs-P7IFr7pT3E6CSa-Td1tEAOB9G25Cqs1L6aJYr1T35lL_fQR_Sunbj0EDq1WU8wBjpqe_f5wXNCjA9-oZFPItd5mu9AvF2xEHyjrMZD3j4CEtpQwkxiwVpFrzko8Bk22LCojAyRjUifLmnVAD71QC98N5fiue5V9GYOc5Ykv12bENPeEYqtWL0RNuM8YjELbz4w8LBUrYx4Wa8A6G-DaW3Wi4_lCYHDReyl7dyiKp3NcA",
                                                           'principal': "mitch.blum" 
                                                    }
                       }).catch(function(err) {
                              console.error(err); 
                       }) ;       
    });
}