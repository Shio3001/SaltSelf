var importObject = { wasi_snapshot_preview1: { proc_exit: arg => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('hello.wasm'), importObject)
  .then(obj => {
    var re = obj.instance.exports.tokushima()
    console.log(re)
    // Do something with the results!
  });