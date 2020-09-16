$(document).ready(function(){
    let navList = $('.navbar-nav').children()
    navList.removeClass('active')

    let sectionList = $('section')
    // console.log(navList[0])
    

    $(window).scroll(function() {

        
        let position = $(window).scrollTop()
        let navbarOffset = $('#my-jumbotron').height() - $('#my-jumbotron').offset().top

        // sectionList.forEach(function(list, index){
        //     $(navList[index]).addClass('active')
        // })
        
        if(position >= navbarOffset) {
            $('#my-navbar').addClass('fixed-top')
            $('#about-section').attr('style', 'padding-top:100px;padding-bottom:100px')
        } else {
            $('#my-navbar').removeClass('fixed-top')
            $('#about-section').removeAttr('style')
        }

        if(position > 700 && position < 1290) {

        }
    })
})