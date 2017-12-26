const $ = tag => document.querySelector(tag);
const $$ = tag => document.createElement(tag);


const displaySuccessfulTests = (module, target) => {
  const div = $$('div');
  div.classList.add("success");
  div.textContent = module;
  target.appendChild(div);
  return div;
}

const displayFailedTests = (module, errors, target) => {
  const div = $$('div');
  const ul = $$('ul');
  
  div.classList.add('error');
  div.textContent = module;

  errors.forEach(error => {
    const li = $$('li');
    li.textContent = error;
    ul.appendChild(li);
  });

  div.appendChild(ul);
  target.appendChild(div);
  return div;
}

export { 
  $, $$,
  displaySuccessfulTests,
  displayFailedTests
}
