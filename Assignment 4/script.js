var names=new Array();
names[0]="Karthikeyan";
names[1]="Sree";
names[2]="Doug";
names[3]="Surya";
names[4]="Rajsundaram";
names[5]="Nandhu";
names[6]="Nithish";
names[7]="Samy";
names[8]="Jagan";
names[9]="Sarveshwar";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		console.log("Goodbye "+names[i])

	}
	else{
		console.log("Hello "+names[i])
	}
}
