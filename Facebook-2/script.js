var database =[
{
username:"Kumaresan",
password:"Supersecret"
},
{
	username:"Kannnan",
	password:"123455"
	},
	{
		username:"raja",
		password:"appa"
		}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
var usernamePrompt =prompt("What is your Username:");
var passwordPrompt =prompt("What is your password");

function isvalid(username,password){
	for(var i=0;i<database.length;i++){
		if(database[i].username===username && database[i].password===password){
			return true;
		}
	}
	return false;
}
function signin(username ,password){
if(isvalid(username,password)){
	console.log(newsfeed);
}
else{
alert("Sorry,wrong username and password");
}
}
signin(usernamePrompt,passwordPrompt);
