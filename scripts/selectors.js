console.log('selectors.js loaded successfully')

function highlight(element) {
    element.css('background-color', '#fcf30040')
}

function cssSelectors() {
    $('p').css('background-color', '#2a9d8f');
    $('.red-box').css('background-color', '#2a9d8f');
    $('#list').css('font-size', '40px');

    $('li:even').css('background-color', '#fcf30040');
}

function traversingTheDOM() {
    //$('#list').prev().css('background-color', '#3a86ff');
    //$('#list').next().css('background-color', '#3a86ff');
    //$('#list').prev().next().css('background-color', '#3a86ff');

    $('#list').find('li').css('background-color', '#3/a866ff');
    //traverse up 1 level
    $('#list').parent('div').css('font-size', '24px');
    //traverse all the way up through all parents, grandparents etc.
    $('#list').parents('body').css('font-size', '24px');
}

function filtering() {
    $('list').find('li').filter(':even').css('background-color', '#3a56ff');

    $('list').find('li').filter(function (index) {
        return index % 2 === 0;
    }).css("background-color", "red");
}

function addingReplacingRemoving(){
    $("ul ul:first").append($("<li>I'm going to be the last item of the first sub-list</li>"));

    $("<li>I'm going to be the last item of the first sub-list</li>").appendTo($("ul ul:first"));

    //prepend(), prependTo()

    $('.red-box').after("<div class= 'red-box'>This is a new red box!</div>");

    let newText = 'Last night, Darth Vader came down from planet Vulcan';

    $('li').replaceWith('<li>'+newText+'</li>');

    //avoid 
    //$('li').remove();

    // use detach instead
    let detachedLIs = $('li').detach();
    $('body').append(detachedLIs);
}

// cssSelectors();
// traversingTheDOM();
// filtering();

//addingReplacingRemoving();