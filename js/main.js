$(document).ready(function (){
    let a = "";
    let b = "";
    let math = "";
    let boolean = true;
    let result = 0;
   $(".number").click(function (){
       a += $(this).val();
       $("#screen").html(a);
   });
   $("#plus").click(function (){
       if (boolean){
           b += a;
           a = "";
           math = $(this).html();
           // result = 0;
           // $("#screen").html(result);
           boolean = false;
       }
   });
    $("#minus").click(function (){
        if (boolean){
            b += a;
            a = "";
            math = $(this).html();
            // result = 0;
            // $("#screen").html(result);
            boolean = false;
        }
    });
    $("#multiply").click(function (){
        if (boolean){
            b += a;
            a = "";
            math = $(this).html();
            // result = 0;
            // $("#screen").html(result);
            boolean = false;
        }
    });
    $("#divide").click(function (){
        if (boolean){
            b += a;
            a = "";
            math = $(this).html();
            // result = 0;
            // $("#screen").html(result);
            boolean = false;
        }
    });


   $("#equal").click(function (){
       if (math === "+"){
           result = parseFloat(a) + parseFloat(b);
           $("#screen").html(result);
           a = "";
           b = "";
           math = "";
           boolean = true;
       }
       else if(math === "-"){
           result = parseFloat(b) - parseFloat(a);
           $("#screen").html(result);
           a = "";
           b = "";
           math = "";
           boolean = true;
       }
       else if(math === "*"){
           result = parseFloat(b) * parseFloat(a);
           $("#screen").html(result);
           a = "";
           b = "";
           math = "";
           boolean = true;
       }
       else if (math === "/"){
           result = parseFloat(b) / parseFloat(a);
           $("#screen").html(result);
           a = "";
           b = "";
           math = "";
           boolean = true;
       }
   });
   $("#clear").click(function (){
       $("#screen").html('0');
       a = "";
       b = "";
       math = "";
       boolean = true;
   });

});