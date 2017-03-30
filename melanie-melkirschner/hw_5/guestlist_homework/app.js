/*
The queueCreator() function is supposted to help us order all of our guests upon 
arrival. However, if you run the code, you will see that every person in our queueList
is given the same position.
Fix queueCreator() so that each guest is given his/her correct position in the list.
(1, then 2, then 3)

HINT: Brush up on closures!
*/


function queueCreator(waitList){
	var i;

  for (var i = 0; i < waitList.length; i++) {
    waitList[i].id = function(j) {
    return function () {
      return j+1;
    }
  } (i);
}

  return waitList
}


var people = [{name:'Octavia'}, {name:'Judy'}, {name: 'Gloria'}];

var queueList = queueCreator(people);

console.log(queueList[0].id());
console.log(queueList[1].id());
console.log(queueList[2].id());

