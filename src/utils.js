const define = (obj, name, descriptor) => {
  Object.defineProperty(obj, name, descriptor);
}

const isObject = arg => arg && typeof arg === "object" && !Array.isArray(arg);

const extend = (obj, proto) => {
  for(let prop in proto) {
    if(proto.hasOwnProperty(prop) && isObject(proto[prop])) {
      obj[prop] = define(obj, prop, proto[prop]);
    } else {
      obj[prop] = proto[prop];
    }
  }
}

const error = message => {
  throw new Error(message);
}

export {
  define,
  isObject,
  extend,
  error
}
