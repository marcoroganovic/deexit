const it = (testName, callback) => {
  if(!callback) {
    return;
  }

  try {
    callback();
  } catch(err) {
    throw new Error(err.stack);
  }
}

export default it;
