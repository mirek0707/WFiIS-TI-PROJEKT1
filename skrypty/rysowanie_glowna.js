/* funkcja wyrysowuj¹ca animacjê na stronie g³ównej */
function draw() {
    var canv = document.getElementById('rys1');
    if (canv!=null) 
    {
        var ctx = canv.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 300, 300);
        
        ctx.save();
        ctx.translate(150, 150);

        ctx.rotate((2 * Math.PI) / 500);

        ctx.moveTo(145, 0);
        ctx.beginPath();
        ctx.arc(125, 0, 20, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.stroke()

        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke()
        ctx.save();

        ctx.moveTo(125, 0);
        ctx.beginPath();
        ctx.arc(0, 0, 125, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.save();

        ctx.translate(-150, -150);
        
        window.requestAnimationFrame(draw);
    }
    else{
        window.cancelAnimationFrame(draw);
    }

}
window.requestAnimationFrame(draw);
