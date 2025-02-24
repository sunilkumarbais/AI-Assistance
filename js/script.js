const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
// console.log(recognition);
const btn = document.querySelector("#start-btn");

btn.addEventListener("click", () => {
  function speek(text){
    const robotSpeek = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(robotSpeek);
  };
  speek("hello, how can i help you.");

  function handleCommand(command){
    if(command ===  "open youtube"){
      speek("opening youtube");
      window.open("https://www.youtube.com", "_blank");
    } else if(command === "open facebook"){
      speek("opening facebook");
      window.open("https://www.facebook.com", "_blank");
    } else if(command === "open instagram"){
      speek("opening instagram");
      window.open("https://www.instagram.com", "_blank");
    } else if(command === "open whatsapp"){
      speek("opening whatsapp");
      window.open("https://www.whatsapp.com", "_blank");
    } else if(command === "open google"){
      speek("opening google");
      window.open("https://www.google.com", "_blank");
    }else if(command === "open chat gpt"){
      speek("opening chat gpt");
      window.open("https://www.chatgpt.com", "_blank");
    }else {
      speek(`I am opening in google ${command}`);
      window.open(`https://www.google.com/search?q=${command}`, "_blank");
    }
  };

  setTimeout(() => {
    recognition.start();
  }, 2000);

  recognition.onresult = (event)  => {
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommand(command);
  };
  
});