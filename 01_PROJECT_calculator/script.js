let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let text = e.target.innerHTML;

        if (text == '=') {
            string = eval(string);
            input.value = string;
        } 
        else if (text == 'AC') {
            string = "";
            input.value = string;
        }
        else {
            string += text;
            input.value = string;
        }
    })
})
