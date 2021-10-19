async function tokushima() {
    const importObject = { imports: { imported_func: arg => console.log(arg) } };

    const obj = await WebAssembly.instantiateStreaming(fetch('hello.wasm'), importObject);
    const arg1 = "引数1";
    const arg2 = "引数2";

    const result = obj.instance.exports.exported_func(arg1, arg2);
    // exproted_func関数の戻り値がresult

    console.log(result)
    return result;
};

tokushima().then(result => {
    console.log(result); // => 15
});
