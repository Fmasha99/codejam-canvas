window.onload = init;

function init() {
    var A = [
        ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"],
        ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
        ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
        ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"]
    ];
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    width = A[0].length,
    height = A.length,
    scale = 128;

    canvas.width = width * scale; 
    canvas.height = height * scale; 

    for(var row = 0; row < height; row++) {
        for(var col = 0; col < width; col++) {
            ctx.fillStyle = A[row][col]; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
        }
    }
}

window.onclick = changeImage;

document.getElementById('clickImage1').onclick = function changeImage() {
    return init();
}

document.getElementById('clickImage3').onclick = function changeImage() {
    document.getElementById('thirdImage').classList.toggle('show');
}
