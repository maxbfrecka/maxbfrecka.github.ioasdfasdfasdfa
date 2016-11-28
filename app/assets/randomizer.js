//generate the randID//
//must ensure that it does not repeat by searching database
function make_randID()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

//very basic random color generator
function randomRGBcolor(){
  function randCol(){
    var col =  Math.floor(Math.random() * 255);
    return col;
  }
  var first = randCol()
  var second = randCol()
  var third = randCol()
  var result = ''
  result = `rgb(${first},${second},${third})`
  return result
};