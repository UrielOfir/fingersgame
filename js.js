
//$( document ).click(function() {
 // $( "img" ).toggle( "fade" );
//});
var upRight={name:"hand-up-right-1",number:1,side:1};
var upLeft={name:"hand-up-left-1",number:1,side:1};
var bottomRight={name:"hand-bottom-right-1",number:1,side:2};
var bottomLeft={name:"hand-bottom-left-1",number:1,side:2};

		var player1;
		var player2;

$( document ).ready(function() {
  $(".hide").hide();
});

$("#btn2p").click(function(){
			player1=$("#player1").val();
			player2=$("#player2").val();
			
			$("#announcement").css("visibility","hidden");
			});


$("[data-hand*='hand']" ).draggable({
	revert: true,
	stack: "[data-hand*='hand']"
	
	});
	
$("[data-hand*='0']").draggable("disable");
$( "[data-hand*='hand-up']" ).droppable();
$( "[data-hand*='hand-bottom']" ).droppable();
$( "[data-hand*='hand-up']" ).droppable("disable");
$("[data-hand*='0']").droppable
({
	});

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
			}
			if(here=="2"&&coming=="4")
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
			
			if(here=="1"&&coming=="2"||here=="2"&&coming=="1")
			{
					if($(ui.draggable).data("hand").search("2")>-1)
					{
						$( "[data-hand*='hand-up']" ).fadeOut();
						$( "[data-hand*='hand-up-right-1']" ).show();
						$( "[data-hand*='hand-up-left-1']" ).show();
						upLeft.number=upRight.number=1;
					
					}
					if($(ui.draggable).data("hand").search("4")>-1)
					{
						$( "[data-hand*='hand-up']" ).fadeOut();
						$( "[data-hand*='hand-up-right-2']" ).show();
						$( "[data-hand*='hand-up-left-2']" ).show();
						upLeft.number=upRight.number=2;
						
					}
					
			if(here=="3"&&coming=="4"||here=="4"&&coming=="3")
			{
					if($(ui.draggable).data("hand").search("2")>-1)
					{
						$( "[data-hand*='hand-bottom']" ).fadeOut();
						$( "[data-hand*='hand-bottom-right-1']" ).show();
						$( "[data-hand*='hand-bottom-left-1']" ).show();
						
						bottomLeft.number=bottomRight.number=1;
					}
					if($(ui.draggable).data("hand").search("4")>-1)
					{
						$( "[data-hand*='hand-bottom']" ).fadeOut();
						$( "[data-hand*='hand-bottom-right-2']" ).show();
						$( "[data-hand*='hand-bottom-left-2']" ).show();
						bottomLeft.number=bottomRight.number=2;
						
					}
			}
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
			$( "[data-hand*='0']" ).droppable("enable");
		}
		else
		{
			$( "[data-hand*='hand-up']" ).droppable("enable");
			$( "[data-hand*='hand-bottom']" ).droppable("disable");
			$( "[data-hand*='0']" ).droppable("enable");
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
			{$("#annText").html("המשחק נגמר!<br>המנצח הוא "+player2 );
				$("#announcement").css("visibility","visible");
			}
			if(bottomRight.number==0&&bottomLeft.number==0)
				{$("#annText").html("המשחק נגמר!<br>המנצח הוא "+player1 );
				$("#announcement").css("visibility","visible");}
		};
		
		
	
/*$( "[data-hand*='hand-up-left']" ).droppable
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
	
	*/