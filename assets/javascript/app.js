var counter = 10;
correctPoint=0;
incorrectPoint=0;
noneAnswer=0;

$('#correct').text(correctPoint);
$('#wrong').text(incorrectPoint);
$('#unanswered').text(noneAnswer);
$('#time').text(counter);



function decrement(){
    var play = setInterval(decrement, 1*1000);
    if(counter>0){
    counter--;
    $('#time').text(counter); 
    }else if(counter==0){
        $('#content').text('Timer is Up!');
        $('#submit').attr('disabled',true);
    }
$('#submit').on('click',function(){
    $(this).attr('value','please wait...');
    $(this).attr('disabled',true);
    $('#hidden').hide();
    $('#end').show();
    
})

    
    
$('#time').text(counter);  
}

$('#start').on('click',function(){
    decrement();
    $('#hidden').show();
    $('#start').hide();
})
