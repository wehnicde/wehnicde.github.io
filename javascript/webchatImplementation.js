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
            bubbleBackground: '#f2f2f2',
            bubbleTextColor: 'black',
            bubbleMaxWidth: 600,

            // User  
            bubbleFromUserBackground: '#f2f2f2',
            bubbleFromUserTextColor: 'black',

            backgroundColor: 'white',
            primaryFont: 'RotisSansSerif',

            hideUploadButton: true,

            // Avatar ausblenden            
            avatarSize: 0
        }
    },
    document.getElementById('webchat'));
document.querySelector('#webchat > *').focus();