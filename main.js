// find month get value user:	 
let m=prompt("enter the month");
	 let monthh=new Date(m);
	 let mont=monthh.getMonth();
	 
	 if(mont<=3){
	     console.log("spring")
	 }
	 else if(mont<=7){
	 console.log("summer")
	 }
	 else if(mont<=11){
	 console.log("winter")
	 }	 
	 else{
	 console.log("none")
	 }