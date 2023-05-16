const btn = document.querySelector('.btn');
const div = document.querySelector('.blog');

console.log(div);


btn.addEventListener('click', function (event){
    event.preventDefault();

    div.insertAdjacentHTML('beforeend', "<h1>Hello, World!</h1><p>This is some HTML content.</p>");\
    console.log(div);


});

console.log(btn);

// I need a todo list

//we need a button

//we need a div to contain the lists

//put a ul inside the div that will house each list item as a <li>

//create a variable to locate the btn

//create a variable to locate the blog

//set it up so when we click on a button we do something

//add event listener to button

//prevent button refresh

//do something in the function callback

//add html to our div on button click