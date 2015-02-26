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
      var counts = $('<td class="bandcount">').text(response[i].count)
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

