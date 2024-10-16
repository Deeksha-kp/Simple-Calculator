txt = ""
setInput = (e) => {
    txt += e.target.textContent
    inp.value = txt
}
resultValue = () =>{

    // try{
    //     txt=eval(txt)
    //     inp.value=txt
    // }
    // catch(e){
    //     console.log(e);
    //     txt=e
    // }
    txt=eval(txt)
    inp.value=txt
}
clearInp = () => {
    txt = ""
    inp.value = txt
}