let current = 0;
const slides = document.querySelectorAll('.slide');

const text = "Terimakasih banyak kak, sudah menemani dan membimbing kami sejauh ini. Semoga kakak sehat selalu dan sukses terus yah!✨";
let i = 0;
let typingTimer = null;


   document.body.addEventListener("click", () => {
    const music = document.getElementById('bgMusic');
    const icon = document.getElementById('musicIcon');

    if(music && music.paused){
        music.volume = 0;
        music.play();

        if(icon){
            icon.innerHTML = "⏸";
        }

        let vol = 0;
        const fade = setInterval(()=>{
            if(vol < 0.4){
                vol += 0.02;
                music.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 100);
    }
}, { once: true });

function toggleMusic(){
    const music = document.getElementById('bgMusic');
    const icon = document.getElementById('musicIcon');

    if(!music) return;
        if(music.paused){
            music.play();
            if(icon) icon.innerHTML = "⏸";
        } else {
            music.pause();
            if(icon) icon.innerHTML = "▶";
        }
    }



/* SHOW SLIDE */
function showSlide(index){
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');

    if(index === 2){
        showVoiceChats();
    }

    if(index === 3){
        runFinalSlide();
    }
}

/* NEXT SLIDE */
function nextSlide(){
    current++;
    if(current >= slides.length){
        current = slides.length - 1;
    }
    showSlide(current);
}

/* FINAL SLIDE */
function runFinalSlide(){
    const items = document.querySelectorAll('.final-slide .reveal-item');
    items.forEach(el => el.classList.remove('show'));

    const typing = document.getElementById("typing");
    typing.innerHTML = "";
    typing.classList.remove('done');

    if(typingTimer) clearTimeout(typingTimer);
    i = 0;

    setTimeout(() => {
        document.querySelector('.badge').classList.add('show');
    }, 200);

    setTimeout(() => {
        document.querySelector('.final-title').classList.add('show');
    }, 600);

    setTimeout(() => {
        document.querySelector('.divider').classList.add('show');
    }, 1400);

    setTimeout(() => {
        typing.classList.add('show');
        typeWriter();
    }, 1800);
}

/* TYPE WRITER */
function typeWriter(){
    const el = document.getElementById("typing");

    if(i < text.length){
        el.innerHTML += text.charAt(i);
        i++;
        typingTimer = setTimeout(typeWriter, 40);
    } else {
        el.classList.add('done');

        setTimeout(() => {
            document.getElementById('wishes').classList.add('show');
        }, 500);

        setTimeout(() => {
            document.getElementById('signature').classList.add('show');
        }, 1300);

        setTimeout(() => {
            document.getElementById('restartBtn').classList.add('show');
        }, 2100);
    }
}


/* RESTART */
function restartShow(){
    current = 0;
    showSlide(0);
}

/* VOICE CHAT */
function showVoiceChats(){
    const chats = document.querySelectorAll('.voice-chat');
    const container = document.querySelector('.voice-container');

    chats.forEach(chat => chat.classList.remove('show'));

    chats.forEach((chat, index) => {
        setTimeout(() => {
            chat.classList.add('show');
            container.scrollTop = container.scrollHeight;
        }, index * 500);
    });
}

/* buka amplop */
function openEnvelope(){
    const wrapper = document.getElementById('envelopeWrapper');
    const hint = document.getElementById('hintText');
    const nextBtn = document.getElementById('nextEnvelope');

    if(wrapper.classList.contains('open')) return;

    wrapper.classList.add('open');

    if(hint){
        hint.style.display = "none";
    }

    setTimeout(() => {
        nextBtn.style.display = "inline-block";
    }, 100);
}