'use strict'
// Select color input
var colorInput = $('#colorPicker');

// Select size input
var inputHeight = $('#inputHeight').val();
var inputWeight = $('#inputweight').val();

// When size is submitted by the user, call makeGrid()
var submitSize = $('sizePicker');

submitSize.onsubmit = function(event){
    clearGrid();
    makeGrid();
}


function makeGrid() {

// Your code goes here!
    var pixelCanvas = $('#pixelCanvas');
    
     for (let r=0; r < inputHeight; r++){
            const row = pixelCanvas.insertRow(r);
         
            for (let c=0; c < inputWeight; c++){
                const cell = row.insertCell(c);
                cell.addEventListener("click", fillSquare);
            }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare(){
    this.setAttribute("style", `background-color: ${color.value}`);
}
