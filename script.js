$(".margins").hover(
    function() {
        console.log($(this).children()[1])
      $(this).children(".front").toggleClass("hover")
    }
);

document.getElementById("pop").onclick = () =>{
    document.getElementById("pop").style.backgroundColor="black";
    document.getElementById("new").style.backgroundColor="#A3A3A3";
    document.getElementById("seller").style.backgroundColor="#A3A3A3";
    document.getElementById("popular").style.display="block";
    document.getElementById("bestseller").style.display="none";
    document.getElementById("newbook").style.display="none";
} 

document.getElementById("seller").onclick = () =>{
    document.getElementById("seller").style.backgroundColor="black";
    document.getElementById("new").style.backgroundColor="#A3A3A3";
    document.getElementById("pop").style.backgroundColor="#A3A3A3";
    document.getElementById("bestseller").style.display="block";
    document.getElementById("popular").style.display="none";
    document.getElementById("newbook").style.display="none";
} 

document.getElementById("new").onclick = () =>{
    document.getElementById("new").style.backgroundColor="black";
    document.getElementById("pop").style.backgroundColor="#A3A3A3";
    document.getElementById("seller").style.backgroundColor="#A3A3A3";
    document.getElementById("newbook").style.display="block";
    document.getElementById("bestseller").style.display="none";
    document.getElementById("popular").style.display="none";
} 