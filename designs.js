// Select color input
var cp= $('#colorPicker');
var color;
cp.change(function(){
  color= colorPicker.value;
});
// Select size input
var columns=1;
var rows=1;

function save(){
  columns = document.getElementById("inputWidth").value;
  rows = document.getElementById("inputHeight").value;
  makeGrid();
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    //$('table').find('*').remove();

    var row = $("<div />", {
    class: 'tr'
    });
    var square = $("<div />", {
        class: 'td'
    });

    //add columns to the the temp row object
    $(document).ready(function(){
    for (var i = 0; i < columns; i++) {
        row.append(square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#pixelCanvas").append(row.clone());
    }
  }
  );
}

$('td').click(function(){
      $(this).css("background-color",color);
});
