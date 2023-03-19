function fun(color){
    var id=document.getElementsByClassName("name");
    document.body.style.backgroundColor=color;
    var text=document.getElementsByClassName("para")
    if(color=='black'){
        for(var elm of text){
            elm.style.color='white';
        }
    }
    else{
        for(var elm of text){
            elm.style.color='black';
        }
    }
}