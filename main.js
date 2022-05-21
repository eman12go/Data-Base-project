var search = document.getElementById('search');
var filter = document.querySelector('.filter');
var select = document.querySelector('.filter');

// search.onclick = ()=>{
//     filter.classList.toggle('show');
// }


 $(".content2").on("click",'.close',function(){
    $(this).parent().parent().hide(100);
    
 });
 $(".select").on("change",function(){
    
    $('.content').hide(1000);
    $('.content2').show(1000);
    
});

let x=0;
var  cloneTemplate ;

 $(".select2").on("change",function(){
    
    var SelectedText = $('option:selected',this).text();
    if (x>0 && x<4){
         cloneTemplate = $(".closeDiv:eq(0)").clone();
         $(".cont").append(cloneTemplate);
     }
    document.getElementById('displayfilter').innerHTML = SelectedText;
    $('.content').hide(1000);
    $('.closeDiv:eq('+x+') ').show(1000); 
    $('.content2').show(1000);
  x++;

});
// function add() {  
//     cloneTemplate = $(".closeDiv:eq("+x+")").clone();
//     $('.closeDiv:eq('+x+') ').show(1000); 
// // cloneTemplate = $(".closeDiv:eq("+x+")").clone();
// $(".cont").append(cloneTemplate); 
// if (x>0 && x<6){
// // cloneTemplate = $(".closeDiv:eq("+x+")").clone();
//  $(".cont").append(cloneTemplate);
// //  $('.closeDiv:eq(0)').hide(); 
// console.log(x)
// }x++;}