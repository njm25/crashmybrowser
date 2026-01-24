

window.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and ready!');
    console.log(window.location.href);
    localStorage.setItem(btoa(num.toString()), btoa((num + 1).toString()));
    sessionStorage.setItem('sessionTest', 'session hello world');        
    // generateBs();
});

function generateBs(){
    let i = 0;
    while(true){


        i = i + 2;
    }
}

function generateB64FromInt(num){
    return 
}
