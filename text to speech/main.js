// function getVoices() {
//   let voices = speechSynthesis.getVoices();
//   if(!voices.length){
//     // some time the voice will not be initialized so we can call spaek with empty string
//     // this will initialize the voices 
//     let utterance = new SpeechSynthesisUtterance("");
//     speechSynthesis.speak(utterance);
//     voices = speechSynthesis.getVoices();
//   }
//   return voices;
// }
// function speak(text, voice, rate, pitch, volume) {
//   // create a SpeechSynthesisUtterance to configure the how text to be spoken 
//   let speakData = new SpeechSynthesisUtterance();
//   speakData.volume = volume; // From 0 to 1
//   speakData.rate = rate; // From 0.1 to 10
//   speakData.pitch = pitch; // From 0 to 2
//   speakData.text = text;
//   speakData.lang = 'ar';
//   speakData.voice = voice;
  
//   // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
//   speechSynthesis.speak(speakData);

// }

function changelang() {
   vv =  document.getElementById("mySelect").value;
   window.speechSynthesis.cancel()

  }

var vv = 'ar'
// Lister to the change event on the <input> element
// document.getElementById('select-image').addEventListener('change', (event) => {
//     // Get the selected image file
//     const imageFile = event.target.files[0];

//     if (imageFile) {
//         const reader = new FileReader();

//         // Convert the image file to a string
//         reader.readAsDataURL(imageFile);

//         // FileReader will emit the load event when the data URL is ready
//         // Access the string using result property inside the callback function
//         reader.addEventListener('load', () => {
//             // Get the data URL string
//             const img = document.getElementById('img');

//             // Set data URL as the src attribute value
//             img.setAttribute('src', reader.result);
//             img.setAttribute('border','5px solid #607D8B;')
//             // img.style.width="200px";
//             // img.style.height="200px"


//             Tesseract.recognize(reader.result,vv=='ar'?vv+'a':vv+'g').then(function ({ data: { text } }) {document.getElementById("test").innerHTML = text
//             // if ('speechSynthesis' in window) {
  
//               // let voices = getVoices();
//               // console.log(voices)
//               // let rate = 1, pitch = 1, volume = 1;
//               // let text = "Spaecking with volume = 1 rate =1 pitch =2 ";
//               // let text = reader.result;
//               // speak(text, voices[5], rate, pitch, volume);
//             // }else{
//             //   console.log(' Speech Synthesis Not Supported 😞'); 
//             // }
//           texttospeach(text);
//           })
//         });
//     }
// });

// if ("webkitSpeechRecognition" in window) {
//   // Initialize webkitSpeechRecognition
//   let speechRecognition = new webkitSpeechRecognition();

//   // String for the Final Transcript
//   let final_transcript = "";

//   // Set the properties for the Speech Recognition object
//   speechRecognition.continuous = true;
//   speechRecognition.interimResults = true;
//   speechRecognition.lang = 'ar';

//   // Callback Function for the onStart Event
//   speechRecognition.onstart = () => {
//     // Show the Status Element
//     document.querySelector("#status").style.display = "block";
//   };
//   speechRecognition.onerror = () => {
//     // Hide the Status Element
//     document.querySelector("#status").style.display = "none";
//   };
//   speechRecognition.onend = () => {
//     // Hide the Status Element
//     document.querySelector("#status").style.display = "none";
//   };

//   speechRecognition.onresult = (event) => {
//     // Create the interim transcript string locally because we don't want it to persist like final transcript
//     let interim_transcript = "";

//     // Loop through the results from the speech recognition object.
//     for (let i = event.resultIndex; i < event.results.length; ++i) {
//       // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
//       if (event.results[i].isFinal) {
//         final_transcript += event.results[i][0].transcript;
//       } else {
//         interim_transcript += event.results[i][0].transcript;
//       }
//     }

//     // Set the Final transcript and Interim transcript.
//     document.querySelector("#final").innerHTML = final_transcript;
//     document.querySelector("#interim").innerHTML = interim_transcript;
//   };

//   // Set the onClick property of the start button
//   document.querySelector("#start").onclick = () => {
//     // Start the Speech Recognition
//     speechRecognition.start();
//   };
//   // Set the onClick property of the stop button
//   document.querySelector("#stop").onclick = () => {
//     // Stop the Speech Recognition
//     speechRecognition.stop();
//   };
// } else {
//   console.log("Speech Recognition Not Available");
// }






function texttospeach() {
  if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    var text = document.getElementById("name").value
    var msg = new SpeechSynthesisUtterance();

    // var voices = window.speechSynthesis.getVoices();
    // msg.voice = voices[10]; 
    // msg.volume = 1; // From 0 to 1
    // msg.rate = 1; // From 0.1 to 10
    // msg.pitch = 2; // From 0 to 2
    msg.text = text;
    
   msg.lang = vv;
    
    speechSynthesis.speak(msg);

    // speechSynthesis.getVoices().forEach(function(voice) {
    //   console.log(voice.name, voice.default ? voice.default :'');
    // });
   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }
  
}




// function tts() {
//   // document.getElementById("select-image").click()
//   window.speechSynthesis.cancel()

//   // console.log(document.getElementById("mySelect").value)
// }


// function changelang() {
//   return document.getElementById("mySelect").value;
// }



