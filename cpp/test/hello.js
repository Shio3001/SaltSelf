var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('hello.wasm'), importObject)
    .then(obj => obj.instance.exports.exported_func());