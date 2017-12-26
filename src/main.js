import describe from "./describe";
import it from "./it";
import expect from "./expect";

// expose to window
window.describe = describe;
window.it = it;
window.expect = expect;

export { describe, it, expect }
