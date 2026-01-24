

window.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and ready!');
    console.log(window.location.href);
    localStorage.setItem('test', 'hello world');
    sessionStorage.setItem('sessionTest', 'session hello world');        
});