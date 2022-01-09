const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let color = "orange";
// let hue = 0;
// let drawing = false;


window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('click', function (event) {
    mouse.x = event.x
    mouse.y = event.y
    for (let i = 0; i < 1; i++) {
        if (particlesArray.length === 10) {
            particlesArray.pop();
            particlesArray.splice(0, 0, new Particle())
        } else {
            particlesArray.push(new Particle())

        }
        console.log(particlesArray)
    }
})



// window.addEventListener('mousemove', function (event) {
//     if (drawing) {

//         mouse.x = event.x
//         mouse.y = event.y
//         for (let i = 0; i < 1; i++) {
//             particlesArray.push(new Particle());
//         }


//     }
// })

// window.addEventListener('mousedown', function () {
//     drawing = true;
// })
// window.addEventListener('mouseup', function () {
//     drawing = false;
// })



class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = 25;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = color;
        // this.color = 'hsl(' + hue + ',100%, 50%)'
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // if (this.size > 0.2) this.size -= 0.075;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}



function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy)
            // Pythagorean theorem 
            if (distance < 275) {
                ctx.beginPath();
                ctx.strokeStyle = color
                ctx.lineWidth = 10
                ctx.shadowColor = color;
                ctx.shadowBlur = 15;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                ctx.stroke();
            }
        }
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function init() {
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            mouse.x = Math.random() * canvas.width;
            mouse.y = Math.random() * canvas.height;
            particlesArray.push(new Particle())
        }

    }, 5000)
}
// init();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "rgba(0,0,0,0.05)";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Adding Trails
    handleParticles();
    // hue += 1;
    requestAnimationFrame(animate);
}

animate();