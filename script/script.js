'use strict';

window.onload=function(){
    // HTML DOM elements
    const
        text_input = document.getElementById("text"),
        separator = document.getElementById("separator"),
        arr_open = document.getElementById("arr_open"),
        arr_close = document.getElementById("arr_close"),
        wrapper = document.getElementById("wrapper"),
        inline_array_check = document.getElementById("inline-array-check"),
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
        output.value = makeOutput(items_array, wrapper.value, arr_open.value, arr_close.value, inline_array_check.checked);
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

function makeOutput(items_array, wrapper, array_open, array_close, inline){
    const new_line = inline ? "" : "\n"; // No newlines if 'inline' is false
    let output = array_open + new_line;
    for(let item = 0, items_length = items_array.length; item < items_length; item++){
        output += wrapper + items_array[item] + wrapper;
        if(item != (items_length - 1)){ // if Not the last item
            output += ", " + new_line;
        }
        else{
            output += new_line + array_close;
        }
    }
    return output;
}