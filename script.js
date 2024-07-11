function getRandomIdx(num) {
    return Math.floor(Math.random() * num);
}


// object creation that will hold an array of messages
const MotivationalMessages = {
    part1: ["Believe in yourself",
    "You are capable of greatness",
    "Dream big",
    "Stay focused",
    "Keep pushing forward",
    "Embrace challenges"],

    part2: ["no matter the obstacles",
  "because you are unstoppable",
  "and amazing things will happen",
  "and you will achieve success",
  "and never give up",
  "and your potential is limitless"], 

    part3: ["You've got this!",
  "You can do it!",
  "Success is within reach!",
  "Go for it!",
  "The sky is the limit!",
  "You're on the path to greatness!"]
}

let motivationalQuote = [];
for (let part in MotivationalMessages) { 
    let idx = getRandomIdx(MotivationalMessages[part].length);
    switch (part) {
        case 'part1':
            motivationalQuote.push(MotivationalMessages[part][idx]);
            break;
        case 'part2':
            motivationalQuote.push(MotivationalMessages[part][idx]);
            break;
        case 'part3':
            motivationalQuote.push(MotivationalMessages[part][idx]);
            break;
    } 
}

function formatMessage(message) { 
    const formatted = message.join(" ");
    console.log(formatted);
}

formatMessage(motivationalQuote);
