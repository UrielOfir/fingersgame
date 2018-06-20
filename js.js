var upRight={name:"hand-up-right-1",number:1,side:1};
var upLeft={name:"hand-up-left-1",number:1,side:1};
var bottomRight={name:"hand-bottom-right-1",number:1,side:2};
var bottomLeft={name:"hand-bottom-left-1",number:1,side:2};


var handsMap = {
1: upRight,
2: upLeft,
3: bottomLeft,
4: bottomRight
}

		var player1;
		var player2;

$( document ).ready(function() {
  $(".hide").hide();
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        player1=$("#player1").val();
			player2=$("#player2").val();
			console.log(player1);	
			//$("#announcement").css("visibility","hidden");
    }
});

$("#btn2p").click(function(){
			player1=$("#player1").val();
			player2=$("#player2").val();
			
			$("#announcement").css("visibility","hidden");
			});


$("[data-hand*='hand']" ).draggable({
	revert: true
	});

$( "[data-hand*='hand']" ).droppable
({
	
		drop: function(event, ui)
		{
				var here=$(this).data("id");
				var coming= $(ui.draggable).data("id");
			
			handsMap[here] = whenDropped(handsMap[here], handsMap[coming],here,coming);
			draggableUpdate(handsMap[here]);
			check();
		}
	});
	
$("[data-hand*='0']").draggable("disable");
$( "[data-hand*='hand-up']" ).droppable("disable");
	
	function whenDropped(reciver, dragged,here,coming)
	{
		if (reciver.side==dragged.side)
		{
			var now=reciver.name;
			
			reciver.number=dragged.number/2;
			reciver.name=reciver.name.replace(/.$/,reciver.number);
								
			$("[data-hand='"+now+"']").fadeOut(function()
			{
					$("[data-hand='"+reciver.name+"']").show();
			});
			
			handsMap[coming].number=dragged.number/2;
			handsMap[coming].name=handsMap[coming].name.replace(/.$/,reciver.number);
			$("[data-hand='"+dragged.name+"']").fadeOut(function()
			{
					$("[data-hand='"+handsMap[coming].name+"']").show();
					$("[data-hand='"+dragged.name+"']").hide();
			});
			return reciver;
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
	


	function draggableUpdate(reciver)
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
		zeroUpdate();				
	}
	
	function zeroUpdate()
	{
		for(i=1;i<5;i++)
		{
			if(handsMap[i].number==0)
			{
						var other=(i==1? 2:i==2? 1: i==3? 4:3);
						zero=handsMap[i].name.substr(0,handsMap[i].name.length-1)+"0";
						acceptHand=handsMap[other].name.substr(0,handsMap[i].name.length);
						acceptHand2=acceptHand+"2";
						acceptHand4=acceptHand+"4";
				$(zero).droppable
				("enable",{
					accept: acceptHand2+","+acceptHand4
				});
			}
		}
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

