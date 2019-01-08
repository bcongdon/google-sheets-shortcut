$(function() {
  $.get('/getData', function(datum) {
    if(datum=="An error occurred"){
      $('<span></span>').text("Gosh, darnit! " + datum).appendTo('p#deets');      
    } else {
      $('<span></span>').text("Oh, hi " + datum[0] + "! I have that data for you: ").appendTo('p#deets');
      $('<div></div>').text(datum[1][1]).appendTo('p#deets');
      $('p#deets').append('<br /><img src="//chart.googleapis.com/chart?cht=lc&chtt=Data&chs=250x150&chd=t:'+datum[1][1]+'&chxt=x,y&chxs=0,c0c0c0,10,0,lt|1,c0c0c0,10,1,lt&chco=000000" />');
    }
  });
});