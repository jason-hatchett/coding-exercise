$(document).ready(function(){
  var myPolls = new window.massrel.Poller({
    frequency: 15,
    limit: 5
  },
  function(response){
    $('#info').empty();
    var table = $('<table>');
    for (var i=0; i < 5; i++){
      var name = $('<td class="bandname">').text(response[i].name)
      var counts = $('<td class="bandcount">').text(commas(response[i].count))
      var ending = $('<td class="ending">').text('Mentions')
      var item = $('<tr class="item">')
      item.append(name)
      item.append(counts)
      item.append(ending)
      
      table.append(item)

    }

    $('#info').append(table)
  });
  myPolls.start();
})


function commas(number){
  var mystr = number.toString();
  var item = "";
  for (var i=mystr.length-1; i>=0 ;i--){
    item = (mystr[i]) + item;
     if ((mystr.length-i)%3 === 0 && i !== 0){
      item = "," + item;
    }
  }
  return item;
}

