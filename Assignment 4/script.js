var names=new Array();
names[0]="Karthi";
names[1]="Sai";
names[2]="Damu";
names[3]="Surya";
names[4]="Raj";
names[5]="Mani";
names[6]="Nithish";
names[7]="Sam";
names[8]="Jagan";
names[9]="Sarvesh";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		console.log("Goodbye "+names[i])

	}
	else{
		console.log("Hello "+names[i])
	}
}
