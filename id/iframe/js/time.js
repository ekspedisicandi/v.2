/*$(function() {
  $('a[href*=#section1]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=#section' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});*/

$('#section').click(function () {
    window.location = '#section1';
});
function show(){
var Digital=new Date()
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var dn="" 
if (hours>12){
dn=""
hours=hours-12
}
if (hours==0)
hours=12
if (minutes<=9)
minutes="0"+minutes
document.Tick.Clock.value=hours+":"+minutes+
" "+dn
setTimeout("show()",1000)
}
show()
