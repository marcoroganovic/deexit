import {
  $,
  displaySuccessfulTests,
  displayFailedTests
} from "./dom";

const $target = $('main');

const describe = (section, callback) => {
  const errorMessages = [];
  
  if(!callback) {
    return;
  }

  try {
    callback();
    displaySuccessfulTests(section, $target);
  } catch(err) {
    errorMessages.push(err.message);
  } finally {
    if(errorMessages.length) {
      displayFailedTests(section, errorMessages, $target);
    }
  }
}

export default describe;
