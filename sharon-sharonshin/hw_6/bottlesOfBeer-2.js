
$(document).ready(function(){


    for (var i = 99; i>0; i--){
      var lyrics = document.createElement('li');
      var addLine = "";

      if(i>1){
        addLine = i + " bottles of beer on the wall, " + i + " bottles of beer." +
        "\nTake one down and pass it around, " + (i-1) + " bottles of beer on the wall. "
        var text = document.createTextNode(addLine);

        lyrics.appendChild(text);
        document.body.appendChild(lyrics);
      }

      else {
        addLine = i + " bottle of beer on the wall, " + i + " bottle of beer." +
        "\nTake one down and pass it around, no more bottles of beer on the wall. "
        var text = document.createTextNode(addLine);

        lyrics.appendChild(text);
        document.body.appendChild(lyrics);

        addLine = "No more bottles of beer on the wall, no more bottles of beer. " +
        "\nGo to the store and buy some more, 99 bottles of beer on the wall. "
        var text = document.createTextNode(addLine);

        lyrics.appendChild(text);
        document.body.appendChild(lyrics);

      }

    }
  
});
