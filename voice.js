let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let speakButton = document.querySelector("button");
let textarea = document.querySelector("textarea");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
    speech.voice = voices[0];
}

window.speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

speakButton.addEventListener("click", () => {
    speech.text = textarea.value;
    speakButton.disabled = true;
    window.speechSynthesis.speak(speech);
});

speech.onend = () => {
    speakButton.disabled = false;
};

speech.onerror = () => {
    speakButton.disabled = false;
    alert('An error occurred while attempting to speak the text.');
};

populateVoices();


    
document.getElementById("ampm").innerHTML="AM"

let d=["SuNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
function time(){
    let dateTime=new Date()
    let hrs=dateTime.getHours()
    let sec=dateTime.getSeconds()
    let mins=dateTime.getMinutes()
    let days=dateTime.getDay()
    let da=dateTime.getDate()
    let mo=dateTime.getMonth()
    let ye=dateTime.getFullYear()
    if(hrs>12)
        {
            hrs=hrs-12
            document.getElementById("ampm").innerHTML="PM"

        }
        di=d[days]
    document.getElementById("hr").innerHTML=hrs
    document.getElementById("min").innerHTML=setzero(mins)
    document.getElementById("sec").innerHTML=setzero(sec)
    document.getElementById("date").innerHTML=da
    document.getElementById("month").innerHTML=mo
    document.getElementById("year").innerHTML=ye


}

function setzero(num)
{
    return num<=9?"0"+num:num;
}
setInterval(time,500)