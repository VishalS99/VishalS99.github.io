const canvas = document.getElementById("bg-design");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.imageSmoothingEnabled = true;

class Triangles{
    constructor(A, B, C, color) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.color = "#7E0152";
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.A.x, this.A.y)
        ctx.lineTo(this.B.x, this.B.y);
        ctx.lineTo(this.C.x, this.C.y);
        ctx.closePath()
        ctx.lineWidth = 10;
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(isUpdate) {
        this.color = isUpdate? "#ffb0d9" : "#7E0152";
    }
}

let a1 = {x: 0, y:window.innerHeight/4 + 250};
let b1 = {x: 0, y:window.innerHeight};
let c1 = {x: window.innerWidth/4, y:window.innerHeight};

let a2 = {x: 0, y:window.innerHeight};
let b2 = {x: window.innerWidth/7, y:window.innerHeight/2 + 120};
let c2 = {x: window.innerWidth/2.2, y:window.innerHeight};

let a3 = {x: window.innerWidth/4, y:window.innerHeight};
let b3 = {x: window.innerWidth/3, y:3*window.innerHeight/5 + 120};
let c3 = {x: window.innerWidth/2, y:window.innerHeight};

let a4 = {x: 3*window.innerWidth/4, y:window.innerHeight};
let b4 = {x: 2*window.innerWidth/3, y:3*window.innerHeight/5 + 120};
let c4 = {x: window.innerWidth/2, y:window.innerHeight};

let a5 = {x: window.innerWidth, y:window.innerHeight};
let b5 = {x: 6*window.innerWidth/7, y:window.innerHeight/2 + 120};
let c5 = {x: window.innerWidth - window.innerWidth/2.2, y:window.innerHeight};

let a6 = {x: window.innerWidth, y:window.innerHeight/4 + 170};
let b6 = {x: window.innerWidth, y:window.innerHeight};
let c6 = {x: 3*window.innerWidth/4, y:window.innerHeight};

let a7 = {x: window.innerWidth/3, y:window.innerHeight};
let b7 = {x: window.innerWidth/2, y:4*window.innerHeight/5};
let c7 = {x: 2*window.innerWidth/3, y:window.innerHeight};


let t1 = new Triangles(a1, b1, c1);
let t2 = new Triangles(a2, b2, c2);
let t3 = new Triangles(a3, b3, c3);
let t4 = new Triangles(a4, b4, c4);
let t5 = new Triangles(a5, b5, c5);
let t6 = new Triangles(a6, b6, c6);
let t7 = new Triangles(a7, b7, c7);


var x = canvas.width/2,
    y = 190,
    innerRadius = 50,
    outerRadius = 450,
    radius = 1000;

var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'black');

ctx.arc(x, y, radius, 0, 2 * Math.PI);

ctx.fillStyle = gradient;
ctx.fill();


function render(step, flag) {
        t1.update(step === 1? true: false);
        t2.update(step === 2? true: false);
        t3.update(step === 3? true: false);
        t7.update(step === 4? true: false);
        t4.update(step === 5? true: false);
        t5.update(step === 6? true: false);
        t6.update(step === 0? true: false);
        t1.draw();
        t2.draw();
        t3.draw();
        t7.draw();
        t4.draw();
        t5.draw();
        t6.draw();
    ctx.font = "2em Consolas";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Vishal Saranathan", canvas.width/2, canvas.height/2 - 40); 
}
let flag = false;
let step = 1;
render()
setInterval(() => {
    if(step%7 === 1) {
        flag = false;
    }
    else if (step%7 === 0) {
        flag = true;
    }
    if(flag) {--step;} else{++step;}
    render(step%7, flag);
    if(step%7 == 1 || step%7 == 0) {
        $("html").css("border", "10px solid #ffb0d9");
    } else {
        $("html").css("border", "10px solid #7E0152")
    }
}, 150)
