// Register Functionality
async function register() {
    const formData = new FormData();
    formData.append('firstName', document.getElementById('firstName').value);
    formData.append('lastName', document.getElementById('lastName').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);

    try {
        const response = await fetch('http://localhost/web_programing_project/register.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();
        alert(result);

        if (response.ok) {
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}



/*------------------------------------------------------------------------*/

// Login Functionality
async function login() {
    const formData = new FormData();
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);

    try {
        const response = await fetch('http://localhost/web_programing_project/login.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();
        alert(result);

        if (response.ok && result.includes('Login successful')) {
            window.location.href = 'user.html';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


/*------------------------------------------------------------------------*/

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})