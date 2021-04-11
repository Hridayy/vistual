canvas=document.getElementById("mycanvas").value;
ctx= canvas.get_Context("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth="1";
ctx.arc(200,200,40,0,2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth="1";
ctx.arc(240,140,40,0,2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth="1";
ctx.arc(400,190,40,0,2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth="1";
ctx.arc(210,100,40,0,2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth="1";
ctx.arc(160,140,40,0,2);
ctx.stroke();