


var textar = document.querySelector("textarea");
var para=document.getElementById("para");


textar.addEventListener("input",function(){

    var len=textar.value.length;
    para.innerHTML=len;
});




/*
<textarea class="form-control" rows="10" maxlength="50"></textarea>
<p id="para"></p>

#para {
    border: 2px solid gray;
    padding: 8px;
    font-size: 22px;
    width: 89px;
    text-align: center;
    font-weight: 600;
    margin-left: 688px;
    margin-top: 7px;
    height: 52px;
}


var textarea = document.querySelector("textarea");
var para=document.getElementById("para");


textarea.addEventListener("input", function(){
    var maxlength = this.getAttribute("maxlength");
    var currentLength = this.value.length;

    if( currentLength >= maxlength ){
        para.innerHTML="You have reached the maximum number of characters."
    }else{
        para.innerHTML= maxlength - currentLength + " chars left";//48
    }
});*/