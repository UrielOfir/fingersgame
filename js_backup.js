
//$( document ).click(function() {
 // $( "img" ).toggle( "fade" );
//});
var upRight={name:"hand-up-right-1",number:1,side:1};
var upLeft={name:"hand-up-left-1",number:1,side:1};
var bottomRight={name:"hand-bottom-right-1",number:1,side:2};
var bottomLeft={name:"hand-bottom-left-1",number:1,side:2};

$( document ).ready(function() {
  $(".hide").hide();
});


$("[data-hand*='hand']" ).draggable({
	revert: true,
	stack: "[data-hand*='hand']"
	
	});
	
$("[data-hand*='0']").draggable("disable");
	
$( "[data-hand*='hand-up']" ).droppable();
$( "[data-hand*='hand-bottom']" ).droppable();
$( "[data-hand*='hand-up']" ).droppable("disable");

$( "[data-hand*='hand-up-right']" ).droppable
	({
		accept: "[data-hand*='hand-bottom']",
		drop: function(event, ui)
		{
			var data= $(ui.draggable).data("hand");
			data=data.slice(0, -2);
			if(data=="hand-bottom-right")
			{
				dropped=bottomRight;
			}
			else
				{
				dropped=bottomLeft;
			}
			
		upRight=whenDropped(upRight,dropped);
		
		check();
					}
	});
	
	function whenDropped(reciver, dragged)
	{
		if (reciver.side==1)
		{
			$( "[data-hand*='hand-up']" ).droppable("disable");
			$( "[data-hand*='hand-bottom']" ).droppable("enable");
		}
		else
		{
			$( "[data-hand*='hand-up']" ).droppable("enable");
			$( "[data-hand*='hand-bottom']" ).droppable("disable");
		}
			var now=reciver.name;
			
			reciver.number=dragged.number+reciver.number;
			reciver.name=reciver.name.replace(/.$/,reciver.number);
			if (reciver.number>4)
			{
				reciver.number=reciver.number-5;
				reciver.name=reciver.name.replace(/.$/,reciver.number);
			}
					
			$("[data-hand='"+now+"']").fadeOut(function()
			{
					$("[data-hand='"+reciver.name+"']").show();
			});
			return reciver;
			
		}
	
	
	function check()
		{
			if(upRight.number==0&&upLeft.number==0)
				{alert("the bottom is the winner");}
			if(bottomRight.number==0&&bottomLeft.number==0)
				{alert("the up is the winner");}
		};
	
$( "[data-hand*='hand-up-left']" ).droppable
	({
		accept: "[data-hand*='hand-bottom']",
		drop: function(event, ui)
		{
			$( "[data-hand*='hand-bottom']" ).droppable("enable");
			$( "[data-hand*='hand-up']" ).droppable("disable");

			upLeft.number=$(ui.draggable).data("number")+upLeft.number;
			upLeft.name=upLeft.name.replace(/.$/,upLeft.number);
			
			if (upLeft.number>4)
			{
				upLeft.number=upLeft.number-5;
				upLeft.name=upLeft.name.replace(/.$/,upLeft.number);
			}
			
			$(this).fadeOut(function()
			{
					$("[data-hand='"+upLeft.name+"']").show();
			});
		}
	});
	
$( "[data-hand*='hand-bottom-right']" ).droppable
	({
		accept: "[data-hand*='hand-up']",
		drop: function(event, ui)
		{
			$( "[data-hand*='hand-up']" ).droppable("enable");
			$( "[data-hand*='hand-bottom']" ).droppable("disable");

			bottomRight.number=$(ui.draggable).data("number")+bottomRight.number;
			bottomRight.name=bottomRight.name.replace(/.$/,bottomRight.number);
			
			if (bottomRight.number>4)
			{
				bottomRight.number=bottomRight.number-5;
				bottomRight.name=bottomRight.name.replace(/.$/,bottomRight.number);
			}
			
			$(this).fadeOut(function()
			{
					$("[data-hand='"+bottomRight.name+"']").show();
			});
		}
	});
	
$( "[data-hand*='hand-bottom-left']" ).droppable
	({
		accept: "[data-hand*='hand-up']",
		drop: function(event, ui)
		{
			$( "[data-hand*='hand-up']" ).droppable("enable");
			$( "[data-hand*='hand-bottom']" ).droppable("disable");

			bottomLeft.number=$(ui.draggable).data("number")+bottomLeft.number;
			bottomLeft.name=bottomLeft.name.replace(/.$/,bottomLeft.number);
			
			if (bottomLeft.number>4)
			{
				bottomLeft.number=bottomLeft.number-5;
				bottomLeft.name=bottomLeft.name.replace(/.$/,bottomLeft.number);
			}
			
			$(this).fadeOut(function()
			{
					$("[data-hand='"+bottomLeft.name+"']").show();
			});
		}
	});
	
	