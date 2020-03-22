function enterSite() {
    $("#landing").css("transform","translate(-200vw)");
    $("#dimmed-bg").css("visibility","visible");
    $("#dimmed-bg").css("transform","translate(0)");
    $("#above-fold").css("opacity","1");
    $("#full-site").css("visibility","visible");
    $("#full-site").css("overflow","visible");
    $("#full-site").css("max-height","auto");
    $("#register-side-bar").css("transform","translate(0)");
}

$("#visible-section").mouseenter(function () { openform() ;});
$("#form-section").mouseleave( function () { closeform(); });
$("#empty-section").mouseenter( function () { closeform(); });


function openform() {
    $("#register-side-bar").css("transform","translate(-450px)");
    $("#register-side-bar").css("transition-delay","0s");
    $("#register-side-bar").css("z-index","100");

    $("#call-num").css("opacity","0");
    $("#reg").css("opacity","0");

}

function closeform() {
    $("#register-side-bar").css("transform","translate(0)");
    $("#register-side-bar").css("z-index","0");
    $("#call-num").css("opacity","1");
    $("#reg").css("opacity","1");
}

(function manageTotalUsers() {


let totalUser = String(getRandom(100000,200000));
totalUser = addComma(totalUser);

addToTotalUser(totalUser);

function addToTotalUser(currentValue) {
    let num = Number(currentValue.replace(",",""));
    num++;
    num = String(num);
    num = addComma(num);
    $("#total-users").html(num);
    setTimeout(function () {
        addToTotalUser(num);

    },getRandom(100,2000));
    
}

function getRandom(min,max) {
    return Math.floor(Math.random() * (max-min) + min)
}

function addComma(num) {
    return num.slice(0,3) + num.slice(3,6)
}

})()