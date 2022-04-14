let my_score = 0;
let machine_score = 0;
let my_hand = 0;
let machine_hand = 0;
let aiko = 0;
let previous_my_score = Number(localStorage.getItem("my_score"));
let previous_machine_score = Number(localStorage.getItem("machine_score"));

if(previous_my_score && previous_machine_score){
    my_score = previous_my_score;
    machine_score = previous_machine_score;
}

$("#buttons").hide();

function sleep(msec) {
    return new Promise(function(resolve) {
       setTimeout(function() {resolve()}, msec);
    })
 }

 async function delay(src,text, aiko_param, time) {
    await sleep(time);
    $("#image img").attr('src', src);
    $("#comment h1").html(text);
    if(aiko_param === 0){      
        $("#control").fadeIn(500);
        $("#comment h2").html(score());
    } else{
        $(".gu").fadeIn(500);
        $(".choki").fadeIn(500);
        $(".pa").fadeIn(500);   
    }
 }

 async function audio_delay(audio_id, time) {
    await sleep(time);
    document.getElementById(audio_id).play();
 }

function score(){
    return "ボク 　 キミ<br> " + machine_score + " vs " + my_score;
}

$("#control").on("click", function () {
    $("#control").fadeOut(500);
    $("#machine img").attr('src', 'image/janken_gu.png'); 
    $("#image img").attr('src', 'image/dance_shifuku3.png');
    $(".gu").fadeIn(500);
    $(".choki").fadeIn(500);
    $(".pa").fadeIn(500);  
    $("#buttons").fadeIn(500);
    $("#comment h1").html("じゃんけん");
    document.getElementById("jankenpon").play();
});

$(".gu").on("click", function () {
    my_hand = 0;
    $(".choki").fadeOut(100);
    $(".pa").fadeOut(100);
});
$(".choki").on("click", function () {
    my_hand = 1;
    $(".pa").fadeOut(100);
    $(".gu").fadeOut(100);
});
$(".pa").on("click", function () {
    my_hand = 2;
    $(".gu").fadeOut(100);
    $(".choki").fadeOut(100);
});

$(".gu, .choki, .pa").on("click", function () {
    if(aiko === 0){
        $("#comment h1").html("ぽん");
    } else{
        $("#comment h1").html("しょ");
    }
    machine_hand = Math.floor(Math.random() * 3);
    if (machine_hand === 0) {
        $("#machine img").attr('src', 'image/janken_gu.png');
    } else if(machine_hand === 1){
        $("#machine img").attr('src', 'image/janken_choki.png');
    } else if(machine_hand === 2){
        $("#machine img").attr('src', 'image/janken_pa.png');
    }
    
    if(my_hand === (machine_hand+1)%3){
        delay('image/banzai_kids_boy1.png', "勝った〜!!", aiko = 0, 1000);
        audio_delay("yatta", 1000);
        machine_score += 1;
        localStorage.setItem("machine_score", machine_score);

    } else if(my_hand === (machine_hand+2)%3){
        delay('image/cry_naku_boy.png', "負けた〜!!", aiko = 0, 1000);
        audio_delay("maketa", 1000);
        my_score += 1;
        localStorage.setItem("my_score", my_score);
    }else{
        delay('image/dance_shifuku3.png', "あいこで", aiko = 1, 1000);
        audio_delay("aikodesho", 1500);
    }
});



