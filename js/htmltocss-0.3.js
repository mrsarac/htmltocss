$(document).ready(function(){

 $(function () {
     // Show element tags
     showTag = 0;
     $("#tags").click(function () {
          if ($("#tags").is(':checked')) {
             showTag = 1;
         } else {
             showTag = 0;
         }
     });
     
    // Add comments 
    comments = 0;     
    $("#comments").click(function () {
          if ($("#comments").is(':checked')) {
             comments = 1;
         } else {
             comments = 0;
         }
     });
            
 });




$("#send").click(function () {
$("textarea#textid").keyup(function () {

     var $content = $($('<div/>').html($.trim(this.value)));
         ids = "";
     classes = "";
     styles  = "";

     $content.find('[id]').each(function () {

         if (comments == 1) {
            // Comments and Uppers
            ids += "/* " + this.id.toUpperCase() + " AREA */ \n" ;         
          }
         
         if (showTag == 1) {
             // Tags lowers             
             ids += "" + this.tagName.toLowerCase();
         }
         
         ids += "#" + this.id + "{} \n";
     });

     $content.find("[class]").each(function () {
       
       var ic = $(this).attr('class').split(" ").join(' {} \n.');    
     
         if (showTag == 1) {
             // Tags lowers
             classes += "" + this.tagName.toLowerCase();
         }
         
       classes += "." + ic + " {} \n";


     });
     
  
  
     $("textarea#textid2").text(ids + classes);
     $("#textid2").addClass("active");
 }).keyup();

})
 

});