const canvas = document.getElementById("bg-design");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight


class Triangles{
    constructor(A, B, C, color) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.color = "#fd55c2";
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
        this.color = isUpdate? "#7E0152" : "#fd55c2";
    }
}

let a1 = {x: 0, y:window.innerHeight/3 + 200};
let b1 = {x: 0, y:window.innerHeight};
let c1 = {x: window.innerWidth/3, y:window.innerHeight};

let a2 = {x: 0, y:window.innerHeight};
let b2 = {x: window.innerWidth/7, y:window.innerHeight/2 + 100};
let c2 = {x: window.innerWidth/2.2, y:window.innerHeight};

let a3 = {x: window.innerWidth/4, y:window.innerHeight};
let b3 = {x: window.innerWidth/3, y:3*window.innerHeight/5 + 150};
let c3 = {x: 3*window.innerWidth/4, y:window.innerHeight};

let a4 = {x: 3*window.innerWidth/4, y:window.innerHeight};
let b4 = {x: 2*window.innerWidth/3, y:3*window.innerHeight/5 + 150};
let c4 = {x: window.innerWidth/4, y:window.innerHeight};

let a5 = {x: window.innerWidth, y:window.innerHeight};
let b5 = {x: 6*window.innerWidth/7, y:window.innerHeight/2 + 100};
let c5 = {x: window.innerWidth - window.innerWidth/2.2, y:window.innerHeight};

let a6 = {x: window.innerWidth, y:window.innerHeight/3 + 200};
let b6 = {x: window.innerWidth, y:window.innerHeight};
let c6 = {x: 2*window.innerWidth/3, y:window.innerHeight};

let t1 = new Triangles(a1, b1, c1);
let t2 = new Triangles(a2, b2, c2);
let t3 = new Triangles(a3, b3, c3);
let t4 = new Triangles(a4, b4, c4);
let t5 = new Triangles(a5, b5, c5);
let t6 = new Triangles(a6, b6, c6);

let port = new  Image();
port.src = "./pf_img.jpg"

port_pos = {
    x: canvas.width / 2 - 200,
    y: canvas.height / 15 - 20
}
port.onload = () => {
    ctx.drawImage(port, port_pos.x, port_pos.y, 400,400);
}

function render() {
    let step = Math.floor((new Date() - time)/200)%6;
    t1.update(step === 1? true: false);
    t2.update(step === 2? true: false);
    t3.update(step === 3? true: false);
    t4.update(step === 4? true: false);
    t5.update(step === 5? true: false);
    t6.update(step === 0? true: false);
    t1.draw();
    t2.draw();
    t3.draw();
    t4.draw();
    t5.draw();
    t6.draw();   
    ctx.font = "2em Consolas";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Vishal Saranathan", canvas.width/2, canvas.height/2); 
}
let time = new Date();
render()
setInterval(render, 200)
