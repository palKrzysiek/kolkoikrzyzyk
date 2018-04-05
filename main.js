
let boxTable = document.querySelectorAll(".box");
let roundOf = document.querySelector(".round");

//kto zaczyna
let roll = () =>{
	if(document.querySelector(".start").innerHTML == "reset"){
		location.reload();
	}
	else{
	let i = Math.random();
	if (i>0.5){
		roundOf.innerHTML = "Player";
		tourOf();
	}
	else{
		roundOf.innerHTML = "Computer";
		tourOf();
	}
	document.querySelector(".start").innerHTML = "reset";
}}

//dodawanie kliku

let clickable =function(){	
	this.innerHTML = "X";
	tourOf();
	roundOf.innerHTML = "Computer";
}

let playerTour = ()=>{
	for(let i = 0; i<9; i++){
		//click dzianianie
		//jesli jest kolej playera to nadaj click 
		if(boxTable[i].innerHTML == "" && roundOf.innerHTML == "Player"){
			boxTable[i].addEventListener("click", clickable);
		}
		};
	
	}

//czyja kolej


let tourOf = () =>{
	if(roundOf.innerHTML == "Computer"){
		roundOf.innerHTML = "Player";
		playerTour();
	}
	else if(roundOf.innerHTML == "Player") {
		roundOf.innerHTML = "Computer";
		for(let i = 0; i<9; i++){
			boxTable[i].removeEventListener("click", clickable);
			}
		setTimeout(computerTour, 1000);
	}
}


//ruch komputera 
const computerTour = ()=>{
	if(roundOf.innerHTML == "Computer"){
		let i =	Math.round(Math.random()*8)
		if(boxTable[i].innerHTML==""){
			boxTable[i].innerHTML = "O";
			tourOf();
		}else {
			for(let i = 0; i<9; i++){
				if(boxTable[i].innerHTML == ""){
				computerTour();}
		}
	}
}
}

//funkcja czy jest zwycięzca 
let checkWinner =()=>{
		if
}

document.querySelector(".start").addEventListener("click", roll)