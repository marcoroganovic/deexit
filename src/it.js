const it = (testName, callback) => {
  if(!cb) {
    return;
  }

  try {
    callback();
  } catch(err) {
    throw new Error(err.stack);
  }
}

export default it;
