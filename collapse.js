var defaults = document.getElementsByClassName('default');

for(var i = 0; i < defaults.length; i++){
    var collapse = document.createElement('a');
    collapse.innerHTML = ' [-] ';
    collapse.className = 'collapse';
    collapse.onclick = (function(collapse, comment, indent){
        return function(){
            if(comment.classList.contains("hidden")){
                comment.classList.remove("hidden");
                collapse.innerHTML = ' [-] ';
            } else{
                comment.classList.add("hidden");
                collapse.innerHTML = ' [+] ';
            }

            var currentRow = comment.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling;
            while(currentRow){
                var currentRowIndent = currentRow.getElementsByTagName("img")[0].width;
                if(currentRowIndent > indent){
                    currentRow.classList.toggle("hidden");
                    currentRow = currentRow.nextSibling;
                } else{
                    break;
                }
            }
        }
    })(collapse, defaults[i].getElementsByClassName("comment")[0], defaults[i].parentNode.getElementsByTagName("img")[0].width);

    var div = defaults[i].getElementsByTagName("div")[0];
    div.insertBefore(collapse, div.firstChild);
}

