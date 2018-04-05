
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



let playerTour = ()=>{
	for(let i = 0; i<9; i++){
		//click dzianianie
		let clickable =function(e){	
			e.preventDefault();
			boxTable[i].innerHTML = "X";
			tourOf();
			roundOf.innerHTML = "Computer";
		}
		//jesli jest kolej playera to nadaj click 
		if(boxTable[i].innerHTML == "" && roundOf.innerHTML == "Player"){
			boxTable[i].addEventListener("click", clickable,false)
		}
		};
	
	}

//czyja kolej


let tourOf = () =>{
	if(roundOf.innerHTML == "Computer"){
		roundOf.innerHTML = "Player";
		setTimeout(playerTour, 1000);
	}
	else if(roundOf.innerHTML == "Player") {
		roundOf.innerHTML = "Computer";
		setTimeout(computerTour, 1000);
	}
}


//ruch komputera 
const computerTour = ()=>{
	if(roundOf.innerHTML == "Computer"){
		for(let i = 0; i<9; i++){
			boxTable[i].removeEventListener("click", function(){
			});
		}

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

//tourOf();

document.querySelector(".start").addEventListener("click", roll)