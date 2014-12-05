var defaults = document.getElementsByClassName('default');

for(var i = 0; i < defaults.length; i++){
    var collapse = document.createElement('a');
    collapse.innerHTML = ' [-] ';
    collapse.className = 'collapse';
    collapse.onclick = (function(collapse, comment){
        return function(){
            if(comment.classList.contains("hidden")){
                comment.classList.remove("hidden");
                collapse.innerHTML = ' [-] ';
            } else{
                comment.classList.add("hidden");
                collapse.innerHTML = ' [+] ';
            }
        }
    })(collapse, defaults[i].getElementsByClassName("comment")[0]);

    var div = defaults[i].getElementsByTagName("div")[0];
    div.insertBefore(collapse, div.firstChild);
}

