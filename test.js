var el = document.querySelector(".outside");

el.addEventListener("click", function(evt){
    var target = evt.target;
    console.log(target.className, target.nodeName);
    debugger;
});