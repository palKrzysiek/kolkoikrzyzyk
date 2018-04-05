
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
		roundOf.innerHTML = "Player X";
		tourOf();
	}
	else{
		roundOf.innerHTML = "Computer O";
		tourOf();
	}
	document.querySelector(".start").innerHTML = "reset";
}}

//click dzianianie
let clickable =function(){	
	this.innerHTML = "X";
	tourOf();
}

let playerTour = ()=>{
	
	for(let i = 0; i<9; i++){

		//jesli jest kolej playera to nadaj click 
		if(boxTable[i].innerHTML == "" && roundOf.innerHTML == "Player X"){
			boxTable[i].addEventListener("click", clickable);
		}
		};
	
	}

//czyja kolej
let tourOf = () =>{
	checkWinner();
	if(roundOf.innerHTML == "Computer O"){
		roundOf.innerHTML = "Player X";
		playerTour();
		
	}
	else if(roundOf.innerHTML == "Player X") {
		roundOf.innerHTML = "Computer O";
		for(let i = 0; i<9; i++){
			boxTable[i].removeEventListener("click", clickable);
		}
		setTimeout(computerTour, 1000);
	}
}


//ruch komputera 
const computerTour = ()=>{
	if(roundOf.innerHTML == "Computer O"){
		let i =	Math.round(Math.random()*8)
		if(boxTable[i].innerHTML==""){
			boxTable[i].innerHTML = "O";
			tourOf();
		}else {
			for(let i = 0; i<9; i++){
				if(boxTable[i].innerHTML == ""){
				computerTour();
			}
		}
	}
}
}

//czy jest zwycięzca 
let checkWinner=()=>{

	//gdy wygra gracz
	let playerWin=(winner)=>{
		roundOf.innerHTML="Wygrałeś";
		for(let j=0; j<winner.length; j++){
			boxTable[winner[j]].classList.add("winner");
		}
		for(let i = 0; i<9; i++){
			boxTable[i].removeEventListener("click", clickable);
		}
	}; 
	//gdy wygra pc
	let computerWin=(winnerPC)=>{
		roundOf.innerHTML="Przegrałeś";
		for(let j=0; j<winnerPC.length; j++){
			boxTable[winnerPC[j]].classList.add("winnerPC");
		}
	}
	//sprawdzanie zwyciezcy
	for(let i = 0; i<boxTable.length; i=i+3){
		// kolumny 1 2 3
		if(boxTable[i].innerHTML === boxTable[i+1].innerHTML && boxTable[i].innerHTML === boxTable[i+2].innerHTML ){
			if(boxTable[i].innerHTML=="X"){
				let winnerPlayer=[i,i+1,i+2];
				playerWin(winnerPlayer);
			}
			else if (boxTable[i].innerHTML=="O"){
				let winnerPC=[i,i+1,i+2];
				computerWin(winnerPC);
			}
		}
	};
	for(let i=0; i<3; i++){
		// wiersze 1 2 3
		if(boxTable[i].innerHTML === boxTable[i+3].innerHTML && boxTable[i].innerHTML === boxTable[i+6].innerHTML){
			if(boxTable[i].innerHTML=="X"){
				let winnerPlayer=[i,i+3,i+6];
				playerWin(winnerPlayer);		
			}
			else if (boxTable[i].innerHTML=="O"){
				let winnerPC=[i,i+3,i+6];
				computerWin(winnerPC);
			}
		}
	};
	if(boxTable[2].innerHTML === boxTable[4].innerHTML && boxTable[2].innerHTML === boxTable[6].innerHTML){
		// na skos od prawej górnej
		if(boxTable[4].innerHTML=="X"){
			let winnerPlayer=[2,4,6];
			playerWin(winnerPlayer);
		}
		else if (boxTable[4].innerHTML=="O"){
			let winnerPC=[2,4,6];
			computerWin(winnerPC);
		}
	};
	if(boxTable[0].innerHTML === boxTable[4].innerHTML && boxTable[0].innerHTML === boxTable[8].innerHTML){
		//na skos od lewej górnej
		if(boxTable[4].innerHTML=="X"){
			let winnerPlayer=[0,4,8];
			playerWin(winnerPlayer);
		}
		else if (boxTable[4].innerHTML=="O"){
			let winnerPC=[0,4,8];
			computerWin(winnerPC);
		}
	}
}


document.querySelector(".start").addEventListener("click", roll);
document.querySelector(".exit").addEventListener("click", ()=>{window.close()});