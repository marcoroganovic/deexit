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
        if(typeof this.actualValue === type) {
          return true;
        }
      } else {
        if(typeof this.actualValue !== type) {
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
    this.invertCheck = true;
    return this;
  }

  get ok() {
    if(this.shouldBeEqual) {
      if(!!this.actualValue) {
        return true;
      }
    } else {
      if(!!this.actualValue === false) {
        return true;
      }
    }

    error(`expected ${this.value} to be ${this.shouldBeEqual ? "truthy" : "falsy"}`);
  }

  get be() {
    return this;
  }

  equal(testValue) {
    if(this.shouldBeEqual) {
      if(this.actualValue === testValue) {
        return true;
      }
    } else {
      if(this.actualValue !== testValue) {
        return true;
      }
    }

    error(this.shouldBeEqual ? 
      `expected ${testValue} instead got ${this.value}` :
      `expected ${testValue} to not be equal to ${this.value}`
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

}

export default (value) => new Expect(value);