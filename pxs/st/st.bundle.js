(()=>{
    "use strict";
    self.Sting = {
        encodings: {
            plain: {
                encode: e=>e,
                decode: e=>e
            },
            xor: {
                encode: e=>encodeURIComponent(e.toString().split("").map(((e,o)=>o % 2 ? String.fromCharCode(2 ^ e.charCodeAt(0)) : e)).join("")),
                decode: e=>decodeURIComponent(e.split("?")[0]).split("").map(((e,o)=>o % 2 ? String.fromCharCode(2 ^ e.charCodeAt(0)) : e)).join("") + (e.split("?").slice(1).length ? "?" + e.split("?").slice(1).join("?") : "")
            }
        }
    }
}
)();
