var play=false;
var score;
var trailleft;
var action;
var step;
var fruits=["grapes","watermelon","cherry","mango","tomato","pineapple","banana","orange"];
// check if palying
    //if yes 
     // show life-box
     // show score
     // reset playing text and play variable

$(function()
{
 


 $("#start").click(
    function()
    {
        if(!play)
        {
            play=true;
            $("#gameover").hide();
            $("#life-box").show();
            score=0;
            $("#score").html(score);
            $("#start").html("<p>reset game</p>")
            trailleft=3;
             liferemain();
             start_action();
        }
        else{
           location.reload();
        }
    }
 );
//  life box




});  

function liferemain()
{
    $("#life-box").empty();
    for(i=0;i<trailleft;i++)
    {
        $("#life-box").append('<img src="images/heart.png" class="life">');
    } 
};
$("#fruit1").mouseover(function(){
    score++;
    $("#score").html(score);
    clearInterval(action);
    $("#fruit1").hide("explode",200);
    setTimeout(start_action,800);
  
  });
function start_action()
{
    // genrate a fruit
   $("#fruit1").show();
   choosefruit();

   // random position
   
   $("#fruit1").css({'top':-50,'left':Math.round(400*Math.random())});
    step=1+Math.round(5*Math.random());
   
   //start downward action
   action = setInterval(function()
{
      //moving downward
      $("#fruit1").css('top',$("#fruit1").position().top +step);
   
   
  // check fruit is toolow
  if($("#fruit1").position().top > $("#question").height())
  {
    if(trailleft>1)
    {
        //genrate another fruit
        $("#fruit1").show();
        choosefruit();
        // create random position for the fruit
        $("#fruit1").css({'top':-50,'left':Math.round(400*Math.random())});
       //random step;
        step=1+Math.round(5*Math.random());
        
        trailleft--;
        liferemain();
    }
    else{
       play=false;
       $("#start").html("<p>start Game</p>");
       $("#gameover").show();
       $("#gameover").html('<p>game over!!</p><p>your score is :'+score+'</p>');
       $("#fruit1").hide();
       stopAction();
    }
  }

},10);
 

}

function stopAction()
{
    $(".life-box").hide();
    clearInterval(action);
}

function choosefruit()
{
    var x=fruits[Math.round(Math.random()*7)];
    
    $("#fruit1").attr('src','images/'+x+'.png ');

    
}

