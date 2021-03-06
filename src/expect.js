import deepEqual from "fast-deep-equal";
import arraysEqual from "array-equal";
import { error } from "./utils";

class Expect {

  constructor(value) {
    this.actualValue = value;
    this.value = JSON.stringify(value);
    this.shouldBeEqual = true;
  }

  _typeCheck(type) {
    return () => {
      if(this.shouldBeEqual) {
        if(Object.is(typeof this.actualValue, type)) {
          return true;
        }
      } else {
        if(!Object.is(typeof this.actualValue, type)) {
          return true;
        }
      }

      const actualType = typeof this.actualValue;
      error(this.shouldBeEqual ?
        `expected ${type} instead got ${actualType}` :
        `expected ${this.value} not to be ${type}`
      ); 
    }
  }

  get not() {
    this.shouldBeTrue = false;
    return this;
  }

  get ok() {
    if(this.shouldBeEqual) {
      if(!!this.actualValue) {
        return true;
      }
    } else {
      if(Object.is(!!this.actualValue, false)) {
        return true;
      }
    }

    error(`expected ${this.value} to be ${this.shouldBeEqual ? "truthy" : "falsy"}`);
  }

  get to() {
    return this;
  }

  get should() {
    return this;
  }

  get be() {
    return this;
  }

  equal(testValue) {

    if(this.shouldBeEqual) {
      if(Object.is(this.actualValue, testValue)) {
        return true;
      }
    } else {
      if(!Object.is(this.actualValue, testValue)) {
        return true;
      }
    }

    testValue = JSON.stringify(testValue);

    error(this.shouldBeEqual ? 
      `expected ${testValue} instead got ${this.value}` :
      `expected ${this.value} to not be equal to ${testValue}`
    );
  }

  deepEqual(testValue) {
    if(this.shouldBeEqual) {
      if(deepEqual(this.actualValue, testValue)) {
        return true;
      }
    } else {
      if(!deepEqual(this.actualValue, testValue)) {
        return true;
      }
    }

    error(this.shouldBeEqual ? 
      `expected ${testValue} instead got ${this.value}` :
      `expected ${this.value} to not be equal to ${testValue}`
    );
  }


  arraysEqual(testValue) {
    if(this.shouldBeEqual) {
      if(arraysEqual(this.actualValue, testValue)) {
        return true;
      }
    } else {
      if(!arraysEqual(this.actualValue, testValue)) {
        return true;
      }
    }

    error(this.shouldBeEqual ? 
      `expected ${testValue} instead got ${this.value}` :
      `expected ${this.value} to not be equal to ${testValue}`
    );
  }

  get string() {
    this._typeCheck("string")()
  }

  get number() {
    this._typeCheck("number")();
  }

  get boolean() {
    this._typeCheck("boolean")();
  }

  get bool() {
    this._typeCheck("boolean")();
  }

  get undefined() {
    this._typeCheck("undefined")();
  }

  get symbol() {
    this._typeCheck("symbol")();
  }

  get func() {
    this._typeCheck("function")();
  }

  get object() {
    if(this.actualValue && this._typeCheck("object")() && !Array.isArray(this.actualValue)) {
      return true;
    }

    error(`expected object instead got ${typeof this.actualValue}`);
  }

  get array() {
    if(this.shouldBeEqual) {
      if(this._typeCheck("object")() && Array.isArray(this.actualValue)) {
        return true;
      }
    } else {
      if(!this._typeCheck("object")() || !Array.isArray(this.actualValue)) {
        return true;
      }
    }
    
    const type = typeof this.actualValue;
    error(this.shouldBeEqual ?
      `expected array instead got ${type}` :
      `expected ${this.value} to not be array`
    );
  }

  match(regex) {
    if(Object.is(typeof this.actualValue, "string")) {
      if(this.shouldBeEqual) {
        if(this.actualValue.match(regex)) {
          return true;
        }

      } else {
        if(!this.actualValue.match(regex)) {
          return true;
        }
      }
    }

    regex = JSON.stringify(regex);

    error(this.shouldBeEqual ?
      `expected ${this.value} to match regex: ${regex}` : 
      `expected ${this.value} to not match regex: ${regex}`
    );
  }

}

export default (value) => new Expect(value);
