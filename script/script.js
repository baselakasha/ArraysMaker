class app {
    constructor(elements) {
        this.text = elements.text.value;
        this.separator = elements.separator.value;
        this.arr_open = elements.arr_open.value;
        this.arr_close = elements.arr_close.value; 
        this.warpper =  elements.warpper.value;
    }
    getItems(){
        if(this.separator == "\\n"){
            return this.text.split(/\n/g);
        }
        else{
            return this.text.replace(/\n/g,"").split(this.separator);
        }
    }
    make() {
        let items = this.getItems();
        let array_text = this.arr_open; 
        for(let i = 0, l = items.length; i < l; i++){
            array_text += this.warpper + items[i] + this.warpper;
            if(!(i == l - 1)){
                array_text += ", "
            }
            else{
                array_text += this.arr_close;
            }
        }
        return array_text;
    }
}

window.onload=function(){
    let elements = {
        text : document.getElementById("text"),
        separator : document.getElementById("separator"),
        arr_open : document.getElementById("arr_open"),
        arr_close : document.getElementById("arr_close"),
        warpper : document.getElementById("warpper"),
        btn : document.getElementById("make_btn"),
        output : document.getElementById("array_output"),
        reset : function(){
            this.text.innerHTML = "";
            this.output.innerHTML = "";
        }
    }
    // Empty the text areas when use clicks for the first time
    let firstTime = true;
    elements.text.onclick = function(){
        if(firstTime){
            elements.reset();
            firstTime = false;
        }
    }
    elements.btn.onclick = function(){
        let newApp = new app(elements);
        elements.output.value = newApp.make();
    };
}