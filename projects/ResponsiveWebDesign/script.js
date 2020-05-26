let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good evening, my name is CHIENWIE CLOUVIS SUH. You are welcome to my page.!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon, my name is CHIENWIE CLOUVIS SUH. You are welcome to my page.!';
} else if (hourNow > 0) {
    greeting = 'Good morning, my name is CHIENWIE CLOUVIS SUH. You are welcome to my page.!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');