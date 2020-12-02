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
		body.style.background = "lime";
	} else if (natija == "sariq"){
		body.style.background = "gold";
	} else if (natija == "kok"){
		body.style.background = "blue";
	} else if (natija == "olovrang"){
		body.style.background = "orange";
	} else if (natija == "osmon"){
		body.style.background = "skyblue"
	} else if (natija == "man yoqtirgan rang"){
		body.style.background = "purple";
	} else if (natija == "oq"){
		body.style.background = "white";
	} else if (natija == "pushti"){
		body.style.background = "pink";
	} else if (natija == "kulrang"){
		body.style.background = "lightgrey";
	} else if (natija == "aylan"){
		body.style.background = "pink"
		microphone.style.background = "black"
		microphone.style.color = "red";
	}
}