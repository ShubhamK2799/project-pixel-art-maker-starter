let color;
let dim;

	$('button').on("click", function (){
		console.log("Button Clicked");
		// color = $('#colorPicker').val();
		// dim  = { 
		// 	h:parseInt($('#inputHeight').val()),
		// 	w:parseInt($('#inputWeight').val())
		// };
  //   	console.log("Working");
		// let table=$('#pixelCanvas');
		// table.text("");
		// let insert="";
		// for(var i=0; i<dim.w;i++)
		// 	insert+='<td></td>';
 	// 	for(var i=0; i<dim.h; i++)	
		//  	table.append('<tr>'+ insert+'</tr>');		
		// $("#menu").fadeOut();
	});
		
	//$('button').click(function() {alert("you clicked");$("#menu").fadeOut();});		

/*
$("#submitBtn").on("click keyup", function(e) {
    console.log("Working");
    // $pixelCanvas.css("display","block");
    $modalNav.toggleClass("drop-down");
    $modalToolbar.toggleClass("slide-up");
    $pixelCanvas.toggleClass("slide-right");
    // $(".modal-toolbar").css("display","flex");
    let code = e.keyCode || e.which;
    gridHeight = parseInt($heightInput.val());
    gridWidth = parseInt($widthInput.val());

    // don't submit on tab or space keypress
    if (code === 32 || code === 9) {
      return false;
    } else if (
      gridHeight <= maxHeight &&
      gridHeight > 0 &&
      (gridWidth <= maxWidth && gridWidth > 0)
    ) {
      e.preventDefault();
      makeGrid(gridHeight, gridWidth);

      $interface.css("display", "none");
      $mainTitle.css("display", "none");
    }
  });

	//because we need to insert every thing at once. Every time insert completed tag.
	//parseInt() is a function not String.parseInt()
	//submit function is used under form tag, it does not work after seelceting the button
	/*
	<script>
	$( "p" ).click(function() {
  	$( this ).slideUp();
	});
	</script>
	<form action="javascript:alert( 'success!' );">
  	<div>
    <input type="text">
    <input type="submit">
  	</div>
	</form>
	<span></span>
	<script>
		$( "form" ).submit(function( event ) {
		  if ( $( "input:first" ).val() === "correct" ) {
		    $( "span" ).text( "Validated..." ).show();
		    return;
		  }
		 
		  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
		  event.preventDefault();
		});
	</script>
	*/
	//$('input[type=submit]').submit(makeGrid()) is wrong;
    //A sumbit function is called for the time it is submited later the console.loged value will disappear

/*
var a = parseInt("10") + "<br>";
    var b = parseInt("10.00") + "<br>";
    var c = parseInt("10.33") + "<br>";
    var d = parseInt("34 45 66") + "<br>";
    var e = parseInt("   60   ") + "<br>";
    var f = parseInt("40 years") + "<br>";
    var g = parseInt("He was 40") + "<br>";

    var h = parseInt("10", 10)+ "<br>";
    var i = parseInt("010")+ "<br>";
    var j = parseInt("10", 8)+ "<br>";
    var k = parseInt("0x10")+ "<br>";
    var l = parseInt("10", 16)+ "<br>";
    10
10
10
34
60
40
NaN

10
10
8
16
16
*/