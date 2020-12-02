const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;

recognition.lang = "uz-UZ";

microphone.addEventListener("click", () => {
	microphone.textContent = "Gapiravering";
	recognition.start();
})

recognition.onresult = (evt) => {
	let natija = evt.results[0][0].transcript
	microphone.textContent = "Bos va yoz";
	let body = document.querySelector("body")
	if(natija == "qizil"){
		body.style.background = "red";
	} else if (natija == "qora"){
		body.style.background = "black";
	} else if (natija == "yashil"){
		body.style.background = "green";
	} else if (natija == "sariq"){
		body.style.background = "gold";
	}
}