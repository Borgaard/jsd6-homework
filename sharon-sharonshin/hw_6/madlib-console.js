

create.onclick = function(event) {
    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    var startup = console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

    var main_heading = document.getElementById("xForY");
    document.getElementById("xForY").innerHTML="";
    var heading_text = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);   
    main_heading.appendChild(heading_text);
    document.body.appendChild(main_heading);
};


