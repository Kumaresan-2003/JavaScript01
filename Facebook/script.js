var database =[
{
username:"Kumaresan",
password:"Supersecret"
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

function signin(user,pass){
if(user===database[0].username && pass===database[0].password)
{
console.log(newsfeed);
}
else{
alert("Sorry,wrong username and password");
}
}
signin(usernamePrompt,passwordPrompt);
