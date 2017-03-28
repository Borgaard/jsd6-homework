var person = (function (name, age){
	var kids = [];
	var name = name;
	var age = age
	return {
		getKids: function(){
			console.log(kids);
		}, 
		haveKid: function(kidName){
			kids.push(kidName);
		}, 
		getName: function(){
			console.log(name);
		}, 
		getAge: function(){
			console.log(age);
		}, 
		celebrateBirthday: function(){
			age++;
			console.log("Yay! Happppppy Birthday! Now you're " + age);
		}
	}

})("john", 22);
person.haveKid("Sally");
person.getName();
person.getKids();
person.celebrateBirthday();