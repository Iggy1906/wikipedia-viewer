

$("#search").on('click', function(event){
  var searchTerm = $("#searchTerm").val();
  event.preventDefault()
console.log($('#searchTerm').val())
  
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +  searchTerm +"&format=json&callback=?";
$.ajax({
  url: url,
  type: "GET",
  async: false,
  dataType: "json",
  success: function(data, status, jqXHR){
    //console.log(data);
    for(var i = 0; i < data[1].length; i++){
      $("#output").prepend("<div><a target='blank' href="+data[3][i]+"><h2>"+data[1][i]+"</h2></a>"+"<p>"+data[2][i]+"</p></div><hr>");
    }
  }
  
})
  })

