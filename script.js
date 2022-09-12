// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", function() {

    header.classList.toggle ("sticky", window.scrollY > 0);

});

// Scroll to Top

const scrollBtn = document.querySelector('.scroll-btn') ;

window.addEventListener('scroll', () => {

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        scrollBtn.style.display = 'block' ;

    }

    else {

        scrollBtn.style.display = 'none' ;

    }

});

scrollBtn.addEventListener('click' , () => {

    window.scrollTo(0, 0);

});

// Contact Form

const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())

    if (!name.length <= 0 || !email.length <= 0 || !msg.length <= 0) {

        alert("Your E-mail was succesfully delivered.")
        return

    }

    Email.send({

        SecureToken: "b981731d-b58b-454d-826a-1864e6ef4819",
        To: "kjccobrado.cvt@eac.edu.ph",
        From: inputs.elements["email"].value,  
        Subject: "Contact Me Query by the Customer",
        Body: inputs.elements["name"].value + "<br>" + inputs.elements["email"].value + "<br>" + inputs.elements["message"].value

    }).then(msg => alert("All boxes are required to be answered."))
    
});