
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

$( "[data-hand*='hand']" ).droppable
({
	//accept: "[data-hand*='hand-bottom']",
		drop: function(event, ui)
		{
				var here=$(this).data("id");
				var coming= $(ui.draggable).data("id");
			
			if(here=="1"&&coming=="4")
			{
					upRight=whenDropped(upRight,bottomRight)
			}		
			if(here=="1"&&coming=="3")
			{
					upRight=whenDropped(upRight,bottomLeft)
			}if(here=="2"&&coming=="4")
			{
					upLeft=whenDropped(upLeft,bottomRight)
			}if(here=="2"&&coming=="3")
			{
					upLeft=whenDropped(upLeft,bottomLeft)
			}if(here=="3"&&coming=="2")
			{
					bottomLeft=whenDropped(bottomLeft,upLeft)
			}if(here=="3"&&coming=="1")
			{
					bottomLeft=whenDropped(bottomLeft,upRight)
			}if(here=="4"&&coming=="2")
			{
					bottomRight=whenDropped(bottomRight,upLeft)
			}if(here=="4"&&coming=="1")
			{
					bottomRight=whenDropped(bottomRight,upRight)
			}
		
			
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
