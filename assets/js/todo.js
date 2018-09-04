//check off on click -long version:)
//$('li').on('click', function(){
//    //first check what color text now
//    if ($(this).css('color') === "rgb(128, 128, 128)") {
//            $(this).css({
//            color: 'black',
//            textDecoration: 'none'
//            })
//    } 
//    else {
//            $(this).css({
//            color: 'gray',
//            textDecoration: 'line-through'
//            })
//                    
//    }
//})

// Simple way check off on click!!

// we need to put eventlistener up 1 level of DOM (on ul, not on li) becose if we add new li - it wont work!
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

//Click on bin to delete
$('ul').on('click', '.bin', function(event){
        $(this).parent().fadeOut(300, function(){
            $(this).parent().remove
        });
        //не позволяет этому событию активировать другие события вверх по ДОМ (bubbling), т.е здесь не будет активировать зачеркивание текста из li, в которое встравлен этот span 
        event.stopPropagation();                
});

//Click on cal to add date
$('ul').on('click', '.cal', function(event){
        $(this).text(dateAdd())
        //не позволяет этому событию активировать другие события вверх по ДОМ (bubbling), т.е здесь не будет активировать зачеркивание текста из li, в которое встравлен этот span 
        event.stopPropagation();                
});

function dateAdd () {
    var date = prompt('Add date (dd.mm.yy)');
    console.log(date.length);
    if (date.length === 8) {
        return date;
    } else {
        alert('Wrong date format')
    }  
};



$('input[type="text"]').keypress(function(event){
    if (event.which === 13){
        // we take text from input with val
        var todoText = $(this).val();
        // make new li, add val inside
        $('ul').append("<li> <span class='bin'><i class='far fa-trash-alt'></i></span> " + todoText + " <span class='cal'>Date</span></li>");
        //clear input
        $(this).val('');
    } 
    
});

// open input for new todo
$('.fa-plus').on('click', function(){
    $('input').slideToggle();
})

