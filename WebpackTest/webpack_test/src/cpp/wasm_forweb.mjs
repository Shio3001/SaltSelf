
var createModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(createModule) {
  createModule = createModule || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof createModule !== 'undefined' ? createModule : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_end')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_free')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_init')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, get: function() { abort('You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, set: function() { abort('You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___getTypeName')) {
        Object.defineProperty(Module['ready'], '___getTypeName', { configurable: true, get: function() { abort('You are getting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___getTypeName', { configurable: true, set: function() { abort('You are setting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___embind_register_native_and_builtin_types')) {
        Object.defineProperty(Module['ready'], '___embind_register_native_and_builtin_types', { configurable: true, get: function() { abort('You are getting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___embind_register_native_and_builtin_types', { configurable: true, set: function() { abort('You are setting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  var toLog = e;
  if (e && typeof e === 'object' && e.stack) {
    toLog = [e, e.stack];
  }
  err('exiting due to exception: ' + toLog);
}

if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process === 'object' && typeof require === 'function') || typeof window === 'object' || typeof importScripts === 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(function() { onload(readBinary(f)); }, 0);
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status, toThrow) {
      logExceptionOnExit(toThrow);
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];
if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
  Object.defineProperty(Module, 'arguments', {
    configurable: true,
    get: function() {
      abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
  Object.defineProperty(Module, 'thisProgram', {
    configurable: true,
    get: function() {
      abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['quit']) quit_ = Module['quit'];
if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
  Object.defineProperty(Module, 'quit', {
    configurable: true,
    get: function() {
      abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');

if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
  Object.defineProperty(Module, 'read', {
    configurable: true,
    get: function() {
      abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
  Object.defineProperty(Module, 'readAsync', {
    configurable: true,
    get: function() {
      abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
  Object.defineProperty(Module, 'readBinary', {
    configurable: true,
    get: function() {
      abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
  Object.defineProperty(Module, 'setWindowTitle', {
    configurable: true,
    get: function() {
      abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';


assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");




var STACK_ALIGN = 16;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
  Object.defineProperty(Module, 'wasmBinary', {
    configurable: true,
    get: function() {
      abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var noExitRuntime = Module['noExitRuntime'] || true;
if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
  Object.defineProperty(Module, 'noExitRuntime', {
    configurable: true,
    get: function() {
      abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }

  ret = onDone(ret);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u > 0x10FFFF) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
  Object.defineProperty(Module, 'INITIAL_MEMORY', {
    configurable: true,
    get: function() {
      abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAPU32[(max >> 2)+1] = 0x2135467;
  HEAPU32[(max >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[(max >> 2)+1];
  var cookie2 = HEAPU32[(max >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;
var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile;
  wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABhYSAgAA/YAF/AX9gAn9/AGACf38Bf2AAAX9gAX8AYAN/f38Bf2ADf39/AGAGf39/f39/AX9gAABgBn9/f39/fwBgBX9/f39/AX9gBH9/f38Bf2AEf39/fwBgCH9/f39/f39/AX9gBX9/f39/AGAHf39/f39/fwF/YAd/f39/f39/AGAAAX5gBX9+fn5+AGAFf39/f34Bf2AEf39/fwF+YAp/f39/f39/f39/AGAHf39/f39+fgF/YAN/fn8BfmAIf39/f39/f38AYAR/fn5/AGAKf39/f39/f39/fwF/YAZ/f39/fn4Bf2AFf39+f38AYAR+fn5+AX9gBH9/f34BfmACfH8BfGAGf3x/f39/AX9gAn5/AX9gA39/fwF+YAJ/fwF9YAJ/fwF8YAN/f38BfWADf39/AXxgDH9/f39/f39/f39/fwF/YAV/f39/fAF/YAt/f39/f39/f39/fwF/YA9/f39/f39/f39/f39/f38AYA1/f39/f39/f39/f39/AGACf34AYAJ/fQBgAn98AGADf35+AGACf38BfmACfn4BfWACfn4BfGADf39+AGADfn9/AX9gAXwBfmACf34Bf2ACfn4Bf2AGf39/f39+AX9gCH9/f39/f35+AX9gBn9/f35/fwBgBH9/fn8BfmAJf39/f39/f39/AX9gBX9/f35+AGAEf35/fwF/AsaGgIAAHQNlbnYWX2VtYmluZF9yZWdpc3Rlcl9jbGFzcwArA2VudhhfX2N4YV9hbGxvY2F0ZV9leGNlcHRpb24AAANlbnYLX19jeGFfdGhyb3cABgNlbnYiX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19jb25zdHJ1Y3RvcgAJA2Vudh9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uABgDZW52DV9lbXZhbF9pbmNyZWYABANlbnYNX2VtdmFsX2RlY3JlZgAEA2VudhFfZW12YWxfdGFrZV92YWx1ZQACA2VudhVfZW1iaW5kX3JlZ2lzdGVyX3ZvaWQAAQNlbnYVX2VtYmluZF9yZWdpc3Rlcl9ib29sAA4DZW52G19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZwABA2VudhxfZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nAAYDZW52Fl9lbWJpbmRfcmVn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dmUA0w8Mc3RhY2tSZXN0b3JlANQPCnN0YWNrQWxsb2MA1Q8VZW1zY3JpcHRlbl9zdGFja19pbml0ANYPGWVtc2NyaXB0ZW5fc3RhY2tfZ2V0X2ZyZWUA1w8YZW1zY3JpcHRlbl9zdGFja19nZXRfZW5kANgPBGZyZWUAwQ8OZHluQ2FsbF9paWlpaWoA3g8PZHluQ2FsbF9paWlpaWpqAN8PEGR5bkNhbGxfaWlpaWlpamoA4A8OZHluQ2FsbF92aWlqaWkA4Q8MZHluQ2FsbF9qaWppAOIPCf+FgIAAAQBBAQuHAx8jJi4wMjM0Njk9QkRGR0hKTVFWWLMDW7gD8wH9AYYCjQKVAqsCggOLA5IDlwOdA6kDlg+kBIwFowWkBacFwQXCBZIPwQ+fCMEKyQqpC6wLsAuzC7YLuQu7C70LvwvBC8MLxQvHC8kLsAq1CsUK3ArdCt4K3wrgCuEK4grjCuQK5Qq/Ce8K8ArzCvYK9wr6CvsK/QqUC5ULmAuaC5wLnguiC5YLlwuZC5sLnQufC6ML0QXECssKzArOCs8K0ArRCtMK1ArWCtcK2ArZCtoK5grnCugK6QrqCusK7ArtCv4K/wqBC4MLhAuFC4YLiAuJC4oLjAuOC48LkAuRC5ML0AXSBdMF1AXXBdgF2QXaBdsF3wXRC+AF8gX+BYEGhAaHBooGjQaSBpUGmAbSC6QGswa4BroGvAa+BsAGwgbGBsgGygbTC9oG5gbtBu4G7wbwBvwG/QbUC/4GjQeVB5YHlweYB6AHoQfVC9cLpweoB6kHqgesB64HsQenC64LtAvCC8YLugu+C9gL2gvBB8IHwwfKB8wHzgfRB6oLsQu3C8QLyAu8C8AL3AvbC94H3gvdC+YH3wvvB/AH8QfyB/MH9Af1B/YH9wfgC/gH+Qf6B/sH/Af9B/4H/weACOELgQiECIUIhgiJCIoIiwiMCI0I4guOCI8IkAiRCJIIkwiUCJUIlgjjC54IswjkC+AI8QjlC5kJpAnmC6UJsAnnC7kJugm7CegLvAm9Cb4JxA3FDccNyA3JDcsNzA3NDc4N1A3VDdYN1w3YDdkN2g3cDd0N3g3fDeAN4Q3iDeYN5w3oDekN6g3sDe4N7Q3vDfgN+g35DfsNhg6IDocOiQ6MDo4OjQ6PDsANwQ3CDcMNnA6dDr0Nug25DbsNxA7FDt8O4A7hDuIO5A7lDuoO6w7tDu8O8A7zDvQO9Q72DvcO+A75DvoO/A79DpMPlA+VD5oPmw+dD58Pog+gD6EPpw+jD6kPvg+7D6wPpA+9D7oPrQ+lD7wPtw+wD6YPsg8K8O2KgADIDxQAENYPEI4FEP8OEL8DENIEEIAPCxcBAn9BoJABIQBBASEBIAAgAREAABoPC/cDAi5/An4jACEBQYABIQIgASACayEDIAMkACADIAA2AiggAygCKCEEQfkSIQUgBRAgQZEPIQYgBhAhQRAhByADIAdqIQggAyAINgJAQb4NIQkgAyAJNgI8ECJBAiEKIAMgCjYCOBAkIQsgAyALNgI0ECUhDCADIAw2AjBBAyENIAMgDTYCLBAnIQ4QKCEPECkhEBAqIREgAygCOCESIAMgEjYCcBArIRMgAygCOCEUIAMoAjQhFSADIBU2AmwQLCEWIAMoAjQhFyADKAIwIRggAyAYNgJoECwhGSADKAIwIRogAygCPCEbIAMoAiwhHCADIBw2AnQQLSEdIAMoAiwhHiAOIA8gECARIBMgFCAWIBcgGSAaIBsgHSAeEABBECEfIAMgH2ohICADICA2AkQgAygCRCEhIAMgITYCfEEEISIgAyAiNgJ4IAMoAnwhIyADKAJ4ISQgJBAvQQAhJSADICU2AgxBBSEmIAMgJjYCCCADKQMIIS8gAyAvNwNIIAMoAkghJyADKAJMISggAyAjNgJkQcgNISkgAyApNgJgIAMgKDYCXCADICc2AlggAygCYCEqIAMoAlghKyADKAJcISwgAyAsNgJUIAMgKzYCUCADKQNQITAgAyAwNwMAICogAxAxQYABIS0gAyAtaiEuIC4kACAEDwuLCAJPfwZ+IwAhAUGAAiECIAEgAmshAyADJAAgAyAANgJQQQAhBCADIAQ2AkxBBiEFIAMgBTYCSCADIAQ2AkRBByEGIAMgBjYCQCADIAQ2AjxBCCEHIAMgBzYCOCADKAJQIQhBMCEJIAMgCWohCiADIAo2AmggAyAINgJkEDVBCSELIAMgCzYCYBA3IQwgAyAMNgJcEDghDSADIA02AlhBCiEOIAMgDjYCVBA6IQ8QOyEQEDwhERAqIRIgAygCYCETIAMgEzYC6AEQKyEUIAMoAmAhFSADKAJcIRYgAyAWNgLwARAsIRcgAygCXCEYIAMoAlghGSADIBk2AuwBECwhGiADKAJYIRsgAygCZCEcIAMoAlQhHSADIB02AvQBEC0hHiADKAJUIR8gDyAQIBEgEiAUIBUgFyAYIBogGyAcIB4gHxAAQTAhICADICBqISEgAyAhNgJsIAMoAmwhIiADICI2AvwBQQshIyADICM2AvgBIAMoAvwBISQgAygC+AEhJSAlED4gAygCSCEmIAMoAkwhJyADICc2AiwgAyAmNgIoIAMpAyghUCADIFA3A3AgAygCcCEoIAMoAnQhKSADICQ2AowBQecLISogAyAqNgKIASADICk2AoQBIAMgKDYCgAEgAygCjAEhKyADKAKIASEsIAMoAoABIS0gAygChAEhLiADIC42AnwgAyAtNgJ4IAMpA3ghUSADIFE3AwhBCCEvIAMgL2ohMCAsIDAQPyADKAJAITEgAygCRCEyIAMgMjYCJCADIDE2AiAgAykDICFSIAMgUjcDkAEgAygCkAEhMyADKAKUASE0IAMgKzYCrAFB3wwhNSADIDU2AqgBIAMgNDYCpAEgAyAzNgKgASADKAKsASE2IAMoAqgBITcgAygCoAEhOCADKAKkASE5IAMgOTYCnAEgAyA4NgKYASADKQOYASFTIAMgUzcDACA3IAMQQCADKAI4ITogAygCPCE7IAMgOzYCHCADIDo2AhggAykDGCFUIAMgVDcDsAEgAygCsAEhPCADKAK0ASE9IAMgNjYCzAFBpQ0hPiADID42AsgBIAMgPTYCxAEgAyA8NgLAASADKALMASE/IAMoAsgBIUAgAygCwAEhQSADKALEASFCIAMgQjYCvAEgAyBBNgK4ASADKQO4ASFVIAMgVTcDEEEQIUMgAyBDaiFEIEAgRBBBIAMgPzYC2AFB8AkhRSADIEU2AtQBQQwhRiADIEY2AtABIAMoAtgBIUcgAygC1AEhSCADKALQASFJIEggSRBDIAMgRzYC5AFB7AkhSiADIEo2AuABQQ0hSyADIEs2AtwBIAMoAuABIUwgAygC3AEhTSBMIE0QRUGAAiFOIAMgTmohTyBPJAAPC4wIAk9/Bn4jACEBQYACIQIgASACayEDIAMkACADIAA2AlBBACEEIAMgBDYCTEEOIQUgAyAFNgJIIAMgBDYCREEPIQYgAyAGNgJAIAMgBDYCPEEQIQcgAyAHNgI4IAMoAlAhCEEwIQkgAyAJaiEKIAMgCjYCaCADIAg2AmQQSUERIQsgAyALNgJgEEshDCADIAw2AlwQTCENIAMgDTYCWEESIQ4gAyAONgJUEE4hDxBPIRAQUCERECohEiADKAJgIRMgAyATNgLwARArIRQgAygCYCEVIAMoAlwhFiADIBY2AnAQLCEXIAMoAlwhGCADKAJYIRkgAyAZNgJsECwhGiADKAJYIRsgAygCZCEcIAMoAlQhHSADIB02AvQBEC0hHiADKAJUIR8gDyAQIBEgEiAUIBUgFyAYIBogGyAcIB4gHxAAQTAhICADICBqISEgAyAhNgJ0IAMoAnQhIiADICI2AvwBQRMhIyADICM2AvgBIAMoAvwBISQgAygC+AEhJSAlEFIgAygCSCEmIAMoAkwhJyADICc2AiwgAyAmNgIoIAMpAyghUCADIFA3A3ggAygCeCEoIAMoAnwhKSADICQ2ApQBQecLISogAyAqNgKQASADICk2AowBIAMgKDYCiAEgAygClAEhKyADKAKQASEsIAMoAogBIS0gAygCjAEhLiADIC42AoQBIAMgLTYCgAEgAykDgAEhUSADIFE3AwhBCCEvIAMgL2ohMCAsIDAQUyADKAJAITEgAygCRCEyIAMgMjYCJCADIDE2AiAgAykDICFSIAMgUjcDmAEgAygCmAEhMyADKAKcASE0IAMgKzYCtAFB3wwhNSADIDU2ArABIAMgNDYCrAEgAyAzNgKoASADKAK0ASE2IAMoArABITcgAygCqAEhOCADKAKsASE5IAMgOTYCpAEgAyA4NgKgASADKQOgASFTIAMgUzcDACA3IAMQVCADKAI4ITogAygCPCE7IAMgOzYCHCADIDo2AhggAykDGCFUIAMgVDcDuAEgAygCuAEhPCADKAK8ASE9IAMgNjYC1AFBpQ0hPiADID42AtABIAMgPTYCzAEgAyA8NgLIASADKALUASE/IAMoAtABIUAgAygCyAEhQSADKALMASFCIAMgQjYCxAEgAyBBNgLAASADKQPAASFVIAMgVTcDEEEQIUMgAyBDaiFEIEAgRBBVIAMgPzYC4AFB8AkhRSADIEU2AtwBQRQhRiADIEY2AtgBIAMoAuABIUcgAygC3AEhSCADKALYASFJIEggSRBXIAMgRzYC7AFB7AkhSiADIEo2AugBQRUhSyADIEs2AuQBIAMoAugBIUwgAygC5AEhTSBMIE0QWUGAAiFOIAMgTmohTyBPJAAPCwMADws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQrgMhBUEQIQYgAyAGaiEHIAckACAFDwsLAQF/QQAhACAADwsLAQF/QQAhACAADwtfAQx/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEQQAhBSAEIQYgBSEHIAYgB0YhCEEBIQkgCCAJcSEKAkAgCg0AIAQQwQ4LQRAhCyADIAtqIQwgDCQADwsMAQF/EK8DIQAgAA8LDAEBfxCwAyEAIAAPCwwBAX8QsQMhACAADwsLAQF/QQAhACAADwsMAQF/QcgXIQAgAA8LDAEBf0HLFyEAIAAPCwwBAX9BzRchACAADwsYAQJ/QQEhACAAEMAOIQEgARCyAxogAQ8LlwEBE38jACEBQSAhAiABIAJrIQMgAyQAIAMgADYCGEEWIQQgAyAENgIMECchBUEQIQYgAyAGaiEHIAchCCAIELQDIQlBECEKIAMgCmohCyALIQwgDBC1AyENIAMoAgwhDiADIA42AhwQKyEPIAMoAgwhECADKAIYIREgBSAJIA0gDyAQIBEQA0EgIRIgAyASaiETIBMkAA8LTAEJfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQciyASEEQYAIIQUgBCAFEFohBkEXIQcgBiAHEFwaQRAhCCADIAhqIQkgCSQADwvSAQEafyMAIQJBICEDIAIgA2shBCAEJAAgASgCACEFIAEoAgQhBiAEIAA2AhggBCAGNgIUIAQgBTYCEEEYIQcgBCAHNgIMECchCCAEKAIYIQlBCCEKIAQgCmohCyALIQwgDBC5AyENQQghDiAEIA5qIQ8gDyEQIBAQugMhESAEKAIMIRIgBCASNgIcELsDIRMgBCgCDCEUQRAhFSAEIBVqIRYgFiEXIBcQvAMhGEEAIRkgCCAJIA0gESATIBQgGCAZEARBICEaIAQgGmohGyAbJAAPC5QBARB/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAFKAIEIQYgBRCBASEHIAcoAgAhCCAGIQkgCCEKIAkgCkchC0EBIQwgCyAMcSENAkACQCANRQ0AIAQoAgghDiAFIA4QggEMAQsgBCgCCCEPIAUgDxCDAQtBECEQIAQgEGohESARJAAPC4ECAR5/IwAhA0EQIQQgAyAEayEFIAUkACAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIMIQYgBhA0IQcgBSAHNgIAIAUoAgAhCCAFKAIIIQkgCCEKIAkhCyAKIAtJIQxBASENIAwgDXEhDgJAAkAgDkUNACAFKAIIIQ8gBSgCACEQIA8gEGshESAFKAIEIRIgBiARIBIQhAEMAQsgBSgCACETIAUoAgghFCATIRUgFCEWIBUgFkshF0EBIRggFyAYcSEZAkAgGUUNACAGKAIAIRogBSgCCCEbQQwhHCAbIBxsIR0gGiAdaiEeIAYgHhCFAQsLQRAhHyAFIB9qISAgICQADwtEAQl/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBCgCBCEFIAQoAgAhBiAFIAZrIQdBDCEIIAcgCG0hCSAJDwsDAA8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEOsBIQVBECEGIAMgBmohByAHJAAgBQ8LCwEBf0EAIQAgAA8LCwEBf0EAIQAgAA8LZQEMfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBEEAIQUgBCEGIAUhByAGIAdGIQhBASEJIAggCXEhCgJAIAoNACAEEOwBGiAEEMEOC0EQIQsgAyALaiEMIAwkAA8LDAEBfxDtASEAIAAPCwwBAX8Q7gEhACAADwsMAQF/EO8BIQAgAA8LGAECf0EMIQAgABDADiEBIAEQ8gEaIAEPC5cBARN/IwAhAUEgIQIgASACayEDIAMkACADIAA2AhhBGSEEIAMgBDYCDBA6IQVBECEGIAMgBmohByAHIQggCBD0ASEJQRAhCiADIApqIQsgCyEMIAwQ9QEhDSADKAIMIQ4gAyAONgIcECshDyADKAIMIRAgAygCGCERIAUgCSANIA8gECAREANBICESIAMgEmohEyATJAAPC9IBARp/IwAhAkEgIQMgAiADayEEIAQkACABKAIAIQUgASgCBCEGIAQgADYCGCAEIAY2AhQgBCAFNgIQQRohByAEIAc2AgwQOiEIIAQoAhghCUEIIQogBCAKaiELIAshDCAMEP4BIQ1BCCEOIAQgDmohDyAPIRAgEBD/ASERIAQoAgwhEiAEIBI2AhwQgAIhEyAEKAIMIRRBECEVIAQgFWohFiAWIRcgFxCBAiEYQQAhGSAIIAkgDSARIBMgFCAYIBkQBEEgIRogBCAaaiEbIBskAA8L0gEBGn8jACECQSAhAyACIANrIQQgBCQAIAEoAgAhBSABKAIEIQYgBCAANgIYIAQgBjYCFCAEIAU2AhBBGyEHIAQgBzYCDBA6IQggBCgCGCEJQQghCiAEIApqIQsgCyEMIAwQhwIhDUEIIQ4gBCAOaiEPIA8hECAQEIgCIREgBCgCDCESIAQgEjYCHBCJAiETIAQoAgwhFEEQIRUgBCAVaiEWIBYhFyAXEIoCIRhBACEZIAggCSANIBEgEyAUIBggGRAEQSAhGiAEIBpqIRsgGyQADwvSAQEafyMAIQJBICEDIAIgA2shBCAEJAAgASgCACEFIAEoAgQhBiAEIAA2AhggBCAGNgIUIAQgBTYCEEEcIQcgBCAHNgIMEDohCCAEKAIYIQlBCCEKIAQgCmohCyALIQwgDBCOAiENQQghDiAEIA5qIQ8gDyEQIBAQjwIhESAEKAIMIRIgBCASNgIcEJACIRMgBCgCDCEUQRAhFSAEIBVqIRYgFiEXIBcQkQIhGEEAIRkgCCAJIA0gESATIBQgGCAZEARBICEaIAQgGmohGyAbJAAPC5sBARB/IwAhA0EQIQQgAyAEayEFIAUkACAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIEIQYgBSgCCCEHIAcQNCEIIAYhCSAIIQogCSAKSSELQQEhDCALIAxxIQ0CQAJAIA1FDQAgBSgCCCEOIAUoAgQhDyAOIA8QhgEhECAAIBAQhwEaDAELIAAQiAELQRAhESAFIBFqIRIgEiQADwu9AQEYfyMAIQJBICEDIAIgA2shBCAEJAAgBCAANgIYIAQgATYCFEEdIQUgBCAFNgIMEDohBiAEKAIYIQdBECEIIAQgCGohCSAJIQogChCWAiELQRAhDCAEIAxqIQ0gDSEOIA4QlwIhDyAEKAIMIRAgBCAQNgIcEJgCIREgBCgCDCESQRQhEyAEIBNqIRQgFCEVIBUQmQIhFkEAIRcgBiAHIAsgDyARIBIgFiAXEARBICEYIAQgGGohGSAZJAAPC3MBDH8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgQhBiAFKAIMIQcgBSgCCCEIIAcgCBCJASEJIAkgBhCKARpBASEKQQEhCyAKIAtxIQxBECENIAUgDWohDiAOJAAgDA8LvQEBGH8jACECQSAhAyACIANrIQQgBCQAIAQgADYCGCAEIAE2AhRBHiEFIAQgBTYCDBA6IQYgBCgCGCEHQRAhCCAEIAhqIQkgCSEKIAoQrAIhC0EQIQwgBCAMaiENIA0hDiAOEK0CIQ8gBCgCDCEQIAQgEDYCHBCuAiERIAQoAgwhEkEUIRMgBCATaiEUIBQhFSAVEK8CIRZBACEXIAYgByALIA8gESASIBYgFxAEQSAhGCAEIBhqIRkgGSQADwuUAQEQfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBSgCBCEGIAUQtAIhByAHKAIAIQggBiEJIAghCiAJIApHIQtBASEMIAsgDHEhDQJAAkAgDUUNACAEKAIIIQ4gBSAOELUCDAELIAQoAgghDyAFIA8QtgILQRAhECAEIBBqIREgESQADwuBAgEefyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAYQSCEHIAUgBzYCACAFKAIAIQggBSgCCCEJIAghCiAJIQsgCiALSSEMQQEhDSAMIA1xIQ4CQAJAIA5FDQAgBSgCCCEPIAUoAgAhECAPIBBrIREgBSgCBCESIAYgESASELcCDAELIAUoAgAhEyAFKAIIIRQgEyEVIBQhFiAVIBZLIRdBASEYIBcgGHEhGQJAIBlFDQAgBigCACEaIAUoAgghG0ECIRwgGyAcdCEdIBogHWohHiAGIB4QuAILC0EQIR8gBSAfaiEgICAkAA8LRAEJfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQoAgQhBSAEKAIAIQYgBSAGayEHQQIhCCAHIAh1IQkgCQ8LAwAPCz4BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBD6AiEFQRAhBiADIAZqIQcgByQAIAUPCwsBAX9BACEAIAAPCwsBAX9BACEAIAAPC2UBDH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBACEFIAQhBiAFIQcgBiAHRiEIQQEhCSAIIAlxIQoCQCAKDQAgBBD7AhogBBDBDgtBECELIAMgC2ohDCAMJAAPCwwBAX8Q/AIhACAADwsMAQF/EP0CIQAgAA8LDAEBfxD+AiEAIAAPCxgBAn9BDCEAIAAQwA4hASABEIEDGiABDwuXAQETfyMAIQFBICECIAEgAmshAyADJAAgAyAANgIYQR8hBCADIAQ2AgwQTiEFQRAhBiADIAZqIQcgByEIIAgQgwMhCUEQIQogAyAKaiELIAshDCAMEIQDIQ0gAygCDCEOIAMgDjYCHBArIQ8gAygCDCEQIAMoAhghESAFIAkgDSAPIBAgERADQSAhEiADIBJqIRMgEyQADwvSAQEafyMAIQJBICEDIAIgA2shBCAEJAAgASgCACEFIAEoAgQhBiAEIAA2AhggBCAGNgIUIAQgBTYCEEEgIQcgBCAHNgIMEE4hCCAEKAIYIQlBCCEKIAQgCmohCyALIQwgDBCMAyENQQghDiAEIA5qIQ8gDyEQIBAQjQMhESAEKAIMIRIgBCASNgIcEIACIRMgBCgCDCEUQRAhFSAEIBVqIRYgFiEXIBcQjgMhGEEAIRkgCCAJIA0gESATIBQgGCAZEARBICEaIAQgGmohGyAbJAAPC9IBARp/IwAhAkEgIQMgAiADayEEIAQkACABKAIAIQUgASgCBCEGIAQgADYCGCAEIAY2AhQgBCAFNgIQQSEhByAEIAc2AgwQTiEIIAQoAhghCUEIIQogBCAKaiELIAshDCAMEJMDIQ1BCCEOIAQgDmohDyAPIRAgEBCUAyERIAQoAgwhEiAEIBI2AhwQiQIhEyAEKAIMIRRBECEVIAQgFWohFiAWIRcgFxCVAyEYQQAhGSAIIAkgDSARIBMgFCAYIBkQBEEgIRogBCAaaiEbIBskAA8L0gEBGn8jACECQSAhAyACIANrIQQgBCQAIAEoAgAhBSABKAIEIQYgBCAANgIYIAQgBjYCFCAEIAU2AhBBIiEHIAQgBzYCDBBOIQggBCgCGCEJQQghCiAEIApqIQsgCyEMIAwQmAMhDUEIIQ4gBCAOaiEPIA8hECAQEJkDIREgBCgCDCESIAQgEjYCHBCQAiETIAQoAgwhFEEQIRUgBCAVaiEWIBYhFyAXEJoDIRhBACEZIAggCSANIBEgEyAUIBggGRAEQSAhGiAEIBpqIRsgGyQADwubAQEQfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCBCEGIAUoAgghByAHEEghCCAGIQkgCCEKIAkgCkkhC0EBIQwgCyAMcSENAkACQCANRQ0AIAUoAgghDiAFKAIEIQ8gDiAPELkCIRAgACAQELoCGgwBCyAAEIgBC0EQIREgBSARaiESIBIkAA8LvQEBGH8jACECQSAhAyACIANrIQQgBCQAIAQgADYCGCAEIAE2AhRBIyEFIAQgBTYCDBBOIQYgBCgCGCEHQRAhCCAEIAhqIQkgCSEKIAoQngMhC0EQIQwgBCAMaiENIA0hDiAOEJ8DIQ8gBCgCDCEQIAQgEDYCHBCYAiERIAQoAgwhEkEUIRMgBCATaiEUIBQhFSAVEKADIRZBACEXIAYgByALIA8gESASIBYgFxAEQSAhGCAEIBhqIRkgGSQADwt5AQ1/IwAhA0EQIQQgAyAEayEFIAUkACAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIEIQYgBigCACEHIAUoAgwhCCAFKAIIIQkgCCAJELsCIQogCiAHNgIAQQEhC0EBIQwgCyAMcSENQRAhDiAFIA5qIQ8gDyQAIA0PC70BARh/IwAhAkEgIQMgAiADayEEIAQkACAEIAA2AhggBCABNgIUQSQhBSAEIAU2AgwQTiEGIAQoAhghB0EQIQggBCAIaiEJIAkhCiAKEKoDIQtBECEMIAQgDGohDSANIQ4gDhCrAyEPIAQoAgwhECAEIBA2AhwQrgIhESAEKAIMIRJBFCETIAQgE2ohFCAUIRUgFRCsAyEWQQAhFyAGIAcgCyAPIBEgEiAWIBcQBEEgIRggBCAYaiEZIBkkAA8LXAEKfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAQoAgghByAHEF0hCCAFIAYgCBBeIQlBECEKIAQgCmohCyALJAAgCQ8LqgEBFn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgAygCDCEFIAUoAgAhBkF0IQcgBiAHaiEIIAgoAgAhCSAFIAlqIQpBCiELQRghDCALIAx0IQ0gDSAMdSEOIAogDhBfIQ9BGCEQIA8gEHQhESARIBB1IRIgBCASEIoOGiADKAIMIRMgExDyDRogAygCDCEUQRAhFSADIBVqIRYgFiQAIBQPC04BCH8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFIAYRAAAhB0EQIQggBCAIaiEJIAkkACAHDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQ0g8hBUEQIQYgAyAGaiEHIAckACAFDwvCBAFPfyMAIQNBMCEEIAMgBGshBSAFJAAgBSAANgIsIAUgATYCKCAFIAI2AiQgBSgCLCEGQRghByAFIAdqIQggCCEJIAkgBhD0DRpBGCEKIAUgCmohCyALIQwgDBBgIQ1BASEOIA0gDnEhDwJAIA9FDQAgBSgCLCEQQQghESAFIBFqIRIgEiETIBMgEBBhGiAFKAIoIRQgBSgCLCEVIBUoAgAhFkF0IRcgFiAXaiEYIBgoAgAhGSAVIBlqIRogGhBiIRtBsAEhHCAbIBxxIR1BICEeIB0hHyAeISAgHyAgRiEhQQEhIiAhICJxISMCQAJAICNFDQAgBSgCKCEkIAUoAiQhJSAkICVqISYgJiEnDAELIAUoAighKCAoIScLICchKSAFKAIoISogBSgCJCErICogK2ohLCAFKAIsIS0gLSgCACEuQXQhLyAuIC9qITAgMCgCACExIC0gMWohMiAFKAIsITMgMygCACE0QXQhNSA0IDVqITYgNigCACE3IDMgN2ohOCA4EGMhOSAFKAIIITpBGCE7IDkgO3QhPCA8IDt1IT0gOiAUICkgLCAyID0QZCE+IAUgPjYCEEEQIT8gBSA/aiFAIEAhQSBBEGUhQkEBIUMgQiBDcSFEAkAgREUNACAFKAIsIUUgRSgCACFGQXQhRyBGIEdqIUggSCgCACFJIEUgSWohSkEFIUsgSiBLEGYLC0EYIUwgBSBMaiFNIE0hTiBOEPYNGiAFKAIsIU9BMCFQIAUgUGohUSBRJAAgTw8LkQEBEn8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE6AAsgBCgCDCEFIAQhBiAGIAUQmg4gBCEHIAcQfyEIIAQtAAshCUEYIQogCSAKdCELIAsgCnUhDCAIIAwQgAEhDSAEIQ4gDhDhBRpBGCEPIA0gD3QhECAQIA91IRFBECESIAQgEmohEyATJAAgEQ8LNgEHfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQtAAAhBUEBIQYgBSAGcSEHIAcPC3IBDX8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAGKAIAIQdBdCEIIAcgCGohCSAJKAIAIQogBiAKaiELIAsQbCEMIAUgDDYCAEEQIQ0gBCANaiEOIA4kACAFDwsrAQV/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBCgCBCEFIAUPC60BARd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEEG0hBSAEKAJMIQYgBSAGEG4hB0EBIQggByAIcSEJAkAgCUUNAEEgIQpBGCELIAogC3QhDCAMIAt1IQ0gBCANEF8hDkEYIQ8gDiAPdCEQIBAgD3UhESAEIBE2AkwLIAQoAkwhEkEYIRMgEiATdCEUIBQgE3UhFUEQIRYgAyAWaiEXIBckACAVDwv6CAGOAX8jACEGQdAAIQcgBiAHayEIIAgkACAIIAA2AkAgCCABNgI8IAggAjYCOCAIIAM2AjQgCCAENgIwIAggBToALyAIKAJAIQlBACEKIAkhCyAKIQwgCyAMRiENQQEhDiANIA5xIQ8CQAJAIA9FDQBByAAhECAIIBBqIREgESESQcAAIRMgCCATaiEUIBQhFSAVKAIAIRYgEiAWNgIADAELIAgoAjQhFyAIKAI8IRggFyAYayEZIAggGTYCKCAIKAIwIRogGhBnIRsgCCAbNgIkIAgoAiQhHCAIKAIoIR0gHCEeIB0hHyAeIB9KISBBASEhICAgIXEhIgJAAkAgIkUNACAIKAIoISMgCCgCJCEkICQgI2shJSAIICU2AiQMAQtBACEmIAggJjYCJAsgCCgCOCEnIAgoAjwhKCAnIChrISkgCCApNgIgIAgoAiAhKkEAISsgKiEsICshLSAsIC1KIS5BASEvIC4gL3EhMAJAIDBFDQAgCCgCQCExIAgoAjwhMiAIKAIgITMgMSAyIDMQaCE0IAgoAiAhNSA0ITYgNSE3IDYgN0chOEEBITkgOCA5cSE6AkAgOkUNAEEAITsgCCA7NgJAQcgAITwgCCA8aiE9ID0hPkHAACE/IAggP2ohQCBAIUEgQSgCACFCID4gQjYCAAwCCwsgCCgCJCFDQQAhRCBDIUUgRCFGIEUgRkohR0EBIUggRyBIcSFJAkAgSUUNACAIKAIkIUogCC0ALyFLQRAhTCAIIExqIU0gTSFOQRghTyBLIE90IVAgUCBPdSFRIE4gSiBREGkaIAgoAkAhUkEQIVMgCCBTaiFUIFQhVSBVEGohViAIKAIkIVcgUiBWIFcQaCFYIAgoAiQhWSBYIVogWSFbIFogW0chXEEBIV0gXCBdcSFeAkACQCBeRQ0AQQAhXyAIIF82AkBByAAhYCAIIGBqIWEgYSFiQcAAIWMgCCBjaiFkIGQhZSBlKAIAIWYgYiBmNgIAQQEhZyAIIGc2AgwMAQtBACFoIAggaDYCDAtBECFpIAggaWohaiBqEKUOGiAIKAIMIWsCQCBrDgIAAgALCyAIKAI0IWwgCCgCOCFtIGwgbWshbiAIIG42AiAgCCgCICFvQQAhcCBvIXEgcCFyIHEgckohc0EBIXQgcyB0cSF1AkAgdUUNACAIKAJAIXYgCCgCOCF3IAgoAiAheCB2IHcgeBBoIXkgCCgCICF6IHkheyB6IXwgeyB8RyF9QQEhfiB9IH5xIX8CQCB/RQ0AQQAhgAEgCCCAATYCQEHIACGBASAIIIEBaiGCASCCASGDAUHAACGEASAIIIQBaiGFASCFASGGASCGASgCACGHASCDASCHATYCAAwCCwsgCCgCMCGIAUEAIYkBIIgBIIkBEGsaQcgAIYoBIAggigFqIYsBIIsBIYwBQcAAIY0BIAggjQFqIY4BII4BIY8BII8BKAIAIZABIIwBIJABNgIACyAIKAJIIZEBQdAAIZIBIAggkgFqIZMBIJMBJAAgkQEPC0kBC38jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEKAIAIQVBACEGIAUhByAGIQggByAIRiEJQQEhCiAJIApxIQsgCw8LSQEHfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAUgBhBvQRAhByAEIAdqIQggCCQADwsrAQV/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBCgCDCEFIAUPC24BC38jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgwhBiAFKAIIIQcgBSgCBCEIIAYoAgAhCSAJKAIwIQogBiAHIAggChEFACELQRAhDCAFIAxqIQ0gDSQAIAsPC5UBARF/IwAhA0EgIQQgAyAEayEFIAUkACAFIAA2AhwgBSABNgIYIAUgAjoAFyAFKAIcIQZBECEHIAUgB2ohCCAIIQlBCCEKIAUgCmohCyALIQwgBiAJIAwQcBogBSgCGCENIAUtABchDkEYIQ8gDiAPdCEQIBAgD3UhESAGIA0gERCtDkEgIRIgBSASaiETIBMkACAGDwtDAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQcSEFIAUQciEGQRAhByADIAdqIQggCCQAIAYPC04BB38jACECQRAhAyACIANrIQQgBCAANgIMIAQgATYCCCAEKAIMIQUgBSgCDCEGIAQgBjYCBCAEKAIIIQcgBSAHNgIMIAQoAgQhCCAIDws9AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQfiEFQRAhBiADIAZqIQcgByQAIAUPCwsBAX9BfyEAIAAPC0wBCn8jACECQRAhAyACIANrIQQgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAUhByAGIQggByAIRiEJQQEhCiAJIApxIQsgCw8LWAEJfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBSgCECEGIAQoAgghByAGIAdyIQggBSAIEJsOQRAhCSAEIAlqIQogCiQADwtnAQh/IwAhA0EgIQQgAyAEayEFIAUkACAFIAA2AhwgBSABNgIYIAUgAjYCFCAFKAIcIQYgBSgCGCEHIAcQcxogBhB0GiAFKAIUIQggCBBzGiAGEHUaQSAhCSAFIAlqIQogCiQAIAYPC20BDX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBB3IQVBASEGIAUgBnEhBwJAAkAgB0UNACAEEHghCCAIIQkMAQsgBBB5IQogCiEJCyAJIQtBECEMIAMgDGohDSANJAAgCw8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCBCADKAIEIQQgBA8LPAEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIEIAMoAgQhBCAEEHYaQRAhBSADIAVqIQYgBiQAIAQPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwt6ARJ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQeiEFIAUtAAshBkH/ASEHIAYgB3EhCEGAASEJIAggCXEhCkEAIQsgCiEMIAshDSAMIA1HIQ5BASEPIA4gD3EhEEEQIREgAyARaiESIBIkACAQDwtEAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQeiEFIAUoAgAhBkEQIQcgAyAHaiEIIAgkACAGDwtDAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQeiEFIAUQeyEGQRAhByADIAdqIQggCCQAIAYPCz0BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBB8IQVBECEGIAMgBmohByAHJAAgBQ8LPQEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEH0hBUEQIQYgAyAGaiEHIAckACAFDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCysBBX8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEKAIYIQUgBQ8LRgEIfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBEGkkwEhBSAEIAUQ5gUhBkEQIQcgAyAHaiEIIAgkACAGDwuCAQEQfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgAToACyAEKAIMIQUgBC0ACyEGIAUoAgAhByAHKAIcIQhBGCEJIAYgCXQhCiAKIAl1IQsgBSALIAgRAgAhDEEYIQ0gDCANdCEOIA4gDXUhD0EQIRAgBCAQaiERIBEkACAPDwtJAQl/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEQQghBSAEIAVqIQYgBhCLASEHQRAhCCADIAhqIQkgCSQAIAcPC7MBARV/IwAhAkEgIQMgAiADayEEIAQkACAEIAA2AhwgBCABNgIYIAQoAhwhBUEIIQYgBCAGaiEHIAchCEEBIQkgCCAFIAkQjAEaIAUQjQEhCiAEKAIMIQsgCxCOASEMIAQoAhghDSANEI8BIQ4gCiAMIA4QkAEgBCgCDCEPQQwhECAPIBBqIREgBCARNgIMQQghEiAEIBJqIRMgEyEUIBQQkQEaQSAhFSAEIBVqIRYgFiQADwvbAQEYfyMAIQJBICEDIAIgA2shBCAEJAAgBCAANgIcIAQgATYCGCAEKAIcIQUgBRCNASEGIAQgBjYCFCAFEDQhB0EBIQggByAIaiEJIAUgCRCSASEKIAUQNCELIAQoAhQhDCAEIQ0gDSAKIAsgDBCTARogBCgCFCEOIAQoAgghDyAPEI4BIRAgBCgCGCERIBEQjwEhEiAOIBAgEhCQASAEKAIIIRNBDCEUIBMgFGohFSAEIBU2AgggBCEWIAUgFhCUASAEIRcgFxCVARpBICEYIAQgGGohGSAZJAAPC9MCASl/IwAhA0EwIQQgAyAEayEFIAUkACAFIAA2AiwgBSABNgIoIAUgAjYCJCAFKAIsIQYgBhCBASEHIAcoAgAhCCAGKAIEIQkgCCAJayEKQQwhCyAKIAttIQwgBSgCKCENIAwhDiANIQ8gDiAPTyEQQQEhESAQIBFxIRICQAJAIBJFDQAgBSgCKCETIAUoAiQhFCAGIBMgFBDkAQwBCyAGEI0BIRUgBSAVNgIgIAYQNCEWIAUoAighFyAWIBdqIRggBiAYEJIBIRkgBhA0IRogBSgCICEbQQghHCAFIBxqIR0gHSEeIB4gGSAaIBsQkwEaIAUoAighHyAFKAIkISBBCCEhIAUgIWohIiAiISMgIyAfICAQ5QFBCCEkIAUgJGohJSAlISYgBiAmEJQBQQghJyAFICdqISggKCEpICkQlQEaC0EwISogBSAqaiErICskAA8LcwEKfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAUgBhDmASAFEDQhByAEIAc2AgQgBCgCCCEIIAUgCBDnASAEKAIEIQkgBSAJEOgBQRAhCiAEIApqIQsgCyQADwtLAQl/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AgggBCgCDCEFIAUoAgAhBiAEKAIIIQdBDCEIIAcgCGwhCSAGIAlqIQogCg8LdwENfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAYQjwEhByAEIQggCCAHEJ4CGhCfAiEJIAQhCiAKEKACIQsgCSALEAchDCAFIAw2AgBBECENIAQgDWohDiAOJAAgBQ8LOgEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQEhBCAAIAQQoQIaQRAhBSADIAVqIQYgBiQADwtLAQl/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AgggBCgCDCEFIAUoAgAhBiAEKAIIIQdBDCEIIAcgCGwhCSAGIAlqIQogCg8L6QICJn8BfiMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIIIAQgATYCBCAEKAIIIQUgBCgCBCEGIAUhByAGIQggByAIRyEJQQEhCiAJIApxIQsCQAJAIAtFDQAgBCgCBCEMIAUgDBCyAiAFEHchDUEBIQ4gDSAOcSEPAkACQCAPDQAgBCgCBCEQIBAQdyERQQEhEiARIBJxIRMCQAJAIBMNACAEKAIEIRQgFBB6IRUgBRCdASEWIBUpAgAhKCAWICg3AgBBCCEXIBYgF2ohGCAVIBdqIRkgGSgCACEaIBggGjYCAAwBCyAEKAIEIRsgGxBqIRwgBCgCBCEdIB0QqQIhHiAFIBwgHhCvDiEfIAQgHzYCDAwECwwBCyAEKAIEISAgIBBqISEgBCgCBCEiICIQqQIhIyAFICEgIxCuDiEkIAQgJDYCDAwCCwsgBCAFNgIMCyAEKAIMISVBECEmIAQgJmohJyAnJAAgJQ8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEJYBIQVBECEGIAMgBmohByAHJAAgBQ8LgwEBDX8jACEDQRAhBCADIARrIQUgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAUoAgghByAGIAc2AgAgBSgCCCEIIAgoAgQhCSAGIAk2AgQgBSgCCCEKIAooAgQhCyAFKAIEIQxBDCENIAwgDWwhDiALIA5qIQ8gBiAPNgIIIAYPC0kBCX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBCCEFIAQgBWohBiAGEJgBIQdBECEIIAMgCGohCSAJJAAgBw8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwthAQl/IwAhA0EQIQQgAyAEayEFIAUkACAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIMIQYgBSgCCCEHIAUoAgQhCCAIEI8BIQkgBiAHIAkQlwFBECEKIAUgCmohCyALJAAPCzkBBn8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEKAIEIQUgBCgCACEGIAYgBTYCBCAEDwuzAgElfyMAIQJBICEDIAIgA2shBCAEJAAgBCAANgIYIAQgATYCFCAEKAIYIQUgBRClASEGIAQgBjYCECAEKAIUIQcgBCgCECEIIAchCSAIIQogCSAKSyELQQEhDCALIAxxIQ0CQCANRQ0AIAUQww4ACyAFEKYBIQ4gBCAONgIMIAQoAgwhDyAEKAIQIRBBASERIBAgEXYhEiAPIRMgEiEUIBMgFE8hFUEBIRYgFSAWcSEXAkACQCAXRQ0AIAQoAhAhGCAEIBg2AhwMAQsgBCgCDCEZQQEhGiAZIBp0IRsgBCAbNgIIQQghHCAEIBxqIR0gHSEeQRQhHyAEIB9qISAgICEhIB4gIRCnASEiICIoAgAhIyAEICM2AhwLIAQoAhwhJEEgISUgBCAlaiEmICYkACAkDwuuAgEgfyMAIQRBICEFIAQgBWshBiAGJAAgBiAANgIYIAYgATYCFCAGIAI2AhAgBiADNgIMIAYoAhghByAGIAc2AhxBDCEIIAcgCGohCUEAIQogBiAKNgIIIAYoAgwhC0EIIQwgBiAMaiENIA0hDiAJIA4gCxCoARogBigCFCEPAkACQCAPRQ0AIAcQqQEhECAGKAIUIREgECAREKoBIRIgEiETDAELQQAhFCAUIRMLIBMhFSAHIBU2AgAgBygCACEWIAYoAhAhF0EMIRggFyAYbCEZIBYgGWohGiAHIBo2AgggByAaNgIEIAcoAgAhGyAGKAIUIRxBDCEdIBwgHWwhHiAbIB5qIR8gBxCrASEgICAgHzYCACAGKAIcISFBICEiIAYgImohIyAjJAAgIQ8L+gEBG38jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAUQrAEgBRCNASEGIAUoAgAhByAFKAIEIQggBCgCCCEJQQQhCiAJIApqIQsgBiAHIAggCxCtASAEKAIIIQxBBCENIAwgDWohDiAFIA4QrgFBBCEPIAUgD2ohECAEKAIIIRFBCCESIBEgEmohEyAQIBMQrgEgBRCBASEUIAQoAgghFSAVEKsBIRYgFCAWEK4BIAQoAgghFyAXKAIEIRggBCgCCCEZIBkgGDYCACAFEDQhGiAFIBoQrwEgBRCwAUEQIRsgBCAbaiEcIBwkAA8LlQEBEX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCCCADKAIIIQQgAyAENgIMIAQQsQEgBCgCACEFQQAhBiAFIQcgBiEIIAcgCEchCUEBIQogCSAKcSELAkAgC0UNACAEEKkBIQwgBCgCACENIAQQsgEhDiAMIA0gDhCzAQsgAygCDCEPQRAhECADIBBqIREgESQAIA8PCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwtZAQh/IwAhA0EQIQQgAyAEayEFIAUkACAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIIIQYgBSgCBCEHIAcQjwEhCCAGIAgQmQEaQRAhCSAFIAlqIQogCiQADws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQpAEhBUEQIQYgAyAGaiEHIAckACAFDwuZAgIffwF+IwAhAkEgIQMgAiADayEEIAQkACAEIAA2AhggBCABNgIUIAQoAhghBSAEIAU2AhwgBCgCFCEGIAYQmgEhByAHEJsBQRAhCCAEIAhqIQkgCSEKQQghCyAEIAtqIQwgDCENIAUgCiANEJwBGiAEKAIUIQ4gDhB3IQ9BASEQIA8gEHEhEQJAAkAgEQ0AIAQoAhQhEiASEHohEyAFEJ0BIRQgEykCACEhIBQgITcCAEEIIRUgFCAVaiEWIBMgFWohFyAXKAIAIRggFiAYNgIADAELIAQoAhQhGSAZEHghGiAaEHIhGyAEKAIUIRwgHBCeASEdIAUgGyAdEKkOCyAEKAIcIR5BICEfIAQgH2ohICAgJAAgHg8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEJ8BIQVBECEGIAMgBmohByAHJAAgBQ8LGwEDfyMAIQFBECECIAEgAmshAyADIAA2AgwPC2wBCX8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgwhBiAFKAIIIQcgBxBzGiAGEHQaIAUoAgQhCCAIEKABIQkgBiAJEKEBGkEQIQogBSAKaiELIAskACAGDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQogEhBUEQIQYgAyAGaiEHIAckACAFDwtEAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQeiEFIAUoAgQhBkEQIQcgAyAHaiEIIAgkACAGDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQowEhBUEQIQYgAyAGaiEHIAckACAFDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LSwEHfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAYQoAEaQRAhByAEIAdqIQggCCQAIAUPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPC4YBARF/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQtAEhBSAFELUBIQYgAyAGNgIIELYBIQcgAyAHNgIEQQghCCADIAhqIQkgCSEKQQQhCyADIAtqIQwgDCENIAogDRC3ASEOIA4oAgAhD0EQIRAgAyAQaiERIBEkACAPDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQuAEhBUEQIQYgAyAGaiEHIAckACAFDwtOAQh/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBSAGELkBIQdBECEIIAQgCGohCSAJJAAgBw8LfAEMfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAUoAgghByAHEMMBIQggBiAIEMQBGkEEIQkgBiAJaiEKIAUoAgQhCyALEMUBIQwgCiAMEMYBGkEQIQ0gBSANaiEOIA4kACAGDwtJAQl/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEQQwhBSAEIAVqIQYgBhDIASEHQRAhCCADIAhqIQkgCSQAIAcPC04BCH8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFIAYQxwEhB0EQIQggBCAIaiEJIAkkACAHDwtJAQl/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEQQwhBSAEIAVqIQYgBhDJASEHQRAhCCADIAhqIQkgCSQAIAcPC6gBARZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQzwEhBSAEEM8BIQYgBBCmASEHQQwhCCAHIAhsIQkgBiAJaiEKIAQQzwEhCyAEEDQhDEEMIQ0gDCANbCEOIAsgDmohDyAEEM8BIRAgBBCmASERQQwhEiARIBJsIRMgECATaiEUIAQgBSAKIA8gFBDQAUEQIRUgAyAVaiEWIBYkAA8L6QEBGn8jACEEQRAhBSAEIAVrIQYgBiQAIAYgADYCDCAGIAE2AgggBiACNgIEIAYgAzYCAAJAA0AgBigCBCEHIAYoAgghCCAHIQkgCCEKIAkgCkchC0EBIQwgCyAMcSENIA1FDQEgBigCDCEOIAYoAgAhDyAPKAIAIRBBdCERIBAgEWohEiASEI4BIRMgBigCBCEUQXQhFSAUIBVqIRYgBiAWNgIEIBYQ0QEhFyAOIBMgFxDSASAGKAIAIRggGCgCACEZQXQhGiAZIBpqIRsgGCAbNgIADAALAAtBECEcIAYgHGohHSAdJAAPC58BARJ/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAFENMBIQYgBigCACEHIAQgBzYCBCAEKAIIIQggCBDTASEJIAkoAgAhCiAEKAIMIQsgCyAKNgIAQQQhDCAEIAxqIQ0gDSEOIA4Q0wEhDyAPKAIAIRAgBCgCCCERIBEgEDYCAEEQIRIgBCASaiETIBMkAA8LsAEBFn8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAUQzwEhBiAFEM8BIQcgBRCmASEIQQwhCSAIIAlsIQogByAKaiELIAUQzwEhDCAFEKYBIQ1BDCEOIA0gDmwhDyAMIA9qIRAgBRDPASERIAQoAgghEkEMIRMgEiATbCEUIBEgFGohFSAFIAYgCyAQIBUQ0AFBECEWIAQgFmohFyAXJAAPCxsBA38jACEBQRAhAiABIAJrIQMgAyAANgIMDwtDAQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQoAgQhBSAEIAUQ2gFBECEGIAMgBmohByAHJAAPC14BDH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDcASEFIAUoAgAhBiAEKAIAIQcgBiAHayEIQQwhCSAIIAltIQpBECELIAMgC2ohDCAMJAAgCg8LWgEIfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAUoAgghByAFKAIEIQggBiAHIAgQ2wFBECEJIAUgCWohCiAKJAAPC0kBCX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBCCEFIAQgBWohBiAGELwBIQdBECEIIAMgCGohCSAJJAAgBw8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEELsBIQVBECEGIAMgBmohByAHJAAgBQ8LDAEBfxC9ASEAIAAPC04BCH8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFIAYQugEhB0EQIQggBCAIaiEJIAkkACAHDwteAQx/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQwAEhBSAFKAIAIQYgBCgCACEHIAYgB2shCEEMIQkgCCAJbSEKQRAhCyADIAtqIQwgDCQAIAoPC5EBARF/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgQgBCABNgIAIAQoAgQhBSAEKAIAIQZBCCEHIAQgB2ohCCAIIQkgCSAFIAYQvgEhCkEBIQsgCiALcSEMAkACQCAMRQ0AIAQoAgAhDSANIQ4MAQsgBCgCBCEPIA8hDgsgDiEQQRAhESAEIBFqIRIgEiQAIBAPC5EBARF/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgQgBCABNgIAIAQoAgAhBSAEKAIEIQZBCCEHIAQgB2ohCCAIIQkgCSAFIAYQvgEhCkEBIQsgCiALcSEMAkACQCAMRQ0AIAQoAgAhDSANIQ4MAQsgBCgCBCEPIA8hDgsgDiEQQRAhESAEIBFqIRIgEiQAIBAPCyUBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMQdWq1aoBIQQgBA8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEL8BIQVBECEGIAMgBmohByAHJAAgBQ8LDwEBf0H/////ByEAIAAPC2EBDH8jACEDQRAhBCADIARrIQUgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCCCEGIAYoAgAhByAFKAIEIQggCCgCACEJIAchCiAJIQsgCiALSSEMQQEhDSAMIA1xIQ4gDg8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPC0kBCX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBCCEFIAQgBWohBiAGEMEBIQdBECEIIAMgCGohCSAJJAAgBw8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEMIBIQVBECEGIAMgBmohByAHJAAgBQ8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwtWAQh/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBhDDARpBACEHIAUgBzYCAEEQIQggBCAIaiEJIAkkACAFDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LUwEIfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAYQxQEhByAFIAc2AgBBECEIIAQgCGohCSAJJAAgBQ8LmAEBE38jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFELUBIQcgBiEIIAchCSAIIAlLIQpBASELIAogC3EhDAJAIAxFDQBB5gwhDSANEMoBAAsgBCgCCCEOQQwhDyAOIA9sIRBBBCERIBAgERDLASESQRAhEyAEIBNqIRQgFCQAIBIPC0kBCX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBBCEFIAQgBWohBiAGEM4BIQdBECEIIAMgCGohCSAJJAAgBw8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEJYBIQVBECEGIAMgBmohByAHJAAgBQ8LUgEKfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQghBCAEEAEhBSADKAIMIQYgBSAGEMwBGkGchAEhByAHIQhBJSEJIAkhCiAFIAggChACAAtFAQd/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAFEM0BIQZBECEHIAQgB2ohCCAIJAAgBg8LaQELfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAUgBhDYBBpB9IMBIQdBCCEIIAcgCGohCSAJIQogBSAKNgIAQRAhCyAEIAtqIQwgDCQAIAUPCz4BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDADiEFQRAhBiADIAZqIQcgByQAIAUPCysBBX8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEKAIAIQUgBQ8LRQEIfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEKAIAIQUgBRCOASEGQRAhByADIAdqIQggCCQAIAYPCzcBA38jACEFQSAhBiAFIAZrIQcgByAANgIcIAcgATYCGCAHIAI2AhQgByADNgIQIAcgBDYCDA8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEENYBIQVBECEGIAMgBmohByAHJAAgBQ8LYQEJfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAUoAgghByAFKAIEIQggCBDUASEJIAYgByAJENUBQRAhCiAFIApqIQsgCyQADwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPC1kBCH8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgghBiAFKAIEIQcgBxDUASEIIAYgCBDXARpBECEJIAUgCWohCiAKJAAPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwuIAQINfwF+IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBhDYASEHIAcpAgAhDyAFIA83AgBBCCEIIAUgCGohCSAHIAhqIQogCigCACELIAkgCzYCACAEKAIIIQwgDBDZAUEQIQ0gBCANaiEOIA4kACAFDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LxQEBGH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBCdASEFIAMgBTYCCEEAIQYgAyAGNgIEAkADQCADKAIEIQdBAyEIIAchCSAIIQogCSAKSSELQQEhDCALIAxxIQ0gDUUNASADKAIIIQ4gAygCBCEPQQIhECAPIBB0IREgDiARaiESQQAhEyASIBM2AgAgAygCBCEUQQEhFSAUIBVqIRYgAyAWNgIEDAALAAtBECEXIAMgF2ohGCAYJAAPC0oBB38jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFIAYQ3QFBECEHIAQgB2ohCCAIJAAPC2IBCn8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgghBiAFKAIEIQdBDCEIIAcgCGwhCUEEIQogBiAJIAoQ4AFBECELIAUgC2ohDCAMJAAPC0kBCX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBDCEFIAQgBWohBiAGEOMBIQdBECEIIAMgCGohCSAJJAAgBw8LoAEBEn8jACECQRAhAyACIANrIQQgBCQAIAQgADYCBCAEIAE2AgAgBCgCBCEFAkADQCAEKAIAIQYgBSgCCCEHIAYhCCAHIQkgCCAJRyEKQQEhCyAKIAtxIQwgDEUNASAFEKkBIQ0gBSgCCCEOQXQhDyAOIA9qIRAgBSAQNgIIIBAQjgEhESANIBEQ3gEMAAsAC0EQIRIgBCASaiETIBMkAA8LSgEHfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAUgBhDfAUEQIQcgBCAHaiEIIAgkAA8LQgEGfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIIIQUgBRClDhpBECEGIAQgBmohByAHJAAPC1EBB38jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgwhBiAFKAIIIQcgBiAHEOEBQRAhCCAFIAhqIQkgCSQADwtBAQZ/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAFEOIBQRAhBiAEIAZqIQcgByQADws6AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQwQ5BECEFIAMgBWohBiAGJAAPCz4BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDCASEFQRAhBiADIAZqIQcgByQAIAUPC5YCAR5/IwAhA0EgIQQgAyAEayEFIAUkACAFIAA2AhwgBSABNgIYIAUgAjYCFCAFKAIcIQYgBSgCGCEHQQghCCAFIAhqIQkgCSEKIAogBiAHEIwBGiAFKAIQIQsgBSALNgIEIAUoAgwhDCAFIAw2AgACQANAIAUoAgAhDSAFKAIEIQ4gDSEPIA4hECAPIBBHIRFBASESIBEgEnEhEyATRQ0BIAYQjQEhFCAFKAIAIRUgFRCOASEWIAUoAhQhFyAUIBYgFxCQASAFKAIAIRhBDCEZIBggGWohGiAFIBo2AgAgBSgCACEbIAUgGzYCDAwACwALQQghHCAFIBxqIR0gHSEeIB4QkQEaQSAhHyAFIB9qISAgICQADwv3AQEdfyMAIQNBICEEIAMgBGshBSAFJAAgBSAANgIcIAUgATYCGCAFIAI2AhQgBSgCHCEGQQghByAGIAdqIQggBSgCGCEJQQghCiAFIApqIQsgCyEMIAwgCCAJEOkBGgJAA0AgBSgCCCENIAUoAgwhDiANIQ8gDiEQIA8gEEchEUEBIRIgESAScSETIBNFDQEgBhCpASEUIAUoAgghFSAVEI4BIRYgBSgCFCEXIBQgFiAXEJABIAUoAgghGEEMIRkgGCAZaiEaIAUgGjYCCAwACwALQQghGyAFIBtqIRwgHCEdIB0Q6gEaQSAhHiAFIB5qIR8gHyQADwsiAQN/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AggPC7wBARR/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAFKAIEIQYgBCAGNgIEAkADQCAEKAIIIQcgBCgCBCEIIAchCSAIIQogCSAKRyELQQEhDCALIAxxIQ0gDUUNASAFEI0BIQ4gBCgCBCEPQXQhECAPIBBqIREgBCARNgIEIBEQjgEhEiAOIBIQ3gEMAAsACyAEKAIIIRMgBSATNgIEQRAhFCAEIBRqIRUgFSQADwuvAQEWfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBRDPASEGIAUQzwEhByAFEKYBIQhBDCEJIAggCWwhCiAHIApqIQsgBRDPASEMIAQoAgghDUEMIQ4gDSAObCEPIAwgD2ohECAFEM8BIREgBRA0IRJBDCETIBIgE2whFCARIBRqIRUgBSAGIAsgECAVENABQRAhFiAEIBZqIRcgFyQADwuDAQENfyMAIQNBECEEIAMgBGshBSAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIMIQYgBSgCCCEHIAcoAgAhCCAGIAg2AgAgBSgCCCEJIAkoAgAhCiAFKAIEIQtBDCEMIAsgDGwhDSAKIA1qIQ4gBiAONgIEIAUoAgghDyAGIA82AgggBg8LOQEGfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQoAgAhBSAEKAIIIQYgBiAFNgIAIAQPCyYBBX8jACEBQRAhAiABIAJrIQMgAyAANgIMQeAVIQQgBCEFIAUPC0IBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBCsASAEEPABGkEQIQUgAyAFaiEGIAYkACAEDwsQAQJ/QeAVIQAgACEBIAEPCxABAn9B0BYhACAAIQEgAQ8LEAECf0G4FyEAIAAhASABDwuVAQERfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIIIAMoAgghBCADIAQ2AgwgBCgCACEFQQAhBiAFIQcgBiEIIAcgCEchCUEBIQogCSAKcSELAkAgC0UNACAEEPEBIAQQjQEhDCAEKAIAIQ0gBBC4ASEOIAwgDSAOELMBCyADKAIMIQ9BECEQIAMgEGohESARJAAgDw8LQwEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEKAIAIQUgBCAFEOcBQRAhBiADIAZqIQcgByQADws9AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQ+AEaQRAhBSADIAVqIQYgBiQAIAQPC0UBCH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBEDACEFIAUQ9gEhBkEQIQcgAyAHaiEIIAgkACAGDwshAQR/IwAhAUEQIQIgASACayEDIAMgADYCDEEBIQQgBA8LNQEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMEPcBIQRBECEFIAMgBWohBiAGJAAgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCwwBAX9B0BchACAADwuGAQEPfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEPkBGkEAIQUgBCAFNgIAQQAhBiAEIAY2AgRBCCEHIAQgB2ohCEEAIQkgAyAJNgIIQQghCiADIApqIQsgCyEMIAMhDSAIIAwgDRD6ARpBECEOIAMgDmohDyAPJAAgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPC20BCX8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgwhBiAFKAIIIQcgBxDDASEIIAYgCBDEARogBSgCBCEJIAkQcxogBhD7ARpBECEKIAUgCmohCyALJAAgBg8LPQEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIEIAMoAgQhBCAEEPwBGkEQIQUgAyAFaiEGIAYkACAEDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8L9AEBHn8jACEDQSAhBCADIARrIQUgBSQAIAUgADYCHCAFIAE2AhggBSACNgIUIAUoAhghBiAGEIICIQcgBSgCHCEIIAgoAgQhCSAIKAIAIQpBASELIAkgC3UhDCAHIAxqIQ1BASEOIAkgDnEhDwJAAkAgD0UNACANKAIAIRAgECAKaiERIBEoAgAhEiASIRMMAQsgCiETCyATIRQgBSgCFCEVQQghFiAFIBZqIRcgFyEYIBggFRCDAkEIIRkgBSAZaiEaIBohGyANIBsgFBEBAEEIIRwgBSAcaiEdIB0hHiAeEKUOGkEgIR8gBSAfaiEgICAkAA8LIQEEfyMAIQFBECECIAEgAmshAyADIAA2AgxBAyEEIAQPCzUBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBCEAiEEQRAhBSADIAVqIQYgBiQAIAQPCwwBAX9B6BghACAADwtwAQx/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgxBCCEEIAQQwA4hBSAFIQYgAygCDCEHIAcoAgAhCCAHKAIEIQkgBSAJNgIEIAUgCDYCACADIAY2AgggAygCCCEKQRAhCyADIAtqIQwgDCQAIAoPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwtfAQp/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgghBUEEIQYgBSAGaiEHIAQoAgghCCAIKAIAIQkgACAHIAkQhQIaQRAhCiAEIApqIQsgCyQADwsMAQF/QdQXIQAgAA8LgwEBDn8jACEDQSAhBCADIARrIQUgBSQAIAUgADYCHCAFIAE2AhggBSACNgIUIAUoAhwhBkEQIQcgBSAHaiEIIAghCUEIIQogBSAKaiELIAshDCAGIAkgDBBwGiAFKAIYIQ0gBSgCFCEOIAYgDSAOEKgOQSAhDyAFIA9qIRAgECQAIAYPC+oBARp/IwAhBEEgIQUgBCAFayEGIAYkACAGIAA2AhwgBiABNgIYIAYgAjYCFCAGIAM2AhAgBigCGCEHIAcQggIhCCAGKAIcIQkgCSgCBCEKIAkoAgAhC0EBIQwgCiAMdSENIAggDWohDkEBIQ8gCiAPcSEQAkACQCAQRQ0AIA4oAgAhESARIAtqIRIgEigCACETIBMhFAwBCyALIRQLIBQhFSAGKAIUIRYgFhCLAiEXIAYoAhAhGCAGIRkgGSAYEIMCIAYhGiAOIBcgGiAVEQYAIAYhGyAbEKUOGkEgIRwgBiAcaiEdIB0kAA8LIQEEfyMAIQFBECECIAEgAmshAyADIAA2AgxBBCEEIAQPCzUBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBCMAiEEQRAhBSADIAVqIQYgBiQAIAQPCwwBAX9BgBkhACAADwtwAQx/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgxBCCEEIAQQwA4hBSAFIQYgAygCDCEHIAcoAgAhCCAHKAIEIQkgBSAJNgIEIAUgCDYCACADIAY2AgggAygCCCEKQRAhCyADIAtqIQwgDCQAIAoPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwsMAQF/QfAYIQAgAA8LywEBGX8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCCCEFIAUQkgIhBiAEKAIMIQcgBygCBCEIIAcoAgAhCUEBIQogCCAKdSELIAYgC2ohDEEBIQ0gCCANcSEOAkACQCAORQ0AIAwoAgAhDyAPIAlqIRAgECgCACERIBEhEgwBCyAJIRILIBIhEyAMIBMRAAAhFCAEIBQ2AgRBBCEVIAQgFWohFiAWIRcgFxCTAiEYQRAhGSAEIBlqIRogGiQAIBgPCyEBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMQQIhBCAEDws1AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQlAIhBEEQIQUgAyAFaiEGIAYkACAEDwsMAQF/QZAZIQAgAA8LcAEMfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQghBCAEEMAOIQUgBSEGIAMoAgwhByAHKAIAIQggBygCBCEJIAUgCTYCBCAFIAg2AgAgAyAGNgIIIAMoAgghCkEQIQsgAyALaiEMIAwkACAKDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LKwEFfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQoAgAhBSAFDwsMAQF/QYgZIQAgAA8LjAEBD38jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgwhBiAGKAIAIQcgBSgCCCEIIAgQmgIhCSAFKAIEIQogChCLAiELIAUhDCAMIAkgCyAHEQYAIAUhDSANEJsCIQ4gBSEPIA8QnAIaQRAhECAFIBBqIREgESQAIA4PCyEBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMQQMhBCAEDws1AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQnQIhBEEQIQUgAyAFaiEGIAYkACAEDwsMAQF/QbwZIQAgAA8LXgEKfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQQhBCAEEMAOIQUgAygCDCEGIAYoAgAhByAFIAc2AgAgAyAFNgIIIAMoAgghCEEQIQkgAyAJaiEKIAokACAIDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LUAEJfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEKAIAIQUgBRAFIAMoAgwhBiAGKAIAIQdBECEIIAMgCGohCSAJJAAgBw8LQgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEKAIAIQUgBRAGQRAhBiADIAZqIQcgByQAIAQPCwwBAX9BlBkhACAADwumAQERfyMAIQJBICEDIAIgA2shBCAEJAAgBCAANgIUIAQgATYCECAEKAIUIQUgBRCiAiEGIAQgBjYCDCAEKAIQIQcgBxCPASEIQQwhCSAEIAlqIQogCiELIAQgCzYCHCAEIAg2AhggBCgCHCEMIAQoAhghDSANEI8BIQ4gDhCjAiEPIAwgDxCkAiAEKAIcIRAgEBClAkEgIREgBCARaiESIBIkACAFDwsMAQF/EKYCIQAgAA8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEKcCIQVBECEGIAMgBmohByAHJAAgBQ8LOQEFfyMAIQJBECEDIAIgA2shBCAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBSAGNgIAIAUPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwvHAQEZfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEKgCIQVBACEGIAUgBnQhB0EEIQggByAIaiEJIAkQwA8hCiADIAo2AgggAygCDCELIAsQqAIhDCADKAIIIQ0gDSAMNgIAIAMoAgghDkEEIQ8gDiAPaiEQIAMoAgwhESAREGohEiADKAIMIRMgExCoAiEUQQAhFSAUIBV0IRYgECASIBYQyg8aIAMoAgghF0EQIRggAyAYaiEZIBkkACAXDwteAQp/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AgggBCgCCCEFIAQoAgwhBiAGKAIAIQcgByAFNgIAIAQoAgwhCCAIKAIAIQlBCCEKIAkgCmohCyAIIAs2AgAPCxsBA38jACEBQRAhAiABIAJrIQMgAyAANgIMDwsQAQJ/QdAYIQAgACEBIAEPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQqQIhBUEQIQYgAyAGaiEHIAckACAFDwtvAQ1/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQdyEFQQEhBiAFIAZxIQcCQAJAIAdFDQAgBBCeASEIIAghCQwBCyAEEKoCIQogCiEJCyAJIQtBECEMIAMgDGohDSANJAAgCw8LUAEKfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEHohBSAFLQALIQZB/wEhByAGIAdxIQhBECEJIAMgCWohCiAKJAAgCA8LuQEBFX8jACEEQSAhBSAEIAVrIQYgBiQAIAYgADYCHCAGIAE2AhggBiACNgIUIAYgAzYCECAGKAIcIQcgBygCACEIIAYoAhghCSAJEJoCIQogBigCFCELIAsQiwIhDCAGKAIQIQ0gBiEOIA4gDRCDAiAGIQ8gCiAMIA8gCBEFACEQQQEhESAQIBFxIRIgEhCwAiETIAYhFCAUEKUOGkEBIRUgEyAVcSEWQSAhFyAGIBdqIRggGCQAIBYPCyEBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMQQQhBCAEDws1AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQsQIhBEEQIQUgAyAFaiEGIAYkACAEDwsMAQF/QeAZIQAgAA8LXgEKfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQQhBCAEEMAOIQUgAygCDCEGIAYoAgAhByAFIAc2AgAgAyAFNgIIIAMoAgghCEEQIQkgAyAJaiEKIAokACAIDwszAQd/IwAhAUEQIQIgASACayEDIAAhBCADIAQ6AA8gAy0ADyEFQQEhBiAFIAZxIQcgBw8LDAEBf0HQGSEAIAAPC0oBB38jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFIAYQswJBECEHIAQgB2ohCCAIJAAPCyIBA38jACECQRAhAyACIANrIQQgBCAANgIEIAQgATYCAA8LSQEJfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBEEIIQUgBCAFaiEGIAYQvAIhB0EQIQggAyAIaiEJIAkkACAHDwuzAQEVfyMAIQJBICEDIAIgA2shBCAEJAAgBCAANgIcIAQgATYCGCAEKAIcIQVBCCEGIAQgBmohByAHIQhBASEJIAggBSAJEL0CGiAFEL4CIQogBCgCDCELIAsQvwIhDCAEKAIYIQ0gDRDAAiEOIAogDCAOEMECIAQoAgwhD0EEIRAgDyAQaiERIAQgETYCDEEIIRIgBCASaiETIBMhFCAUEMICGkEgIRUgBCAVaiEWIBYkAA8L2wEBGH8jACECQSAhAyACIANrIQQgBCQAIAQgADYCHCAEIAE2AhggBCgCHCEFIAUQvgIhBiAEIAY2AhQgBRBIIQdBASEIIAcgCGohCSAFIAkQwwIhCiAFEEghCyAEKAIUIQwgBCENIA0gCiALIAwQxAIaIAQoAhQhDiAEKAIIIQ8gDxC/AiEQIAQoAhghESAREMACIRIgDiAQIBIQwQIgBCgCCCETQQQhFCATIBRqIRUgBCAVNgIIIAQhFiAFIBYQxQIgBCEXIBcQxgIaQSAhGCAEIBhqIRkgGSQADwvTAgEpfyMAIQNBMCEEIAMgBGshBSAFJAAgBSAANgIsIAUgATYCKCAFIAI2AiQgBSgCLCEGIAYQtAIhByAHKAIAIQggBigCBCEJIAggCWshCkECIQsgCiALdSEMIAUoAighDSAMIQ4gDSEPIA4gD08hEEEBIREgECARcSESAkACQCASRQ0AIAUoAighEyAFKAIkIRQgBiATIBQQ8wIMAQsgBhC+AiEVIAUgFTYCICAGEEghFiAFKAIoIRcgFiAXaiEYIAYgGBDDAiEZIAYQSCEaIAUoAiAhG0EIIRwgBSAcaiEdIB0hHiAeIBkgGiAbEMQCGiAFKAIoIR8gBSgCJCEgQQghISAFICFqISIgIiEjICMgHyAgEPQCQQghJCAFICRqISUgJSEmIAYgJhDFAkEIIScgBSAnaiEoICghKSApEMYCGgtBMCEqIAUgKmohKyArJAAPC3MBCn8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFIAYQ9QIgBRBIIQcgBCAHNgIEIAQoAgghCCAFIAgQ9gIgBCgCBCEJIAUgCRD3AkEQIQogBCAKaiELIAskAA8LSwEJfyMAIQJBECEDIAIgA2shBCAEIAA2AgwgBCABNgIIIAQoAgwhBSAFKAIAIQYgBCgCCCEHQQIhCCAHIAh0IQkgBiAJaiEKIAoPC3cBDX8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAGEMACIQcgBCEIIAggBxCjAxoQpAMhCSAEIQogChClAyELIAkgCxAHIQwgBSAMNgIAQRAhDSAEIA1qIQ4gDiQAIAUPC0sBCX8jACECQRAhAyACIANrIQQgBCAANgIMIAQgATYCCCAEKAIMIQUgBSgCACEGIAQoAgghB0ECIQggByAIdCEJIAYgCWohCiAKDws+AQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQxwIhBUEQIQYgAyAGaiEHIAckACAFDwuDAQENfyMAIQNBECEEIAMgBGshBSAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIMIQYgBSgCCCEHIAYgBzYCACAFKAIIIQggCCgCBCEJIAYgCTYCBCAFKAIIIQogCigCBCELIAUoAgQhDEECIQ0gDCANdCEOIAsgDmohDyAGIA82AgggBg8LSQEJfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBEEIIQUgBCAFaiEGIAYQyQIhB0EQIQggAyAIaiEJIAkkACAHDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPC2EBCX8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgwhBiAFKAIIIQcgBSgCBCEIIAgQwAIhCSAGIAcgCRDIAkEQIQogBSAKaiELIAskAA8LOQEGfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQoAgQhBSAEKAIAIQYgBiAFNgIEIAQPC7MCASV/IwAhAkEgIQMgAiADayEEIAQkACAEIAA2AhggBCABNgIUIAQoAhghBSAFEMsCIQYgBCAGNgIQIAQoAhQhByAEKAIQIQggByEJIAghCiAJIApLIQtBASEMIAsgDHEhDQJAIA1FDQAgBRDDDgALIAUQzAIhDiAEIA42AgwgBCgCDCEPIAQoAhAhEEEBIREgECARdiESIA8hEyASIRQgEyAUTyEVQQEhFiAVIBZxIRcCQAJAIBdFDQAgBCgCECEYIAQgGDYCHAwBCyAEKAIMIRlBASEaIBkgGnQhGyAEIBs2AghBCCEcIAQgHGohHSAdIR5BFCEfIAQgH2ohICAgISEgHiAhEKcBISIgIigCACEjIAQgIzYCHAsgBCgCHCEkQSAhJSAEICVqISYgJiQAICQPC64CASB/IwAhBEEgIQUgBCAFayEGIAYkACAGIAA2AhggBiABNgIUIAYgAjYCECAGIAM2AgwgBigCGCEHIAYgBzYCHEEMIQggByAIaiEJQQAhCiAGIAo2AgggBigCDCELQQghDCAGIAxqIQ0gDSEOIAkgDiALEM0CGiAGKAIUIQ8CQAJAIA9FDQAgBxDOAiEQIAYoAhQhESAQIBEQzwIhEiASIRMMAQtBACEUIBQhEwsgEyEVIAcgFTYCACAHKAIAIRYgBigCECEXQQIhGCAXIBh0IRkgFiAZaiEaIAcgGjYCCCAHIBo2AgQgBygCACEbIAYoAhQhHEECIR0gHCAddCEeIBsgHmohHyAHENACISAgICAfNgIAIAYoAhwhIUEgISIgBiAiaiEjICMkACAhDwv6AQEbfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBRDRAiAFEL4CIQYgBSgCACEHIAUoAgQhCCAEKAIIIQlBBCEKIAkgCmohCyAGIAcgCCALENICIAQoAgghDEEEIQ0gDCANaiEOIAUgDhDTAkEEIQ8gBSAPaiEQIAQoAgghEUEIIRIgESASaiETIBAgExDTAiAFELQCIRQgBCgCCCEVIBUQ0AIhFiAUIBYQ0wIgBCgCCCEXIBcoAgQhGCAEKAIIIRkgGSAYNgIAIAUQSCEaIAUgGhDUAiAFENUCQRAhGyAEIBtqIRwgHCQADwuVAQERfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIIIAMoAgghBCADIAQ2AgwgBBDWAiAEKAIAIQVBACEGIAUhByAGIQggByAIRyEJQQEhCiAJIApxIQsCQCALRQ0AIAQQzgIhDCAEKAIAIQ0gBBDXAiEOIAwgDSAOENgCCyADKAIMIQ9BECEQIAMgEGohESARJAAgDw8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPC18BCX8jACEDQRAhBCADIARrIQUgBSQAIAUgADYCDCAFIAE2AgggBSACNgIEIAUoAgghBiAFKAIEIQcgBxDAAiEIIAgoAgAhCSAGIAk2AgBBECEKIAUgCmohCyALJAAPCz4BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDKAiEFQRAhBiADIAZqIQcgByQAIAUPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwuGAQERfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEENkCIQUgBRDaAiEGIAMgBjYCCBC2ASEHIAMgBzYCBEEIIQggAyAIaiEJIAkhCkEEIQsgAyALaiEMIAwhDSAKIA0QtwEhDiAOKAIAIQ9BECEQIAMgEGohESARJAAgDw8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEENsCIQVBECEGIAMgBmohByAHJAAgBQ8LfAEMfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAUoAgghByAHEMMBIQggBiAIEOICGkEEIQkgBiAJaiEKIAUoAgQhCyALEOMCIQwgCiAMEOQCGkEQIQ0gBSANaiEOIA4kACAGDwtJAQl/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEQQwhBSAEIAVqIQYgBhDmAiEHQRAhCCADIAhqIQkgCSQAIAcPC04BCH8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFIAYQ5QIhB0EQIQggBCAIaiEJIAkkACAHDwtJAQl/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEQQwhBSAEIAVqIQYgBhDnAiEHQRAhCCADIAhqIQkgCSQAIAcPC6gBARZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQ6QIhBSAEEOkCIQYgBBDMAiEHQQIhCCAHIAh0IQkgBiAJaiEKIAQQ6QIhCyAEEEghDEECIQ0gDCANdCEOIAsgDmohDyAEEOkCIRAgBBDMAiERQQIhEiARIBJ0IRMgECATaiEUIAQgBSAKIA8gFBDqAkEQIRUgAyAVaiEWIBYkAA8LgQIBH38jACEEQSAhBSAEIAVrIQYgBiQAIAYgADYCHCAGIAE2AhggBiACNgIUIAYgAzYCECAGKAIUIQcgBigCGCEIIAcgCGshCUECIQogCSAKdSELIAYgCzYCDCAGKAIMIQwgBigCECENIA0oAgAhDkEAIQ8gDyAMayEQQQIhESAQIBF0IRIgDiASaiETIA0gEzYCACAGKAIMIRRBACEVIBQhFiAVIRcgFiAXSiEYQQEhGSAYIBlxIRoCQCAaRQ0AIAYoAhAhGyAbKAIAIRwgBigCGCEdIAYoAgwhHkECIR8gHiAfdCEgIBwgHSAgEMoPGgtBICEhIAYgIWohIiAiJAAPC58BARJ/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAFEOsCIQYgBigCACEHIAQgBzYCBCAEKAIIIQggCBDrAiEJIAkoAgAhCiAEKAIMIQsgCyAKNgIAQQQhDCAEIAxqIQ0gDSEOIA4Q6wIhDyAPKAIAIRAgBCgCCCERIBEgEDYCAEEQIRIgBCASaiETIBMkAA8LsAEBFn8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAUQ6QIhBiAFEOkCIQcgBRDMAiEIQQIhCSAIIAl0IQogByAKaiELIAUQ6QIhDCAFEMwCIQ1BAiEOIA0gDnQhDyAMIA9qIRAgBRDpAiERIAQoAgghEkECIRMgEiATdCEUIBEgFGohFSAFIAYgCyAQIBUQ6gJBECEWIAQgFmohFyAXJAAPCxsBA38jACEBQRAhAiABIAJrIQMgAyAANgIMDwtDAQd/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQoAgQhBSAEIAUQ7AJBECEGIAMgBmohByAHJAAPC14BDH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDuAiEFIAUoAgAhBiAEKAIAIQcgBiAHayEIQQIhCSAIIAl1IQpBECELIAMgC2ohDCAMJAAgCg8LWgEIfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAUoAgghByAFKAIEIQggBiAHIAgQ7QJBECEJIAUgCWohCiAKJAAPC0kBCX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBCCEFIAQgBWohBiAGEN0CIQdBECEIIAMgCGohCSAJJAAgBw8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEENwCIQVBECEGIAMgBmohByAHJAAgBQ8LXgEMfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEN8CIQUgBSgCACEGIAQoAgAhByAGIAdrIQhBAiEJIAggCXUhCkEQIQsgAyALaiEMIAwkACAKDwslAQR/IwAhAUEQIQIgASACayEDIAMgADYCDEH/////AyEEIAQPCz4BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDeAiEFQRAhBiADIAZqIQcgByQAIAUPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwtJAQl/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEQQghBSAEIAVqIQYgBhDgAiEHQRAhCCADIAhqIQkgCSQAIAcPCz4BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDhAiEFQRAhBiADIAZqIQcgByQAIAUPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwtWAQh/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBhDDARpBACEHIAUgBzYCAEEQIQggBCAIaiEJIAkkACAFDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LUwEIfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAYQ4wIhByAFIAc2AgBBECEIIAQgCGohCSAJJAAgBQ8LmAEBE38jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCDCEFIAQoAgghBiAFENoCIQcgBiEIIAchCSAIIAlLIQpBASELIAogC3EhDAJAIAxFDQBB5gwhDSANEMoBAAsgBCgCCCEOQQIhDyAOIA90IRBBBCERIBAgERDLASESQRAhEyAEIBNqIRQgFCQAIBIPC0kBCX8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQRBBCEFIAQgBWohBiAGEOgCIQdBECEIIAMgCGohCSAJJAAgBw8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEMcCIQVBECEGIAMgBmohByAHJAAgBQ8LKwEFfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQoAgAhBSAFDwtFAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQoAgAhBSAFEL8CIQZBECEHIAMgB2ohCCAIJAAgBg8LNwEDfyMAIQVBICEGIAUgBmshByAHIAA2AhwgByABNgIYIAcgAjYCFCAHIAM2AhAgByAENgIMDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LSgEHfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBCgCCCEGIAUgBhDvAkEQIQcgBCAHaiEIIAgkAA8LYgEKfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCCCEGIAUoAgQhB0ECIQggByAIdCEJQQQhCiAGIAkgChDgAUEQIQsgBSALaiEMIAwkAA8LSQEJfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBEEMIQUgBCAFaiEGIAYQ8gIhB0EQIQggAyAIaiEJIAkkACAHDwugAQESfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIEIAQgATYCACAEKAIEIQUCQANAIAQoAgAhBiAFKAIIIQcgBiEIIAchCSAIIAlHIQpBASELIAogC3EhDCAMRQ0BIAUQzgIhDSAFKAIIIQ5BfCEPIA4gD2ohECAFIBA2AgggEBC/AiERIA0gERDwAgwACwALQRAhEiAEIBJqIRMgEyQADwtKAQd/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBSAGEPECQRAhByAEIAdqIQggCCQADwsiAQN/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AggPCz4BB38jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDhAiEFQRAhBiADIAZqIQcgByQAIAUPC5YCAR5/IwAhA0EgIQQgAyAEayEFIAUkACAFIAA2AhwgBSABNgIYIAUgAjYCFCAFKAIcIQYgBSgCGCEHQQghCCAFIAhqIQkgCSEKIAogBiAHEL0CGiAFKAIQIQsgBSALNgIEIAUoAgwhDCAFIAw2AgACQANAIAUoAgAhDSAFKAIEIQ4gDSEPIA4hECAPIBBHIRFBASESIBEgEnEhEyATRQ0BIAYQvgIhFCAFKAIAIRUgFRC/AiEWIAUoAhQhFyAUIBYgFxDBAiAFKAIAIRhBBCEZIBggGWohGiAFIBo2AgAgBSgCACEbIAUgGzYCDAwACwALQQghHCAFIBxqIR0gHSEeIB4QwgIaQSAhHyAFIB9qISAgICQADwv3AQEdfyMAIQNBICEEIAMgBGshBSAFJAAgBSAANgIcIAUgATYCGCAFIAI2AhQgBSgCHCEGQQghByAGIAdqIQggBSgCGCEJQQghCiAFIApqIQsgCyEMIAwgCCAJEPgCGgJAA0AgBSgCCCENIAUoAgwhDiANIQ8gDiEQIA8gEEchEUEBIRIgESAScSETIBNFDQEgBhDOAiEUIAUoAgghFSAVEL8CIRYgBSgCFCEXIBQgFiAXEMECIAUoAgghGEEEIRkgGCAZaiEaIAUgGjYCCAwACwALQQghGyAFIBtqIRwgHCEdIB0Q+QIaQSAhHiAFIB5qIR8gHyQADwsiAQN/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AggPC7wBARR/IwAhAkEQIQMgAiADayEEIAQkACAEIAA2AgwgBCABNgIIIAQoAgwhBSAFKAIEIQYgBCAGNgIEAkADQCAEKAIIIQcgBCgCBCEIIAchCSAIIQogCSAKRyELQQEhDCALIAxxIQ0gDUUNASAFEL4CIQ4gBCgCBCEPQXwhECAPIBBqIREgBCARNgIEIBEQvwIhEiAOIBIQ8AIMAAsACyAEKAIIIRMgBSATNgIEQRAhFCAEIBRqIRUgFSQADwuvAQEWfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIMIQUgBRDpAiEGIAUQ6QIhByAFEMwCIQhBAiEJIAggCXQhCiAHIApqIQsgBRDpAiEMIAQoAgghDUECIQ4gDSAOdCEPIAwgD2ohECAFEOkCIREgBRBIIRJBAiETIBIgE3QhFCARIBRqIRUgBSAGIAsgECAVEOoCQRAhFiAEIBZqIRcgFyQADwuDAQENfyMAIQNBECEEIAMgBGshBSAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIMIQYgBSgCCCEHIAcoAgAhCCAGIAg2AgAgBSgCCCEJIAkoAgAhCiAFKAIEIQtBAiEMIAsgDHQhDSAKIA1qIQ4gBiAONgIEIAUoAgghDyAGIA82AgggBg8LOQEGfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQoAgAhBSAEKAIIIQYgBiAFNgIAIAQPCyYBBX8jACEBQRAhAiABIAJrIQMgAyAANgIMQdAaIQQgBCEFIAUPC0IBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDRAiAEEP8CGkEQIQUgAyAFaiEGIAYkACAEDwsQAQJ/QdAaIQAgACEBIAEPCxABAn9BkBshACAAIQEgAQ8LEAECf0HIGyEAIAAhASABDwuVAQERfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIIIAMoAgghBCADIAQ2AgwgBCgCACEFQQAhBiAFIQcgBiEIIAcgCEchCUEBIQogCSAKcSELAkAgC0UNACAEEIADIAQQvgIhDCAEKAIAIQ0gBBDbAiEOIAwgDSAOENgCCyADKAIMIQ9BECEQIAMgEGohESARJAAgDw8LQwEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEKAIAIQUgBCAFEPYCQRAhBiADIAZqIQcgByQADws9AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQQhwMaQRAhBSADIAVqIQYgBiQAIAQPC0UBCH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBEDACEFIAUQhQMhBkEQIQcgAyAHaiEIIAgkACAGDwshAQR/IwAhAUEQIQIgASACayEDIAMgADYCDEEBIQQgBA8LNQEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMEIYDIQRBECEFIAMgBWohBiAGJAAgBA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCwwBAX9B2BshACAADwuGAQEPfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEPkBGkEAIQUgBCAFNgIAQQAhBiAEIAY2AgRBCCEHIAQgB2ohCEEAIQkgAyAJNgIIQQghCiADIApqIQsgCyEMIAMhDSAIIAwgDRCIAxpBECEOIAMgDmohDyAPJAAgBA8LbQEJfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAUoAgghByAHEMMBIQggBiAIEOICGiAFKAIEIQkgCRBzGiAGEIkDGkEQIQogBSAKaiELIAskACAGDws9AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgQgAygCBCEEIAQQigMaQRAhBSADIAVqIQYgBiQAIAQPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwvMAQEXfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCCCEGIAYQjwMhByAFKAIMIQggCCgCBCEJIAgoAgAhCkEBIQsgCSALdSEMIAcgDGohDUEBIQ4gCSAOcSEPAkACQCAPRQ0AIA0oAgAhECAQIApqIREgESgCACESIBIhEwwBCyAKIRMLIBMhFCAFKAIEIRUgFRCQAyEWIAUgFjYCACAFIRcgDSAXIBQRAQBBECEYIAUgGGohGSAZJAAPCyEBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMQQMhBCAEDws1AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQkQMhBEEQIQUgAyAFaiEGIAYkACAEDwtwAQx/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgxBCCEEIAQQwA4hBSAFIQYgAygCDCEHIAcoAgAhCCAHKAIEIQkgBSAJNgIEIAUgCDYCACADIAY2AgggAygCCCEKQRAhCyADIAtqIQwgDCQAIAoPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LDAEBf0HcGyEAIAAPC+4BARt/IwAhBEEgIQUgBCAFayEGIAYkACAGIAA2AhwgBiABNgIYIAYgAjYCFCAGIAM2AhAgBigCGCEHIAcQjwMhCCAGKAIcIQkgCSgCBCEKIAkoAgAhC0EBIQwgCiAMdSENIAggDWohDkEBIQ8gCiAPcSEQAkACQCAQRQ0AIA4oAgAhESARIAtqIRIgEigCACETIBMhFAwBCyALIRQLIBQhFSAGKAIUIRYgFhCLAiEXIAYoAhAhGCAYEJADIRkgBiAZNgIMQQwhGiAGIBpqIRsgGyEcIA4gFyAcIBURBgBBICEdIAYgHWohHiAeJAAPCyEBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMQQQhBCAEDws1AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQlgMhBEEQIQUgAyAFaiEGIAYkACAEDwtwAQx/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgxBCCEEIAQQwA4hBSAFIQYgAygCDCEHIAcoAgAhCCAHKAIEIQkgBSAJNgIEIAUgCDYCACADIAY2AgggAygCCCEKQRAhCyADIAtqIQwgDCQAIAoPCwwBAX9B8BshACAADwvLAQEZfyMAIQJBECEDIAIgA2shBCAEJAAgBCAANgIMIAQgATYCCCAEKAIIIQUgBRCbAyEGIAQoAgwhByAHKAIEIQggBygCACEJQQEhCiAIIAp1IQsgBiALaiEMQQEhDSAIIA1xIQ4CQAJAIA5FDQAgDCgCACEPIA8gCWohECAQKAIAIREgESESDAELIAkhEgsgEiETIAwgExEAACEUIAQgFDYCBEEEIRUgBCAVaiEWIBYhFyAXEJMCIRhBECEZIAQgGWohGiAaJAAgGA8LIQEEfyMAIQFBECECIAEgAmshAyADIAA2AgxBAiEEIAQPCzUBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBCcAyEEQRAhBSADIAVqIQYgBiQAIAQPC3ABDH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDEEIIQQgBBDADiEFIAUhBiADKAIMIQcgBygCACEIIAcoAgQhCSAFIAk2AgQgBSAINgIAIAMgBjYCCCADKAIIIQpBECELIAMgC2ohDCAMJAAgCg8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCwwBAX9BgBwhACAADwuMAQEPfyMAIQNBECEEIAMgBGshBSAFJAAgBSAANgIMIAUgATYCCCAFIAI2AgQgBSgCDCEGIAYoAgAhByAFKAIIIQggCBChAyEJIAUoAgQhCiAKEIsCIQsgBSEMIAwgCSALIAcRBgAgBSENIA0QmwIhDiAFIQ8gDxCcAhpBECEQIAUgEGohESARJAAgDg8LIQEEfyMAIQFBECECIAEgAmshAyADIAA2AgxBAyEEIAQPCzUBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBCiAyEEQRAhBSADIAVqIQYgBiQAIAQPC14BCn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDEEEIQQgBBDADiEFIAMoAgwhBiAGKAIAIQcgBSAHNgIAIAMgBTYCCCADKAIIIQhBECEJIAMgCWohCiAKJAAgCA8LJAEEfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQPCwwBAX9BiBwhACAADwumAQERfyMAIQJBICEDIAIgA2shBCAEJAAgBCAANgIUIAQgATYCECAEKAIUIQUgBRCiAiEGIAQgBjYCDCAEKAIQIQcgBxDAAiEIQQwhCSAEIAlqIQogCiELIAQgCzYCHCAEIAg2AhggBCgCHCEMIAQoAhghDSANEMACIQ4gDhCmAyEPIAwgDxCnAyAEKAIcIRAgEBClAkEgIREgBCARaiESIBIkACAFDwsMAQF/EKgDIQAgAA8LPgEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEKcCIQVBECEGIAMgBmohByAHJAAgBQ8LKwEFfyMAIQFBECECIAEgAmshAyADIAA2AgwgAygCDCEEIAQoAgAhBSAFDwteAQp/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AgggBCgCCCEFIAQoAgwhBiAGKAIAIQcgByAFNgIAIAQoAgwhCCAIKAIAIQlBCCEKIAkgCmohCyAIIAs2AgAPCxEBAn9BpIgBIQAgACEBIAEPC70BARZ/IwAhBEEgIQUgBCAFayEGIAYkACAGIAA2AhwgBiABNgIYIAYgAjYCFCAGIAM2AhAgBigCHCEHIAcoAgAhCCAGKAIYIQkgCRChAyEKIAYoAhQhCyALEIsCIQwgBigCECENIA0QkAMhDiAGIA42AgxBDCEPIAYgD2ohECAQIREgCiAMIBEgCBEFACESQQEhEyASIBNxIRQgFBCwAiEVQQEhFiAVIBZxIRdBICEYIAYgGGohGSAZJAAgFw8LIQEEfyMAIQFBECECIAEgAmshAyADIAA2AgxBBCEEIAQPCzUBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBCtAyEEQRAhBSADIAVqIQYgBiQAIAQPC14BCn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDEEEIQQgBBDADiEFIAMoAgwhBiAGKAIAIQcgBSAHNgIAIAMgBTYCCCADKAIIIQhBECEJIAMgCWohCiAKJAAgCA8LDAEBf0GgHCEAIAAPCyYBBX8jACEBQRAhAiABIAJrIQMgAyAANgIMQbwcIQQgBCEFIAUPCxABAn9BvBwhACAAIQEgAQ8LEAECf0HQHCEAIAAhASABDwsQAQJ/QfAcIQAgACEBIAEPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwtFAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwgAygCDCEEIAQRAwAhBSAFELYDIQZBECEHIAMgB2ohCCAIJAAgBg8LIQEEfyMAIQFBECECIAEgAmshAyADIAA2AgxBASEEIAQPCzUBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBC3AyEEQRAhBSADIAVqIQYgBiQAIAQPCyQBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMIAMoAgwhBCAEDwsMAQF/QYAdIQAgAA8LqgEBFH8jACECQRAhAyACIANrIQQgBCQAIAQgADYCDCAEIAE2AgggBCgCCCEFIAUQvQMhBiAEKAIMIQcgBygCBCEIIAcoAgAhCUEBIQogCCAKdSELIAYgC2ohDEEBIQ0gCCANcSEOAkACQCAORQ0AIAwoAgAhDyAPIAlqIRAgECgCACERIBEhEgwBCyAJIRILIBIhEyAMIBMRBABBECEUIAQgFGohFSAVJAAPCyEBBH8jACEBQRAhAiABIAJrIQMgAyAANgIMQQIhBCAEDws1AQZ/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQvgMhBEEQIQUgAyAFaiEGIAYkACAEDwsMAQF/QYwdIQAgAA8LcAEMfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMQQghBCAEEMAOIQUgBSEGIAMoAgwhByAHKAIAIQggBygCBCEJIAUgCTYCBCAFIAg2AgAgAyAGNgIIIAMoAgghCkEQIQsgAyALaiEMIAwkACAKDwskAQR/IwAhAUEQIQIgASACayEDIAMgADYCDCADKAIMIQQgBA8LDAEBf0GEHSEAIAAPCwUAEB4PC0UBCH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQgBBDBAyEFIAUQ0wQhBkEQIQcgAyAHaiEIIAgkACAGDws5AQZ/IwAhAUEQIQIgASACayEDIAMgADYCCCADKAIIIQQgBCgCBCEFIAMgBTYCDCADKAIMIQYgBg8L6wMBOH8QwwMhAEHcDSEBIAAgARAIEMQDIQJByQshA0EBIQRBASEFQQAhBkEBIQcgBSAHcSEIQQEhCSAGIAlxIQogAiADIAQgCCAKEAlBwwohCyALEMUDQbwKIQwgDBDGA0G6CiENIA0QxwNB2QkhDiAOEMgDQdAJIQ8gDxDJA0HoCSEQIBAQygNB3wkhESAREMsDQYgMIRIgEhDMA0H/CyETIBMQzQNBgwohFCAUEM4DQYIKIRUgFRDPA0H4CSEWIBYQ0ANB1Q0hFyAXENEDENIDIRhBpwwhGSAYIBkQChDTAyEaQe4RIRsgGiAbEAoQ1AMhHEEEIR1BjQwhHiAcIB0gHhALENUDIR9BAiEgQbMMISEgHyAgICEQCxDWAyEiQQQhI0HCDCEkICIgIyAkEAsQ1wMhJUHXCyEmICUgJhAMQakRIScgJxDYA0GPEiEoICgQ2QNBxxEhKSApENoDQa0OISogKhDbA0HMDiErICsQ3ANB9A4hLCAsEN0DQZ0PIS0gLRDeA0G0EiEuIC4Q3wNB0hIhLyAvEOADQYMQITAgMBDZA0HiDyExIDEQ2gNBxRAhMiAyENsDQaMQITMgMxDcA0GIESE0IDQQ3QNB5hAhNSA1EN4DQcMPITYgNhDhA0GNEyE3IDcQ4gMPCwwBAX8Q4wMhACAADwsMAQF/EOQDIQAgAA8LeAEQfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMEOUDIQQgAygCDCEFEOYDIQZBGCEHIAYgB3QhCCAIIAd1IQkQ5wMhCkEYIQsgCiALdCEMIAwgC3UhDUEBIQ4gBCAFIA4gCSANEA1BECEPIAMgD2ohECAQJAAPC3gBEH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBDoAyEEIAMoAgwhBRDpAyEGQRghByAGIAd0IQggCCAHdSEJEOoDIQpBGCELIAogC3QhDCAMIAt1IQ1BASEOIAQgBSAOIAkgDRANQRAhDyADIA9qIRAgECQADwtsAQ5/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQ6wMhBCADKAIMIQUQ7AMhBkH/ASEHIAYgB3EhCBDtAyEJQf8BIQogCSAKcSELQQEhDCAEIAUgDCAIIAsQDUEQIQ0gAyANaiEOIA4kAA8LeAEQfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMEO4DIQQgAygCDCEFEO8DIQZBECEHIAYgB3QhCCAIIAd1IQkQ8AMhCkEQIQsgCiALdCEMIAwgC3UhDUECIQ4gBCAFIA4gCSANEA1BECEPIAMgD2ohECAQJAAPC24BDn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBDxAyEEIAMoAgwhBRDyAyEGQf//AyEHIAYgB3EhCBDzAyEJQf//AyEKIAkgCnEhC0ECIQwgBCAFIAwgCCALEA1BECENIAMgDWohDiAOJAAPC1QBCn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBD0AyEEIAMoAgwhBRD1AyEGEPYDIQdBBCEIIAQgBSAIIAYgBxANQRAhCSADIAlqIQogCiQADwtUAQp/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQ9wMhBCADKAIMIQUQ+AMhBhD5AyEHQQQhCCAEIAUgCCAGIAcQDUEQIQkgAyAJaiEKIAokAA8LVAEKfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMEPoDIQQgAygCDCEFEPsDIQYQtgEhB0EEIQggBCAFIAggBiAHEA1BECEJIAMgCWohCiAKJAAPC1QBCn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBD8AyEEIAMoAgwhBRD9AyEGEP4DIQdBBCEIIAQgBSAIIAYgBxANQRAhCSADIAlqIQogCiQADwtXAgh/An4jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBD/AyEEIAMoAgwhBRCABCEJEIEEIQpBCCEGIAQgBSAGIAkgChDjD0EQIQcgAyAHaiEIIAgkAA8LVwIIfwJ+IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQggQhBCADKAIMIQUQgwQhCRCEBCEKQQghBiAEIAUgBiAJIAoQ4w9BECEHIAMgB2ohCCAIJAAPC0YBCH8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDBCFBCEEIAMoAgwhBUEEIQYgBCAFIAYQDkEQIQcgAyAHaiEIIAgkAA8LRgEIfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMEIYEIQQgAygCDCEFQQghBiAEIAUgBhAOQRAhByADIAdqIQggCCQADwsMAQF/EIcEIQAgAA8LDAEBfxCIBCEAIAAPCwwBAX8QiQQhACAADwsMAQF/EIoEIQAgAA8LDAEBfxCLBCEAIAAPCwwBAX8QjAQhACAADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQjQQhBBCOBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQjwQhBBCQBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQkQQhBBCSBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQkwQhBBCUBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQlQQhBBCWBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQlwQhBBCYBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQmQQhBBCaBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQmwQhBBCcBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQnQQhBBCeBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQnwQhBBCgBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQoQQhBBCiBCEFIAMoAgwhBiAEIAUgBhAPQRAhByADIAdqIQggCCQADwsRAQJ/QcSHASEAIAAhASABDwsRAQJ/QdyHASEAIAAhASABDwsMAQF/EKUEIQAgAA8LHgEEfxCmBCEAQRghASAAIAF0IQIgAiABdSEDIAMPCx4BBH8QpwQhAEEYIQEgACABdCECIAIgAXUhAyADDwsMAQF/EKgEIQAgAA8LHgEEfxCpBCEAQRghASAAIAF0IQIgAiABdSEDIAMPCx4BBH8QqgQhAEEYIQEgACABdCECIAIgAXUhAyADDwsMAQF/EKsEIQAgAA8LGAEDfxCsBCEAQf8BIQEgACABcSECIAIPCxgBA38QrQQhAEH/ASEBIAAgAXEhAiACDwsMAQF/EK4EIQAgAA8LHgEEfxCvBCEAQRAhASAAIAF0IQIgAiABdSEDIAMPCx4BBH8QsAQhAEEQIQEgACABdCECIAIgAXUhAyADDwsMAQF/ELEEIQAgAA8LGQEDfxCyBCEAQf//AyEBIAAgAXEhAiACDwsZAQN/ELMEIQBB//8DIQEgACABcSECIAIPCwwBAX8QtAQhACAADwsMAQF/ELUEIQAgAA8LDAEBfxC2BCEAIAAPCwwBAX8QtwQhACAADwsMAQF/ELgEIQAgAA8LDAEBfxC5BCEAIAAPCwwBAX8QugQhACAADwsMAQF/ELsEIQAgAA8LDAEBfxC8BCEAIAAPCwwBAX8QvQQhACAADwsMAQF/EL4EIQAgAA8LDAEBfxC/BCEAIAAPCwwBAX4QwAQhACAADwsMAQF+EMEEIQAgAA8LDAEBfxDCBCEAIAAPCwwBAX4QwwQhACAADwsMAQF+EMQEIQAgAA8LDAEBfxDFBCEAIAAPCwwBAX8QxgQhACAADwsQAQJ/QdAYIQAgACEBIAEPCxABAn9B0B0hACAAIQEgAQ8LEAECf0GoHiEAIAAhASABDwsQAQJ/QYQfIQAgACEBIAEPCxABAn9B4B8hACAAIQEgAQ8LEAECf0G0GSEAIAAhASABDwsMAQF/EMcEIQAgAA8LCwEBf0EAIQAgAA8LDAEBfxDIBCEAIAAPCwsBAX9BACEAIAAPCwwBAX8QyQQhACAADwsLAQF/QQEhACAADwsMAQF/EMoEIQAgAA8LCwEBf0ECIQAgAA8LDAEBfxDLBCEAIAAPCwsBAX9BAyEAIAAPCwwBAX8QzAQhACAADwsLAQF/QQQhACAADwsMAQF/EM0EIQAgAA8LCwEBf0EFIQAgAA8LDAEBfxDOBCEAIAAPCwsBAX9BBCEAIAAPCwwBAX8QzwQhACAADwsLAQF/QQUhACAADwsMAQF/ENAEIQAgAA8LCwEBf0EGIQAgAA8LDAEBfxDRBCEAIAAPCwsBAX9BByEAIAAPCxcBAn9BoZABIQBBJiEBIAAgAREAABoPCzoBBn8jACEBQRAhAiABIAJrIQMgAyQAIAMgADYCDCADKAIMIQQQwgNBECEFIAMgBWohBiAGJAAgBA8LEQECf0HohwEhACAAIQEgAQ8LHgEEf0GAASEAQRghASAAIAF0IQIgAiABdSEDIAMPCx4BBH9B/wAhAEEYIQEgACABdCECIAIgAXUhAyADDwsRAQJ/QYCIASEAIAAhASABDwseAQR/QYABIQBBGCEBIAAgAXQhAiACIAF1IQMgAw8LHgEEf0H/ACEAQRghASAAIAF0IQIgAiABdSEDIAMPCxEBAn9B9IcBIQAgACEBIAEPCxcBA39BACEAQf8BIQEgACABcSECIAIPCxgBA39B/wEhAEH/ASEBIAAgAXEhAiACDwsRAQJ/QYyIASEAIAAhASABDwsfAQR/QYCAAiEAQRAhASAAIAF0IQIgAiABdSEDIAMPCx8BBH9B//8BIQBBECEBIAAgAXQhAiACIAF1IQMgAw8LEQECf0GYiAEhACAAIQEgAQ8LGAEDf0EAIQBB//8DIQEgACABcSECIAIPCxoBA39B//8DIQBB//8DIQEgACABcSECIAIPCxEBAn9BpIgBIQAgACEBIAEPCw8BAX9BgICAgHghACAADwsPAQF/Qf////8HIQAgAA8LEQECf0GwiAEhACAAIQEgAQ8LCwEBf0EAIQAgAA8LCwEBf0F/IQAgAA8LEQECf0G8iAEhACAAIQEgAQ8LDwEBf0GAgICAeCEAIAAPCxEBAn9ByIgBIQAgACEBIAEPCwsBAX9BACEAIAAPCwsBAX9BfyEAIAAPCxEBAn9B1IgBIQAgACEBIAEPCxQBAX5CgICAgICAgICAfyEAIAAPCxQBAX5C////////////ACEAIAAPCxEBAn9B4IgBIQAgACEBIAEPCwsBAX5CACEAIAAPCwsBAX5CfyEAIAAPCxEBAn9B7IgBIQAgACEBIAEPCxEBAn9B+IgBIQAgACEBIAEPCxABAn9BmCAhACAAIQEgAQ8LEAECf0HAICEAIAAhASABDwsQAQJ/QeggIQAgACEBIAEPCxABAn9BkCEhACAAIQEgAQ8LEAECf0G4ISEAIAAhASABDwsQAQJ/QeAhIQAgACEBIAEPCxABAn9BiCIhACAAIQEgAQ8LEAECf0GwIiEAIAAhASABDwsQAQJ/QdgiIQAgACEBIAEPCxABAn9BgCMhACAAIQEgAQ8LEAECf0GoIyEAIAAhASABDwsGABCjBA8LJAECfwJAIAAQ0g9BAWoiARDADyICDQBBAA8LIAIgACABEMoPCxAAIABBmIMBQQhqNgIAIAALBgAgABBqCzwBAn8gARDSDyICQQ1qEMAOIgNBADYCCCADIAI2AgQgAyACNgIAIAAgAxDXBCABIAJBAWoQyg82AgAgAAsHACAAQQxqCyEAIAAQ1AQaIABBxIMBQQhqNgIAIABBBGogARDWBBogAAsEAEEBCxAAIABBIEYgAEF3akEFSXILAgALAgALDQBBpJABENsEQayQAQsJAEGkkAEQ3AQLgQEBAn8gACAALQBKIgFBf2ogAXI6AEoCQCAAKAIUIAAoAhxNDQAgAEEAQQAgACgCJBEFABoLIABBADYCHCAAQgA3AxACQCAAKAIAIgFBBHFFDQAgACABQSByNgIAQX8PCyAAIAAoAiwgACgCMGoiAjYCCCAAIAI2AgQgAUEbdEEfdQtBAQJ/IwBBEGsiASQAQX8hAgJAIAAQ3wQNACAAIAFBD2pBASAAKAIgEQUAQQFHDQAgAS0ADyECCyABQRBqJAAgAgs/AgJ/AX4gACABNwNwIAAgACgCCCICIAAoAgQiA2usIgQ3A3ggACADIAGnaiACIAQgAVUbIAIgAUIAUhs2AmgLuwECAX4EfwJAAkACQCAAKQNwIgFQDQAgACkDeCABWQ0BCyAAEOAEIgJBf0oNAQsgAEEANgJoQX8PCyAAKAIIIgMhBAJAIAApA3AiAVANACADIQQgASAAKQN4Qn+FfCIBIAMgACgCBCIFa6xZDQAgBSABp2ohBAsgACAENgJoIAAoAgQhBAJAIANFDQAgACAAKQN4IAMgBGtBAWqsfDcDeAsCQCACIARBf2oiAC0AAEYNACAAIAI6AAALIAILCgAgAEFQakEKSQsHACAAEOMEC1MBAX4CQAJAIANBwABxRQ0AIAEgA0FAaq2GIQJCACEBDAELIANFDQAgAUHAACADa62IIAIgA60iBIaEIQIgASAEhiEBCyAAIAE3AwAgACACNwMIC+EBAgN/An4jAEEQayICJAACQAJAIAG8IgNB/////wdxIgRBgICAfGpB////9wdLDQAgBK1CGYZCgICAgICAgMA/fCEFQgAhBgwBCwJAIARBgICA/AdJDQAgA61CGYZCgICAgICAwP//AIQhBUIAIQYMAQsCQCAEDQBCACEGQgAhBQwBCyACIAStQgAgBGciBEHRAGoQ5QQgAkEIaikDAEKAgICAgIDAAIVBif8AIARrrUIwhoQhBSACKQMAIQYLIAAgBjcDACAAIAUgA0GAgICAeHGtQiCGhDcDCCACQRBqJAALBgBBsJABC40BAgJ/An4jAEEQayICJAACQAJAIAENAEIAIQRCACEFDAELIAIgASABQR91IgNqIANzIgOtQgAgA2ciA0HRAGoQ5QQgAkEIaikDAEKAgICAgIDAAIVBnoABIANrrUIwhnwgAUGAgICAeHGtQiCGhCEFIAIpAwAhBAsgACAENwMAIAAgBTcDCCACQRBqJAALUwEBfgJAAkAgA0HAAHFFDQAgAiADQUBqrYghAUIAIQIMAQsgA0UNACACQcAAIANrrYYgASADrSIEiIQhASACIASIIQILIAAgATcDACAAIAI3AwgL6wsCBX8PfiMAQeAAayIFJAAgAUIgiCACQiCGhCEKIANCEYggBEIvhoQhCyADQjGIIARC////////P4MiDEIPhoQhDSAEIAKFQoCAgICAgICAgH+DIQ4gAkL///////8/gyIPQiCIIRAgDEIRiCERIARCMIinQf//AXEhBgJAAkACQCACQjCIp0H//wFxIgdBf2pB/f8BSw0AQQAhCCAGQX9qQf7/AUkNAQsCQCABUCACQv///////////wCDIhJCgICAgICAwP//AFQgEkKAgICAgIDA//8AURsNACACQoCAgICAgCCEIQ4MAgsCQCADUCAEQv///////////wCDIgJCgICAgICAwP//AFQgAkKAgICAgIDA//8AURsNACAEQoCAgICAgCCEIQ4gAyEBDAILAkAgASASQoCAgICAgMD//wCFhEIAUg0AAkAgAyAChFBFDQBCgICAgICA4P//ACEOQgAhAQwDCyAOQoCAgICAgMD//wCEIQ5CACEBDAILAkAgAyACQoCAgICAgMD//wCFhEIAUg0AIAEgEoQhAkIAIQECQCACUEUNAEKAgICAgIDg//8AIQ4MAwsgDkKAgICAgIDA//8AhCEODAILAkAgASAShEIAUg0AQgAhAQwCCwJAIAMgAoRCAFINAEIAIQEMAgtBACEIAkAgEkL///////8/Vg0AIAVB0ABqIAEgDyABIA8gD1AiCBt5IAhBBnStfKciCEFxahDlBEEQIAhrIQggBSkDUCIBQiCIIAVB2ABqKQMAIg9CIIaEIQogD0IgiCEQCyACQv///////z9WDQAgBUHAAGogAyAMIAMgDCAMUCIJG3kgCUEGdK18pyIJQXFqEOUEIAggCWtBEGohCCAFKQNAIgNCMYggBUHIAGopAwAiAkIPhoQhDSADQhGIIAJCL4aEIQsgAkIRiCERCyALQv////8PgyICIAFC/////w+DIgR+IhMgA0IPhkKAgP7/D4MiASAKQv////8PgyIDfnwiCkIghiIMIAEgBH58IgsgDFStIAIgA34iFCABIA9C/////w+DIgx+fCISIA1C/////w+DIg8gBH58Ig0gCkIgiCAKIBNUrUIghoR8IhMgAiAMfiIVIAEgEEKAgASEIgp+fCIQIA8gA358IhYgEUL/////B4NCgICAgAiEIgEgBH58IhFCIIZ8Ihd8IQQgByAGaiAIakGBgH9qIQYCQAJAIA8gDH4iGCACIAp+fCICIBhUrSACIAEgA358IgMgAlStfCADIBIgFFStIA0gElStfHwiAiADVK18IAEgCn58IAEgDH4iAyAPIAp+fCIBIANUrUIghiABQiCIhHwgAiABQiCGfCIBIAJUrXwgASARQiCIIBAgFVStIBYgEFStfCARIBZUrXxCIIaEfCIDIAFUrXwgAyATIA1UrSAXIBNUrXx8IgIgA1StfCIBQoCAgICAgMAAg1ANACAGQQFqIQYMAQsgC0I/iCEDIAFCAYYgAkI/iIQhASACQgGGIARCP4iEIQIgC0IBhiELIAMgBEIBhoQhBAsCQCAGQf//AUgNACAOQoCAgICAgMD//wCEIQ5CACEBDAELAkACQCAGQQBKDQACQEEBIAZrIgdBgAFJDQBCACEBDAMLIAVBMGogCyAEIAZB/wBqIgYQ5QQgBUEgaiACIAEgBhDlBCAFQRBqIAsgBCAHEOkEIAUgAiABIAcQ6QQgBSkDICAFKQMQhCAFKQMwIAVBMGpBCGopAwCEQgBSrYQhCyAFQSBqQQhqKQMAIAVBEGpBCGopAwCEIQQgBUEIaikDACEBIAUpAwAhAgwBCyAGrUIwhiABQv///////z+DhCEBCyABIA6EIQ4CQCALUCAEQn9VIARCgICAgICAgICAf1EbDQAgDiACQgF8IgEgAlStfCEODAELAkAgCyAEQoCAgICAgICAgH+FhEIAUQ0AIAIhAQwBCyAOIAIgAkIBg3wiASACVK18IQ4LIAAgATcDACAAIA43AwggBUHgAGokAAsEAEEACwQAQQAL+AoCBH8EfiMAQfAAayIFJAAgBEL///////////8AgyEJAkACQAJAIAFCf3wiCkJ/USACQv///////////wCDIgsgCiABVK18Qn98IgpC////////v///AFYgCkL///////+///8AURsNACADQn98IgpCf1IgCSAKIANUrXxCf3wiCkL///////+///8AVCAKQv///////7///wBRGw0BCwJAIAFQIAtCgICAgICAwP//AFQgC0KAgICAgIDA//8AURsNACACQoCAgICAgCCEIQQgASEDDAILAkAgA1AgCUKAgICAgIDA//8AVCAJQoCAgICAgMD//wBRGw0AIARCgICAgICAIIQhBAwCCwJAIAEgC0KAgICAgIDA//8AhYRCAFINAEKAgICAgIDg//8AIAIgAyABhSAEIAKFQoCAgICAgICAgH+FhFAiBhshBEIAIAEgBhshAwwCCyADIAlCgICAgICAwP//AIWEUA0BAkAgASALhEIAUg0AIAMgCYRCAFINAiADIAGDIQMgBCACgyEEDAILIAMgCYRQRQ0AIAEhAyACIQQMAQsgAyABIAMgAVYgCSALViAJIAtRGyIHGyEJIAQgAiAHGyILQv///////z+DIQogAiAEIAcbIgJCMIinQf//AXEhCAJAIAtCMIinQf//AXEiBg0AIAVB4ABqIAkgCiAJIAogClAiBht5IAZBBnStfKciBkFxahDlBEEQIAZrIQYgBUHoAGopAwAhCiAFKQNgIQkLIAEgAyAHGyEDIAJC////////P4MhBAJAIAgNACAFQdAAaiADIAQgAyAEIARQIgcbeSAHQQZ0rXynIgdBcWoQ5QRBECAHayEIIAVB2ABqKQMAIQQgBSkDUCEDCyAEQgOGIANCPYiEQoCAgICAgIAEhCEEIApCA4YgCUI9iIQhASADQgOGIQMgCyAChSEKAkAgBiAIayIHRQ0AAkAgB0H/AE0NAEIAIQRCASEDDAELIAVBwABqIAMgBEGAASAHaxDlBCAFQTBqIAMgBCAHEOkEIAUpAzAgBSkDQCAFQcAAakEIaikDAIRCAFKthCEDIAVBMGpBCGopAwAhBAsgAUKAgICAgICABIQhDCAJQgOGIQICQAJAIApCf1UNAAJAIAIgA30iASAMIAR9IAIgA1StfSIEhFBFDQBCACEDQgAhBAwDCyAEQv////////8DVg0BIAVBIGogASAEIAEgBCAEUCIHG3kgB0EGdK18p0F0aiIHEOUEIAYgB2shBiAFQShqKQMAIQQgBSkDICEBDAELIAQgDHwgAyACfCIBIANUrXwiBEKAgICAgICACINQDQAgAUIBiCAEQj+GhCABQgGDhCEBIAZBAWohBiAEQgGIIQQLIAtCgICAgICAgICAf4MhAgJAIAZB//8BSA0AIAJCgICAgICAwP//AIQhBEIAIQMMAQtBACEHAkACQCAGQQBMDQAgBiEHDAELIAVBEGogASAEIAZB/wBqEOUEIAUgASAEQQEgBmsQ6QQgBSkDACAFKQMQIAVBEGpBCGopAwCEQgBSrYQhASAFQQhqKQMAIQQLIAFCA4ggBEI9hoQhAyAHrUIwhiAEQgOIQv///////z+DhCAChCEEIAGnQQdxIQYCQAJAAkACQAJAEOsEDgMAAQIDCyAEIAMgBkEES618IgEgA1StfCEEAkAgBkEERg0AIAEhAwwDCyAEIAFCAYMiAiABfCIDIAJUrXwhBAwDCyAEIAMgAkIAUiAGQQBHca18IgEgA1StfCEEIAEhAwwBCyAEIAMgAlAgBkEAR3GtfCIBIANUrXwhBCABIQMLIAZFDQELEOwEGgsgACADNwMAIAAgBDcDCCAFQfAAaiQAC44CAgJ/A34jAEEQayICJAACQAJAIAG9IgRC////////////AIMiBUKAgICAgICAeHxC/////////+//AFYNACAFQjyGIQYgBUIEiEKAgICAgICAgDx8IQUMAQsCQCAFQoCAgICAgID4/wBUDQAgBEI8hiEGIARCBIhCgICAgICAwP//AIQhBQwBCwJAIAVQRQ0AQgAhBkIAIQUMAQsgAiAFQgAgBKdnQSBqIAVCIIinZyAFQoCAgIAQVBsiA0ExahDlBCACQQhqKQMAQoCAgICAgMAAhUGM+AAgA2utQjCGhCEFIAIpAwAhBgsgACAGNwMAIAAgBSAEQoCAgICAgICAgH+DhDcDCCACQRBqJAAL4AECAX8CfkEBIQQCQCAAQgBSIAFC////////////AIMiBUKAgICAgIDA//8AViAFQoCAgICAgMD//wBRGw0AIAJCAFIgA0L///////////8AgyIGQoCAgICAgMD//wBWIAZCgICAgICAwP//AFEbDQACQCACIACEIAYgBYSEUEUNAEEADwsCQCADIAGDQgBTDQBBfyEEIAAgAlQgASADUyABIANRGw0BIAAgAoUgASADhYRCAFIPC0F/IQQgACACViABIANVIAEgA1EbDQAgACAChSABIAOFhEIAUiEECyAEC9gBAgF/An5BfyEEAkAgAEIAUiABQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AURsNACACQgBSIANC////////////AIMiBkKAgICAgIDA//8AViAGQoCAgICAgMD//wBRGw0AAkAgAiAAhCAGIAWEhFBFDQBBAA8LAkAgAyABg0IAUw0AIAAgAlQgASADUyABIANRGw0BIAAgAoUgASADhYRCAFIPCyAAIAJWIAEgA1UgASADURsNACAAIAKFIAEgA4WEQgBSIQQLIAQLNQAgACABNwMAIAAgBEIwiKdBgIACcSACQjCIp0H//wFxcq1CMIYgAkL///////8/g4Q3AwgLcgIBfwJ+IwBBEGsiAiQAAkACQCABDQBCACEDQgAhBAwBCyACIAGtQgAgAWciAUHRAGoQ5QQgAkEIaikDAEKAgICAgIDAAIVBnoABIAFrrUIwhnwhBCACKQMAIQMLIAAgAzcDACAAIAQ3AwggAkEQaiQAC0gBAX8jAEEQayIFJAAgBSABIAIgAyAEQoCAgICAgICAgH+FEO0EIAUpAwAhASAAIAVBCGopAwA3AwggACABNwMAIAVBEGokAAvnAgEBfyMAQdAAayIEJAACQAJAIANBgIABSA0AIARBIGogASACQgBCgICAgICAgP//ABDqBCAEQSBqQQhqKQMAIQIgBCkDICEBAkAgA0H//wFODQAgA0GBgH9qIQMMAgsgBEEQaiABIAJCAEKAgICAgICA//8AEOoEIANB/f8CIANB/f8CSBtBgoB+aiEDIARBEGpBCGopAwAhAiAEKQMQIQEMAQsgA0GBgH9KDQAgBEHAAGogASACQgBCgICAgICAwAAQ6gQgBEHAAGpBCGopAwAhAiAEKQNAIQECQCADQYOAfkwNACADQf7/AGohAwwBCyAEQTBqIAEgAkIAQoCAgICAgMAAEOoEIANBhoB9IANBhoB9ShtB/P8BaiEDIARBMGpBCGopAwAhAiAEKQMwIQELIAQgASACQgAgA0H//wBqrUIwhhDqBCAAIARBCGopAwA3AwggACAEKQMANwMAIARB0ABqJAALdQEBfiAAIAQgAX4gAiADfnwgA0IgiCIEIAFCIIgiAn58IANC/////w+DIgMgAUL/////D4MiAX4iBUIgiCADIAJ+fCIDQiCIfCADQv////8PgyAEIAF+fCIDQiCIfDcDCCAAIANCIIYgBUL/////D4OENwMAC+8QAgV/Dn4jAEHQAmsiBSQAIARC////////P4MhCiACQv///////z+DIQsgBCAChUKAgICAgICAgIB/gyEMIARCMIinQf//AXEhBgJAAkACQCACQjCIp0H//wFxIgdBf2pB/f8BSw0AQQAhCCAGQX9qQf7/AUkNAQsCQCABUCACQv///////////wCDIg1CgICAgICAwP//AFQgDUKAgICAgIDA//8AURsNACACQoCAgICAgCCEIQwMAgsCQCADUCAEQv///////////wCDIgJCgICAgICAwP//AFQgAkKAgICAgIDA//8AURsNACAEQoCAgICAgCCEIQwgAyEBDAILAkAgASANQoCA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BCAFLQAAIQUMAQsgABDiBCEFCyACIAdyIQcCQCABIAVBgSRqLQAAIgJNDQAgB0GAgIDAAEkNAQsLIAetIQkLIAEgAk0NAEJ/IAitIguIIgwgCVQNAANAIAkgC4YhCSACrUL/AYMhCgJAAkAgACgCBCIFIAAoAmhPDQAgACAFQQFqNgIEIAUtAAAhBQwBCyAAEOIEIQULIAkgCoQhCSABIAVBgSRqLQAAIgJNDQEgCSAMWA0ACwsgASAFQYEkai0AAE0NAANAAkACQCAAKAIEIgUgACgCaE8NACAAIAVBAWo2AgQgBS0AACEFDAELIAAQ4gQhBQsgASAFQYEkai0AAEsNAAsQ5wRBxAA2AgAgBkEAIANCAYNQGyEGIAMhCQsCQCAAKAJoRQ0AIAAgACgCBEF/ajYCBAsCQCAJIANUDQACQCADp0EBcQ0AIAYNABDnBEHEADYCACADQn98IQMMAwsgCSADWA0AEOcEQcQANgIADAILIAkgBqwiA4UgA30hAwwBC0IAIQMgAEIAEOEECyAEQRBqJAAgAwvEAwIDfwF+IwBBIGsiAiQAAkACQCABQv///////////wCDIgVCgICAgICAwL9AfCAFQoCAgICAgMDAv398Wg0AIAFCGYinIQMCQCAAUCABQv///w+DIgVCgICACFQgBUKAgIAIURsNACADQYGAgIAEaiEEDAILIANBgICAgARqIQQgACAFQoCAgAiFhEIAUg0BIAQgA0EBcWohBAwBCwJAIABQIAVCgICAgICAwP//AFQgBUKAgICAgIDA//8AURsNACABQhmIp0H///8BcUGAgID+B3IhBAwBC0GAgID8ByEEIAVC////////v7/AAFYNAEEAIQQgBUIwiKciA0GR/gBJDQAgAkEQaiAAIAFC////////P4NCgICAgICAwACEIgUgA0H/gX9qEOUEIAIgACAFQYH/ACADaxDpBCACQQhqKQMAIgVCGYinIQQCQCACKQMAIAIpAxAgAkEQakEIaikDAIRCAFKthCIAUCAFQv///w+DIgVCgICACFQgBUKAgIAIURsNACAEQQFqIQQMAQsgACAFQoCAgAiFhEIAUg0AIARBAXEgBGohBAsgAkEgaiQAIAQgAUIgiKdBgICAgHhxcr4L6gMCAn8CfiMAQSBrIgIkAAJAAkAgAUL///////////8AgyIEQoCAgICAgMD/Q3wgBEKAgICAgIDAgLx/fFoNACAAQjyIIAFCBIaEIQQCQCAAQv//////////D4MiAEKBgICAgICAgAhUDQAgBEKBgICAgICAgMAAfCEFDAILIARCgICAgICAgIDAAHwhBSAAQoCAgICAgICACIVCAFINASAFIARCAYN8IQUMAQsCQCAAUCAEQoCAgICAgMD//wBUIARCgICAgICAwP//AFEbDQAgAEI8iCABQgSGhEL/////////A4NCgICAgICAgPz/AIQhBQwBC0KAgICAgICA+P8AIQUgBEL///////+//8MAVg0AQgAhBSAEQjCIpyIDQZH3AEkNACACQRBqIAAgAUL///////8/g0KAgICAgIDAAIQiBCADQf+If2oQ5QQgAiAAIARBgfgAIANrEOkEIAIpAwAiBEI8iCACQQhqKQMAQgSGhCEFAkAgBEL//////////w+DIAIpAxAgAkEQakEIaikDAIRCAFKthCIEQoGAgICAgICACFQNACAFQgF8IQUMAQsgBEKAgICAgICAgAiFQgBSDQAgBUIBgyAFfCEFCyACQSBqJAAgBSABQoCAgICAgICAgH+DhL8LBABBAAsEAEEACwQAQQALBABBAAsGAEGAiwEL+AIBBn8jAEEQayIEJAAgA0H0kAEgAxsiBSgCACEDAkACQAJAAkAgAQ0AIAMNAUEAIQYMAwtBfiEGIAJFDQIgACAEQQxqIAAbIQcCQAJAIANFDQAgAiEADAELAkAgAS0AACIDQRh0QRh1IgBBAEgNACAHIAM2AgAgAEEARyEGDAQLEIMFKAKoASgCACEDIAEsAAAhAAJAIAMNACAHIABB/78DcTYCAEEBIQYMBAsgAEH/AXFBvn5qIgNBMksNAUGQJiADQQJ0aigCACEDIAJBf2oiAEUNAiABQQFqIQELIAEtAAAiCEEDdiIJQXBqIANBGnUgCWpyQQdLDQADQCAAQX9qIQACQCAIQf8BcUGAf2ogA0EGdHIiA0EASA0AIAVBADYCACAHIAM2AgAgAiAAayEGDAQLIABFDQIgAUEBaiIBLQAAIghBwAFxQYABRg0ACwsgBUEANgIAEOcEQRk2AgBBfyEGDAELIAUgAzYCAAsgBEEQaiQAIAYLEgACQCAADQBBAQ8LIAAoAgBFC70UAg9/A34jAEGwAmsiAyQAQQAh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QbADahCsBkUNACAFIAUoAgBBAnI2AgALIAcoArgDIQQgB0EQahDhBRogCBCcBxogB0HAA2okACAEC2cBAn8jAEEQayIBJAAgABD0CAJAAkAgABDHB0UNACAAEPUIIQIgAUEANgIMIAIgAUEMahD2CCAAQQAQ9wgMAQsgABD4CCECIAFBADYCCCACIAFBCGoQ9gggAEEAEPkICyABQRBqJAALCwAgACABIAIQ+ggLAgALCgAgABCcCCgCAAsMACAAIAEoAgA2AgALDAAgABCcCCABNgIECwoAIAAQnAgQ5wwLDwAgABCcCEELaiABOgAAC+gBAQR/IwBBEGsiAyQAIAAQsAYhBCAAEMsLIQUCQCABIAIQygsiBkUNAAJAIAEQ7QwgABCUByAAEJQHIAAQsAZBAnRqEK8NRQ0AIAAgAyABIAIgABDyCxCwDSIBEMQHIAEQsAYQvA4aIAEQtQ4aDAELAkAgBSAEayAGTw0AIAAgBSAGIARqIAVrIAQgBEEAQQAQtg4LIAAQhwcgBEECdGohBQJAA0AgASACRg0BIAUgARD2CCABQQRqIQEgBUEEaiEFDAALAAsgA0EANgIAIAUgAxD2CCAAIAYgBGoQzQsLIANBEGokACAACwsAIABBwJIBEOYFCxEAIAAgASABKAIAKAIsEQEACxEAIAAgASABKAIAKAIgEQEACwsAIAAgARCYCSAACxEAIAAgASABKAIAKAIcEQEACw8AIAAgACgCACgCDBEAAAsPACAAIAAoAgAoAhARAAALEQAgACABIAEoAgAoAhQRAQALEQAgACABIAEoAgAoAhgRAQALDwAgACAAKAIAKAIkEQAACwsAIABBuJIBEOYFCxEAIAAgASABKAIAKAIsEQEACxEAIAAgASABKAIAKAIgEQEACxEAIAAgASABKAIAKAIcEQEACw8AIAAgACgCACgCDBEAAAsPACAAIAAoAgAoAhARAAALEQAgACABIAEoAgAoAhQRAQALEQAgACABIAEoAgAoAhgRAQALDwAgACAAKAIAKAIkEQAACxIAIAAgAjYCBCAAIAE2AgAgAAsHACAAKAIACw0AIAAQkQkgARCPCUYLBwAgACgCAAtzAQF/IwBBIGsiAyQAIAMgATYCECADIAA2AhggAyACNgIIAkADQCADQRhqIANBEGoQgQciAkUNASADIANBGGoQ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CwtbAQN/IwBBEGsiAiQAIAIgACABEP4LIgMoAgQhASADKAIIIQQDQAJAIAEgBEcNACADEP8LGiACQRBqJAAPCyAAEPoLIAEQgAwQgQwgAyABQQRqIgE2AgQMAAsACxAAIAAoAgQgACgCAGtBAnULDAAgACAAKAIAEKcMCzMAIAAgABCKDCAAEIoMIAAQiwxBAnRqIAAQigwgAUECdGogABCKDCAAEIEKQQJ0ahCMDAsCAAtJAQF/IwBBIGsiASQAIAFBADYCDCABQTA2AgggASABKQMINwMAIAAgAUEQaiABIAAQwgoQwwogACgCBCEAIAFBIGokACAAQX9qC3gBAn8jAEEQayIDJAAgARClCiADQQhqIAEQqQohBAJAIABBCGoiARCBCiACSw0AIAEgAkEBahCsCgsCQCABIAIQpAooAgBFDQAgASACEKQKKAIAEK0KGgsgBBCuCiEAIAEgAhCkCiAANgIAIAQQqgoaIANBEGokAAsVACAAIAEQwQkaIABBlNkANgIAIAALFQAgACABEMEJGiAAQbTZADYCACAACzgAIAAgAxDBCRogABDbChogACACOgAMIAAgATYCCCAAQfzOADYCAAJAIAENACAAEM0KNgIICyAACxsAIAAgARDBCRogABDbChogAEHg0gA2AgAgAAsbACAAIAEQwQkaIAAQ7goaIABB9NMANgIAIAALIwAgACABEMEJGiAAEO4KGiAAQbDPADYCACAAEJoGNgIIIAALGwAgACABEMEJGiAAEO4KGiAAQYjVADYCACAACxsAIAAgARDBCRogABDuChogAEH81QA2AgAgAAsnACAAIAEQwQkaIABBrtgAOwEIIABB4M8ANgIAIABBDGoQ9wUaIAALKgAgACABEMEJGiAAQq6AgIDABTcCCCAAQYjQADYCACAAQRBqEPcFGiAACxUAIAAgARDBCRogAEHU2QA2AgAgAAsVACAAIAEQwQkaIABByNsANgIAIAALFQAgACABEMEJGiAAQZzdADYCACAACxUAIAAgARDBCRogAEGE3wA2AgAgAAsbACAAIAEQwQkaIAAQqwwaIABB3OYANgIAIAALGwAgACABEMEJGiAAEKsMGiAAQfDnADYCACAACxsAIAAgARDBCRogABCrDBogAEHk6AA2AgAgAAsbACAAIAEQwQkaIAAQqwwaIABB2OkANgIAIAALGwAgACABEMEJGiAAEKwMGiAAQczqADYCACAACxsAIAAgARDBCRogABCtDBogAEHw6wA2AgAgAAsbACAAIAEQwQkaIAAQrgwaIABBlO0ANgIAIAALGwAgACABEMEJGiAAEK8MGiAAQbjuADYCACAACygAIAAgARDBCRogAEEIahCwDCEBIABBzOAANgIAIAFB/OAANgIAIAALKAAgACABEMEJGiAAQQhqELEMIQEgAEHU4gA2AgAgAUGE4wA2AgAgAAseACAAIAEQwQkaIABBCGoQsgwaIABBwOQANgIAIAALHgAgACABEMEJGiAAQQhqELIMGiAAQdzlADYCACAACxsAIAAgARDBCRogABCzDBogAEHc7wA2AgAgAAsbACAAIAEQwQkaIAAQswwaIABB1PAANgIAIAALOAACQEEALQCIkwFBAXENAEGIkwEQgg9FDQAQpgoaQQBBgJMBNgKEkwFBiJMBEIoPC0EAKAKEkwELDQAgACgCACABQQJ0agsLACAAQQRqEKcKGgsUABC8CkEAQcifATYCgJMBQYCTAQsVAQF/IAAgACgCAEEBaiIBNgIAIAELHwACQCAAIAEQuQoNABC6CgALIABBCGogARC7CigCAAstAQF/IwBBEGsiAiQAIAIgATYCDCAAIAJBDGogAkEIahCrChogAkEQaiQAIAALCQAgABCvCiAACxQAIAAgARC2DBC3DBogAhBzGiAACzgBAX8CQCAAEIEKIgIgAU8NACAAIAEgAmsQtgoPCwJAIAIgAU0NACAAIAAoAgAgAUECdGoQtwoLCygBAX8CQCAAQQRqELIKIgFBf0cNACAAIAAoAgAoAggRBAALIAFBf0YLGgEBfyAAELgKKAIAIQEgABC4CkEANgIAIAELJQEBfyAAELgKKAIAIQEgABC4CkEANgIAAkAgAUUNACABELgMCwtoAQJ/IABB6M4ANgIAIABBCGohAUEAIQICQANAIAIgARCBCk8NAQJAIAEgAhCkCigCAEUNACABIAIQpAooAgAQrQoaCyACQQFqIQIMAAsACyAAQZgBahClDhogARCxChogABDRBRogAAsPACAAELMKIAAQtAoaIAALFQEBfyAAIAAoAgBBf2oiATYCACABCzYAIAAgABCKDCAAEIoMIAAQiwxBAnRqIAAQigwgABCBCkECdGogABCK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IAAQ0QUaIAAQwQ4LDQAgABDRBRogABDBDgsTACAAQQhqENYLGiAAENEFGiAACwQAIAALCgAgABDVCxDBDgsTACAAQQhqENkLGiAAENEFGiAACwQAIAALCgAgABDYCxDBDgsKACAAENwLEMEOCxMAIABBCGoQzgsaIAAQ0QUaIAALCgAgABDeCxDBDgsTACAAQQhqEM4LGiAAENEFGiAACw0AIAAQ0QUaIAAQwQ4LDQAgABDRBRogABDBDgsNACAAENEFGiAAEMEOCw0AIAAQ0QUaIAAQwQ4LDQAgABDRBRogABDBDgsNACAAENEFGiAAEMEOCw0AIAAQ0QUaIAAQwQ4LDQAgABDRBRogABDBDgsNACAAENEFGiAAEMEOCw0AIAAQ0QUaIAAQwQ4LEQAgACAAKAIAIAFqNgIAIAALFAAgACAAKAIAIAFBAnRqNgIAIAALCwAgACABIAIQ7AsLCwAgASACQQEQ4AELBwAgABDuCwsHACAAEO8LCwQAIAALCwAgACABIAIQ8QsLDgAgASACQQJ0QQQQ4AELBwAgABDzCwsHACAAEPYLCxEAIAAQmwgoAghB/////wdxCwQAIAALBAAgAAsEACAACx0AIAAgARDDARCCDBogAhBzGiAAQQhqEIMMGiAACz0BAX8jAEEQayIBJAAgASAAEIUMEIYMNgIMIAEQtgE2AgggAUEMaiABQQhqELcBKAIAIQAgAUEQaiQAIAALCgAgAEEIahCIDAsLACAAIAFBABCHDAsKACAAQQhqEIkMCzMAIAAgABCKDCAAEIoMIAAQiwxBAnRqIAAQigwgABCLDEECdGogABCKDCABQQJ0ahCMDAskACAAIAE2AgAgACABKAIEIgE2AgQgACABIAJBAnRqNgIIIAALEQAgACgCACAAKAIENgIEIAALBAAgAAsJACABQQA2AgALEQAgARDDARogAEEANgIAIAALCgAgABCEDBogAAsLACAAQQA6AHggAAsKACAAQQhqEI4MCwcAIAAQjQwLQgEBfyMAQRBrIgMkAAJAAkAgAC0AeA0AIAFBHksNACAAQQE6AHgMAQsgA0EIahCQDCABEJEMIQALIANBEGokACAACwoAIABBCGoQlAwLBwAgABCVDAsKACAAKAIAEIAMCwcAIAAQlgwLAgALCABB/////wMLCgAgAEEIahCPDAsEACAACwQAIAALIAACQCAAEJIMIAFPDQBB5gwQygEACyABQQJ0QQQQywELBwAgABCTDAsIAEH/////AwsEACAACwQAIAALEwAgABCXDCgCACAAKAIAa0ECdQsKACAAQQhqEJgMCwcAIAAQmQwLBAAgAAsNACAAEJoBEJsMQXBqCwcAIAAQpAwLBwAgABClDAstAQF/QQohAQJAIABBC0kNACAAQQFqEJ4MIgAgAEF/aiIAIABBC0YbIQELIAELCgAgAEEPakFwcQsJACAAIAEQoAwLHQACQCAAEJsMIAFPDQBB5gwQygEACyABQQEQywELDAAgABCdASABNgIACxMAIAAQnQEgAUGAgICAeHI2AggLBAAgAAsEAEF/CwQAIAALCwAgACABIAIQqAwLNAEBfyAAKAIEIQICQANAIAIgAUYNASAAEPoLIAJBfGoiAhCADBCpDAwACwALIAAgATYCBAs5AQF/IwBBEGsiAyQAAkACQCAAIAFHDQAgAEEAOgB4DAELIANBCGoQkAwgASACEKoMCyADQRBqJAALAgALDgAgASACQQJ0QQQQ4AELBAAgAAsEACAACwQAIAALBAAgAAsEACAACw0AIABBoPgANgIAIAALDQAgAEHE+AA2AgAgAAsMACAAEJoGNgIAIAALBAAgAAthAQJ/IwBBEGsiAiQAIAIgATYCDAJAIAAQ+QsiAyABSQ0AAkAgABCLDCIAIANBAXZPDQAgAiAAQQF0NgIIIAJBCGogAkEMahCnASgCACEDCyACQRBqJAAgAw8LIAAQww4ACwIACwQAIAALEQAgACABELYMKAIANgIAIAALCAAgABCtChoLBAAgAAtyAQJ/IwBBEGsiBCQAQQAhBSAEQQA2AgwgAEEMaiAEQQxqIAMQvgwaAkAgAUUNACAAEL8MIAEQ+wshBQsgACAFNgIAIAAgBSACQQJ0aiICNgIIIAAgAjYCBCAAEMAMIAUgAUECdGo2AgAgBEEQaiQAIAALXwECfyMAQRBrIgIkACACIABBCGogARDBDCIBKAIAIQMCQANAIAMgASgCBEYNASAAEL8MIAEoAgAQgAwQgQwgASABKAIAQQRqIgM2AgAMAAsACyABEMIMGiACQRBqJAALXAEBfyAAELMKIAAQ+gsgACgCACAAKAIEIAFBBGoiAhDDDCAAIAIQxAwgAEEEaiABQQhqEMQMIAAQ/AsgARDADBDEDCABIAEoAgQ2AgAgACAAEIEKEP0LIAAQhAoLJgAgABDFDAJAIAAoAgBFDQAgABC/DCAAKAIAIAAQxgwQpgwLIAALHQAgACABEMMBEIIMGiAAQQRqIAIQxwwQyAwaIAALCgAgAEEMahDJDAsKACAAQQxqEMoMCysBAX8gACABKAIANgIAIAEoAgAhAyAAIAE2AgggACADIAJBAnRqNgIEIAALEQAgACgCCCAAKAIANgIAIAALLAEBfyADIAMoAgAgAiABayICayIENgIAAkAgAkEBSA0AIAQgASACEMoPGgsLPgEBfyMAQRBrIgIkACACIAAQzAwoAgA2AgwgACABEMwMKAIANgIAIAEgAkEMahDMDCgCADYCACACQRBqJAALDAAgACAAKAIEEM0MCxMAIAAQzgwoAgAgACgCAGtBAnULBAAgAAsOACAAIAEQxww2AgAgAAsKACAAQQRqEMsMCwcAIAAQlQwLBwAgACgCAAsEACAACwkAIAAgARDPDAsKACAAQQxqENAMCzcBAn8CQANAIAAoAgggAUYNASAAEL8MIQIgACAAKAIIQXxqIgM2AgggAiADEIAMEKkMDAALAAsLBwAgABCZDAsMACAAIAEQ0wwaIAALBwAgABDUDAsLACAAIAE2AgAgAAsNACAAKAIAENUMENYMCwcAIAAQ2AwLBwAgABDXDAs/AQJ/IAAoAgAgAEEIaigCACIBQQF1aiECIAAoAgQhAAJAIAFBAXFFDQAgAigCACAAaigCACEACyACIAARBAALBwAgACgCAAsJACAAIAEQ2gwLBwAgASAAawsIACAAQf8BcQsEACAACwoAIAAQ5AwaIAALCQAgACABEOUMCw0AIAAQmAgQ5gxBcGoLLQEBf0EBIQECQCAAQQJJDQAgAEEBahDoDCIAIABBf2oiACAAQQJGGyEBCyABCwkAIAAgARDpDAsMACAAEJwIIAE2AgALEwAgABCcCCABQYCAgIB4cjYCCAsEACAACwoAIAEgAGtBAnULBwAgABDqDAsHACAAEO0MCwoAIABBA2pBfHELIAACQCAAEOYMIAFPDQBB5gwQygEACyABQQJ0QQQQywELCABB/////wMLBwAgABDsDAsEACAACwQAIAALBAAgAAsJACAAIAEQ8AwLPgEBfyMAQRBrIgIkACACIAAQ8QwoAgA2AgwgACABEPEMKAIANgIAIAEgAkEMahDxDCgCADYCACACQRBqJAALBAAgAAsdACAAIAEQ9QwQ9gwaIABBBGogAhD3DBD4DBogAAsHACAAEPkMCwoAIABBBGoQ+gwLBAAgAAsRACAAIAEQ9QwoAgA2AgAgAAsEACAACxEAIAAgARD3DCgCADYCACAACwQAIAALBAAgAAsJACAAIAEQ/AwLEQAgARDtCxD9DBogABDtCxoLBAAgAAsKACABIABrQQJ1CwkAIAAgARCADQsRACABEPILEIENGiAAEPILGgsEACAACwIAC24BAn8jAEEQayICJAACQAJAIAAQd0UNACAAELcIIQMgAkEAOgAPIAMgAWogAkEPahC4CCAAIAEQuQgMAQsgABC6CCEDIAJBADoADiADIAFqIAJBDmoQuAggACABELsICyAAIAEQgg0gAkEQaiQACwQAIAALCgAgARCEDRogAAsEACAACz4BAX8jAEEQayICJAAgAiAAEIYNKAIANgIMIAAgARCGDSgCADYCACABIAJBDGoQhg0oAgA2AgAgAkEQaiQACwoAIAEgAGtBDG0LDAAgACABEJoGEM0FCwwAIAAgARCaBhDOBQs9AgF/AX4jAEEQayIDJAAgAyABIAIQmgYQzwUgAykDACEEIAAgA0EIaikDADcDCCAAIAQ3AwAgA0EQaiQACy8BAX8CQCAAKAIAIgFFDQACQCABEKAGEG0Qbg0AIAAoAgBFDwsgAEEANgIAC0EBCwoAIAEgAGtBDG0LMQEBfwJAIAAoAgAiAUUNAAJAIAEQzgYQiwcQjAcNACAAKAIARQ8LIABBADYCAAtBAQsEACAACwQAIAALEQAgACABEJANKAIANgIAIAALBAAgAAsEACAACxEAIAAgARCTDSgCADYCACAACwQAIAALCQAgACABEOEHCwkAIAAgARCHDQsKACAAEJsIEJkNCwcAIAAQmg0LBAAgAAtZAQF/IwBBEGsiAyQAIAMgAjYCCAJAA0AgACABRg0BIAAsAAAhAiADQQhqEN8GIAIQ4AYaIABBAWohACADQQhqEOIGGgwACwALIAMoAgghACADQRBqJAAgAAtZAQF/IwBBEGsiAyQAIAMgAjYCCAJAA0AgACABRg0BIAAoAgAhAiADQQhqEIMHIAIQhAcaIABBBGohACADQQhqEIYHGgwACwALIAMoAgghACADQRBqJAAgAAsEACAACwkAIAAgARCiDQsNACABIABNIAAgAklxCywBAX8jAEEQayIEJAAgACAEQQhqIAMQow0aIAAgASACEKQNIARBEGokACAACxsAAkAgABB3RQ0AIAAgARC5CA8LIAAgARC7CAsHACABIABrCxkAIAEQcxogABB0GiAAIAIQpQ0Qpg0aIAALrQEBBH8jAEEQayIDJAACQCABIAIQng0iBCAAEJoMSw0AAkACQCAEQQpLDQAgACAEELsIIAAQugghBQwBCyAEEJ0MIQUgACAAEO0LIAVBAWoiBhCfDCIFEKEMIAAgBhCiDCAAIAQQuQgLAkADQCABIAJGDQEgBSABELgIIAVBAWohBSABQQFqIQEMAAsACyADQQA6AA8gBSADQQ9qELgIIANBEGokAA8LIAAQog4ACwQAIAALCgAgARClDRogAAsEACAACxEAIAAgARCnDSgCADYCACAACwcAIAAQqw0LCgAgAEEEahD6DAsEACAACwQAIAALDQAgAS0AACACLQAARgsEACAACw0AIAEgAE0gACACSXELLAEBfyMAQRBrIgQkACAAIARBCGogAxCxDRogACABIAIQsg0gBEEQaiQAIAALGgAgARBzGiAAENwMGiAAIAIQsw0QtA0aIAALrQEBBH8jAEEQayIDJAACQCABIAIQygsiBCAAEN8MSw0AAkACQCAEQQFLDQAgACAEEPkIIAAQ+AghBQwBCyAEEOAMIQUgACAAEPILIAVBAWoiBhDhDCIFEOIMIAAgBhDjDCAAIAQQ9wgLAkADQCABIAJGDQEgBSABEPYIIAVBBGohBSABQQRqIQEMAAsACyADQQA2AgwgBSADQQxqEPYIIANBEGokAA8LIAAQog4ACwQAIAALCgAgARCzDRogAAsNACABKAIAIAIoAgBGCwgAELcNQQBKCwUAEL8PCxYAAkAgAA0AQQAPCxDnBCAANgIAQX8LPAEBfyMAQRBrIgMkACAAKAI8IAEgAkH/AXEgA0EIahDkDxC4DSEAIAMpAwghASADQRBqJABCfyABIAAbC9gCAQd/IwBBIGsiAyQAIAMgACgCHCIENgIQIAAoAhQhBSADIAI2AhwgAyABNgIYIAMgBSAEayIBNgIUIAEgAmohBkECIQcgA0EQaiEBAkACQAJAAkAgACgCPCAD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AAEgA0F9aiABOgAAIAAgAToAAiACQQdJDQAgA0F8aiABOgAAIAAgAToAAyACQQlJDQAgAEEAIABrQQNxIgRqIgMgAUH/AXFBgYKECGwiATYCACADIAIgBGtBfHEiBGoiAkF8aiABNgIAIARBCUkNACADIAE2AgggAyABNgIEIAJBeGogATYCACACQXRqIAE2AgAgBEEZSQ0AIAMgATYCGCADIAE2AhQgAyABNgIQIAMgATYCDCACQXBqIAE2AgAgAkFsaiABNgIAIAJBaGogATYCACACQWRqIAE2AgAgBCADQQRxQRhyIgVrIgJBIEkNACABrUKBgICAEH4hBiADIAVqIQEDQCABIAY3AxggASAGNwMQIAEgBjcDCCABIAY3AwAgAUEgaiEBIAJBYGoiAkEfSw0ACwsgAAv3AgECfwJAIAAgAUYNAAJAIAEgACACaiIDa0EAIAJBAXRrSw0AIAAgASACEMoPDwsgASAAc0EDcSEEAkACQAJAIAAgAU8NAAJAIARFDQAgACEDDAMLAkAgAEEDcQ0AIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcUUNAgwACwALAkAgBA0AAkAgA0EDcUUNAANAIAJFDQUgACACQX9qIgJqIgMgASACai0AADoAACADQQNxDQALCyACQQNNDQADQCAAIAJBfGoiAmogASACaigCADYCACACQQNLDQALCyACRQ0CA0AgACACQX9qIgJqIAEgAmotAAA6AAAgAg0ADAMLAAsgAkEDTQ0AA0AgAyABKAIANgIAIAFBBGohASADQQRqIQMgAkF8aiICQQNLDQALCyACRQ0AA0AgAyABLQAAOgAAIANBAWohAyABQQFqIQEgAkF/aiICDQALCyAAC1wBAX8gACAALQBKIgFBf2ogAXI6AEoCQCAAKAIAIgFBCHFFDQAgACABQSByNgIAQX8PCyAAQgA3AgQgACAAKAIsIgE2AhwgACABNgIUIAAgASAAKAIwajYCEEEAC84BAQN/AkACQCACKAIQIgMNAEEAIQQgAhDNDw0BIAIoAhAhAwsCQCADIAIoAhQiBWsgAU8NACACIAAgASACKAIkEQUADwsCQAJAIAIsAEtBAE4NAEEAIQMMAQsgASEEA0ACQCAEIgMNAEEAIQMMAgsgACADQX9qIgRqLQAAQQpHDQALIAIgACADIAIoAiQRBQAiBCADSQ0BIAAgA2ohACABIANrIQEgAigCFCEFCyAFIAAgARDKDxogAiACKAIUIAFqNgIUIAMgAWohBAsgBAtbAQJ/IAIgAWwhBAJAAkAgAygCTEF/Sg0AIAAgBCADEM4PIQAMAQsgAxDQDyEFIAAgBCADEM4PIQAgBUUNACADENEPCwJAIAAgBEcNACACQQAgARsPCyAAIAFuCwQAQQELAgALhwEBA38gACEBAkACQCAAQQNxRQ0AIAAhAQNAIAEtAABFDQIgAUEBaiIBQQNxDQALCwNAIAEiAkEEaiEBIAIoAgAiA0F/cyADQf/9+3dqcUGAgYKEeHFFDQALAkAgA0H/AXENACACIABrDwsDQCACLQABIQMgAkEBaiIBIQIgAw0ACwsgASAAawsEACMACwYAIAAkAAsSAQJ/IwAgAGtBcHEiASQAIAELFQBBoL3BAiQCQaC9AUEPakFwcSQBCwcAIwAjAWsLBAAjAQsRACABIAIgAyAEIAUgABETAAsTACABIAIgAyAEIAUgBiAAERsACxUAIAEgAiADIAQgBSAGIAcgABEWAAsRACABIAIgAyAEIAUgABEcAAsNACABIAIgAyAAERcACxkAIAAgASACIAMgBCAFrSAGrUIghoQQ2Q8LIwAgACABIAIgAyAEIAWtIAatQiCGhCAHrSAIrUIghoQQ2g8LJQAgACABIAIgAyAEIAUgBq0gB61CIIaEIAitIAmtQiCGhBDbDwsZACAAIAEgAiADrSAErUIghoQgBSAGENwPCyQBAX4gACABIAKtIAOtQiCGhCAEEN0PIQUgBUIgiKcQGiAFpwscACAAIAEgAiADpyADQiCIpyAEpyAEQiCIpxAbCxMAIAAgAacgAUIgiKcgAiADEBwLC6WIgYAAAgBBgAgL/IIB44GK44GG44Gp44KT44Gf44G544Gf44GEAGluZmluaXR5AEZlYnJ1YXJ5AEphbnVhcnkASnVseQBUaHVyc2RheQBUdWVzZGF5AFdlZG5lc2RheQBTYXR1cmRheQBTdW5kYXkATW9uZGF5AEZyaWRheQBNYXkAJW0vJWQvJXkALSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABOb3YAVGh1AHVuc3VwcG9ydGVkIGxvY2FsZSBmb3Igc3RhbmRhcmQgaW5wdXQAQXVndXN0AHVuc2lnbmVkIHNob3J0AHVuc2lnbmVkIGludABzZXQAZ2V0AE9jdABmbG9hdABTYXQAdWludDY0X3QAQXByAHZlY3RvcgBPY3RvYmVyAE5vdmVtYmVyAFNlcHRlbWJlcgBEZWNlbWJlcgB1bnNpZ25lZCBjaGFyAGlvc19iYXNlOjpjbGVhcgBNYXIAU2VwACVJOiVNOiVTICVwAFN1bgBKdW4Ac3RkOjpleGNlcHRpb24AX19jeGFfZ3VhcmRfYWNxdWlyZSBkZXRlY3RlZCByZWN1cnNpdmUgaW5pdGlhbGl6YXRpb24ATW9uAG5hbgBKYW4ASnVsAGJvb2wAbGwAQXByaWwAZW1zY3JpcHRlbjo6dmFsAHB1c2hfYmFjawBGcmkATWFyY2gAQXVnAHVuc2lnbmVkIGxvbmcAc3RkOjp3c3RyaW5nAGJhc2ljX3N0cmluZwBzdGQ6OnN0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBpbmYAJS4wTGYAJUxmAHJlc2l6ZQBhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAHRydWUAVHVlAGZhbHNlAEp1bmUAQ2xhc3NOYW1lAEZ1bmN0aW9uTmFtZQBkb3VibGUAdm9pZABXZWQARGVjAEZlYgAlYSAlYiAlZCAlSDolTTolUyAlWQBQT1NJWAAlSDolTTolUwBOQU4AUE0AQU0ATENfQUxMAExBTkcASU5GAEMAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AHZlY3RvcjxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AdmVjdG9yPHN0ZDo6c3RyaW5nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+ADAxMjM0NTY3ODkAQy5VVEYtOAAuAChudWxsKQBQdXJlIHZpcnR1YWwgZnVuY3Rpb24gY2FsbGVkIQBOU3QzX18yNnZlY3RvcklOU18xMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFTlM0X0lTNl9FRUVFAE5TdDNfXzIxM19fdmVjdG9yX2Jhc2VJTlNfMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRU5TNF9JUzZfRUVFRQBOU3QzX18yMjBfX3ZlY3Rvcl9iYXNlX2NvbW1vbklMYjFFRUUAiEQAAJsKAAAMRQAAPQoAAAAAAAABAAAAwAoAAAAAAAAMRQAA5wkAAAAAAAABAAAAyAoAAAAAAABQTlN0M19fMjZ2ZWN0b3JJTlNfMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRU5TNF9JUzZfRUVFRQAAaEUAAPgKAAAAAAAA4AoAAFBLTlN0M19fMjZ2ZWN0b3JJTlNfMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRU5TNF9JUzZfRUVFRQBoRQAAYAsAAAEAAADgCgAAaWkAdgB2aQBQCwAAxEMAAFALAABQDAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUATlN0M19fMjIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFRQAAAACIRAAAHwwAAAxFAADgCwAAAAAAAAEAAABIDAAAAAAAAHZpaWkAAAAAxEMAAFALAABIRAAAUAwAAHZpaWlpAAAASEQAALgLAABpaWkAtAwAAOAKAABIRAAATjEwZW1zY3JpcHRlbjN2YWxFAACIRAAAoAwAAGlpaWkAAAAAAAAAAAAAAAAAAAAA3EMAAOAKAABIRAAAUAwAAGlpaWlpAE5TdDNfXzI2dmVjdG9ySWlOU185YWxsb2NhdG9ySWlFRUVFAE5TdDNfXzIxM19fdmVjdG9yX2Jhc2VJaU5TXzlhbGxvY2F0b3JJaUVFRUUAAAAMRQAACg0AAAAAAAABAAAAwAoAAAAAAAAMRQAA5gwAAAAAAAABAAAAOA0AAAAAAABQTlN0M19fMjZ2ZWN0b3JJaU5TXzlhbGxvY2F0b3JJaUVFRUUAAAAAaEUAAGgNAAAAAAAAUA0AAFBLTlN0M19fMjZ2ZWN0b3JJaU5TXzlhbGxvY2F0b3JJaUVFRUUAAABoRQAAoA0AAAEAAABQDQAAkA0AAMRDAACQDQAAJEQAAAAAAAAAAAAAxEMAAJANAABIRAAAJEQAAEhEAADIDQAAtAwAAFANAABIRAAAAAAAAAAAAAAAAAAA3EMAAFANAABIRAAAJEQAADlDbGFzc05hbWUAAIhEAAAwDgAAUDlDbGFzc05hbWUAaEUAAEQOAAAAAAAAPA4AAFBLOUNsYXNzTmFtZQAAAABoRQAAYA4AAAEAAAA8DgAAUA4AAMRDAABQDgAAdmlpAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAAAMRQAAkA4AAAAAAAABAAAASAwAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAADEUAAOgOAAAAAAAAAQAAAEgMAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAAAMRQAAQA8AAAAAAAABAAAASAwAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAAAxFAACcDwAAAAAAAAEAAABIDAAAAAAAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAAiEQAAPgPAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAAIhEAAAgEAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAACIRAAASBAAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAAiEQAAHAQAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAAIhEAACYEAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAACIRAAAwBAAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAAiEQAAOgQAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAAIhEAAAQEQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAACIRAAAOBEAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWZFRQAAiEQAAGARAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lkRUUAAIhEAACIEQAA0XSeAFedvSqAcFIP//8+JwoAAABkAAAA6AMAABAnAACghgEAQEIPAICWmAAA4fUFGAAAADUAAABxAAAAa////877//+Sv///AAAAAAAAAAD/////////////////////////////////////////////////////////////////AAECAwQFBgcICf////////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI////////woLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wABAgQHAwYFAAAAAAAAAAIAAMADAADABAAAwAUAAMAGAADABwAAwAgAAMAJAADACgAAwAsAAMAMAADADQAAwA4AAMAPAADAEAAAwBEAAMASAADAEwAAwBQAAMAVAADAFgAAwBcAAMAYAADAGQAAwBoAAMAbAADAHAAAwB0AAMAeAADAHwAAwAAAALMBAADDAgAAwwMAAMMEAADDBQAAwwYAAMMHAADDCAAAwwkAAMMKAADDCwAAwwwAAMMNAADTDgAAww8AAMMAAAy7AQAMwwIADMMDAAzDBAAM0wAAAADeEgSVAAAAAP///////////////+ATAAAUAAAAQy5VVEYtOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0EwAAAAAAAAAAAAAAAAAAAAAAAAAAAABMQ19DVFlQRQAAAABMQ19OVU1FUklDAABMQ19USU1FAAAAAABMQ19DT0xMQVRFAABMQ19NT05FVEFSWQBMQ19NRVNTQUdFUwAAAAAAAAAAABEACgAREREAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAEQAPChEREQMKBwABAAkLCwAACQYLAAALAAYRAAAAERERAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAABEACgoREREACgAAAgAJCwAAAAkACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAADQAAAAQNAAAAAAkOAAAAAAAOAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAADwAAAAAJEAAAAAAAEAAAEAAAEgAAABISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAEhISAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAACgAAAAAKAAAAAAkLAAAAAAALAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAAMDEyMzQ1Njc4OUFCQ0RFRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgACAAIAAyACIAIgAiACIAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAFgBMAEwATABMAEwATABMAEwATABMAEwATABMAEwATACNgI2AjYCNgI2AjYCNgI2AjYCNgEwATABMAEwATABMAEwAjVCNUI1QjVCNUI1QjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUEwATABMAEwATABMAI1gjWCNYI1gjWCNYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGBMAEwATABMACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAhAAAAIgAAACMAAAAkAAAAJQAAACYAAAAnAAAAKAAAACkAAAAqAAAAKwAAACwAAAAtAAAALgAAAC8AAAAwAAAAMQAAADIAAAAzAAAANAAAADUAAAA2AAAANwAAADgAAAA5AAAAOgAAADsAAAA8AAAAPQAAAD4AAAA/AAAAQAAAAEEAAABCAAAAQwAAAEQAAABFAAAARgAAAEcAAABIAAAASQAAAEoAAABLAAAATAAAAE0AAABOAAAATwAAAFAAAABRAAAAUgAAAFMAAABUAAAAVQAAAFYAAABXAAAAWAAAAFkAAABaAAAAWwAAAFwAAABdAAAAXgAAAF8AAABgAAAAQQAAAEIAAABDAAAARAAAAEUAAABGAAAARwAAAEgAAABJAAAASgAAAEsAAABMAAAATQAAAE4AAABPAAAAUAAAAFEAAABSAAAAUwAAAFQAAABVAAAAVgAAAFcAAABYAAAAWQAAAFoAAAB7AAAAfAAAAH0AAAB+AAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(function (instance) {
      return instance;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      // Warn on some common problems.
      if (isFileURI(wasmBinaryFile)) {
        err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
      }
      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);

        return result.then(
          receiveInstantiationResult,
          function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync().catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + 16) + 16;
    }

  function _atexit(func, arg) {
    }
  function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - 16;
  
      this.set_type = function(type) {
        HEAP32[(((this.ptr)+(4))>>2)] = type;
      };
  
      this.get_type = function() {
        return HEAP32[(((this.ptr)+(4))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAP32[(((this.ptr)+(8))>>2)] = destructor;
      };
  
      this.get_destructor = function() {
        return HEAP32[(((this.ptr)+(8))>>2)];
      };
  
      this.set_refcount = function(refcount) {
        HEAP32[((this.ptr)>>2)] = refcount;
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(12))>>0)] = caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(12))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(13))>>0)] = rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(13))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      }
  
      this.add_ref = function() {
        var value = HEAP32[((this.ptr)>>2)];
        HEAP32[((this.ptr)>>2)] = value + 1;
      };
  
      // Returns true if last reference released.
      this.release_ref = function() {
        var prev = HEAP32[((this.ptr)>>2)];
        HEAP32[((this.ptr)>>2)] = prev - 1;
        assert(prev > 0);
        return prev === 1;
      };
    }
  
  var exceptionLast = 0;
  
  var uncaughtExceptionCount = 0;
  function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s NO_DISABLE_EXCEPTION_CATCHING or -s EXCEPTION_CATCHING_ALLOWED=[..] to catch.";
    }

  function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}

  function getShiftFromSize(size) {
      switch (size) {
          case 1: return 0;
          case 2: return 1;
          case 4: return 2;
          case 8: return 3;
          default:
              throw new TypeError('Unknown type size: ' + size);
      }
    }
  
  function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
  var embind_charCodes = undefined;
  function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
  
  var awaitingDependencies = {};
  
  var registeredTypes = {};
  
  var typeDependencies = {};
  
  var char_0 = 48;
  
  var char_9 = 57;
  function makeLegalFunctionName(name) {
      if (undefined === name) {
          return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
          return '_' + name;
      } else {
          return name;
      }
    }
  function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/
      return new Function(
          "body",
          "return function " + name + "() {\n" +
          "    \"use strict\";" +
          "    return body.apply(this, arguments);\n" +
          "};\n"
      )(body);
    }
  function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
          this.name = errorName;
          this.message = message;
  
          var stack = (new Error(message)).stack;
          if (stack !== undefined) {
              this.stack = this.toString() + '\n' +
                  stack.replace(/^Error(:[^\n]*)?\n/, '');
          }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
          if (this.message === undefined) {
              return this.name;
          } else {
              return this.name + ': ' + this.message;
          }
      };
  
      return errorClass;
    }
  var BindingError = undefined;
  function throwBindingError(message) {
      throw new BindingError(message);
    }
  
  var InternalError = undefined;
  function throwInternalError(message) {
      throw new InternalError(message);
    }
  function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
          if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
          } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                      onComplete(typeConverters);
                  }
              });
          }
      });
      if (0 === unregisteredTypes.length) {
          onComplete(typeConverters);
      }
    }
  /** @param {Object=} options */
  function registerType(rawType, registeredInstance, options) {
      options = options || {};
  
      if (!('argPackAdvance' in registeredInstance)) {
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
  
      var name = registeredInstance.name;
      if (!rawType) {
          throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
          if (options.ignoreDuplicateRegistrations) {
              return;
          } else {
              throwBindingError("Cannot register type '" + name + "' twice");
          }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
          var callbacks = awaitingDependencies[rawType];
          delete awaitingDependencies[rawType];
          callbacks.forEach(function(cb) {
              cb();
          });
      }
    }
  function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': function(pointer) {
              // TODO: if heap is fixed (like in asm.js) this could be executed outside
              var heap;
              if (size === 1) {
                  heap = HEAP8;
              } else if (size === 2) {
                  heap = HEAP16;
              } else if (size === 4) {
                  heap = HEAP32;
              } else {
                  throw new TypeError("Unknown boolean type size: " + name);
              }
              return this['fromWireType'](heap[pointer >> shift]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
          return false;
      }
      if (!(other instanceof ClassHandle)) {
          return false;
      }
  
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
  
      while (leftClass.baseClass) {
          left = leftClass.upcast(left);
          leftClass = leftClass.baseClass;
      }
  
      while (rightClass.baseClass) {
          right = rightClass.upcast(right);
          rightClass = rightClass.baseClass;
      }
  
      return leftClass === rightClass && left === right;
    }
  
  function shallowCopyInternalPointer(o) {
      return {
          count: o.count,
          deleteScheduled: o.deleteScheduled,
          preservePointerOnDelete: o.preservePointerOnDelete,
          ptr: o.ptr,
          ptrType: o.ptrType,
          smartPtr: o.smartPtr,
          smartPtrType: o.smartPtrType,
      };
    }
  
  function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
    }
  
  var finalizationGroup = false;
  
  function detachFinalizer(handle) {}
  
  function runDestructor($$) {
      if ($$.smartPtr) {
          $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
          $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }
  function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;
      if (toDelete) {
          runDestructor($$);
      }
    }
  function attachFinalizer(handle) {
      if ('undefined' === typeof FinalizationGroup) {
          attachFinalizer = function (handle) { return handle; };
          return handle;
      }
      // If the running environment has a FinalizationGroup (see
      // https://github.com/tc39/proposal-weakrefs), then attach finalizers
      // for class handles.  We check for the presence of FinalizationGroup
      // at run-time, not build-time.
      finalizationGroup = new FinalizationGroup(function (iter) {
          for (var result = iter.next(); !result.done; result = iter.next()) {
              var $$ = result.value;
              if (!$$.ptr) {
                  console.warn('object already deleted: ' + $$.ptr);
              } else {
                  releaseClassHandle($$);
              }
          }
      });
      attachFinalizer = function(handle) {
          finalizationGroup.register(handle, handle.$$, handle.$$);
          return handle;
      };
      detachFinalizer = function(handle) {
          finalizationGroup.unregister(handle.$$);
      };
      return attachFinalizer(handle);
    }
  function ClassHandle_clone() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
  
      if (this.$$.preservePointerOnDelete) {
          this.$$.count.value += 1;
          return this;
      } else {
          var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
              $$: {
                  value: shallowCopyInternalPointer(this.$$),
              }
          }));
  
          clone.$$.count.value += 1;
          clone.$$.deleteScheduled = false;
          return clone;
      }
    }
  
  function ClassHandle_delete() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
  
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError('Object already scheduled for deletion');
      }
  
      detachFinalizer(this);
      releaseClassHandle(this.$$);
  
      if (!this.$$.preservePointerOnDelete) {
          this.$$.smartPtr = undefined;
          this.$$.ptr = undefined;
      }
    }
  
  function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
  
  var delayFunction = undefined;
  
  var deletionQueue = [];
  
  function flushPendingDeletes() {
      while (deletionQueue.length) {
          var obj = deletionQueue.pop();
          obj.$$.deleteScheduled = false;
          obj['delete']();
      }
    }
  function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError('Object already scheduled for deletion');
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
          delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }
  function init_ClassHandle() {
      ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
      ClassHandle.prototype['clone'] = ClassHandle_clone;
      ClassHandle.prototype['delete'] = ClassHandle_delete;
      ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
      ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
    }
  function ClassHandle() {
    }
  
  var registeredPointers = {};
  
  function ensureOverloadTable(proto, methodName, humanName) {
      if (undefined === proto[methodName].overloadTable) {
          var prevFunc = proto[methodName];
          // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.
          proto[methodName] = function() {
              // TODO This check can be removed in -O3 level "unsafe" optimizations.
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                  throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
          };
          // Move the previous function into the overload table.
          proto[methodName].overloadTable = [];
          proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
  /** @param {number=} numArguments */
  function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
          if (undefined === numArguments || (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])) {
              throwBindingError("Cannot register public name '" + name + "' twice");
          }
  
          // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
          // that routes between the two.
          ensureOverloadTable(Module, name, name);
          if (Module.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
          }
          // Add the new function into the overload table.
          Module[name].overloadTable[numArguments] = value;
      }
      else {
          Module[name] = value;
          if (undefined !== numArguments) {
              Module[name].numArguments = numArguments;
          }
      }
    }
  
  /** @constructor */
  function RegisteredClass(
      name,
      constructor,
      instancePrototype,
      rawDestructor,
      baseClass,
      getActualType,
      upcast,
      downcast
    ) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
  
  function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
          if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
          }
          ptr = ptrClass.upcast(ptr);
          ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }
  function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
          return 0;
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
  
  function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
  
          if (this.isSmartPointer) {
              ptr = this.rawConstructor();
              if (destructors !== null) {
                  destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
          } else {
              return 0;
          }
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
          throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
  
      if (this.isSmartPointer) {
          // TODO: this is not strictly true
          // We could support BY_EMVAL conversions from raw pointers to smart pointers
          // because the smart pointer can hold a reference to the handle
          if (undefined === handle.$$.smartPtr) {
              throwBindingError('Passing raw pointer to smart pointer is illegal');
          }
  
          switch (this.sharingPolicy) {
              case 0: // NONE
                  // no upcasting
                  if (handle.$$.smartPtrType === this) {
                      ptr = handle.$$.smartPtr;
                  } else {
                      throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
                  }
                  break;
  
              case 1: // INTRUSIVE
                  ptr = handle.$$.smartPtr;
                  break;
  
              case 2: // BY_EMVAL
                  if (handle.$$.smartPtrType === this) {
                      ptr = handle.$$.smartPtr;
                  } else {
                      var clonedHandle = handle['clone']();
                      ptr = this.rawShare(
                          ptr,
                          __emval_register(function() {
                              clonedHandle['delete']();
                          })
                      );
                      if (destructors !== null) {
                          destructors.push(this.rawDestructor, ptr);
                      }
                  }
                  break;
  
              default:
                  throwBindingError('Unsupporting sharing policy');
          }
      }
      return ptr;
    }
  
  function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
          return 0;
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (handle.$$.ptrType.isConst) {
          throwBindingError('Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
  
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }
  
  function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
          ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
  
  function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
          this.rawDestructor(ptr);
      }
    }
  
  function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
          handle['delete']();
      }
    }
  
  function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
          return ptr;
      }
      if (undefined === desiredClass.baseClass) {
          return null; // no conversion
      }
  
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
          return null;
      }
      return desiredClass.downcast(rv);
    }
  
  function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
  
  function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
          if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
          }
      }
      return rv;
    }
  
  function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
          delayFunction(flushPendingDeletes);
      }
    }
  function init_embind() {
      Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
      Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
      Module['flushPendingDeletes'] = flushPendingDeletes;
      Module['setDelayFunction'] = setDelayFunction;
    }
  var registeredInstances = {};
  
  function getBasestPointer(class_, ptr) {
      if (ptr === undefined) {
          throwBindingError('ptr should not be undefined');
      }
      while (class_.baseClass) {
          ptr = class_.upcast(ptr);
          class_ = class_.baseClass;
      }
      return ptr;
    }
  function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
  
  function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
          throwInternalError('makeClassHandle requires ptr and ptrType');
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
          throwInternalError('Both smartPtrType and smartPtr must be specified');
      }
      record.count = { value: 1 };
      return attachFinalizer(Object.create(prototype, {
          $$: {
              value: record,
          },
      }));
    }
  function RegisteredPointer_fromWireType(ptr) {
      // ptr is a raw pointer (or a raw smartpointer)
  
      // rawPointer is a maybe-null raw pointer
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
          this.destructor(ptr);
          return null;
      }
  
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (undefined !== registeredInstance) {
          // JS object has been neutered, time to repopulate it
          if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance['clone']();
          } else {
              // else, just increment reference count on existing object
              // it already has a reference to the smart pointer
              var rv = registeredInstance['clone']();
              this.destructor(ptr);
              return rv;
          }
      }
  
      function makeDefaultHandle() {
          if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: rawPointer,
                  smartPtrType: this,
                  smartPtr: ptr,
              });
          } else {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: ptr,
              });
          }
      }
  
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
          return makeDefaultHandle.call(this);
      }
  
      var toType;
      if (this.isConst) {
          toType = registeredPointerRecord.constPointerType;
      } else {
          toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(
          rawPointer,
          this.registeredClass,
          toType.registeredClass);
      if (dp === null) {
          return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
          return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp,
              smartPtrType: this,
              smartPtr: ptr,
          });
      } else {
          return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp,
          });
      }
    }
  function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype['argPackAdvance'] = 8;
      RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
      RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
    }
  /** @constructor
      @param {*=} pointeeType,
      @param {*=} sharingPolicy,
      @param {*=} rawGetPointee,
      @param {*=} rawConstructor,
      @param {*=} rawShare,
      @param {*=} rawDestructor,
       */
  function RegisteredPointer(
      name,
      registeredClass,
      isReference,
      isConst,
  
      // smart pointer properties
      isSmartPointer,
      pointeeType,
      sharingPolicy,
      rawGetPointee,
      rawConstructor,
      rawShare,
      rawDestructor
    ) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
  
      // smart pointer properties
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
  
      if (!isSmartPointer && registeredClass.baseClass === undefined) {
          if (isConst) {
              this['toWireType'] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
          } else {
              this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
          }
      } else {
          this['toWireType'] = genericPointerToWireType;
          // Here we must leave this.destructorFunction undefined, since whether genericPointerToWireType returns
          // a pointer that needs to be freed up is runtime-dependent, and cannot be evaluated at registration time.
          // TODO: Create an alternative mechanism that allows removing the use of var destructors = []; array in
          //       craftInvokerFunction altogether.
      }
    }
  
  /** @param {number=} numArguments */
  function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
          throwInternalError('Replacing nonexistant public symbol');
      }
      // If there's an overload table for this symbol, replace the symbol in the overload table instead.
      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
          Module[name].overloadTable[numArguments] = value;
      }
      else {
          Module[name] = value;
          Module[name].argCount = numArguments;
      }
    }
  
  function dynCallLegacy(sig, ptr, args) {
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      if (args && args.length) {
        // j (64-bit integer) must be passed in as two numbers [low 32, high 32].
        assert(args.length === sig.substring(1).replace(/j/g, '--').length);
      } else {
        assert(sig.length == 1);
      }
      var f = Module["dynCall_" + sig];
      return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
    }
  function dynCall(sig, ptr, args) {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.includes('j')) {
        return dynCallLegacy(sig, ptr, args);
      }
      assert(wasmTable.get(ptr), 'missing table entry in dynCall: ' + ptr);
      return wasmTable.get(ptr).apply(null, args)
    }
  function getDynCaller(sig, ptr) {
      assert(sig.includes('j'), 'getDynCaller should only be called with i64 sigs')
      var argCache = [];
      return function() {
        argCache.length = arguments.length;
        for (var i = 0; i < arguments.length; i++) {
          argCache[i] = arguments[i];
        }
        return dynCall(sig, ptr, argCache);
      };
    }
  function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
  
      function makeDynCaller() {
        if (signature.includes('j')) {
          return getDynCaller(signature, rawFunction);
        }
        return wasmTable.get(rawFunction);
      }
  
      var fp = makeDynCaller();
      if (typeof fp !== "function") {
          throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }
      return fp;
    }
  
  var UnboundTypeError = undefined;
  
  function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }
  function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
          if (seen[type]) {
              return;
          }
          if (registeredTypes[type]) {
              return;
          }
          if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
          }
          unboundTypes.push(type);
          seen[type] = true;
      }
      types.forEach(visit);
  
      throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
    }
  function __embind_register_class(
      rawType,
      rawPointerType,
      rawConstPointerType,
      baseClassRawType,
      getActualTypeSignature,
      getActualType,
      upcastSignature,
      upcast,
      downcastSignature,
      downcast,
      name,
      destructorSignature,
      rawDestructor
    ) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
          upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
          downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
  
      exposePublicSymbol(legalFunctionName, function() {
          // this code cannot run if baseClassRawType is zero
          throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
      });
  
      whenDependentTypesAreResolved(
          [rawType, rawPointerType, rawConstPointerType],
          baseClassRawType ? [baseClassRawType] : [],
          function(base) {
              base = base[0];
  
              var baseClass;
              var basePrototype;
              if (baseClassRawType) {
                  baseClass = base.registeredClass;
                  basePrototype = baseClass.instancePrototype;
              } else {
                  basePrototype = ClassHandle.prototype;
              }
  
              var constructor = createNamedFunction(legalFunctionName, function() {
                  if (Object.getPrototypeOf(this) !== instancePrototype) {
                      throw new BindingError("Use 'new' to construct " + name);
                  }
                  if (undefined === registeredClass.constructor_body) {
                      throw new BindingError(name + " has no accessible constructor");
                  }
                  var body = registeredClass.constructor_body[arguments.length];
                  if (undefined === body) {
                      throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                  }
                  return body.apply(this, arguments);
              });
  
              var instancePrototype = Object.create(basePrototype, {
                  constructor: { value: constructor },
              });
  
              constructor.prototype = instancePrototype;
  
              var registeredClass = new RegisteredClass(
                  name,
                  constructor,
                  instancePrototype,
                  rawDestructor,
                  baseClass,
                  getActualType,
                  upcast,
                  downcast);
  
              var referenceConverter = new RegisteredPointer(
                  name,
                  registeredClass,
                  true,
                  false,
                  false);
  
              var pointerConverter = new RegisteredPointer(
                  name + '*',
                  registeredClass,
                  false,
                  false,
                  false);
  
              var constPointerConverter = new RegisteredPointer(
                  name + ' const*',
                  registeredClass,
                  false,
                  true,
                  false);
  
              registeredPointers[rawType] = {
                  pointerType: pointerConverter,
                  constPointerType: constPointerConverter
              };
  
              replacePublicSymbol(legalFunctionName, constructor);
  
              return [referenceConverter, pointerConverter, constPointerConverter];
          }
      );
    }

  function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
          array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
  
  function runDestructors(destructors) {
      while (destructors.length) {
          var ptr = destructors.pop();
          var del = destructors.pop();
          del(ptr);
      }
    }
  function __embind_register_class_constructor(
      rawClassType,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      invoker,
      rawConstructor
    ) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
  
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
          classType = classType[0];
          var humanName = 'constructor ' + classType.name;
  
          if (undefined === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
          }
          if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount-1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
          }
          classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
              throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
          };
  
          whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              // Insert empty slot for context type (argTypes[1]).
              argTypes.splice(1, 0, null);
              classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
              return [];
          });
          return [];
      });
    }

  function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
          throw new TypeError('new_ called with constructor type ' + typeof(constructor) + " which is not a function");
      }
  
      /*
       * Previously, the following line was just:
  
       function dummy() {};
  
       * Unfortunately, Chrome was preserving 'dummy' as the object's name, even though at creation, the 'dummy' has the
       * correct constructor name.  Thus, objects created with IMVU.new would show up in the debugger as 'dummy', which
       * isn't very helpful.  Using IMVU.createNamedFunction addresses the issue.  Doublely-unfortunately, there's no way
       * to write a test for this behavior.  -NRD 2013.02.22
       */
      var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function(){});
      dummy.prototype = constructor.prototype;
      var obj = new dummy;
  
      var r = constructor.apply(obj, argumentList);
      return (r instanceof Object) ? r : obj;
    }
  function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      // humanName: a human-readable string name for the function to be generated.
      // argTypes: An array that contains the embind type objects for all types in the function signature.
      //    argTypes[0] is the type object for the function return value.
      //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
      //    argTypes[2...] are the actual function parameters.
      // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
      // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
      // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
      var argCount = argTypes.length;
  
      if (argCount < 2) {
          throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
  
      var isClassMethodFunc = (argTypes[1] !== null && classType !== null);
  
      // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
  // TODO: This omits argument count check - enable only at -O3 or similar.
  //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
  //       return FUNCTION_TABLE[fn];
  //    }
  
      // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
      // TODO: Remove this completely once all function invokers are being dynamically generated.
      var needsDestructorStack = false;
  
      for (var i = 1; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here.
          if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) { // The type does not define a destructor function - must use dynamic stack
              needsDestructorStack = true;
              break;
          }
      }
  
      var returns = (argTypes[0].name !== "void");
  
      var argsList = "";
      var argsListWired = "";
      for (var i = 0; i < argCount - 2; ++i) {
          argsList += (i!==0?", ":"")+"arg"+i;
          argsListWired += (i!==0?", ":"")+"arg"+i+"Wired";
      }
  
      var invokerFnBody =
          "return function "+makeLegalFunctionName(humanName)+"("+argsList+") {\n" +
          "if (arguments.length !== "+(argCount - 2)+") {\n" +
              "throwBindingError('function "+humanName+" called with ' + arguments.length + ' arguments, expected "+(argCount - 2)+" args!');\n" +
          "}\n";
  
      if (needsDestructorStack) {
          invokerFnBody +=
              "var destructors = [];\n";
      }
  
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
      var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
  
      if (isClassMethodFunc) {
          invokerFnBody += "var thisWired = classParam.toWireType("+dtorStack+", this);\n";
      }
  
      for (var i = 0; i < argCount - 2; ++i) {
          invokerFnBody += "var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";
          args1.push("argType"+i);
          args2.push(argTypes[i+2]);
      }
  
      if (isClassMethodFunc) {
          argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }
  
      invokerFnBody +=
          (returns?"var rv = ":"") + "invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";
  
      if (needsDestructorStack) {
          invokerFnBody += "runDestructors(destructors);\n";
      } else {
          for (var i = isClassMethodFunc?1:2; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
              var paramName = (i === 1 ? "thisWired" : ("arg"+(i - 2)+"Wired"));
              if (argTypes[i].destructorFunction !== null) {
                  invokerFnBody += paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";
                  args1.push(paramName+"_dtor");
                  args2.push(argTypes[i].destructorFunction);
              }
          }
      }
  
      if (returns) {
          invokerFnBody += "var ret = retType.fromWireType(rv);\n" +
                           "return ret;\n";
      } else {
      }
  
      invokerFnBody += "}\n";
  
      args1.push(invokerFnBody);
  
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }
  function __embind_register_class_function(
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr, // [ReturnType, ThisType, Args...]
      invokerSignature,
      rawInvoker,
      context,
      isPureVirtual
    ) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
  
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
          classType = classType[0];
          var humanName = classType.name + '.' + methodName;
  
          if (methodName.startsWith("@@")) {
              methodName = Symbol[methodName.substring(2)];
          }
  
          if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
          }
  
          function unboundTypesHandler() {
              throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
          }
  
          var proto = classType.registeredClass.instancePrototype;
          var method = proto[methodName];
          if (undefined === method || (undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2)) {
              // This is the first overload to be registered, OR we are replacing a function in the base class with a function in the derived class.
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
          } else {
              // There was an existing function with the same name registered. Set up a function overload routing table.
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
          }
  
          whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
  
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
  
              // Replace the initial unbound-handler-stub function with the appropriate member function, now that all types
              // are resolved. If multiple overloads are registered for this function, the function goes into an overload table.
              if (undefined === proto[methodName].overloadTable) {
                  // Set argCount in case an overload is registered later
                  memberFunction.argCount = argCount - 2;
                  proto[methodName] = memberFunction;
              } else {
                  proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
  
              return [];
          });
          return [];
      });
    }

  var emval_free_list = [];
  
  var emval_handle_array = [{},{value:undefined},{value:null},{value:true},{value:false}];
  function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
          emval_handle_array[handle] = undefined;
          emval_free_list.push(handle);
      }
    }
  
  function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              ++count;
          }
      }
      return count;
    }
  
  function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
          }
      }
      return null;
    }
  function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }
  function __emval_register(value) {
      switch (value) {
        case undefined :{ return 1; }
        case null :{ return 2; }
        case true :{ return 3; }
        case false :{ return 4; }
        default:{
          var handle = emval_free_list.length ?
              emval_free_list.pop() :
              emval_handle_array.length;
  
          emval_handle_array[handle] = {refcount: 1, value: value};
          return handle;
          }
        }
    }
  function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(handle) {
              var rv = emval_handle_array[handle].value;
              __emval_decref(handle);
              return rv;
          },
          'toWireType': function(destructors, value) {
              return __emval_register(value);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: null, // This type does not need a destructor
  
          // TODO: do we need a deleteObject here?  write a test where
          // emval is passed into JS via an interface
      });
    }

  function _embind_repr(v) {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    }
  
  function floatReadValueFromPointer(name, shift) {
      switch (shift) {
          case 2: return function(pointer) {
              return this['fromWireType'](HEAPF32[pointer >> 2]);
          };
          case 3: return function(pointer) {
              return this['fromWireType'](HEAPF64[pointer >> 3]);
          };
          default:
              throw new TypeError("Unknown float type: " + name);
      }
    }
  function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              return value;
          },
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following if() and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              return value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': floatReadValueFromPointer(name, shift),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
          case 0: return signed ?
              function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
              function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
          case 1: return signed ?
              function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
              function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
          case 2: return signed ?
              function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
              function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }
  function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
          maxRange = 4294967295;
      }
  
      var shift = getShiftFromSize(size);
  
      var fromWireType = function(value) {
          return value;
      };
  
      if (minRange === 0) {
          var bitshift = 32 - 8*size;
          fromWireType = function(value) {
              return (value << bitshift) >>> bitshift;
          };
      }
  
      var isUnsignedType = (name.includes('unsigned'));
  
      registerType(primitiveType, {
          name: name,
          'fromWireType': fromWireType,
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following two if()s and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              if (value < minRange || value > maxRange) {
                  throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
              }
              return isUnsignedType ? (value >>> 0) : (value | 0);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle]; // in elements
          var data = heap[handle + 1]; // byte offset into emscripten heap
          return new TA(buffer, data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': decodeMemoryView,
          'argPackAdvance': 8,
          'readValueFromPointer': decodeMemoryView,
      }, {
          ignoreDuplicateRegistrations: true,
      });
    }

  function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8
      //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
      = (name === "std::string");
  
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var length = HEAPU32[value >> 2];
  
              var str;
              if (stdStringIsUTF8) {
                  var decodeStartPtr = value + 4;
                  // Looping here to support possible embedded '0' bytes
                  for (var i = 0; i <= length; ++i) {
                      var currentBytePtr = value + 4 + i;
                      if (i == length || HEAPU8[currentBytePtr] == 0) {
                          var maxRead = currentBytePtr - decodeStartPtr;
                          var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                          if (str === undefined) {
                              str = stringSegment;
                          } else {
                              str += String.fromCharCode(0);
                              str += stringSegment;
                          }
                          decodeStartPtr = currentBytePtr + 1;
                      }
                  }
              } else {
                  var a = new Array(length);
                  for (var i = 0; i < length; ++i) {
                      a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
                  }
                  str = a.join('');
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
              }
  
              var getLength;
              var valueIsOfTypeString = (typeof value === 'string');
  
              if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                  throwBindingError('Cannot pass non-string to std::string');
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  getLength = function() {return lengthBytesUTF8(value);};
              } else {
                  getLength = function() {return value.length;};
              }
  
              // assumes 4-byte alignment
              var length = getLength();
              var ptr = _malloc(4 + length + 1);
              HEAPU32[ptr >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  stringToUTF8(value, ptr + 4, length + 1);
              } else {
                  if (valueIsOfTypeString) {
                      for (var i = 0; i < length; ++i) {
                          var charCode = value.charCodeAt(i);
                          if (charCode > 255) {
                              _free(ptr);
                              throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                          }
                          HEAPU8[ptr + 4 + i] = charCode;
                      }
                  } else {
                      for (var i = 0; i < length; ++i) {
                          HEAPU8[ptr + 4 + i] = value[i];
                      }
                  }
              }
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
          decodeString = UTF16ToString;
          encodeString = stringToUTF16;
          lengthBytesUTF = lengthBytesUTF16;
          getHeap = function() { return HEAPU16; };
          shift = 1;
      } else if (charSize === 4) {
          decodeString = UTF32ToString;
          encodeString = stringToUTF32;
          lengthBytesUTF = lengthBytesUTF32;
          getHeap = function() { return HEAPU32; };
          shift = 2;
      }
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              // Code mostly taken from _embind_register_std_string fromWireType
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
  
              var decodeStartPtr = value + 4;
              // Looping here to support possible embedded '0' bytes
              for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i * charSize;
                  if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                      var maxReadBytes = currentBytePtr - decodeStartPtr;
                      var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                      if (str === undefined) {
                          str = stringSegment;
                      } else {
                          str += String.fromCharCode(0);
                          str += stringSegment;
                      }
                      decodeStartPtr = currentBytePtr + charSize;
                  }
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (!(typeof value === 'string')) {
                  throwBindingError('Cannot pass non-string to C++ string type ' + name);
              }
  
              // assumes 4-byte alignment
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
  
              encodeString(value, ptr + 4, length + charSize);
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          isVoid: true, // void return values can be optimized out sometimes
          name: name,
          'argPackAdvance': 0,
          'fromWireType': function() {
              return undefined;
          },
          'toWireType': function(destructors, o) {
              // TODO: assert if anything else is given?
              return undefined;
          },
      });
    }


  function __emval_incref(handle) {
      if (handle > 4) {
          emval_handle_array[handle].refcount += 1;
      }
    }

  function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (undefined === impl) {
          throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }
      return impl;
    }
  function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, '_emval_take_value');
      var v = type['readValueFromPointer'](argv);
      return __emval_register(v);
    }

  function _abort() {
      abort('native code called abort()');
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var ENV = {};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  
  var PATH = {splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
    }
  
  var PATH_FS = {resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY = {ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
    }
  
  function alignMemory(size, alignment) {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    }
  function mmapAlloc(size) {
      abort('internal error: mmapAlloc called but `memalign` native symbol not exported');
    }
  var MEMFS = {ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          if (address !== 0) {
            // We don't currently support location hints for the address of the mapping
            throw new FS.ErrnoError(28);
          }
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  function asyncLoad(url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
      readAsync(url, function(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, function(event) {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });
      if (dep) addRunDependency(dep);
    }
  
  var ERRNO_MESSAGES = {0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"};
  
  var ERRNO_CODES = {};
  var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        assert(typeof parent === 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        if (typeof type === 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          FS.forceLoadFile(node);
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },absolutePath:function() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },createFolder:function() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },createLink:function() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },joinPath:function() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },mmapAlloc:function() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },standardizePath:function() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      }};
  var SYSCALLS = {mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path, allowEmpty) {
        if (path[0] === '/') {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = FS.getStream(dirfd);
          if (!dirstream) throw new FS.ErrnoError(8);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = 0;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAP32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        HEAP32[(((buf)+(32))>>2)] = 0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        HEAP32[(((buf)+(56))>>2)] = (stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)] = 0;
        HEAP32[(((buf)+(64))>>2)] = (stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)] = 0;
        HEAP32[(((buf)+(72))>>2)] = (stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)] = 0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)] = tempI64[0],HEAP32[(((buf)+(84))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _setTempRet0(val) {
      setTempRet0(val);
    }

  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  var __MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }
  function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_ClassHandle();
init_RegisteredPointer();
init_embind();;
UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');;
init_emval();;

  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();;
ERRNO_CODES = {
      'EPERM': 63,
      'ENOENT': 44,
      'ESRCH': 71,
      'EINTR': 27,
      'EIO': 29,
      'ENXIO': 60,
      'E2BIG': 1,
      'ENOEXEC': 45,
      'EBADF': 8,
      'ECHILD': 12,
      'EAGAIN': 6,
      'EWOULDBLOCK': 6,
      'ENOMEM': 48,
      'EACCES': 2,
      'EFAULT': 21,
      'ENOTBLK': 105,
      'EBUSY': 10,
      'EEXIST': 20,
      'EXDEV': 75,
      'ENODEV': 43,
      'ENOTDIR': 54,
      'EISDIR': 31,
      'EINVAL': 28,
      'ENFILE': 41,
      'EMFILE': 33,
      'ENOTTY': 59,
      'ETXTBSY': 74,
      'EFBIG': 22,
      'ENOSPC': 51,
      'ESPIPE': 70,
      'EROFS': 69,
      'EMLINK': 34,
      'EPIPE': 64,
      'EDOM': 18,
      'ERANGE': 68,
      'ENOMSG': 49,
      'EIDRM': 24,
      'ECHRNG': 106,
      'EL2NSYNC': 156,
      'EL3HLT': 107,
      'EL3RST': 108,
      'ELNRNG': 109,
      'EUNATCH': 110,
      'ENOCSI': 111,
      'EL2HLT': 112,
      'EDEADLK': 16,
      'ENOLCK': 46,
      'EBADE': 113,
      'EBADR': 114,
      'EXFULL': 115,
      'ENOANO': 104,
      'EBADRQC': 103,
      'EBADSLT': 102,
      'EDEADLOCK': 16,
      'EBFONT': 101,
      'ENOSTR': 100,
      'ENODATA': 116,
      'ETIME': 117,
      'ENOSR': 118,
      'ENONET': 119,
      'ENOPKG': 120,
      'EREMOTE': 121,
      'ENOLINK': 47,
      'EADV': 122,
      'ESRMNT': 123,
      'ECOMM': 124,
      'EPROTO': 65,
      'EMULTIHOP': 36,
      'EDOTDOT': 125,
      'EBADMSG': 9,
      'ENOTUNIQ': 126,
      'EBADFD': 127,
      'EREMCHG': 128,
      'ELIBACC': 129,
      'ELIBBAD': 130,
      'ELIBSCN': 131,
      'ELIBMAX': 132,
      'ELIBEXEC': 133,
      'ENOSYS': 52,
      'ENOTEMPTY': 55,
      'ENAMETOOLONG': 37,
      'ELOOP': 32,
      'EOPNOTSUPP': 138,
      'EPFNOSUPPORT': 139,
      'ECONNRESET': 15,
      'ENOBUFS': 42,
      'EAFNOSUPPORT': 5,
      'EPROTOTYPE': 67,
      'ENOTSOCK': 57,
      'ENOPROTOOPT': 50,
      'ESHUTDOWN': 140,
      'ECONNREFUSED': 14,
      'EADDRINUSE': 3,
      'ECONNABORTED': 13,
      'ENETUNREACH': 40,
      'ENETDOWN': 38,
      'ETIMEDOUT': 73,
      'EHOSTDOWN': 142,
      'EHOSTUNREACH': 23,
      'EINPROGRESS': 26,
      'EALREADY': 7,
      'EDESTADDRREQ': 17,
      'EMSGSIZE': 35,
      'EPROTONOSUPPORT': 66,
      'ESOCKTNOSUPPORT': 137,
      'EADDRNOTAVAIL': 4,
      'ENETRESET': 39,
      'EISCONN': 30,
      'ENOTCONN': 53,
      'ETOOMANYREFS': 141,
      'EUSERS': 136,
      'EDQUOT': 19,
      'ESTALE': 72,
      'ENOTSUP': 138,
      'ENOMEDIUM': 148,
      'EILSEQ': 25,
      'EOVERFLOW': 61,
      'ECANCELED': 11,
      'ENOTRECOVERABLE': 56,
      'EOWNERDEAD': 62,
      'ESTRPIPE': 135,
    };;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmLibraryArg = {
  "__cxa_allocate_exception": ___cxa_allocate_exception,
  "__cxa_atexit": ___cxa_atexit,
  "__cxa_throw": ___cxa_throw,
  "_embind_register_bigint": __embind_register_bigint,
  "_embind_register_bool": __embind_register_bool,
  "_embind_register_class": __embind_register_class,
  "_embind_register_class_constructor": __embind_register_class_constructor,
  "_embind_register_class_function": __embind_register_class_function,
  "_embind_register_emval": __embind_register_emval,
  "_embind_register_float": __embind_register_float,
  "_embind_register_integer": __embind_register_integer,
  "_embind_register_memory_view": __embind_register_memory_view,
  "_embind_register_std_string": __embind_register_std_string,
  "_embind_register_std_wstring": __embind_register_std_wstring,
  "_embind_register_void": __embind_register_void,
  "_emval_decref": __emval_decref,
  "_emval_incref": __emval_incref,
  "_emval_take_value": __emval_take_value,
  "abort": _abort,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "fd_close": _fd_close,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "setTempRet0": _setTempRet0,
  "strftime_l": _strftime_l
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");

/** @type {function(...*):?} */
var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
  return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
  return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");

/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");

/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");





// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() { abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory")) Module["zeroMemory"] = function() { abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() { abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() { abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() { abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() { abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() { abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() { abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "handleException")) Module["handleException"] = function() { abort("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() { abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() { abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() { abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() { abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout")) Module["safeSetTimeout"] = function() { abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() { abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad")) Module["asyncLoad"] = function() { abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignMemory")) Module["alignMemory"] = function() { abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setImmediateWrapped")) Module["setImmediateWrapped"] = function() { abort("'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "clearImmediateWrapped")) Module["clearImmediateWrapped"] = function() { abort("'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "wget")) Module["wget"] = function() { abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() { abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() { abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() { abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() { abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array")) Module["emval_handle_array"] = function() { abort("'emval_handle_array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list")) Module["emval_free_list"] = function() { abort("'emval_free_list' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols")) Module["emval_symbols"] = function() { abort("'emval_symbols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_emval")) Module["init_emval"] = function() { abort("'init_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles")) Module["count_emval_handles"] = function() { abort("'count_emval_handles' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval")) Module["get_first_emval"] = function() { abort("'get_first_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol")) Module["getStringOrSymbol"] = function() { abort("'getStringOrSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requireHandle")) Module["requireHandle"] = function() { abort("'requireHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_newers")) Module["emval_newers"] = function() { abort("'emval_newers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator")) Module["craftEmvalAllocator"] = function() { abort("'craftEmvalAllocator' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global")) Module["emval_get_global"] = function() { abort("'emval_get_global' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers")) Module["emval_methodCallers"] = function() { abort("'emval_methodCallers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "InternalError")) Module["InternalError"] = function() { abort("'InternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "BindingError")) Module["BindingError"] = function() { abort("'BindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError")) Module["UnboundTypeError"] = function() { abort("'UnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError")) Module["PureVirtualError"] = function() { abort("'PureVirtualError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_embind")) Module["init_embind"] = function() { abort("'init_embind' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError")) Module["throwInternalError"] = function() { abort("'throwInternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError")) Module["throwBindingError"] = function() { abort("'throwBindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError")) Module["throwUnboundTypeError"] = function() { abort("'throwUnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable")) Module["ensureOverloadTable"] = function() { abort("'ensureOverloadTable' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol")) Module["exposePublicSymbol"] = function() { abort("'exposePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol")) Module["replacePublicSymbol"] = function() { abort("'replacePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "extendError")) Module["extendError"] = function() { abort("'extendError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction")) Module["createNamedFunction"] = function() { abort("'createNamedFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances")) Module["registeredInstances"] = function() { abort("'registeredInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer")) Module["getBasestPointer"] = function() { abort("'getBasestPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance")) Module["registerInheritedInstance"] = function() { abort("'registerInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance")) Module["unregisterInheritedInstance"] = function() { abort("'unregisterInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance")) Module["getInheritedInstance"] = function() { abort("'getInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount")) Module["getInheritedInstanceCount"] = function() { abort("'getInheritedInstanceCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances")) Module["getLiveInheritedInstances"] = function() { abort("'getLiveInheritedInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes")) Module["registeredTypes"] = function() { abort("'registeredTypes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies")) Module["awaitingDependencies"] = function() { abort("'awaitingDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies")) Module["typeDependencies"] = function() { abort("'typeDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers")) Module["registeredPointers"] = function() { abort("'registeredPointers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerType")) Module["registerType"] = function() { abort("'registerType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved")) Module["whenDependentTypesAreResolved"] = function() { abort("'whenDependentTypesAreResolved' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes")) Module["embind_charCodes"] = function() { abort("'embind_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes")) Module["embind_init_charCodes"] = function() { abort("'embind_init_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String")) Module["readLatin1String"] = function() { abort("'readLatin1String' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTypeName")) Module["getTypeName"] = function() { abort("'getTypeName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray")) Module["heap32VectorToArray"] = function() { abort("'heap32VectorToArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType")) Module["requireRegisteredType"] = function() { abort("'requireRegisteredType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize")) Module["getShiftFromSize"] = function() { abort("'getShiftFromSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer")) Module["integerReadValueFromPointer"] = function() { abort("'integerReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer")) Module["enumReadValueFromPointer"] = function() { abort("'enumReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer")) Module["floatReadValueFromPointer"] = function() { abort("'floatReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer")) Module["simpleReadValueFromPointer"] = function() { abort("'simpleReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runDestructors")) Module["runDestructors"] = function() { abort("'runDestructors' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "new_")) Module["new_"] = function() { abort("'new_' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction")) Module["craftInvokerFunction"] = function() { abort("'craftInvokerFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction")) Module["embind__requireFunction"] = function() { abort("'embind__requireFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations")) Module["tupleRegistrations"] = function() { abort("'tupleRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations")) Module["structRegistrations"] = function() { abort("'structRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType")) Module["genericPointerToWireType"] = function() { abort("'genericPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType")) Module["constNoSmartPtrRawPointerToWireType"] = function() { abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType")) Module["nonConstNoSmartPtrRawPointerToWireType"] = function() { abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer")) Module["init_RegisteredPointer"] = function() { abort("'init_RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer")) Module["RegisteredPointer"] = function() { abort("'RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee")) Module["RegisteredPointer_getPointee"] = function() { abort("'RegisteredPointer_getPointee' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor")) Module["RegisteredPointer_destructor"] = function() { abort("'RegisteredPointer_destructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject")) Module["RegisteredPointer_deleteObject"] = function() { abort("'RegisteredPointer_deleteObject' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType")) Module["RegisteredPointer_fromWireType"] = function() { abort("'RegisteredPointer_fromWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runDestructor")) Module["runDestructor"] = function() { abort("'runDestructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle")) Module["releaseClassHandle"] = function() { abort("'releaseClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup")) Module["finalizationGroup"] = function() { abort("'finalizationGroup' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps")) Module["detachFinalizer_deps"] = function() { abort("'detachFinalizer_deps' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer")) Module["detachFinalizer"] = function() { abort("'detachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer")) Module["attachFinalizer"] = function() { abort("'attachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle")) Module["makeClassHandle"] = function() { abort("'makeClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle")) Module["init_ClassHandle"] = function() { abort("'init_ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle")) Module["ClassHandle"] = function() { abort("'ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf")) Module["ClassHandle_isAliasOf"] = function() { abort("'ClassHandle_isAliasOf' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted")) Module["throwInstanceAlreadyDeleted"] = function() { abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone")) Module["ClassHandle_clone"] = function() { abort("'ClassHandle_clone' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete")) Module["ClassHandle_delete"] = function() { abort("'ClassHandle_delete' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue")) Module["deletionQueue"] = function() { abort("'deletionQueue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted")) Module["ClassHandle_isDeleted"] = function() { abort("'ClassHandle_isDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater")) Module["ClassHandle_deleteLater"] = function() { abort("'ClassHandle_deleteLater' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes")) Module["flushPendingDeletes"] = function() { abort("'flushPendingDeletes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "delayFunction")) Module["delayFunction"] = function() { abort("'delayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction")) Module["setDelayFunction"] = function() { abort("'setDelayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass")) Module["RegisteredClass"] = function() { abort("'RegisteredClass' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer")) Module["shallowCopyInternalPointer"] = function() { abort("'shallowCopyInternalPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer")) Module["downcastPointer"] = function() { abort("'downcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer")) Module["upcastPointer"] = function() { abort("'upcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "validateThis")) Module["validateThis"] = function() { abort("'validateThis' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "char_0")) Module["char_0"] = function() { abort("'char_0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "char_9")) Module["char_9"] = function() { abort("'char_9' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName")) Module["makeLegalFunctionName"] = function() { abort("'makeLegalFunctionName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromBase64")) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tryParseAsDataURI")) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  checkUnflushedContent();

  if (keepRuntimeAlive()) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
      err(msg);
    }
  } else {
    exitRuntime();
  }

  procExit(status);
}

function procExit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module['onExit']) Module['onExit'](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();







  return createModule.ready
}
);
})();
export default createModule;