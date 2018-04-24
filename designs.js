//caching all jQuery objects 
$button=$('button');
$delH1=$('.delH').first();
$delH2=$('.delH').last();
$delW1=$('.delW').first();
$delW2=$('.delW').last();
//$tr=$('tr'); The number of the tr elements are changing and so caching will not work
//$td=$('td'); The number of the td elements are changing and so caching will not work
$checkBox=$('#checkBox');
$brushAndEraser=$('#brush, #eraser');
$homeButton=$('#homeButton'); 
$aside=$('aside');
$content=$('content');
$home=$('#home');
$grid=$('#grid');
$colorPicker=$('#colorPicker');

//adding js variables
let color={
     fill:undefined,
     border:undefined
   };
let dim ={
       h:undefined,
       w:undefined,
    };
let cell={
      h:20,
      w:20
    };
let type =1;
let $table=$('#pixelCanvas');


//adding jQueryFunctions
$button.click(makeGrid);
$delH1.click( function (){ 
      dim.h++;  
      let insert = "<tr>";
      for(var i=0; i<dim.w;i++)
          insert+="<td></td>";
      $table.append(insert+'</tr>');
      console.log("Increase inputHeight");
      checkBox();
      adjustCellSize();
    });

$delH2.click( function (){ 
      dim.h--;
      $('tr').last().remove();
      checkBox();
      console.log("Decrease inputHeight")
      adjustCellSize();
    });

$delW1.click( function (){
      dim.w++;
      $('tr').each(function() {
        $(this).append("<td></td>");
      });
      checkBox();
      console.log("Increase inputWidth");
      adjustCellSize();
    });

$delW2.click( function (){
      dim.w--;
      $('tr').each(function(){
         $(this).children().last().remove();
      });
      checkBox();
      console.log("Decrease inputWidth");
      adjustCellSize();
    });

//this.checked not $(this).checked
//this is an element and $ is an object
$checkBox.change( checkBox);
$brushAndEraser.click(function(){
   $brushAndEraser.css('background-color','inherit');
   $brushAndEraser.css('color','inherit');
   $(this).css('background-color','white');
   $(this).css('color','blue');
   //console.log($(this),$('#brush'));Why false?
   if(this.id==='brush'){
    console.log("brush selected") ;type=1;
  }
   else {
    type=2; 
    console.log("eraser selected");
  }
});
  
$homeButton.click( function(){
   if(confirm("Are you sure? You will lose all your progress!")){
      $grid.slideToggle();
      $home.slideToggle();
   } 
});
      
$aside.hover(function() {
  $content.fadeIn();
}, function() {
  $content.fadeOut();
});

$(document).delegate('td','click',function(){
    
    if(type==1){
      color = $colorPicker.val();
      $(this).css('background',color);
      console.log("cell color changed");
    }
    else{
      $(this).css('background','white');
    } 
    console.log("cell selected",type);
});

//jS functions
function checkBox(){
  //if this.checkBox then it would test on the active element from which the this function is called
  //
    if($checkBox.is(':checked')){
      console.log("Black Border");
      $('td').css('border-color','black');
    }
    else 
      $('td').css('border-color','white');
    console.log("border should change");
}


function makeGrid(){
    dim  = { 
        h:parseInt($('#inputHeight').val()),
        w:parseInt($('#inputWeight').val())
    };
    $table.text("");
    let insert="";
    for(var i=0; i<dim.w;i++)
        insert+='<td></td>';
        for(var i=0; i<dim.h; i++)  
           $table.append('<tr>'+ insert+'</tr>');    
    adjustCellSize();      
    $home.slideUp();
    $grid.slideDown();
    console.log(dim);
    console.log("Grid Formed");
}

function adjustCellSize(){
    if(dim.w>200)
        dim.w=200;
    if(dim.h>100)
        dim.w=100;
                  
    //Checking if the number of columns is  not exceeding or row is not exceeding
    if(dim.w>50)
        cell.h=20*50/dim.w;
    if(dim.h>25)
        cell.w=20*25/dim.h;
    
    if(cell.h>cell.w){
        $('tr').css('height',cell.w+"px");
        $('td').css('width',cell.w+"px");
    }
    else{
        $('tr').css('height',cell.h+"px");
        $('td').css('width',cell.h+"px");
    }
}

