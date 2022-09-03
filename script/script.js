$(".hiring_items>div").on("click", function(){
    $(this).children(".hiring_ikon"). toggleClass("hiring-rotate_icon");
    $(this).parent(".hiring_items"). toggleClass("cheng_color");
   $(this).next(".hiring_text").slideToggle(300);
})

$(".features-info>div").on("click",function(){
    $(this).children(".features-info_icon").toggleClass("features-info_icon--blue")
    $(this).children(".features-info_title").toggleClass("features-info_title-color")
    $(this).parent(".features-info").toggleClass("features-info-border")
    $(this).next(".features-info_description").slideToggle(300);
})