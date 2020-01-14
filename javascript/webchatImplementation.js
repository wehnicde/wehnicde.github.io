window.WebChat.renderWebChat({
        directLine: window.WebChat.createDirectLine({
            //	token: token
            webSocket: true,
            secret: 'n3bp21vbM6w.bcSCmX_kL1Dip04TgC8LXOlk7xN5Mhq3P3xKoYxLuwU',
        }),
        webSpeechPonyfillFactory: window.WebChat.createCognitiveServicesSpeechServicesPonyfillFactory({
            region: 'westeurope',
            subscriptionKey: '7fc4b1c310c84ada968e860e7879e316'
        }),

        // disable timestamp
        groupTimestamp: false,

        //set language
        locale: 'en-US',

        styleOptions: {

            // chatbot
            bubbleBackground: '#711E82',
            bubbleTextColor: 'white',
            bubbleBorderColor: '#711E82',
            bubbleBorderRadius: 15,
            bubbleBorderStyle: 'solid',
            bubbleBorderWidth: 1,
            bubbleMaxWidth: 1000,

            // User  
            bubbleFromUserBackground: '#00B482',
            bubbleFromUserTextColor: 'white',
            bubbleFromUserBorderColor: '#00B482',
            bubbleFromUserBorderRadius: 15,
            bubbleFromUserBorderStyle: 'solid',
            bubbleFromUserBorderWidth: 1,

            accent: 'black',

            backgroundColor: 'white',
            primaryFont: 'RotisSansSerif',

            hideUploadButton: true,

            // Avatar ausblenden            
            avatarSize: 0
        }
    },
    document.getElementById('webchat'));
document.querySelector('#webchat > *').focus();