window
    .fetch('https://compliancebotbbraun-bot-c.azurewebsites.net/api/token',
        {
            method: 'GET'
        })
    .then(function (res) {
        return res.json();
    })
    .then(function (json) {
        const tokenDirectLine = json.tokenDirectLine;
        const tokenSpeech = json.tokenSpeech;

        window.WebChat.renderWebChat({
            directLine: window.WebChat.createDirectLine({
                token: tokenDirectLine
            }),
            webSpeechPonyfillFactory: window.WebChat.createCognitiveServicesSpeechServicesPonyfillFactory({
                authorizationToken: tokenSpeech,
                region: 'westeurope'
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
                primaryFont: 'RotisSansSerif, Arial',

                hideUploadButton: true,

                // Avatar ausblenden            
                avatarSize: 0
            }
        },
            document.getElementById('webchat'));
        document.querySelector('#webchat > *').focus();
    });




