var counter = 30;

$('#start').on('click',function(){
    var play = setInterval(decrement, 1*1000);
    decrement();
    $('#hidden').show();
    $('#start').hide();
    $('#pic').hide();
})
function decrement(){
    
    if(counter>0){
    counter--;
    $('#time').text(counter); 
    }else if(counter==0){
        $('#content').text('Timer is Up!');
        $('#submit').attr('disabled',true);
        $('#hidden').hide();
        $('#finish').hide();
        $('#end').show();
        $('iframe').show();
        pointScore();
    }
$('#submit').on('click',function(){
    $(this).attr('value','please wait...');
    $(this).attr('disabled',true);
    $('#hidden').hide();
      $('#end').show();
      $('iframe').show();
      pointScore();
})


      function pointScore(){
      var correctPoint=0;
      var incorrectPoint=0;
      var noneAnswer=0;
        

        $('#correct').text(correctPoint);
        $('#wrong').text(incorrectPoint);
        $('#unanswered').text(noneAnswer);
        $('#time').text(counter);
   
		var ansOne = $("input[name='vegan']:checked").val();
    
		if (ansOne == 'right'){
            correctPoint++;
            $('#correct').text(correctPoint);
		}else if (ansOne == 'wrong'){
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        }else{
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        var ansTwo = $("input[name='cafe']:checked").val();
        if(ansTwo =='right'){
            correctPoint++;
            $('#correct').text(correctPoint);
		}else if (ansTwo == 'wrong'){
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        }else{
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }
        
        var ansThree = $("input[name='first']:checked").val();
        if(ansThree =='right'){
            correctPoint++;
            $('#correct').text(correctPoint);
		}else if (ansThree == 'wrong'){
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        }else{
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        var ansFour = $("input[name='sweet']:checked").val();
        if(ansFour =='right'){
            correctPoint++;
            $('#correct').text(correctPoint);
		}else if (ansFour == 'wrong'){
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        }else{
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        var ansFive = $("input[name='purchase']:checked").val();
        if(ansFive =='right'){
            correctPoint++;
            $('#correct').text(correctPoint);
		}else if (ansFive == 'wrong'){
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        }else{
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        var ansSix = $("input[name='grow']:checked").val();
        if(ansSix =='right'){
            correctPoint++;
            $('#correct').text(correctPoint);
		}else if (ansSix == 'wrong'){
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        }else{
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        var ansSeven = $("input[name='poop']:checked").val();
        if(ansSeven =='right'){
            correctPoint++;
            $('#correct').text(correctPoint);
		}else if (ansSeven == 'wrong'){
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        }else{
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }
       
      }
    
$('#time').text(counter);  



}

