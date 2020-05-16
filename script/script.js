'use strict';

window.onload=function(){
    // HTML DOM elements
    const
        text_input = document.getElementById("text"),
        separator = document.getElementById("separator"),
        arr_open = document.getElementById("arr_open"),
        arr_close = document.getElementById("arr_close"),
        wrapper = document.getElementById("wrapper"),
        make_btn = document.getElementById("make_btn"),
        output = document.getElementById("array_output");

    // Empty the text areas when use clicks for the first time
    let firstTime = true;
    text_input.onclick = function(){
        if(firstTime){
            resetInputOutput(text_input, output)
            firstTime = false;
        }
    }

    make_btn.onclick = function(){
        const items_array = splitItems(text_input.value, separator.value); 
        output.value = makeInlineOutput(items_array, wrapper.value, arr_open.value, arr_close.value);
    };
}

function resetInputOutput(input, output){
    input.innerHTML = "";
    output.innerHTML = "";
}

function splitItems(text, separator){
    if(separator == "\\n"){
        return text.split(/\n/g);
    }
    else{
        return text.replace(/\n/g,"").split(separator);
    }
}

function makeInlineOutput(items_array, wrapper, array_open, array_close){
    let output = array_open;
    for(let item = 0, items_length = items_array.length; item < items_length; item++){
        output += wrapper + items_array[item] + wrapper;
        if(item != (items_length - 1)){ // Not the last item
            output += ", "
        }
        else{
            output += array_close;
        }
    }
    return output;
}