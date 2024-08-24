
function niceLogger(){
    console.log("Hello World!");
    return "Hello World!";
}

function messageRepeater(messageToRepeat) {

    if (Array.isArray(messageToRepeat)) {

        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat];

    } else {
        let localmessageToRepeat = messageToRepeat.toString();

        return localmessageToRepeat + localmessageToRepeat + localmessageToRepeat;
    }

    
}

module.exports = {
    niceLogger,
    messageRepeater
}