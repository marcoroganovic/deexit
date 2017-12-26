import { describe, it, expect } from "./deexit";

// expose to window
window.describe = describe;
window.it = it;
window.expect = expect;

export { describe, it, expect }
