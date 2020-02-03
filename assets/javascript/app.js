let counter = 30;

$('#start').on('click', (e) => {
    let play = setInterval(decrement, 1 * 1000);
    decrement();
    $('#hidden').show();
    $('#start').hide();
    $('#pic').hide();
})

const decrement = () => {
    if (counter > 0) {
        counter--;
        $('#time').text(counter);
    } else if (counter == 0) {
        $('#content').text('Timer is Up!');
        $('#submit').attr('disabled', true);
        $('#hidden').hide();
        $('#finish').hide();
        $('#end').show();
        $('iframe').show();
        pointScore();
    }
    $('#submit').on('click', (e) => {
        e.preventDefault();
        $(this).attr('value', 'please wait...');
        $(this).attr('disabled', true);
        $('#hidden').hide();
        $('#end').show();
        $('iframe').show();
        pointScore();
    })


    const pointScore = () => {
        let correctPoint = 0;
        let incorrectPoint = 0;
        let noneAnswer = 0;


        $('#correct').text(correctPoint);
        $('#wrong').text(incorrectPoint);
        $('#unanswered').text(noneAnswer);
        $('#time').text(counter);

        let ansOne = $("input[name='vegan']:checked").val();

        if (ansOne == 'right') {
            correctPoint++;
            $('#correct').text(correctPoint);
        } else if (ansOne == 'wrong') {
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        } else {
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        let ansTwo = $("input[name='cafe']:checked").val();
        if (ansTwo == 'right') {
            correctPoint++;
            $('#correct').text(correctPoint);
        } else if (ansTwo == 'wrong') {
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        } else {
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        let ansThree = $("input[name='first']:checked").val();
        if (ansThree == 'right') {
            correctPoint++;
            $('#correct').text(correctPoint);
        } else if (ansThree == 'wrong') {
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        } else {
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        let ansFour = $("input[name='sweet']:checked").val();
        if (ansFour == 'right') {
            correctPoint++;
            $('#correct').text(correctPoint);
        } else if (ansFour == 'wrong') {
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        } else {
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        let ansFive = $("input[name='purchase']:checked").val();
        if (ansFive == 'right') {
            correctPoint++;
            $('#correct').text(correctPoint);
        } else if (ansFive == 'wrong') {
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        } else {
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        let ansSix = $("input[name='grow']:checked").val();
        if (ansSix == 'right') {
            correctPoint++;
            $('#correct').text(correctPoint);
        } else if (ansSix == 'wrong') {
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        } else {
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

        let ansSeven = $("input[name='poop']:checked").val();
        if (ansSeven == 'right') {
            correctPoint++;
            $('#correct').text(correctPoint);
        } else if (ansSeven == 'wrong') {
            incorrectPoint++;
            $('#wrong').text(incorrectPoint);
        } else {
            noneAnswer++;
            $('#unanswered').text(noneAnswer);
        }

    }

    $('#time').text(counter);



}

