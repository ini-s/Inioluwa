function hideSideNav(){
    $('.side-nav').hide()
    $('.overlay').hide()
    $('#harmbuger').show()
}
function showSideNav(){
    $('.overlay').show()
    $('.side-nav').show()
    $('#harmbuger').hide()
}
$(document).ready(
    ()=>{
    $('.overlay').hide()
})
$('#harmbuger').click(()=>{
   showSideNav()
})
$('#close').click(()=>{
    hideSideNav()
})
$('.side-nav-link').click(()=>{
    hideSideNav()
})

const scroll = 700
function scrollContainer(){
    return document.documentElement || document.body
}
function goToTop (){
    return document.body.scrollIntoView()
}
$(document).scroll(()=>{
    if (scrollContainer().scrollTop > scroll){
        $('.back-to-top-btn').css('visibility','visible')
    }
    else{
        $('.back-to-top-btn').css('visibility','hidden')
    }
})
$('.back-to-top-btn').click(()=>
    goToTop()
)