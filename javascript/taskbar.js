var help = document.getElementById("help");
var msteams = document.getElementById("msteams");

if (confirm("THIS AN ALPHA TEST BUILD! \nNO GUARANTEE THAT THE GIVEN ANSWERS ARE CORRECT!\n\nBy using this bot you agree that personal data might be stored.")) {
    chatWindow.style.display = "block";
    firstTime = false;
} else {
    errorMessage.style.display = "block";
}

help.onclick = function() {
    if (window.confirm("Press OK to send a Email to a Compliance Officer. Press Cancel to cancel.")) {
        let mailAdress = "niclas.weh_ext@aesculap.de";
        let subject = "ComplianceBot Human Support needed || Priority: HIGH/LOW";
        let body = "Please enter your question and change the priority in the subject to your needs..";

        window.location.href = "mailto:" + mailAdress + "?subject=" + subject + "&body=" + body;

    }
}

msteams.onclick = function() {
    if (window.confirm("Do you want to open this Chatbot in MicrosoftTeams?")) {
        window.location.href = "https://teams.microsoft.com/l/chat/0/0?users=28:10bab881-076b-435a-8bf7-6ef53590c287";
    }
}