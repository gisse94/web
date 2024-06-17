function myFunction(){
    const p= document.getElementById("PrimeroP")
    const p2= document.getElementById("SegundoP")
    const p3= document.getElementById("TerceroP")
    var x=document.getElementById("mySearch");
    let inputValue=document.getElementById("mySearch").value;
    p.innerText="Esto es un texyo simple";
    p2.innerHTML="<h1> Vamos a entender a JavaScrip</h1>";
    p3.innerText=inputValue;

}
window.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
    alert('prohibido')
}
);
    


