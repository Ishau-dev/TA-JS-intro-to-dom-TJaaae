// 1. Change the title of the page to `Hello AltCampus!`
   
   document.title.innerText='Hello AltCampus';
// 2. Select the element using the children property:

//    - Select the `h1` element and change the value to `Learning DOM`
document.body.firstElementChild.innerText="Learning DOM"
//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
document.body.children[5].firstElementChild.innerText="all about Document"
//    - Select the input element with name `email`
document.body.children[6].children[2]
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
console.log(document.body.children[5].children.length);
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput= document.body.querySelector('input');
// 5. Select the ul element using class selector and store in `topics`
let topics = document.body.querySelector('.topics')
// 6. Select the first label element and store in `label`
let label = document.body.children[6].children[1];
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.body.querySelector('#remember');
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
document.body.querySelector('input[type="password"]');
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
document.body.querySelector('input[placeholder="password"]');
// 10. Select all the `li` element and store in `allTopics`
let allTopics = document.body.querySelectorAll('li');
// 11. Select all the input element of any type and store in `allInput`
let allInput = document.body.querySelectorAll("input");
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
allTopics.forEach(li => {
    console.log(li.innerText)
});
// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics= document.body.querySelectorAll('.list')
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi= document.body.querySelector("ul>li");
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
console.log(document.body.querySelectorAll('img'));
// 16. Select all the `p` element and store in `allPElement`
let allPElement= document.body.querySelectorAll('p');
// 17. Select all the buttons and log the count of buttons.
let buttons = document.body.querySelector('input[type="submit"]');
// 18. Select all the `label` element and log the count.
console.log(document.body.querySelectorAll('label').length);
// 19. Select all the elements with `id` of `test`
document.querySelectorAll('#test')
// 20. Select the first element with id `test` using `getElementById`
document.getElementById('test');
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
console.log(topics.parentElement);
// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
console.log(topics.nextElementSibling);
// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
topics.previousElementSibling.innerText="Learning About Walking the DOM"
// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
topics.firstElementChild.innerText="This is the first child element"
// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
console.log(typeof topics.lastElementChild)
// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldsetElm= document.querySelector('fieldset')
// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
console.log(fieldsetElm.parentElement)