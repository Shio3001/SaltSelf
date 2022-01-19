
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

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 36700160;
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
assert(INITIAL_MEMORY == 36700160, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

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
  wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABkoSAgABBYAF/AX9gAn9/AX9gAn9/AGAAAX9gA39/fwF/YAF/AGADf39/AGAGf39/f39/AX9gAABgBX9/f39/AX9gBn9/f39/fwBgBH9/f38AYAV/f39/fwBgBH9/f38Bf2AIf39/f39/f38Bf2AHf39/f39/fwBgAAF+YAd/f39/f39/AX9gBX9+fn5+AGABfwF+YAV/f39/fgF/YAh/f39/f39/fwBgAn9/AXxgAn9/AX5gBH9/f38BfmAKf39/f39/f39/fwBgB39/f39/fn4Bf2ADf35/AX5gBH9+fn8AYAp/f39/f39/f39/AX9gBn9/f39+fgF/YAV/f35/fwBgBH5+fn4Bf2AEf39/fgF+YAJ8fwF8YAZ/fH9/f38Bf2ACfn8Bf2ADf39/AX5gAn9/AX1gA39/fwF9YAN/f38BfGAMf39/f39/f39/f39/AX9gBX9/f398AX9gC39/f39/f39/f39/AX9gD39/f39/f39/f39/f39/fwBgDX9/f39/f39/f39/f38AYAV/fHx/fwBgAn9+AGACf30AYAJ/fABgA39+fgBgAn5+AX1gAn5+AXxgA39/fgBgA35/fwF/YAF8AX5gAn9+AX9gAn5+AX9gBn9/f39/fgF/YAh/f39/f39+fgF/YAZ/f39+f38AYAR/f35/AX5gCX9/f39/f39/fwF/YAV/f39+fgBgBH9+f38BfwL/hoCAACADZW52Fl9lbWJpbmRfcmVnaXN0ZXJfY2xhc3MALQNlbnYYX19jeGFfYWxsb2NhdGVfZXhjZXB0aW9uAAADZW52C19fY3hhX3Rocm93AAYDZW52Il9lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IACgNlbnYfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19mdW5jdGlvbgAVA2Vudg1fZW12YWxfaW5jcmVmAAUDZW52DV9lbXZhbF9kZWNyZWYABQNlbnYRX2VtdmFsX3Rha2VfdmFsdWUAAQNlbnYVX2VtYmluZF9yZWdpc3Rlcl92b2lkAAIDZW52FV9lbWJpbmRfcmVnaXN0ZXJfYm9vbAAMA2VudhtfZW1iaW5kX3JlZ2lzdGVyX3N0ZF9zdHJpbmcAAgNlbnYcX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZwAGA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2VtdmFsAAIDZW52GF9lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcgAMA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0AAYDZW52HF9lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcABhZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxEWVudmlyb25fc2l6ZXNfZ2V0AAEWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQtlbnZpcm9uX2dldAABA2VudgpzdHJmdGltZV9sAAkDZW52BWFib3J0AAgDZW52DF9fY3hhX2F0ZXhpdAAEFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfd3JpdGUADRZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxB2ZkX3JlYWQADRZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX2Nsb3NlAAADZW52DWNsb2NrX2dldHRpbWUAAQNlbnYMX19zeXNfc3RhdDY0AAEDZW52C19fc3lzX21rZGlyAAEDZW52FmVtc2NyaXB0ZW5fcmVzaXplX2hlYXAAAANlbnYVZW1zY3JpcHRlbl9tZW1jcHlfYmlnAAQDZW52C3NldFRlbXBSZXQwAAUDZW52F19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50AA8Wd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQdmZF9zZWVrAAkDvZaAgAC7FggIAAUFCAADAwUDAwMDAwMDAwUCAggAAwMFAwMDAQUPAgACAA0CDQgAAwMFAwMDCwILBgIFAgACCwICAgUCDAIMBgICBgICAgYCAgIGAAgAAwMFAwMDAwUCAgIGAgQCAgYACAADAwUDAwMDBQICAgYCBAICAAQBAAEAAQEBAAkAAQEBAQsAAAIBAgABAAIBAAABAAEAAAAAAQABAQAAAQEBAAAGAQAABgAFBAAEAAAAAQEABAAAAAAAAAABAAABAAEAAAAAAAAAAQQBAAAAAQAMCQAGAAsAAAEEAAEAAAQAAAQEAQAAAQQEAAAGAAIAAAACAAABAAQAAAAAAgABAQIBAAAAAAEEBAAAAAAAAQAAAAAAAAQAAAAAAAACAAAAAQAEBgAAAAAABQEAAQAAAQABAQAFBAAAAAABAAAAAAUFAAIAAAICBgAGBgIFAAAAAQAFBAAEAAAAAQEABAAAAAAAAQAAAQAAAAEEAQAAAAEADAkABgALAAABBAABAAAEAAAEBAEAAAEEBAAABgAAAAACAAEAAAACAAAAAgABAAQGAAAAAAAAAAEAAQEAAAAAAgIGAAYAAAABAAACAgAEAQABAAAHAAIABAQBAAMBAgQAAAAAAQAICgAKAAEBAAAADAABAAAMDAEEAAABAQAMAAAMDAEEAAAKAAAKAAAEAAwACwAAAQQAAQAAAAAABAQAAAEEBAAADAAAAAAAAgAAAAAEAAAAAAEABAwAAAAAAAABAAEBBAAAAAUAAAAAAgIGAAYBAQAEDAALAAABBAAAAAAABAQAAAEEBAAADAAAAAAAAgAAAAAAAAAAAQAEDAAAAAAAAAEAAQEEAAAAAAICBgAGAAAAAAAEAAEAAAUAAAAADAUAAAYAAAAAAgYAAgIAAAABAAEAAQIABAAAAAEAAAQAAAEAAgUAAAAMBQAABgAAAAACBgACAgACAgABAAABAAEAAAABAAEAAAICAAQBAAABAQAEBgABDQIAAAYAAQQAAQALAgIFBQAAAAMBAAADAAABAQAAAAAGAAAGAAEAAgACAAAAAAABAQEBDQEAAQACAAIFAgUCAgABAAABAAAAAgIFAAQBAAAABAAABgABDQIAAAYAAAAABAABAAsCAgUFAAYAAAAAAAAAAAAAAQEAAAAADAACBgACAgIABQIAAAYCAQEFBgYCBAAAAwMDAAAAAAMGAAADAAACAwQLAAADAAADAQAAAwAAAAMEAAADAAAAAAMBAwABAAACBQMAAA0AAAMAAAMGAgEBAQYGAgIEAAADAwMAAAAAAwYAAAAAAAMLAAAAAwEAAAAAAwQAAAAAAwEDAAACAw0AAAADAAMDAwAAAAAAAwAABAAAAAACAAEAAQAAAAAAAAAABgQAAQQADQACAgABAAQGAAACAgAAAQAAAQICAAAAAQAAAQAAAAAAAwAAAwMDBAAAAAADFQAAAwAAAwEAAAADCQAAAwADAAMDAwwAAAMAAAMLAAAAAwIAAAMAAwEAAAADDAAAAAMGAAAAAwoAAAMAAwsAAAADBAAAAAADAAEBBAABAQAAAAMEAAAAAAMAAQABBAABCAUACy4CAAICAAQABgABDQIAAAYABAABAAsCAgUFAAAAAAAAAAEBAAAAAAIAAgAFARYWAQATExMXEwQAAAgDAwUF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pwEgqwEQUCADICU2ArwCQRIhrAEgAyCsATYCuAIgAykDuAIh0wIgAyDTAjcDgAYgAygCgAYhrQEgAygChAYhrgEgAyCmATYCnAZByAohrwEgAyCvATYCmAYgAyCuATYClAYgAyCtATYCkAYgAygCnAYhsAEgAygCmAYhsQEgAygCkAYhsgEgAygClAYhswEgAyCzATYCjAYgAyCyATYCiAYgAykDiAYh1AIgAyDUAjcDcEHwACG0ASADILQBaiG1ASCxASC1ARBTIAMgJTYCtAJBEyG2ASADILYBNgKwAiADKQOwAiHVAiADINUCNwPABiADKALABiG3ASADKALEBiG4ASADILABNgLcBkHSCiG5ASADILkBNgLYBiADILgBNgLUBiADILcBNgLQBiADKALcBiG6ASADKALYBiG7ASADKALQBiG8ASADKALUBiG9ASADIL0BNgLMBiADILwBNgLIBiADKQPIBiHWAiADINYCNwNoQegAIb4BIAMgvgFqIb8BILsBIL8BEFUgAyAlNgKkAkEUIcABIAMgwAE2AqACIAMpA6ACIdcCIAMg1wI3A+AGIAMoAuAGIcEBIAMoAuQGIcIBIAMgugE2AvwGQfwKIcMBIAMgwwE2AvgGIAMgwgE2AvQGIAMgwQE2AvAGIAMoAvwGIcQBIAMoAvgGIcUBIAMoAvAGIcYBIAMoAvQGIccBIAMgxwE2AuwGIAMgxgE2AugGIAMpA+gGIdgCIAMg2AI3A2BB4AAhyAEgAyDIAWohyQEgxQEgyQEQVyADICU2ApwCQRUhygEgAyDKATYCmAIgAykDmAIh2QIgAyDZAjcDgAcgAygCgAchywEgAygChAchzAEgAyDEATYCnAdBygkhzQEgAyDNATYCmAcgAyDMATYClAcgAyDLATYCkAcgAygCnAchzgEgAygCmAchzwEgAygCkAch0AEgAygClAch0QEgAyDRATYCjAcgAyDQATYCiAcgAykDiAch2gIgAyDaAjcDWEHYACHSASADINIBaiHTASDPASDTARBZIAMgJTYClAJBFiHUASADINQBNgKQAiADKQOQAiHbAiADINsCNwPgByADKALgByHVASADKALkByHWASADIM4BNgL8B0HPDiHXASADINcBNgL4ByADINYBNgL0ByADINUBNgLwByADKAL8ByHYASADKAL4ByHZASADKALwByHaASADKAL0ByHbASADINsBNgLsByADINoBNgLoByADKQPoByHcAiADINwCNwNQQdAAIdwBIAMg3AFqId0BINkBIN0BEFsgAyAlNgKMAkEXId4BIAMg3gE2AogCIAMpA4gCId0CIAMg3QI3A6AGIAMoAqAGId8BIAMoAqQGIeABIAMg2AE2ArwGQbUOIeEBIAMg4QE2ArgGIAMg4AE2ArQGIAMg3wE2ArAGIAMoArwGIeIBIAMoArgGIeMBIAMoArAGIeQBIAMoArQGIeUBIAMg5QE2AqwGIAMg5AE2AqgGIAMpA6gGId4CIAMg3gI3A0hByAAh5gEgAyDmAWoh5wEg4wEg5wEQVSADICU2AoQCQRgh6AEgAyDoATYCgAIgAykDgAIh3wIgAyDfAjcDwAcgAygCwAch6QEgAygCxAch6gEgAyDiATYC3AdBoBIh6wEgAyDrATYC2AcgAyDqATYC1AcgAyDpATYC0AcgAygC3Ach7AEgAygC2Ach7QEgAygC0Ach7gEgAygC1Ach7wEgAyDvATYCzAcgAyDuATYCyAcgAykDyAch4AIgAyDgAjcDQEHAACHwASADIPABaiHxASDtASDxARBbIAMgJTYC/AFBGSHyASADIPIBNgL4ASADKQP4ASHhAiADIOECNwOgCCADKAKgCCHzASADKAKkCCH0ASADIOwBNgK8CEHNESH1ASADIPUBNgK4CCADIPQBNgK0CCADIPMBNgKwCCADKAK8CCH2ASADKAK4CCH3ASADKAKwCCH4ASADKAK0CCH5ASADIPkBNgKsCCADIPgBNgKoCCADKQOoCCHiAiADIOICNwM4QTgh+gEgAyD6AWoh+wEg9wEg+wEQXyADICU2AvQBQRoh/AEgAyD8ATYC8AEgAykD8AEh4wIgAyDjAjcDgAggAygCgAgh/QEgAygChAgh/gEgAyD2ATYCnAhBjQkh/wEgAyD/ATYCmAggAyD+ATYClAggAyD9ATYCkAggAygCnAghgAIgAygCmAghgQIgAygCkAghggIgAygClAghgwIgAyCDAjYCjAggAyCCAjYCiAggAykDiAgh5AIgAyDkAjcDMEEwIYQCIAMghAJqIYUCIIECIIUCEF8gAyAlNgLsAUEbIYYCIAMghgI2AugBIAMpA+gBIeUCIAMg5QI3A8AIIAMoAsAIIYcCIAMoAsQIIYgCIAMggAI2AtwIQe0RIYkCIAMgiQI2AtgIIAMgiAI2AtQIIAMghwI2AtAIIAMoAtwIIYoCIAMoAtgIIYsCIAMoAtAIIYwCIAMoAtQIIY0CIAMgjQI2AswIIAMgjAI2AsgIIAMpA8gIIeYCIAMg5gI3AyhBKCGOAiADII4CaiGPAiCLAiCPAhBiIAMgJTYC5AFBHCGQAiADIJACNgLgASADKQPgASHnAiADIOcCNwOgByADKAKgByGRAiADKAKkByGSAiADIIoCNgK8B0H9CCGTAiADIJMCNgK4ByADIJICNgK0ByADIJECNgKwByADKAK8ByGUAiADKAK4ByGVAiADKAKwByGWAiADKAK0ByGXAiADIJcCNgKsByADIJYCNgKoByADKQOoByHoAiADIOgCNwMgQSAhmAIgAyCYAmohmQIglQIgmQIQWyADICU2AtwBQR0hmgIgAyCaAjYC2AEgAykD2AEh6QIgAyDpAjcD4AggAygC4AghmwIgAygC5AghnAIgAyCUAjYC/AhBgRIhnQIgAyCdAjYC+AggAyCcAjYC9AggAyCbAjYC8AggAygC/AghngIgAygC+AghnwIgAygC8AghoAIgAygC9AghoQIgAyChAjYC7AggAyCgAjYC6AggAykD6Agh6gIgAyDqAjcDGEEYIaICIAMgogJqIaMCIJ8CIKMCEGUgAyAlNgLUAUEeIaQCIAMgpAI2AtABIAMpA9ABIesCIAMg6wI3A6AJIAMoAqAJIaUCIAMoAqQJIaYCIAMgngI2ArwJQfAJIacCIAMgpwI2ArgJIAMgpgI2ArQJIAMgpQI2ArAJIAMoArwJIagCIAMoArgJIakCIAMoArAJIaoCIAMoArQJIasCIAMgqwI2AqwJIAMgqgI2AqgJIAMpA6gJIewCIAMg7AI3AxBBECGsAiADIKwCaiGtAiCpAiCtAhBnIAMgJTYCzAFBHyGuAiADIK4CNgLIASADKQPIASHtAiADIO0CNwPACSADKALACSGvAiADKALECSGwAiADIKgCNgLcCUHCEyGxAiADILECNgLYCSADILACNgLUCSADIK8CNgLQCSADKALcCSGyAiADKALYCSGzAiADKALQCSG0AiADKALUCSG1AiADILUCNgLMCSADILQCNgLICSADKQPICSHuAiADIO4CNwMIQQghtgIg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QoCAgICAgMD//wCEIQVCACEGDAELAkAgBA0AQgAhBkIAIQUMAQsgAiAErUIAIARnIgRB0QBqEJ4LIAJBCGopAwBCgICAgICAwACFQYn/ACAEa61CMIaEIQUgAikDACEGCyAAIAY3AwAgACAFIANBgICAgHhxrUIghoQ3AwggAkEQaiQACwYAQbCrAQuNAQICfwJ+IwBBEGsiAiQAAkACQCABDQBCACEEQgAhBQwBCyACIAEgAUEfdSIDaiADcyIDrUIAIANnIgNB0QBqEJ4LIAJBCGopAwBCgICAgICAwACFQZ6AASADa61CMIZ8IAFBgICAgHhxrUIghoQhBSACKQMAIQQLIAAgBDcDACAAIAU3AwggAkEQaiQAC1MBAX4CQAJAIANBwABxRQ0AIAIgA0FAaq2IIQFCACECDAELIANFDQAgAkHAACADa62GIAEgA60iBIiEIQEgAiAEiCECCyAAIAE3AwAgACACNwMIC+sLAgV/D34jAEHgAGsiBSQAIAFCIIggAkIghoQhCiADQhGIIARCL4aEIQsgA0IxiCAEQv///////z+DIgxCD4aEIQ0gBCAChUKAgICAgICAgIB/gyEOIAJC////////P4MiD0IgiCEQIAxCEYghESAEQjCIp0H//wFxIQYCQAJAAkAgAkIwiKdB//8BcSIHQX9qQf3/AUsNAEEAIQggBkF/akH+/wFJDQELAkAgAVAgAkL///////////8AgyISQoCAgICAgMD//wBUIBJCgICAgICAwP//AFEbDQAgAkKAgICAgIAghCEODAILAkAgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbDQAgBEKAgICAgIAghCEOIAMhAQwCCwJAIAEgEkKAgICAgIDA//8AhYRCAFINAAJAIAMgAoRQRQ0AQoCAgICAgOD//wAhDkIAIQEMAwsgDkKAgICAgIDA//8AhCEOQgAhAQwCCwJAIAMgAkKAgICAgIDA//8AhYRCAFINACABIBKEIQJCACEBAkAgAlBFDQBCgICAgICA4P//ACEODAMLIA5CgICAgICAwP//AIQhDgwCCwJAIAEgEoRCAFINAEIAIQEMAgsCQCADIAKEQgBSDQBCACEBDAILQQAhCAJAIBJC////////P1YNACAFQdAAaiABIA8gASAPIA9QIggbeSAIQQZ0rXynIghBcWoQngtBECAIayEIIAUpA1AiAUIgiCAFQdgAaikDACIPQiCGhCEKIA9CIIghEAsgAkL///////8/Vg0AIAVBwABqIAMgDCADIAwgDFAiCRt5IAlBBnStfKciCUFxahCeCyAIIAlrQRBqIQggBSkDQCIDQjGIIAVByABqKQMAIgJCD4aEIQ0gA0IRiCACQi+GhCELIAJCEYghEQsgC0L/////D4MiAiABQv////8PgyIEfiITIANCD4ZCgID+/w+DIgEgCkL/////D4MiA358IgpCIIYiDCABIAR+fCILIAxUrSACIAN+IhQgASAPQv////8PgyIMfnwiEiANQv////8PgyIPIAR+fCINIApCIIggCiATVK1CIIaEfCITIAIgDH4iFSABIBBCgIAEhCIKfnwiECAPIAN+fCIWIBFC/////weDQoCAgIAIhCIBIAR+fCIRQiCGfCIXfCEEIAcgBmogCGpBgYB/aiEGAkACQCAPIAx+IhggAiAKfnwiAiAYVK0gAiABIAN+fCIDIAJUrXwgAyASIBRUrSANIBJUrXx8IgIgA1StfCABIAp+fCABIAx+IgMgDyAKfnwiASADVK1CIIYgAUIgiIR8IAIgAUIghnwiASACVK18IAEgEUIgiCAQIBVUrSAWIBBUrXwgESAWVK18QiCGhHwiAyABVK18IAMgEyANVK0gFyATVK18fCICIANUrXwiAUKAgICAgIDAAINQDQAgBkEBaiEGDAELIAtCP4ghAyABQgGGIAJCP4iEIQEgAkIBhiAEQj+IhCECIAtCAYYhCyADIARCAYaEIQQLAkAgBkH//wFIDQAgDkKAgICAgIDA//8AhCEOQgAhAQwBCwJAAkAgBkEASg0AAkBBASAGayIHQYABSQ0AQgAhAQwDCyAFQTBqIAsgBCAGQf8AaiIGEJ4LIAVBIGogAiABIAYQngsgBUEQaiALIAQgBxCiCyAFIAIgASAHEKILIAUpAyAgBSkDEIQgBSkDMCAFQTBqQQhqKQMAhEIAUq2EIQsgBUEgakEIaikDACAFQRBqQQhqKQMAhCEEIAVBCGopAwAhASAFKQMAIQIMAQsgBq1CMIYgAUL///////8/g4QhAQsgASAOhCEOAkAgC1AgBEJ/VSAEQoCAgICAgICAgH9RGw0AIA4gAkIBfCIBIAJUrXwhDgwBCwJAIAsgBEKAgICAgICAgIB/hYRCAFENACACIQEMAQsgDiACIAJCAYN8IgEgAlStfCEOCyAAIAE3AwAgACAONwMIIAVB4ABqJAALBABBAAsEAEEAC/gKAgR/BH4jAEHwAGsiBSQAIARC////////////AIMhCQJAAkACQCABQn98IgpCf1EgAkL///////////8AgyILIAogAVStfEJ/fCIKQv///////7///wBWIApC////////v///AFEbDQAgA0J/fCIKQn9SIAkgCiADVK18Qn98IgpC////////v///AFQgCkL///////+///8AURsNAQsCQCABUCALQoCAgICAgMD//wBUIAtCgICAgICAwP//AFEbDQAgAkKAgICAgIAghCEEIAEhAwwCCwJAIANQIAlCgICAgICAwP//AFQgCUKAgICAgIDA//8AURsNACAEQoCAgICAgCCEIQQMAgsCQCABIAtCgICAgICAwP//AIWEQgBSDQBCgICAgICA4P//ACACIAMgAYUgBCAChUKAgICAgICAgIB/hYRQIgYbIQRCACABIAYbIQMMAgsgAyAJQoCAgICAgMD//wCFhFANAQJAIAEgC4RCAFINACADIAmEQgBSDQIgAyABgyEDIAQgAoMhBAwCCyADIAmEUEUNACABIQMgAiEEDAELIAMgASADIAFWIAkgC1YgCSALURsiBxshCSAEIAIgBxsiC0L///////8/gyEKIAIgBCAHGyICQjCIp0H//wFxIQgCQCALQjCIp0H//wFxIgYNACAFQeAAaiAJIAogCSAKIApQIgYbeSAGQQZ0rXynIgZBcWoQngtBECAGayEGIAVB6ABqKQMAIQogBSkDYCEJCyABIAMgBxshAyACQv///////z+DIQQCQCAIDQAgBUHQAGogAyAEIAMgBCAEUCIHG3kgB0EGdK18pyIHQXFqEJ4LQRAgB2shCCAFQdgAaikDACEEIAUpA1AhAwsgBEIDhiADQj2IhEKAgICAgICABIQhBCAKQgOGIAlCPYiEIQEgA0IDhiEDIAsgAoUhCgJAIAYgCGsiB0UNAAJAIAdB/wBNDQBCACEEQgEhAwwBCyAFQcAAaiADIARBgAEgB2sQngsgBUEwaiADIAQgBxCiCyAFKQMwIAUpA0AgBUHAAGpBCGopAwCEQgBSrYQhAyAFQTBqQQhqKQMAIQQLIAFCgICAgICAgASEIQwgCUIDhiECAkACQCAKQn9VDQACQCACIAN9IgEgDCAEfSACIANUrX0iBIRQRQ0AQgAhA0IAIQQMAwsgBEL/////////A1YNASAFQSBqIAEgBCABIAQgBFAiBxt5IAdBBnStfKdBdGoiBxCeCyAGIAdrIQYgBUEoaikDACEEIAUpAyAhAQwBCyAEIAx8IAMgAnwiASADVK18IgRCgICAgICAgAiDUA0AIAFCAYggBEI/hoQgAUIBg4QhASAGQQFqIQYgBEIBiCEECyALQoCAgICAgICAgH+DIQICQCAGQf//AUgNACACQoCAgICAgMD//wCEIQRCACEDDAELQQAhBwJAAkAgBkEATA0AIAYhBwwBCyAFQRBqIAEgBCAGQf8AahCeCyAFIAEgBEEBIAZrEKILIAUpAwAgBSkDECAFQRBqQQhqKQMAhEIAUq2EIQEgBUEIaikDACEECyABQgOIIARCPYaEIQMgB61CMIYgBEIDiEL///////8/g4QgAoQhBCABp0EHcSEGAkACQAJAAkACQBCkCw4DAAECAwsgBCADIAZBBEutfCIBIANUrXwhBAJAIAZBBEYNACABIQMMAwsgBCABQgGDIgIgAXwiAyACVK18IQQMAwsgBCADIAJCAFIgBkEAR3GtfCIBIANUrXwhBCABIQMMAQsgBCADIAJQIAZBAEdxrXwiASADVK18IQQgASEDCyAGRQ0BCxClCxoLIAAgAzcDACAAIAQ3AwggBUHwAGokAAuOAgICfwN+IwBBEGsiAiQAAkACQCABvSIEQv///////////wCDIgVCgICAgICAgHh8Qv/////////v/wBWDQAgBUI8hiEGIAVCBIhCgICAgICAgIA8fCEFDAELAkAgBUKAgICAgICA+P8AVA0AIARCPIYhBiAEQgSIQoCAgICAgMD//wCEIQUMAQsCQCAFUEUNAEIAIQZCACEFDAELIAIgBUIAIASnZ0EgaiAFQiCIp2cgBUKAgICAEFQbIgNBMWoQngsgAkEIaikDAEKAgICAgIDAAIVBjPgAIANrrUIwhoQhBSACKQMAIQYLIAAgBjcDACAAIAUgBEKAgICAgICAgIB/g4Q3AwggAkEQaiQAC+ABAgF/An5BASEEAkAgAEIAUiABQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AURsNACACQgBSIANC////////////AIMiBkKAgICAgIDA//8AViAGQoCAgICAgMD//wBRGw0AAkAgAiAAhCAGIAWEhFBFDQBBAA8LAkAgAyABg0IAUw0AQX8hBCAAIAJUIAEgA1MgASADURsNASAAIAKFIAEgA4WEQgBSDwtBfyEEIAAgAlYgASADVSABIANRGw0AIAAgAoUgASADhYRCAFIhBAsgBAvYAQIBfwJ+QX8hBAJAIABCAFIgAUL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgAkIAUiADQv///////////wCDIgZCgICAgICAwP//AFYgBkKAgICAgIDA//8AURsNAAJAIAIgAIQgBiAFhIRQRQ0AQQAPCwJAIAMgAYNCAFMNACAAIAJUIAEgA1MgASADURsNASAAIAKFIAEgA4WEQgBSDwsgACACViABIANVIAEgA1EbDQAgACAChSABIAOFhEIAUiEECyAECzUAIAAgATcDACAAIARCMIinQYCAAnEgAkIwiKdB//8BcXKtQjCGIAJC////////P4OENwMIC3ICAX8CfiMAQRBrIgIkAAJAAkAgAQ0AQgAhA0IAIQQMAQsgAiABrUIAIAFnIgFB0QBqEJ4LIAJBCGopAwBCgICAgICAwACFQZ6AASABa61CMIZ8IQQgAikDACEDCyAAIAM3AwAgACAENwMIIAJBEGokAAtIAQF/IwBBEGsiBSQAIAUgASACIAMgBEKAgICAgICAgIB/hRCmCyAFKQMAIQEgACAFQQhqKQMANwMIIAAgATcDACAFQRBqJAAL5wIBAX8jAEHQAGsiBCQAAkACQCADQYCAAUgNACAEQSBqIAEgAkIAQoCAgICAgID//wAQowsgBEEgakEIaikDACECIAQpAyAhAQJAIANB//8BTg0AIANBgYB/aiEDDAILIARBEGogASACQgBCgICAgICAgP//ABCjCyADQf3/AiADQf3/AkgbQYKAfmohAyAEQRBqQQhqKQMAIQIgBCkDECEBDAELIANBgYB/Sg0AIARBwABqIAEgAkIAQoCAgICAgMAAEKMLIARBwABqQQhqKQMAIQIgBCkDQCEBAkAgA0GDgH5MDQAgA0H+/wBqIQMMAQsgBEEwaiABIAJCAEKAgICAgIDAABCjCyADQYaAfSADQYaAfUobQfz/AWohAyAEQTBqQQhqKQMAIQIgBCkDMCEBCyAEIAEgAkIAIANB//8Aaq1CMIYQowsgACAEQQhqKQMANwMIIAAgBCkDADcDACAEQdAAaiQAC3UBAX4gACAEIAF+IAIgA358IANCIIgiBCABQiCIIgJ+fCADQv////8PgyIDIAFC/////w+DIgF+IgVCIIggAyACfnwiA0IgiHwgA0L/////D4MgBCABfnwiA0IgiHw3AwggACADQiCGIAVC/////w+DhDcDAAvvEAIFfw5+IwBB0AJrIgUkACAEQv///////z+DIQogAkL///////8/gyELIAQgAoVCgICAgICAgICAf4MhDCAEQjCIp0H//wFxIQYCQAJAAkAgAkIwiKdB//8BcSIHQX9qQf3/AUsNAEEAIQggBkF/akH+/wFJDQELAkAgAVAgAkL///////////8AgyINQoCAgICAgMD//wBUIA1CgICAgICAwP//AFEbDQAgAkKAgICAgIAghCEMDAILAkAgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbDQAgBEKAgICAgIAghCEMIAMhAQwCCwJAIAEgDUKAgICAgIDA//8AhYRCAFINAAJAIAMgAkKAgICAgIDA//8AhYRQRQ0AQgAhAUKAgICAgIDg//8AIQwMAwsgDEKAgICAgIDA//8AhCEMQgAhAQwCCwJAIAMgAkKAgICAgIDA//8AhYRCAFINAEIAIQEMAgsCQCABIA2EQgBSDQBCgICAgICA4P//ACAMIAMgAoRQGyEMQgAhAQwCCwJAIAMgAoRCAFINACAMQoCAgICAgMD//wCEIQxCACEBDAILQQAhCAJAIA1C////////P1YNACAFQcACaiABIAsgASALIAtQIggbeSAIQQZ0rXynIghBcWoQngtBECAIayEIIAVByAJqKQMAIQsgBSkDwAIhAQsgAkL///////8/Vg0AIAVBsAJqIAMgCiADIAogClAiCRt5IAlBBnStfKciCUFxahCeCyAJIAhqQXBqIQggBUG4AmopAwAhCiAFKQOwAiEDCyAFQaACaiADQjGIIApCgICAgICAwACEIg5CD4aEIgJCAEKAgICAsOa8gvUAIAJ9IgRCABCuCyAFQZACakIAIAVBoAJqQQhqKQMAfUIAIARCABCuCyAFQYACaiAFKQOQAkI/iCAFQZACakEIaikDAEIBhoQiBEIAIAJCABCuCyAFQfABaiAEQgBCACAFQYACakEIaikDAH1CABCuCyAFQeABaiAFKQPwAUI/iCAFQfABakEIaikDAEIBhoQiBEIAIAJCABCuCyAFQdABaiAEQgBCACAFQeABakEIaikDAH1CABCuCyAFQcABaiAFKQPQAUI/iCAFQdABakEIaikDAEIBhoQiBEIAIAJCABCuCyAFQbABaiAEQgBCACAFQcABakEIaikDAH1CABCuCyAFQaABaiACQgAgBSkDsAFCP4ggBUGwAWpBCGopAwBCAYaEQn98IgRCABCuCyAFQZABaiADQg+GQgAgBEIAEK4LIAVB8ABqIARCAEIAIAVBoAFqQQhqKQMAIAUpA6ABIgogBUGQAWpBCGopAwB8IgIgClStfCACQgFWrXx9QgAQrgsgBUGAAWpCASACfUIAIARCABCuCyAIIAcgBmtqIQYCQAJAIAUpA3AiD0IBhiIQIAUpA4ABQj+IIAVBgAFqQQhqKQMAIhFCAYaEfCINQpmTf3wiEkIgiCICIAtCgICAgICAwACEIhNCH4hC/////w+DIgR+IhQgAUIfiEL/////D4MiCiAFQfAAakEIaikDAEIBhiAPQj+IhCARQj+IfCANIBBUrXwgEiANVK18Qn98Ig9CIIgiDX58IhAgFFStIBAgD0L/////D4MiDyABQj+IIhUgC0IBhoRC/////w+DIgt+fCIRIBBUrXwgBCANfnwgDyAEfiIUIAsgDX58IhAgFFStQiCGIBBCIIiEfCARIBBCIIZ8IhAgEVStfCAQIA8gAUIBhiIWQv7///8PgyIRfiIXIBJC/////w+DIhIgC358IhQgF1StIBQgAiAKfnwiFyAUVK18fCIUIBBUrXwgFCASIAR+IhAgESANfnwiBCAPIAp+fCINIAIgC358Ig9CIIggBCAQVK0gDSAEVK18IA8gDVStfEIghoR8IgQgFFStfCAEIBcgAiARfiICIBIgCn58IgpCIIggCiACVK1CIIaEfCICIBdUrSACIA9CIIZ8IAJUrXx8IgIgBFStfCIEQv////////8AVg0AIBNCAYYgFYQhEyAFQdAAaiACIAQgAyAOEK4L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BEEQaiQAIAMLxAMCA38BfiMAQSBrIgIkAAJAAkAgAUL///////////8AgyIFQoCAgICAgMC/QHwgBUKAgICAgIDAwL9/fFoNACABQhmIpyEDAkAgAFAgAUL///8PgyIFQoCAgAhUIAVCgICACFEbDQAgA0GBgICABGohBAwCCyADQYCAgIAEaiEEIAAgBUKAgIAIhYRCAFINASAEIANBAXFqIQQMAQsCQCAAUCAFQoCAgICAgMD//wBUIAVCgICAgICAwP//AFEbDQAgAUIZiKdB////AXFBgICA/gdyIQQMAQtBgICA/AchBCAFQv///////7+/wABWDQBBACEEIAVCMIinIgNBkf4ASQ0AIAJBEGogACABQv///////z+DQoCAgICAgMAAhCIFIANB/4F/ahCeCyACIAAgBUGB/wAgA2sQogsgAkEIaikDACIFQhmIpyEEAkAgAikDACACKQMQIAJBEGpBCGopAwCEQgBSrYQiAFAgBUL///8PgyIFQoCAgAhUIAVCgICACFEbDQAgBEEBaiEEDAELIAAgBUKAgIAIhYRCAFINACAEQQFxIARqIQQLIAJBIGokACAEIAFCIIinQYCAgIB4cXK+C+oDAgJ/An4jAEEgayICJAACQAJAIAFC////////////AIMiBEKAgICAgIDA/0N8IARCgICAgICAwIC8f3xaDQAgAEI8iCABQgSGhCEEAkAgAEL//////////w+DIgBCgYCAgICAgIAIVA0AIARCgYCAgICAgIDAAHwhBQwCCyAEQoCAgICAgICAwAB8IQUgAEKAgICAgICAgAiFQgBSDQEgBSAEQgGDfCEFDAELAkAgAFAgBEKAgICAgIDA//8AVCAEQoCAgICAgMD//wBRGw0AIABCPIggAUIEhoRC/////////wODQoCAgICAgID8/wCEIQUMAQtCgICAgICAgPj/ACEFIARC////////v//DAFYNAEIAIQUgBEIwiKciA0GR9wBJDQAgAkEQaiAAIAFC////////P4NCgICAgICAwACEIgQgA0H/iH9qEJ4LIAIgACAEQYH4ACADaxCiCyACKQMAIgRCPIggAkEIaikDAEIEhoQhBQJAIARC//////////8PgyACKQMQIAJBEGpBCGopAwCEQgBSrYQiBEKBgICAgICAgAhUDQAgBUIBfCEFDAEL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DQAgACADQRBqIAEgAiAAEK8IEMETIgEQowIgARChAhDSFBogARDLFBoMAQsCQCAFIARrIAZPDQAgACAFIAYgBGogBWsgBCAEQQBBABDMFAsgABCxCCAEaiEFAkADQCABIAJGDQEgBSABELIIIAFBAWohASAFQQFqIQUMAAsACyADQQA6AA8gBSADQQ9qELIIIAAgBiAEahCzCAsgA0EgaiQAIAALHQAgACABEMQTEMUTGiAAQQRqIAIQmRMQmhMaIAALBwAgABDJEwsLACAAQbCtARChDAsRACAAIAEgASgCACgCLBECAAsRACAAIAEgASgCACgCIBECAAsLACAAIAEQyQ8gAAsRACAAIAEgASgCACgCHBECAAsPACAAIAAoAgAoAgwRAAALDwAgACAAKAIAKAIQEQAACxEAIAAgASABKAIAKAIUEQIACxEAIAAgASABKAIAKAIYEQIACw8AIAAgACgCACgCJBEAAAsLACAAQaitARChDAsRACAAIAEgASgCACgCLBECAAsRACAAIAEgASgCACgCIBECAAsRACAAIAEgASgCACgCHBECAAsPACAAIAAoAgAoAgwRAAALDwAgACAAKAIAKAIQEQAACxEAIAAgASABKAIAKAIUEQIACxEAIAAgASABKAIAKAIYEQIACw8AIAAgACgCACgCJBEAAAsSACAAIAI2AgQgACABOgAAIAALBwAgACgCAAsNACAAEIcPIAEQhQ9GCwcAIAAoAgALcwEBfyMAQSBrIgMkACADIAE2AhAgAyAANgIYIAMgAjYCCAJAA0AgA0EYaiADQRBqEJQNIgJFDQEgAyADQRhqEJUNIANBCGoQlQ0QyhNFDQEgA0EYahCYDRogA0EIahCYDRoMAAsACyADQSBqJAAgAkEBcwsyAQF/IwBBEGsiAiQAIAIgACgCADYCCCACQQhqIAEQmxIaIAIoAgghASACQRBqJAAgAQsHACAAELINCxoBAX8gABCxDSgCACEBIAAQsQ1BADYCACABCyUAIAAgARCLDxCsDSABEIoPEJkTKAIAIQEgABCyDSABNgIAIAALBwAgABDHEwsaAQF/IAAQxhMoAgAhASAAEMYTQQA2AgAgAQslACAAIAEQjg8QkQ8gARCNDxCZEygCACEBIAAQxxMgATYCACAACwkAIAAgARDYEQstAQF/IAAQxhMoAgAh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Cw8AIAAQ0w5BC2ogAToAAAvoAQEEfyMAQRBrIgMkACAAEOcMIQQgABD9ESEFAkAgASACEPwRIgZFDQACQCABEI8TIAAQyw0gABDLDSAAEOcMQQJ0ahDME0UNACAAIAMgASACIAAQoRIQzRMiARD7DSABEOcMEOQUGiABEN0UGgwBCwJAIAUgBGsgBk8NACAAIAUgBiAEaiAFayAEIARBAEEAEN4UCyAAEL4NIARBAnRqIQUCQANAIAEgAkYNASAFIAEQqA8gAUEEaiEBIAVBBGohBQwACwALIANBADYCACAFIAMQqA8gACAGIARqEP8RCyADQRBqJAAgAAsLACAAQcCtARChDAsRACAAIAEgASgCACgCLBECAAsRACAAIAEgASgCACgCIBECAAsLACAAIAEQyg8gAAsRACAAIAEgASgCACgCHBECAAsPACAAIAAoAgAoAgwRAAALDwAgACAAKAIAKAIQEQAACxEAIAAgASABKAIAKAIUEQIACxEAIAAgASABKAIAKAIYEQIACw8AIAAgACgCACgCJBEAAAsLACAAQbitARChDAsRACAAIAEgASgCACgCLBECAAsRACAAIAEgASgCACgCIBECAAsRACAAIAEgASgCACgCHBECAAsPACAAIAAoAgAoAgwRAAALDwAgACAAKAIAKAIQEQAACxEAIAAgASABKAIAKAIUEQIACxEAIAAgASABKAIAKAIYEQIACw8AIAAgACgCACgCJBEAAAsSACAAIAI2AgQgACABNgIAIAALBwAgACgCAAsNACAAEMMPIAEQwQ9GCwcAIAAoAgALcwEBfyMAQSBrIgMkACADIAE2AhAgAyAANgIYIAMgAjYCCAJAA0AgA0EYaiADQRBqELgNIgJFDQEgAyADQRhqELkNIANBCGoQuQ0Q0hNFDQEgA0EYahC8DRogA0EIahC8DRoMAAsACyADQSBqJAAgAkEBcwsyAQF/IwBBEGsiAiQAIAIgACgCADYCCCACQQhqIAEQnBIaIAIoAgghASACQRBqJAAgAQsHACAAENYNCxoBAX8gABDVDSgCACEBIAAQ1Q1BADYCACABCyUAIAAgARDHDxDRDSABEMYPEJkTKAIAIQEgABDWDSABNgIAIAALfQECfyMAQRBrIgIkAAJAIAAQqAJFDQAgABCvCCAAELkIIAAQtAgQnRILIAAgARCd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QdoANgIIIAEgASkDCDcDACAAIAFBEGogASAAEPQQEPUQIAAoAgQhACABQSBqJAAgAEF/agt4AQJ/IwBBEGsiAyQAIAEQ1xAgA0EIaiABENsQIQQCQCAAQQhqIgEQsxAgAksNACABIAJBAWoQ3hALAkAgASACENYQKAIARQ0AIAEgAhDWECgCABDfEBoLIAQQ4BAhACABIAIQ1hAgADYCACAEENwQGiADQRBqJAALFQAgACABEPMPGiAAQaTjADYCACAACxUAIAAgARDzDxogAEHE4wA2AgAgAAs4ACAAIAMQ8w8aIAAQjREaIAAgAjoADCAAIAE2AgggAEGM2QA2AgACQCABDQAgABD/EDYCCAsgAAsbACAAIAEQ8w8aIAAQjREaIABB8NwANgIAIAALGwAgACABEPMPGiAAEKARGiAAQYTeADYCACAACyMAIAAgARDzDxogABCgERogAEHA2QA2AgAgABDTDDYCCCAACxsAIAAgARDzDxogABCgERogAEGY3wA2AgAgAAsbACAAIAEQ8w8aIAAQoBEaIABBjOAANgIAIAALJwAgACABEPMPGiAAQa7YADsBCCAAQfDZADYCACAAQQxqENUEGiAACyoAIAAgARDzDxogAEKugICAwAU3AgggAEGY2gA2AgAgAEEQahDVBBogAAsVACAAIAEQ8w8aIABB5OMANgIAIAALFQAgACABEPMPGiAAQdjlADYCACAACxUAIAAgARDzDxogAEGs5wA2AgAgAAsVACAAIAEQ8w8aIABBlOkANgIAIAALGwAgACABEPMPGiAAEM8SGiAAQezwADYCACAACxsAIAAgARDzDxogABDPEhogAEGA8gA2AgAgAAsbACAAIAEQ8w8aIAAQzxIaIABB9PIANgIAIAALGwAgACABEPMPGiAAEM8SGiAAQejzADYCACAACxsAIAAgARDzDxogABDQEhogAEHc9AA2AgAgAAsbACAAIAEQ8w8aIAAQ0RIaIABBgPYANgIAIAALGwAgACABEPMPGiAAENISGiAAQaT3ADYCACAACxsAIAAgARDzDxogABDTEhogAEHI+AA2AgAgAAsoACAAIAEQ8w8aIABBCGoQ1BIhASAAQdzqADYCACABQYzrADYCACAACygAIAAgARDzDxogAEEIahDVEiEBIABB5OwANgIAIAFBlO0ANgIAIAAL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EOoUCw0AIAAQjQwaIAAQ6hQLDQAgABCNDBogABDqFAsNACAAEI0MGiAAEOoUCw0AIAAQjQwaIAAQ6hQLDQAgABCNDBogABDqFAsNACAAEI0MGiAAEOoUCw0AIAAQjQwaIAAQ6hQLDQAgABCNDBogABDqFAsRACAAIAAoAgAgAWo2AgAgAAsUACAAIAAoAgAgAUECdGo2AgAgAAsLACAAIAEgAhCeEgsLACABIAJBARDpAgsLACAAIAEgAhCgEgsOACABIAJBAnRBBBDpAgsHACAAEKISCwcAIAAQpRILEQAgABDSDigCCEH/////B3ELBAAgAAsEACAACwQAIAALHgAgACABEKcFELESGiACENgBGiAAQQhqELISGiAACz0BAX8jAEEQayIBJAAgASAAELQSELUSNgIMIAEQmgY2AgggAUEMaiABQQhqEKUCKAIAIQAgAUEQaiQAIAALCgAgAEEIahC3EgsLACAAIAFBABC2EgsKACAAQQhqELgSCzMAIAAgABC5EiAAELkSIAAQuhJBAnRqIAAQuRIgABC6EkECdGogABC5EiABQQJ0ahC7EgskACAAIAE2AgAgACABKAIEIgE2AgQgACABIAJBAnRqNgIIIAALEQAgACgCACAAKAIENgIEIAALBAAgAAsJACABQQA2AgALEQAgARCnBRogAEEANgIAIAALCgAgABCzEhogAAsLACAAQQA6AHggAAsKACAAQQhqEL0SCwcAIAAQvBILQgEBfyMAQRBrIgMkAAJAAkAgAC0AeA0AIAFBHksNACAAQQE6AHgMAQsgA0EIahC/EiABEMASIQALIANBEGokACAACwoAIABBCGoQwxILBwAgABDEEgsKACAAKAIAEK8SCwcAIAAQxRILAgALCABB/////wMLCgAgAEEIahC+EgsEACAACwQAIAALIAACQCAAEMESIAFPDQBB7hAQyAIACyABQQJ0QQQQyQILBwAgABDCEgsIAEH/////AwsEACAACwQAIAALEwAgABDGEigCACAAKAIAa0ECdQsKACAAQQhqEMcSCwcAIAAQyBILBAAgAAsEACAACwsAIAAgASACEMwSCzQBAX8gACgCBCECAkADQCACIAFGDQEgABCpEiACQXxqIgIQrxIQzRIMAAsACyAAIAE2AgQLOQEBfyMAQRBrIgMkAAJAAkAgACABRw0AIABBADoAeAwBCyADQQhqEL8SIAEgAhDOEgsgA0EQaiQACwIACw4AIAEgAkECdEEEEOkCCwQAIAALBAAgAAsEACAACwQAIAALBAAgAAsNACAAQbCCATYCACAACw0AIABB1IIBNgIAIAALDAAgABDTDDYCACAACwQAIAALYQECfyMAQRBrIgIkACACIAE2AgwCQCAAEKgSIgMgAUkNAAJAIAAQuhIiACADQQF2Tw0AIAIgAEEBdDYCCCACQQhqIAJBDGoQjQYoAgAhAwsgAkEQaiQAIAMPCyAAEPYUAAsCAAsEACAACxEAIAAgARDaEigCADYCACAACwgAIAAQ3xAaCwQAIAALcgECfyMAQRBrIgQkAEEAIQUgBEEANgIMIABBDGogBEEMaiADEOISGgJAIAFFDQAgABDjEiABEKoSIQULIAAgBTYCACAAIAUgAkECdGoiAjYCCCAAIAI2AgQgABDkEiAFIAFBAnRqNgIAIARBEGokACAAC18BAn8jAEEQayICJAAgAiAAQQhqIAEQ5RIiASgCACEDAkADQCADIAEoAgRGDQEgABDjEiABKAIAEK8SELASIAEgASgCAEEEaiIDNgIADAALAAsgARDmEhogAkEQaiQAC1wBAX8gABDlECAAEKkSIAAoAgAgACgCBCABQQRqIgIQ5xIgACACEOgSIABBBGogAUEIahDoEiAAEKsSIAEQ5BIQ6BIgASABKAIENgIAIAAgABCzEBCsEiAAELYQCyYAIAAQ6RICQCAAKAIARQ0AIAAQ4xIgACgCACAAEOoSEMoSCyAACx0AIAAgARCnBRCxEhogAEEEaiACEOsSEOwSGiAACwoAIABBDGoQ7RILCgAgAEEMahDuEgsrAQF/IAAgASgCADYCACABKAIAIQMgACABNgIIIAAgAyACQQJ0ajYCBCAACxEAIAAoAgggACgCADYCACAACywBAX8gAyADKAIAIAIgAWsiAmsiBDYCAAJAIAJBAUgNACAEIAEgAhDAFhoLCz4BAX8jAEEQayICJAAgAiAAEPASKAIANgIMIAAgARDwEigCADYCACABIAJBDGoQ8BIoAgA2AgAgAkEQaiQACwwAIAAgACgCBBDxEgsTACAAEPISKAIAIAAoAgBrQQJ1CwQAIAALDgAgACABEOsSNgIAIAALCgAgAEEEahDvEgsHACAAEMQSCwcAIAAoAgALBAAgAAsJACAAIAEQ8xILCgAgAEEMahD0Egs3AQJ/AkADQCAAKAIIIAFGDQEgABDjEiECIAAgACgCCEF8aiIDNgIIIAIgAxCvEhDNEgwACwALCwcAIAAQyBILDAAgACABEPcSGiAACwcAIAAQ+BILCwAgACABNgIAIAALDQAgACgCABD5EhD6EgsHACAAEPwSCwcAIAAQ+xILPwECfyAAKAIAIABBCGooAgAiAUEBdWohAiAAKAIEIQACQCABQQFxRQ0AIAIoAgAgAGooAgAhAAsgAiAAEQUACwcAIAAoAgALCAAgAEH/AXELBAAgAAsKACAAEIYTGiAACwkAIAAgARCHEwsNACAAEM8OEIgTQXBqCy0BAX9BASEBAkAgAEECSQ0AIABBAWoQihMiACAAQX9qIgAgAEECRhshAQsgAQsJACAAIAEQixMLDAAgABDTDiABNgIACxMAIAAQ0w4gAUGAgICAeHI2AggLBAAgAAsKACABIABrQQJ1CwcAIAAQjBMLBwAgABCPEwsKACAAQQNqQXxxCyAAAkAgABCIEyABTw0AQe4QEMgCAAsgAUECdEEEEMkCCwgAQf////8DCwcAIAAQjhMLBAAgAAsEACAACwQAIAALCQAgACABEJITCz4BAX8jAEEQayICJAAgAiAAEJMTKAIANgIMIAAgARCTEygCADYCACABIAJBDGoQkxMoAgA2AgAgAkEQaiQACwQAIAALHQAgACABEJcTEJgTGiAAQQRqIAIQmRMQmhMaIAALBwAgABCbEwsKACAAQQRqEJwTCwQAIAALEQAgACABEJcTKAIANgIAIAALBAAgAAsRACAAIAEQmRMoAgA2AgAgAAsEACAACwQAIAALCQAgACABEJ4TCxEAIAEQrwgQnxMaIAAQrwgaCwQAIAALCgAgASAAa0ECdQsJACAAIAEQohMLEQAgARChEhCjExogABChEhoLBAAgAAsCAAtvAQJ/IwBBEGsiAiQAAkACQCAAEKgCRQ0AIAAQuQghAyACQQA6AA8gAyABaiACQQ9qELIIIAAgARC7CAwBCyAAELoIIQMgAkEAOgAOIAMgAWogAkEOahCyCCAAIAEQvAgLIAAgARCkEyACQRBqJAALBAAgAAsKACABEKYTGiAACwQAIAALPgEBfyMAQRBrIgIkACACIAAQqBMoAgA2AgwgACABEKgTKAIANgIAIAEgAkEMahCoEygCADYCACACQRBqJAALCgAgASAAa0EMbQsMACAAIAEQ0wwQiQwLDAAgACABENMMEIoMCz0CAX8BfiMAQRBrIgMkACADIAEgAhDTDBCLDCADKQMAIQQgACADQQhqKQMANwMIIAAgBDcDACADQRBqJAALMQEBfwJAIAAoAgAiAUUNAAJAIAEQ1wwQ6wMQ7AMNACAAKAIARQ8LIABBADYCAAtBAQsKACABIABrQQxtCzEBAX8CQCAAKAIAIgFFDQACQCABEIUNEMINEMMNDQAgACgCAEUPCyAAQQA2AgALQQELBAAgAAsEACAACxEAIAAgARCyEygCADYCACAACwQAIAALBAAgAAsRACAAIAEQtRMoAgA2AgAgAAsEACAACwkAIAAgARCYDgsJACAAIAEQqRMLCgAgABDSDhC7EwsHACAAELwTCwQAIAALWQEBfyMAQRBrIgMkACADIAI2AggCQANAIAAgAUYNASAALAAAIQIgA0EIahCWDSACEJcNGiAAQQFqIQAgA0EIahCZDRoMAAsACyADKAIIIQAgA0EQaiQAIAALWQEBfyMAQRBrIgMkACADIAI2AggCQANAIAAgAUYNASAAKAIAIQIgA0EIahC6DSACELsNGiAAQQRqIQAgA0EIahC9DRoMAAsACyADKAIIIQAgA0EQaiQAIAALBAAgAAsJACAAIAEQwhMLLAEBfyMAQRBrIgQkACAAIARBCGogAxC3CBogACABIAIQwxMgBEEQaiQAIAALBwAgASAAawutAQEEfyMAQRBrIgMkAAJAIAEgAhDAEyIEIAAQwAhLDQACQAJAIARBCksNACAAIAQQvAggABC6CCEFDAELIAQQwQghBSAAIAAQrwggBUEBaiIGEMIIIgUQwwggACAGEMQIIAAgBBC7CAsCQANAIAEgAkYNASAFIAEQsgggBUEBaiEFIAFBAWohAQwACwALIANBADoADyAFIANBD2oQsgggA0EQaiQADwsgABDIFAALBAAgAAsRACAAIAEQxBMoAgA2AgAgAAsHACAAEMgTCwoAIABBBGoQnBMLBAAgAAsEACAACw0AIAEtAAAgAi0AAEYLBAAgAAsNACABIABNIAAgAklxCywBAX8jAEEQayIEJAAgACAEQQhqIAMQzhMaIAAgASACEM8TIARBEGok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AiggACABNgIgIABBkJkBNgIAEOsDIQEgAEEAOgA0IAAgATYCMCADQQhqIAQQsxQgACADQQhqIAAoAgAoAggRAgAgA0EIahCcDBogA0EQaiQAIAALPgEBfyAAQQhqEIkVIQIgAEHwgwFBDGo2AgAgAkHwgwFBIGo2AgAgAEEANgIEIABBACgC8IMBaiABEIoVIAALbAECfyMAQRBrIgMkACAAEPkTIQQgACACNgIoIAAgATYCICAAQfSZATYCABDCDSEBIABBADoANCAAIAE2AjAgA0EIaiAEEIsVIAAgA0EIaiAAKAIAKAIIEQIAIANBCGoQnAwaIANBEGokACAACz4BAX8gAEEIahCMFSECIABBoIQBQQxqNgIAIAJBoIQBQSBqNgIAIABBADYCBCAAQQAoAqCEAWogARCNFSAAC2IBAn8jAEEQayIDJAAgABDkEyEEIAAgATYCICAAQdiaATYCACADQQhqIAQQsxQgA0EIahC1FCEBIANBCGoQnAwaIAAgAjYCKCAAIAE2AiQgACABELYUOgAsIANBEGokACAACzcBAX8gAEEEahCJFSECIABB0IQBQQxqNgIAIAJB0IQBQSBqNgIAIABBACgC0IQBaiABEIoVIAALYgECfyMAQRBrIgMkACAAEPkTIQQgACABNgIgIABBwJsBNgIAIANBCGogBBCLFSADQQhqEI4VIQEgA0EIahCcDBogACACNgIoIAAgATYCJCAAIAEQjxU6ACwgA0EQaiQAIAALNwEBfyAAQQRqEIwVIQIgAEGAhQFBDGo2AgAgAkGAhQFBIGo2AgAgAEEAKAKAhQFqIAEQjRUgAAsUAQF/IAAoAkghAiAAIAE2AkggAgsUAQF/IAAoAkghAiAAIAE2AkggAgsOACAAQYDAABCQFRogAAsWACAAEJwVGiAAQbCFAUEIajYCACAACxgAIAAgARDCFCAAQQA2AkggABDrAzYCTAsNACAAIAFBBGoQ8BAaCxYAIAAQnBUaIABB+IUBQQhqNgIAIAALGAAgACABEMIUIABBADYCSCAAEMINNgJMCwsAIABBtK4BEKEMCw8AIAAgACgCACgCHBEAAAsVAQF/IAAgACgCBCICIAFyNgIEIAILJABByM0BEJAUGkGczgEQnBQaQZjQARCQFBpB7NABEJwUGiAACwoAQaTUARCRFRoLDQAgABDiExogABDqFAs5ACAAIAEQtRQiATYCJCAAIAEQuRQ2AiwgACAAKAIkELYUOgA1AkAgACgCLEEJSA0AQZYLEKIOAAsLCQAgAEEAEJYVC6ADAgV/AX4jAEEgayICJAACQAJAIAAtADRFDQAgACgCMCEDIAFFDQEQ6wMhBCAAQQA6ADQgACAENgIwDAELIAJBATYCGEEAIQMgAkEYaiAAQSxqEJkVKAIAIgVBACAFQQBKGyEGAkACQANAIAMgBkYNASAAKAIgEPoUIgRBf0YNAiACQRhqIANqIAQ6AAAgA0EBaiEDDAALAAsCQAJAIAAtADVFDQAgAiACLQAYOgAXDAELIAJBF2pBAWohBgJAA0AgACgCKCIDKQIAIQcCQCAAKAIkIAMgAkEYaiACQRhqIAVqIgQgAkEQaiACQRdqIAYgAkEMahC3FEF/ag4DAAQCAwsgACgCKCAHNwIAIAVBCEYNAyAAKAIgEPoUIgNBf0YNAyAEIAM6AAAgBUEBaiEFDAALAAsgAiACLQAYOgAXCwJAAkAgAQ0AA0AgBUEBSA0CIAJBGGogBUF/aiIFaiwAABD9EiAAKAIgEPkUQX9GDQMMAAsACyAAIAIsABcQ/RI2AjALIAIsABcQ/RIhAwwBCxDrAyEDCyACQSBqJAAgAwsJACAAQQEQlhULigIBA38jAEEgayICJAAgARDrAxDsAyEDIAAtADQhBAJAAkAgA0UNACAEQf8BcQ0BIAAgACgCMCIBEOsDEOwDQQFzOgA0DAELAkAgBEH/AXFFDQAgAiAAKAIwEPATOgATAkACQAJAIAAoAiQgACgCKCACQRNqIAJBE2pBAWogAkEMaiACQRhqIAJBIGogAkEUahC4FEF/ag4DAgIAAQsgACgCMCEDIAIgAkEYakEBajYCFCACIAM6ABgLA0AgAigCFCIDIAJBGGpNDQIgAiADQX9qIgM2AhQgAywAACAAKAIgEPkUQX9HDQALCxDrAyEBDAELIABBAToANCAAIAE2AjALIAJBIGokACABCwkAIAAgARCaFQspAQJ/IwBBEGsiAiQAIAJBCGogACABEJsVIQMgAkEQaiQAIAEgACADGwsNACABKAIAIAIoAgBICxAAIABB2IkBQQhqNgIAIAALDQAgABD3ExogABDqFAs5ACAAIAEQjhUiATYCJCAAIAEQnxU2AiwgACAAKAIkEI8VOgA1AkAgACgCLEEJSA0AQZYLEKIOAAsLDwAgACAAKAIAKAIYEQAACwkAIABBABChFQudAwIFfwF+IwBBIGsiAiQAAkACQCAALQA0RQ0AIAAoAjAhAyABRQ0BEMINIQQgAEEAOgA0IAAgBDYCMAwBCyACQQE2AhhBACEDIAJBGGogAEEsahCZFSgCACIFQQAgBUEAShshBgJAAkADQCADIAZGDQEgACgCIBD6FCIEQX9GDQIgAkEYaiADaiAEOgAAIANBAWohAwwACwALAkACQCAALQA1RQ0AIAIgAiwAGDYCFAwBCyACQRhqIQYCQANAIAAoAigiAykCACEHAkAgACgCJCADIAJBGGogAkEYaiAFaiIEIAJBEGogAkEUaiAGIAJBDGoQpRVBf2oOAwAEAgMLIAAoAiggBzcCACAFQQhGDQMgACgCIBD6FCIDQX9GDQMgBCADOgAAIAVBAWohBQwACwALIAIgAiwAGDYCFAsCQAJAIAENAANAIAVBAUgNAiACQRhqIAVBf2oiBWosAAAQsRMgACgCIBD5FEF/Rg0DDAALAAsgACACKAIUELETNgIwCyACKAIUELETIQMMAQsQwg0hAwsgAkEgaiQAIAMLCQAgAEEBEKEVC4QCAQN/IwBBIGsiAiQAIAEQwg0Qww0hAyAALQA0IQQCQAJAIANFDQAgBEH/AXENASAAIAAoAjAiARDCDRDDDUEBczoANAwBCwJAIARB/wFxRQ0AIAIgACgCMBCDFDYCEAJAAkACQCAAKAIkIAAoAiggAkEQaiACQRRqIAJBDGogAkEYaiACQSBqIAJBFGoQpBVBf2oOAwICAAELIAAoAjAhAyACIAJBGWo2AhQgAiADOgAYCwNAIAIoAhQiAyACQRhqTQ0CIAIgA0F/aiIDNgIUIAMsAAAgACgCIBD5FEF/Rw0ACwsQwg0hAQwBCyAAQQE6ADQgACABNgIwCyACQSBqJAAgAQsdACAAIAEgAiADIAQgBSAGIAcgACgCACgCDBEOAAsdACAAIAEgAiADIAQgBSAGIAcgACgCACgCEBEOAAsNACAAEOITGiAAEOoUCyYAIAAgACgCACgCGBEAABogACABELUUIgE2AiQgACABELYUOgAsC38BBX8jAEEQayIBJAAgAUEQaiECAkADQCAAKAIkIAAoAiggAUEIaiACIAFBBGoQuhQhA0F/IQQgAUEIakEBIAEoAgQgAUEIamsiBSAAKAIgEMUWIAVHDQECQCADQX9qDgIBAgALC0F/QQAgACgCIBDcExshBAsgAUEQaiQAIAQLbwEBfwJAAkAgAC0ALA0AQQAhAyACQQAgAkEAShshAgNAIAMgAkYNAgJAIAAgASwAABD9EiAAKAIAKAI0EQEAEOsDRw0AIAMPCyABQQFqIQEgA0EBaiEDDAALAAsgAUEBIAIgACgCIBDFFiECCyACC4wCAQV/IwBBIGsiAiQAAkACQAJAIAEQ6wMQ7AMNACACIAEQ8BM6ABcCQCAALQAsRQ0AIAJBF2pBAUEBIAAoAiAQxRZBAUcNAgwBCyACIAJBGGo2AhAgAkEgaiEDIAJBF2pBAWohBCACQRdqIQUDQCAAKAIkIAAoAiggBSAEIAJBDGogAkEYaiADIAJBEGoQuBQhBiACKAIMIAVGDQICQCAGQQNHDQAgBUEBQQEgACgCIBDFFkEBRg0CDAMLIAZBAUsNAiACQRhqQQEgAigCECACQRhqayIFIAAoAiAQxRYgBUcNAiACKAIMIQUgBkEBRg0ACwsgARC0FCEADAELEOsDIQALIAJBIGokACAACw0AIAAQ9xMaIAAQ6hQLJgAgACAAKAIAKAIYEQAAGiAAIAEQjhUiATYCJCAAIAEQjxU6ACwLfwEFfyMAQRBrIgEkACABQRBqIQICQANAIAAoAiQgACgCKCABQQhqIAIgAUEEahCuFSEDQX8hBCABQQhqQQEgASgCBCABQQhqayIFIAAoAiAQxRYgBUcNAQJAIANBf2oOAgECAAsLQX9BACAAKAIgENwTGyEECyABQRBqJAAgBAsXACAAIAEgAiADIAQgACgCACgCFBEJAAtvAQF/AkACQCAALQAsDQBBACEDIAJBACACQQBKGyECA0AgAyACRg0CAkAgACABKAIAELETIAAoAgAoAjQRAQAQwg1HDQAgAw8LIAFBBGohASADQQFqIQMMAAsACyABQQQgAiAAKAIgEMUWIQILIAILiQIBBX8jAEEgayICJAACQAJAAkAgARDCDRDDDQ0AIAIgARCDFDYCFAJAIAAtACxFDQAgAkEUakEEQQEgACgCIBDFFkEBRw0CDAELIAIgAkEYajYCECACQSBqIQMgAkEYaiEEIAJBFGohBQNAIAAoAiQgACgCKCAFIAQgAkEMaiACQRhqIAMgAkEQahCkFSEGIAIoAgwgBUYNAgJAIAZBA0cNACAFQQFBASAAKAIgEMUWQQFGDQIMAwsgBkEBSw0CIAJBGGpBASACKAIQIAJBGGprIgUgACgCIBDFFiAFRw0CIAIoAgwhBSAGQQFGDQALCyABELEVIQAMAQsQwg0hAAsgAkEgaiQAIAALGgACQCAAEMINEMMNRQ0AEMINQX9zIQALIAALBQAQ+xQLAgALVQEBfwJAAkAgABDHFCIAEMgWIgMgAkkNAEHEACEDIAJFDQEgASAAIAJBf2oiAhDAFhogASACakEAOgAAQcQADwsgASAAIANBAWoQwBYaQQAhAwsgAwsMACAAIAIgARC2FRoLEgAgACACNgIEIAAgATYCACAACzYBAX8jAEEQayIDJAAgA0EIaiAAIAEgACgCACgCDBEGACADQQhqIAIQuBUhACADQRBqJAAgAAsqAQF/QQAhAgJAIAAQuRUgARC5FRC6FUUNACAAELsVIAEQuxVGIQILIAILBwAgACgCBAsHACAAIAFGCwcAIAAoAgALJAEBf0EAIQMCQCAAIAEQvRUQuhVFDQAgARC+FSACRiEDCyADCwcAIAAoAgQLBwAgACgCAAsJACAAIAIQwBULbAEDfyMAQZAIayICJAAQoAsoAgAhAwJAIAEgAkEQakGACBC0FSACQRBqEMEVIgQtAAANACACIAE2AgAgAkEQakGACEH/EiACEOgLGiACQRBqIQQLEKALIAM2AgAgACAEEPUPGiACQZAIaiQACy4AAkACQAJAIABBAWoOAgACAQsQoAsoAgAhAAtB/BkhASAAQRxGDQAQEwALIAELBQBBkBMLIAACQCACQYECSA0AIABB1AwQ9Q8aDwsgACACIAIQvxULJgACQEEALQCs1AFBAXENAEGs1AEQ+BVFDQBBrNQBEIAWC0GUqwELBQBB8w4LIAACQCACQYECSA0AIABBsgwQ9Q8aDwsgACACIAIQvxULMgEBfwJAAkAgAkGBAkgNABDIFRpBmKsBIQMMAQsQxBUaQZSrASEDCyAAIAIgAxC2FRoLJgACQEEALQCw1AFBAXENAEGw1AEQ+BVFDQBBsNQBEIAWC0GYqwELCgAgACgCAEEARwsRACAAIAEQowIgARChAhDSFAsSACAAIAI2AgQgACABNgIAIAALBQAQEwALBAAgAAsHACAAEOoUCwcAIAAQ6hQLCwAgACABEBkQ1RMLCwAgACABEBoQ1RMLBwAgABCOCwsRACAAQQA2AgAgABDIFTYCBAsRACAAEKALKAIAEMQVEMsVGgsSACAAIAEgAhDZFBCrBhCsBhoLBQAQEwALBQAQEwALBQAQEwALLQAgACAENgIMIAAgAzYCCCAAIAI2AgQgACABNgIAAkAgAkUNACACENMVCyAACxMAIABBADYCACAAEMgVNgIEIAALTAECfyMAQRBrIgQkACAEQQhqENoVIQUCQCABENIVIAIQ0BVBf0cNACAEENQVIAQgBCkDADcDCAsgACAFIAEgAiADEN4VIARBEGokAAsEACAACwoAIAAQ3xVBAkYL4AEBAX8jAEEQayIFJAACQCAERQ0AIAQgASkCADcCAAsCQAJAIAEQyRVFDQACQCABEL4VQSxGDQAgARC+FUE2Rw0BCyAAQX9B//8DEPEVGgwBCwJAIAEQyRVFDQAgBUH3CyAEIAJBABDZFSABEPIVIABBAEH//wMQ8RUaDAELIAUQ8xUhAUEIIQQCQCADKAIMQYDgA3FBgGBqIgJB//8CSw0AIAJBDHZBkJ4Bai0AACEECyABIARBGHRBGHUQ9BUgASADEPUVEPYVIAAgBSkDADcCACABENwVGgsgBUEQaiQACwcAIAAsAAALLQAgACAENgIMIAAgAzYCCCAAIAI2AgQgACABNgIAAkAgAkUNACACENMVCyAAC5IBAQJ/IwBBIGsiAiQAAkAgACgCBCIDDQAgAkEQaiACQfYZEPUPIgMgACgCABDVFSADEMsUGgJAAkACQCAAKAIMIgNBAEcgACgCCCIAQQBHag4DAAECAAsgAkEQaiABENYVAAsgAkEQaiAAIAEQ1xUACyACQRBqIAAgAyABENgVAAsgAyABKQIANwIAIAJBIGokAAsLACAAIAEgAhDlFQskAQF/IwBB4ABrIgMkACAAIAEgA0EIaiACENsVIANB4ABqJAALqgEBAn8jAEEwayICJAAgAkEgakGjCSABIABBABDgFSEDAkAgABDSFUH/AxDRFSIBRQ0AAkAQoAsoAgBBFEcNACACQRhqENQVIAJBCGogACACQRBqENoVEOIVIAIgAikDCDcDACACEN0VIQAgAhDcFRoCQCAADQAgAyACQRhqEOEVCyACQQhqENwVGgwBCyACQRhqENQVIAMgAkEYahDhFQsgAkEwaiQAIAFFCwsAIAAgASACEOMVCwsAIAAgAUEAEOkVCxIAIAAgASACEMoVEKsGEKwGGgsHACABIABxC78BAQR/IwBBoAJrIgMkACADIAI2ApwCIANBkAJqIANBnAJqEOoVIQQgAyADKAKcAjYCjAIgA0GAAmogA0GMAmoQ6hUhAiAAENUEIQUgAxDrFSEGIAMQ7BUgBiABIAMoAowCEOILIQAgAhDtFQJAIABFDQACQCAAIAZPDQAgBSADEOwVIAAQ0xQaDAELIAUgABDuFSAFQQAQswwgAEEBaiABIAMoApwCEOILGgsgAhDvFRogBBDvFRogA0GgAmokAAsSACAAQQE6AAQgACABNgIAIAALBQBBgAILBAAgAAsPACAALQAEGiAAQQA6AAQLJQEBfwJAIAAQoQIiAiABTw0AIAAgASACaxDwFQ8LIAAgARClEwsKACAALQAEGiAAC3IBBH8jAEEQayICJAACQCABRQ0AIAAQrAghAyAAEKECIgQgAWohBQJAIAMgBGsgAU8NACAAIAMgBSADayAEIARBAEEAEMwUCyAAELEIIQEgACAFELMIIAJBADoADyABIAVqIAJBD2oQsggLIAJBEGokAAsSACAAIAI2AgQgACABOgAAIAAL2gEBAn8jAEHQAGsiAiQAAkAgACgCBCIDDQAgAkEgaiACQRBqQfYZEPUPIgMgACgCABDVFSACQTBqIAJBIGpB+hkQ1RUgAkHHDxDmFSACQcAAaiACQTBqIAIQ5xUgAhDLFBogAkEwahDLFBogAkEgahDLFBogAxDLFBoCQAJAAkAgACgCDCIDQQBHIAAoAggiAEEAR2oOAwABAgALIAJBwABqIAEQ1hUACyACQcAAaiAAIAEQ1xUACyACQcAAaiAAIAMgARDYFQALIAMgASkCADcCACACQdAAaiQACw0AIABBAEH//wMQ8RULCQAgACABOgAACw0AIAAoAgxB/x8Q6BULCQAgACABNgIECwMAAAsiAQF/IwBBEGsiASQAIAEgABD5FRD6FSEAIAFBEGokACAACwwAIAAgARD7FRogAAs5AQJ/IwBBEGsiASQAQQAhAgJAIAFBCGogACgCBBD8FRD9FQ0AIAAQ/hUQ/xUhAgsgAUEQaiQAIAILIwAgAEEANgIMIAAgATYCBCAAIAE2AgAgACABQQFqNgIIIAALCwAgACABNgIAIAALCgAgACgCABCEFgsEACAACz0BAn9BACEBAkACQCAAKAIIIgItAAAiAEEBRg0AIABBAnENASACQQI6AABBASEBCyABDwtB/w1BABD3FQALHgEBfyMAQRBrIgEkACABIAAQ+RUQgRYgAUEQaiQACywBAX8jAEEQayIBJAAgAUEIaiAAKAIEEPwVEIIWIAAQ/hUQgxYgAUEQaiQACwoAIAAoAgAQhRYLDAAgACgCCEEBOgAACwcAIAAtAAALCQAgAEEBOgAACwcAIAAoAgALCQBBtNQBEIYWCwsAQbwZQQAQ9xUACwQAIAALBwAgABDqFAsFAEHgDQsfACAAQcieAUEIajYCACAAQQRqEI0WGiAAEIkWGiAACysBAX8CQCAAEJILRQ0AIAAoAgAQjhYiAUEIahCPFkF/Sg0AIAEQ6hQLIAALBwAgAEF0agsVAQF/IAAgACgCAEF/aiIBNgIAIAELCgAgABCMFhDqFAsKACAAQQRqEJIWCwcAIAAoAgALDQAgABCMFhogABDqFAsEACAACwoAIAAQlBYaIAALAgALAgALDQAgABCVFhogABDqFAsNACAAEJUWGiAAEOoUCw0AIAAQlRYaIAAQ6hQLDQAgABCVFhogABDqFAsNACAAEJUWGiAAEOoUCwsAIAAgAUEAEJ4WCzAAAkAgAg0AIAAoAgQgASgCBEYPCwJAIAAgAUcNAEEBDwsgABD5CSABEPkJEMYLRQuwAQECfyMAQcAAayIDJABBASEEAkAgACABQQAQnhYNAEEAIQQgAUUNAEEAIQQgAUHonwFBmKABQQAQoBYiAUUNACADQQhqQQRyQQBBNBDBFhogA0EBNgI4IANBfzYCFCADIAA2AhAgAyABNgIIIAEgA0EIaiACKAIAQQEgASgCACgCHBELAAJAIAMoAiAiBEEBRw0AIAIgAygCGDYCAAsgBEEBRiEECyADQcAAaiQAIAQLqgIBA38jAEHAAGsiBCQAIAAoAgAiBUF8aigCACEGIAVBeGooAgAhBSAEIAM2AhQgBCABNgIQIAQgADYCDCAEIAI2AghBACEBIARBGGpBAEEnEMEWGiAAIAVqIQACQAJAIAYgAkEAEJ4WRQ0AIARBATYCOCAGIARBCGogACAAQQFBACAGKAIAKAIUEQoAIABBACAEKAIgQQFGGyEBDAELIAYgBEEIaiAAQQFBACAGKAIAKAIYEQwAAkACQCAEKAIsDgIAAQILIAQoAhxBACAEKAIoQQFGG0EAIAQoAiRBAUYbQQAgBCgCMEEBRhshAQwBCwJAIAQoAiBBAUYNACAEKAIwDQEgBCgCJEEBRw0BIAQoAihBAUcNAQsgBCgCGCEBCyAEQcAAaiQAIAELYAEBfwJAIAEoAhAiBA0AIAFBATYCJCABIAM2AhggASACNgIQDwsCQAJAIAQgAkcNACABKAIYQQJHDQEgASADNgIYDwsgAUEBOgA2IAFBAjYCGCABIAEoAiRBAWo2AiQLCx8AAkAgACABKAIIQQAQnhZFDQAgASABIAIgAxChFgsLOAACQCAAIAEoAghBABCeFkUNACABIAEgAiADEKEWDwsgACgCCCIAIAEgAiADIAAoAgAoAhwRCwALWQECfyAAKAIEIQQCQAJAIAINAEEAIQUMAQsgBEEIdSEFIARBAXFFDQAgAigCACAFEKUWIQULIAAoAgAiACABIAIgBWogA0ECIARBAnEbIAAoAgAoAhwRCwALCgAgACABaigCAAt1AQJ/AkAgACABKAIIQQAQnhZFDQAgACABIAIgAxChFg8LIAAoAgwhBCAAQRBqIgUgASACIAMQpBYCQCAEQQJIDQAgBSAEQQN0aiEEIABBGGohAANAIAAgASACIAMQpBYgAS0ANg0BIABBCGoiACAESQ0ACwsLTwECf0EBIQMCQAJAIAAtAAhBGHENAEEAIQMgAUUNASABQeifAUHIoAFBABCgFiIERQ0BIAQtAAhBGHFBAEchAwsgACABIAMQnhYhAwsgAwu4BAEEfyMAQcAAayIDJAACQAJAIAFB1KIBQQAQnhZFDQAgAkEANgIAQQEhBAwBCwJAIAAgASABEKcWRQ0AQQEhBCACKAIAIgFFDQEgAiABKAIANgIADAELAkAgAUUNAEEAIQQgAUHonwFB+KABQQAQoBYiAUUNAQJAIAIoAgAiBUUNACACIAUoAgA2AgALIAEoAggiBSAAKAIIIgZBf3NxQQdxDQEgBUF/cyAGcUHgAHENAUEBIQQgACgCDCABKAIMQQAQnhYNAQJAIAAoAgxByKIBQQAQnhZFDQAgASgCDCIBRQ0CIAFB6J8BQayhAUEAEKAWRSEEDAILIAAoAgwiBUUNAEEAIQQCQCAFQeifAUH4oAFBABCgFiIFRQ0AIAAtAAhBAXFFDQIgBSABKAIMEKkWIQQMAgsgACgCDCIFRQ0BQQAhBAJAIAVB6J8BQeihAUEAEKAWIgVFDQAgAC0ACEEBcUUNAiAFIAEoAgwQqhYhBAwCCyAAKAIMIgBFDQFBACEEIABB6J8BQZigAUEAEKAWIgBFDQEgASgCDCIBRQ0BQQAhBCABQeifAUGYoAFBABCgFiIBRQ0BIANBCGpBBHJBAEE0EMEWGiADQQE2AjggA0F/NgIUIAMgADYCECADIAE2AgggASADQQhqIAIoAgBBASABKAIAKAIcEQsAAkAgAygCICIBQQFHDQAgAigCAEUNACACIAMoAhg2AgALIAFBAUYhBAwBC0EAIQQLIANBwABqJAAgBAu9AQECfwJAA0ACQCABDQBBAA8LQQAhAiABQeifAUH4oAFBABCgFiIBRQ0BIAEoAgggACgCCEF/c3ENAQJAIAAoAgwgASgCDEEAEJ4WRQ0AQQEPCyAALQAIQQFxRQ0BIAAoAgwiA0UNAQJAIANB6J8BQfigAUEAEKAWIgNFDQAgASgCDCEBIAMhAAwBCwsgACgCDCIARQ0AQQAhAiAAQeifAUHooQFBABCgFiIARQ0AIAAgASgCDBCqFiECCyACC10BAX9BACECAkAgAUUNACABQeifAUHooQFBABCgFiIBRQ0AIAEoAgggACgCCEF/c3ENAEEAIQIgACgCDCABKAIMQQAQnhZFDQAgACgCECABKAIQQQAQnhYhAgsgAgufAQAgAUEBOgA1AkAgASgCBCADRw0AIAFBAToANAJAAkAgASgCECIDDQAgAUEBNgIkIAEgBDYCGCABIAI2AhAgASgCMEEBRw0CIARBAUYNAQwCCwJAIAMgAkcNAAJAIAEoAhgiA0ECRw0AIAEgBDYCGCAEIQMLIAEoAjBBAUcNAiADQQFGDQEMAgsgASABKAIkQQFqNgIkCyABQQE6ADYLCyAAAkAgASgCBCACRw0AIAEoAhxBAUYNACABIAM2AhwLC9AEAQR/AkAgACABKAIIIAQQnhZFDQAgASABIAIgAxCsFg8LAkACQCAAIAEoAgAgBBCeFkUNAAJAAkAgASgCECACRg0AIAEoAhQgAkcNAQsgA0EBRw0CIAFBATYCIA8LIAEgAzYCIAJAIAEoAixBBEYNACAAQRBqIgUgACgCDEEDdGohA0EAIQZBACEHAkACQAJAA0AgBSADTw0BIAFBADsBNCAFIAEgAiACQQEgBBCuFiABLQA2DQECQCABLQA1RQ0AAkAgAS0ANEUNAEEBIQggASgCGEEBRg0EQQEhBkEBIQdBASEIIAAtAAhBAnENAQwEC0EBIQYgByEIIAAtAAhBAXFFDQMLIAVBCGohBQwACwALQQQhBSAHIQggBkEBcUUNAQtBAyEFCyABIAU2AiwgCEEBcQ0CCyABIAI2AhQgASABKAIoQQFqNgIoIAEoAiRBAUcNASABKAIYQQJHDQEgAUEBOgA2DwsgACgCDCEFIABBEGoiCCABIAIgAyAEEK8WIAVBAkgNACAIIAVBA3RqIQggAEEYaiEFAkACQCAAKAIIIgBBAnENACABKAIkQQFHDQELA0AgAS0ANg0CIAUgASACIAMgBBCvFiAFQQhqIgUgCEkNAAwCCwALAkAgAEEBcQ0AA0AgAS0ANg0CIAEoAiRBAUYNAiAFIAEgAiADIAQQrxYgBUEIaiIFIAhJDQAMAgsACwNAIAEtADYNAQJAIAEoAiRBAUcNACABKAIYQQFGDQILIAUgASACIAMgBBCvFiAFQQhqIgUgCEkNAAsLC04BAn8gACgCBCIGQQh1IQcCQCAGQQFxRQ0AIAMoAgAgBxClFiEHCyAAKAIAIgAgASACIAMgB2ogBEECIAZBAnEbIAUgACgCACgCFBEKAAtMAQJ/IAAoAgQiBUEIdSEGAkAgBUEBcUUNACACKAIAIAYQpRYhBgsgACgCACIAIAEgAiAGaiADQQIgBUECcRsgBCAAKAIAKAIYEQwAC4ICAAJAIAAgASgCCCAEEJ4WRQ0AIAEgASACIAMQrBYPCwJAAkAgACABKAIAIAQQnhZFDQACQAJAIAEoAhAgAkYNACABKAIUIAJHDQELIANBAUcNAiABQQE2AiAPCyABIAM2AiACQCABKAIsQQRGDQAgAUEAOwE0IAAoAggiACABIAIgAkEBIAQgACgCACgCFBEKAAJAIAEtADVFDQAgAUEDNgIsIAEtADRFDQEMAwsgAUEENgIsCyABIAI2AhQgASABKAIoQQFqNgIoIAEoAiRBAUcNASABKAIYQQJHDQEgAUEBOgA2DwsgACgCCCIAIAEgAiADIAQgACgCACgCGBEMAAsLmwEAAkAgACABKAIIIAQQnhZFDQAgASABIAIgAxCsFg8LAkAgACABKAIAIAQQnhZFDQACQAJAIAEoAhAgAkYNACABKAIUIAJHDQELIANBAUcNASABQQE2AiAPCyABIAI2AhQgASADNgIgIAEgASgCKEEBajYCKAJAIAEoAiRBAUcNACABKAIYQQJHDQAgAUEBOgA2CyABQQQ2AiwLC6cCAQZ/AkAgACABKAIIIAUQnhZFDQAgASABIAIgAyAEEKsWDwsgAS0ANSEGIAAoAgwhByABQQA6ADUgAS0ANCEIIAFBADoANCAAQRBqIgkgASACIAMgBCAFEK4WIAYgAS0ANSIKciEGIAggAS0ANCILciEIAkAgB0ECSA0AIAkgB0EDdGohCSAAQRhqIQcDQCABLQA2DQECQAJAIAtB/wFxRQ0AIAEoAhhBAUYNAyAALQAIQQJxDQEMAwsgCkH/AXFFDQAgAC0ACEEBcUUNAgsgAUEAOwE0IAcgASACIAMgBCAFEK4WIAEtADUiCiAGciEGIAEtADQiCyAIciEIIAdBCGoiByAJSQ0ACwsgASAGQf8BcUEARzoANSABIAhB/wFxQQBHOgA0Cz4AAkAgACABKAIIIAUQnhZFDQAgASABIAIgAyAEEKsWDwsgACgCCCIAIAEgAiADIAQgBSAAKAIAKAIUEQoACyEAAkAgACABKAIIIAUQnhZFDQAgASABIAIgAyAEEKsWCwsEAEEAC4cwAQt/IwBBEGsiASQAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABB9AFLDQACQEEAKAK41AEiAkEQIABBC2pBeHEgAEELSRsiA0EDdiIEdiIAQQNxRQ0AIABBf3NBAXEgBGoiBUEDdCIGQejUAWooAgAiBEEIaiEAAkACQCAEKAIIIgMgBkHg1AFqIgZHDQBBACACQX4gBXdxNgK41AEMAQsgAyAGNgIMIAYgAzYCCAsgBCAFQQN0IgVBA3I2AgQgBCAFaiIEIAQoAgRBAXI2AgQMDAsgA0EAKALA1AEiB00NAQJAIABFDQACQAJAIAAgBHRBAiAEdCIAQQAgAGtycSIAQQAgAGtxQX9qIgAgAEEMdkEQcSIAdiIEQQV2QQhxIgUgAHIgBCAFdiIAQQJ2QQRxIgRyIAAgBHYiAEEBdkECcSIEciAAIAR2IgBBAXZBAXEiBHIgACAEdmoiBUEDdCIGQejUAWooAgAiBCgCCCIAIAZB4NQBaiIGRw0AQQAgAkF+IAV3cSICNgK41AEMAQsgACAGNgIMIAYgADYCCAsgBEEIaiEAIAQgA0EDcjYCBCAEIANqIgYgBUEDdCIIIANrIgVBAXI2AgQgBCAIaiAFNgIAAkAgB0UNACAHQQN2IghBA3RB4NQBaiEDQQAoAszUASEEAkACQCACQQEgCHQiCHENAEEAIAIgCHI2ArjUASADIQgMAQsgAygCCCEICyADIAQ2AgggCCAENgIMIAQgAzYCDCAEIAg2AggLQQAgBjYCzNQBQQAgBTYCwNQBDAwLQQAoArzUASIJRQ0BIAlBACAJa3FBf2oiACAAQQx2QRBxIgB2IgRBBXZBCHEiBSAAciAEIAV2IgBBAnZBBHEiBHIgACAEdiIAQQF2QQJxIgRyIAAgBHYiAEEBdkEBcSIEciAAIAR2akECdEHo1gFqKAIAIgYoAgRBeHEgA2shBCAGIQUCQANAAkAgBSgCECIADQAgBUEUaigCACIARQ0CCyAAKAIEQXhxIANrIgUgBCAFIARJIgUbIQQgACAGIAUbIQYgACEFDAALAAsgBigCGCEKAkAgBigCDCIIIAZGDQBBACgCyNQBIAYoAggiAEsaIAAgCDYCDCAIIAA2AggMCwsCQCAGQRRqIgUoAgAiAA0AIAYoAhAiAEUNAyAGQRBqIQULA0AgBSELIAAiCEEUaiIFKAIAIgANACAIQRBqIQUgCCgCECIADQALIAtBADYCAAwKC0F/IQMgAEG/f0sNACAAQQtqIgBBeHEhA0EAKAK81AEiB0UNAEEAIQsCQCADQYACSQ0AQR8hCyADQf///wdLDQAgAEEIdiIAIABBgP4/akEQdkEIcSIAdCIEIARBgOAfakEQdkEEcSIEdCIFIAVBgIAPakEQdkECcSIFdEEPdiAAIARyIAVyayIAQQF0IAMgAEEVanZBAXFyQRxqIQsLQQAgA2shBAJAAkACQAJAIAtBAnRB6NYBaigCACIFDQBBACEAQQAhCAwBC0EAIQAgA0EAQRkgC0EBdmsgC0EfRht0IQZBACEIA0ACQCAFKAIEQXhxIANrIgIgBE8NACACIQQgBSEIIAINAEEAIQQgBSEIIAUhAAwDCyAAIAVBFGooAgAiAiACIAUgBkEddkEEcWpBEGooAgAiBUYbIAAgAhshACAGQQF0IQYgBQ0ACwsCQCAAIAhyDQBBACEIQQIgC3QiAEEAIABrciAHcSIARQ0DIABBACAAa3FBf2oiACAAQQx2QRBxIgB2IgVBBXZBCHEiBiAAciAFIAZ2IgBBAnZBBHEiBXIgACAFdiIAQQF2QQJxIgVyIAAgBXYiAEEBdkEBcSIFciAAIAV2akECdEHo1gFqKAIAIQALIABFDQELA0AgACgCBEF4cSADayICIARJIQYCQCAAKAIQIgUNACAAQRRqKAIAIQULIAIgBCAGGyEEIAAgCCAGGyEIIAUhACAFDQALCyAIRQ0AIARBACgCwNQBIANrTw0AIAgoAhghCwJAIAgoAgwiBiAIRg0AQQAoAsjUASAIKAIIIgBLGiAAIAY2AgwgBiAANgIIDAkLAkAgCEEUaiIFKAIAIgANACAIKAIQIgBFDQMgCEEQaiEFCwNAIAUhAiAAIgZBFGoiBSgCACIADQAgBkEQaiEFIAYoAhAiAA0ACyACQQA2AgAMCAsCQEEAKALA1AEiACADSQ0AQQAoAszUASEEAkACQCAAIANrIgVBEEkNAEEAIAU2AsDUAUEAIAQgA2oiBjYCzNQBIAYgBUEBcjYCBCAEIABqIAU2AgAgBCADQQNyNgIEDAELQQBBADYCzNQBQQBBADYCwNQBIAQgAEEDcjYCBCAEIABqIgAgACgCBEEBcjYCBAsgBEEIaiEADAoLAkBBACgCxNQBIgYgA00NAEEAIAYgA2siBDYCxNQBQQBBACgC0NQBIgAgA2oiBTYC0NQBIAUgBEEBcjYCBCAAIANBA3I2AgQgAEEIaiEADAoLAkACQEEAKAKQ2AFFDQBBACgCmNgBIQQMAQtBAEJ/NwKc2AFBAEKAoICAgIAENwKU2AFBACABQQxqQXBxQdiq1aoFczYCkNgBQQBBADYCpNgBQQBBADYC9NcBQYAgIQQLQQAhACAEIANBL2oiB2oiAkEAIARrIgtxIgggA00NCUEAIQACQEEAKALw1wEiBEUNAEEAKALo1wEiBSAIaiIJIAVNDQogCSAESw0KC0EALQD01wFBBHENBAJAAkACQEEAKALQ1AEiBEUNAEH41wEhAANAAkAgACgCACIFIARLDQAgBSAAKAIEaiAESw0DCyAAKAIIIgANAAsLQQAQvBYiBkF/Rg0FIAghAgJAQQAoApTYASIAQX9qIgQgBnFFDQAgCCAGayAEIAZqQQAgAGtxaiECCyACIANNDQUgAkH+////B0sNBQJAQQAoAvDXASIARQ0AQQAoAujXASIEIAJqIgUgBE0NBiAFIABLDQYLIAIQvBYiACAGRw0BDAcLIAIgBmsgC3EiAkH+////B0sNBCACELwWIgYgACgCACAAKAIEakYNAyAGIQALAkAgAEF/Rg0AIANBMGogAk0NAAJAIAcgAmtBACgCmNgBIgRqQQAgBGtxIgRB/v///wdNDQAgACEGDAcLAkAgBBC8FkF/Rg0AIAQgAmohAiAAIQYMBwtBACACaxC8FhoMBAsgACEGIABBf0cNBQwDC0EAIQgMBwtBACEGDAULIAZBf0cNAgtBAEEAKAL01wFBBHI2AvTXAQsgCEH+////B0sNASAIELwWIQZBABC8FiEAIAZBf0YNASAAQX9GDQEgBiAATw0BIAAgBmsiAiADQShqTQ0BC0EAQQAoAujXASACaiIANgLo1wECQCAAQQAoAuzXAU0NAEEAIAA2AuzXAQsCQAJAAkACQEEAKALQ1AEiBEUNAEH41wEhAANAIAYgACgCACIFIAAoAgQiCGpGDQIgACgCCCIADQAMAwsACwJAAkBBACgCyNQBIgBFDQAgBiAATw0BC0EAIAY2AsjUAQtBACEAQQAgAjYC/NcBQQAgBjYC+NcBQQBBfzYC2NQBQQBBACgCkNgBNgLc1AFBAEEANgKE2AEDQCAAQQN0IgRB6NQBaiAEQeDUAWoiBTYCACAEQezUAWogBTYCACAAQQFqIgBBIEcNAAtBACACQVhqIgBBeCAGa0EHcUEAIAZBCGpBB3EbIgRrIgU2AsTUAUEAIAYgBGoiBDYC0NQBIAQgBUEBcjYCBCAGIABqQSg2AgRBAEEAKAKg2AE2AtTUAQwCCyAALQAMQQhxDQAgBSAESw0AIAYgBE0NACAAIAggAmo2AgRBACAEQXggBGtBB3FBACAEQQhqQQdxGyIAaiIFNgLQ1AFBAEEAKALE1AEgAmoiBiAAayIANgLE1AEgBSAAQQFyNgIEIAQgBmpBKDYCBEEAQQAoAqDYATYC1NQBDAELAkAgBkEAKALI1AEiCE8NAEEAIAY2AsjUASAGIQgLIAYgAmohBUH41wEhAAJAAkACQAJAAkACQAJAA0AgACgCACAFRg0BIAAoAggiAA0ADAILAAsgAC0ADEEIcUUNAQtB+NcBIQADQAJAIAAoAgAiBSAESw0AIAUgACgCBGoiBSAESw0DCyAAKAIIIQAMAAsACyAAIAY2AgAgACAAKAIEIAJqNgIEIAZBeCAGa0EHcUEAIAZBCGpBB3EbaiILIANBA3I2AgQgBUF4IAVrQQdxQQAgBUEIakEHcRtqIgIgCyADaiIDayEFAkAgBCACRw0AQQAgAzYC0NQBQQBBACgCxNQBIAVqIgA2AsTUASADIABBAXI2AgQMAwsCQEEAKALM1AEgAkcNAEEAIAM2AszUAUEAQQAoAsDUASAFaiIANgLA1AEgAyAAQQFyNgIEIAMgAGogADYCAAwDCwJAIAIoAgQiAEEDcUEBRw0AIABBeHEhBwJAAkAgAEH/AUsNACACKAIIIgQgAEEDdiIIQQN0QeDUAWoiBkYaAkAgAigCDCIAIARHDQBBAEEAKAK41AFBfiAId3E2ArjUAQwCCyAAIAZGGiAEIAA2AgwgACAENgIIDAELIAIoAhghCQJAAkAgAigCDCIGIAJGDQAgCCACKAIIIgBLGiAAIAY2AgwgBiAANgIIDAELAkAgAkEUaiIAKAIAIgQNACACQRBqIgAoAgAiBA0AQQAhBgwBCwNAIAAhCCAEIgZBFGoiACgCACIEDQAgBkEQaiEAIAYoAhAiBA0ACyAIQQA2AgALIAlFDQACQAJAIAIoAhwiBEECdEHo1gFqIgAoAgAgAkcNACAAIAY2AgAgBg0BQQBBACgCvNQBQX4gBHdxNgK81AEMAgsgCUEQQRQgCSgCECACRhtqIAY2AgAgBkUNAQsgBiAJNgIYAkAgAigCECIARQ0AIAYgADYCECAAIAY2AhgLIAIoAhQiAEUNACAGQRRqIAA2AgAgACAGNgIYCyAHIAVqIQUgAiAHaiECCyACIAIoAgRBfnE2AgQgAyAFQQFyNgIEIAMgBWogBTYCAAJAIAVB/wFLDQAgBUEDdiIEQQN0QeDUAWohAAJAAkBBACgCuNQBIgVBASAEdCIEcQ0AQQAgBSAEcjYCuNQBIAAhBAwBCyAAKAIIIQQLIAAgAzYCCCAEIAM2AgwgAyAANgIMIAMgBDYCCAwDC0EfIQACQCAFQf///wdLDQAgBUEIdiIAIABBgP4/akEQdkEIcSIAdCIEIARBgOAfakEQdkEEcSIEdCIGIAZBgIAPakEQdkECcSIGdEEPdiAAIARyIAZyayIAQQF0IAUgAEEVanZBAXFyQRxqIQALIAMgADYCHCADQgA3AhAgAEECdEHo1gFqIQQCQAJAQQAoArzUASIGQQEgAHQiCHENAEEAIAYgCHI2ArzUASAEIAM2AgAgAyAENgIYDAELIAVBAEEZIABBAXZrIABBH0YbdCEAIAQoAgAhBgNAIAYiBCgCBEF4cSAFRg0DIABBHXYhBiAAQQF0IQAgBCAGQQRxakEQaiIIKAIAIgYNAAsgCCADNgIAIAMgBDYCGAsgAyADNgIMIAMgAzYCCAwCC0EAIAJBWGoiAEF4IAZrQQdxQQAgBkEIakEHcRsiCGsiCzYCxNQBQQAgBiAIaiIINgLQ1AEgCCALQQFyNgIEIAYgAGpBKDYCBEEAQQAoAqDYATYC1NQBIAQgBUEnIAVrQQdxQQAgBUFZakEHcRtqQVFqIgAgACAEQRBqSRsiCEEbNgIEIAhBEGpBACkCgNgBNwIAIAhBACkC+NcBNwIIQQAgCEEIajYCgNgBQQAgAjYC/NcBQQAgBjYC+NcBQQBBADYChNgBIAhBGGohAANAIABBBzYCBCAAQQhqIQYgAEEEaiEAIAUgBksNAAsgCCAERg0DIAggCCgCBEF+cTYCBCAEIAggBGsiAkEBcjYCBCAIIAI2AgACQCACQf8BSw0AIAJBA3YiBUEDdEHg1AFqIQACQAJAQQAoArjUASIGQQEgBXQiBXENAEEAIAYgBXI2ArjUASAAIQUMAQsgACgCCCEFCyAAIAQ2AgggBSAENgIMIAQgADYCDCAEIAU2AggMBAtBHyEAAkAgAkH///8HSw0AIAJBCHYiACAAQYD+P2pBEHZBCHEiAHQiBSAFQYDgH2pBEHZBBHEiBXQiBiAGQYCAD2pBEHZBAnEiBnRBD3YgACAFciAGcmsiAEEBdCACIABBFWp2QQFxckEcaiEACyAEQgA3AhAgBEEcaiAANgIAIABBAnRB6NYBaiEFAkACQEEAKAK81AEiBkEBIAB0IghxDQBBACAGIAhyNgK81AEgBSAENgIAIARBGGogBTYCAAwBCyACQQBBGSAAQQF2ayAAQR9GG3QhACAFKAIAIQYDQCAGIgUoAgRBeHEgAkYNBCAAQR12IQYgAEEBdCEAIAUgBkEEcWpBEGoiCCgCACIGDQALIAggBDYCACAEQRhqIAU2AgALIAQgBDYCDCAEIAQ2AggMAwsgBCgCCCIAIAM2AgwgBCADNgIIIANBADYCGCADIAQ2AgwgAyAANgIICyALQQhqIQAMBQsgBSgCCCIAIAQ2AgwgBSAENgIIIARBGGpBADYCACAEIAU2AgwgBCAANgIIC0EAKALE1AEiACADTQ0AQQAgACADayIENgLE1AFBAEEAKALQ1AEiACADaiIFNgLQ1AEgBSAEQQFyNgIEIAAgA0EDcjYCBCAAQQhqIQAMAwsQoAtBMDYCAEEAIQAMAgsCQCALRQ0AAkACQCAIIAgoAhwiBUECdEHo1gFqIgAoAgBHDQAgACAGNgIAIAYNAUEAIAdBfiAFd3EiBzYCvNQBDAILIAtBEEEUIAsoAhAgCEYbaiAGNgIAIAZFDQELIAYgCzYCGAJAIAgoAhAiAEUNACAGIAA2AhAgACAGNgIYCyAIQRRqKAIAIgBFDQAgBkEUaiAANgIAIAAgBjYCGAsCQAJAIARBD0sNACAIIAQgA2oiAEEDcjYCBCAIIABqIgAgACgCBEEBcjYCBAwBCyAIIANBA3I2AgQgCCADaiIGIARBAXI2AgQgBiAEaiAENgIAAkAgBEH/AUsNACAEQQN2IgRBA3RB4NQBaiEAAkACQEEAKAK41AEiBUEBIAR0IgRxDQBBACAFIARyNgK41AEgACEEDAELIAAoAgghBAsgACAGNgIIIAQgBjYCDCAGIAA2AgwgBiAENgIIDAELQR8hAAJAIARB////B0sNACAEQQh2IgAgAEGA/j9qQRB2QQhxIgB0IgUgBUGA4B9qQRB2QQRxIgV0IgMgA0GAgA9qQRB2QQJxIgN0QQ92IAAgBXIgA3JrIgBBAXQgBCAAQRVqdkEBcXJBHGohAAsgBiAANgIcIAZCADcCECAAQQJ0QejWAWohBQJAAkACQCAHQQEgAHQiA3ENAEEAIAcgA3I2ArzUASAFIAY2AgAgBiAFNgIYDAELIARBAEEZIABBAXZrIABBH0YbdCEAIAUoAgAhAwNAIAMiBSgCBEF4cSAERg0CIABBHXYhAyAAQQF0IQAgBSADQQRxakEQaiICKAIAIgMNAAsgAiAGNgIAIAYgBTYCGAsgBiAGNgIMIAYgBjYCCAwBCyAFKAIIIgAgBjYCDCAFIAY2AgggBkEANgIYIAYgBTYCDCAGIAA2AggLIAhBCGohAAwBCwJAIApFDQACQAJAIAYgBigCHCIFQQJ0QejWAWoiACgCAEcNACAAIAg2AgAgCA0BQQAgCUF+IAV3cTYCvNQBDAILIApBEEEUIAooAhAgBkYbaiAINgIAIAhFDQELIAggCjYCGAJAIAYoAhAiAEUNACAIIAA2AhAgACAINgIYCyAGQRRqKAIAIgBFDQAgCEEUaiAANgIAIAAgCDYCGAsCQAJAIARBD0sNACAGIAQgA2oiAEEDcjYCBCAGIABqIgAgACgCBEEBcjYCBAwBCyAGIANBA3I2AgQgBiADaiIFIARBAXI2AgQgBSAEaiAENgIAAkAgB0UNACAHQQN2IghBA3RB4NQBaiEDQQAoAszUASEAAkACQEEBIAh0IgggAnENAEEAIAggAnI2ArjUASADIQgMAQsgAygCCCEICyADIAA2AgggCCAANgIMIAAgAzYCDCAAIAg2AggLQQAgBTYCzNQBQQAgBDYCwNQBCyAGQQhqIQALIAFBEGokACAAC5sNAQd/AkAgAEUNACAAQXhqIgEgAEF8aigCACICQXhxIgBqIQMCQCACQQFxDQAgAkEDcUUNASABIAEoAgAiAmsiAUEAKALI1AEiBEkNASACIABqIQACQEEAKALM1AEgAUYNAAJAIAJB/wFLDQAgASgCCCIEIAJBA3YiBUEDdEHg1AFqIgZGGgJAIAEoAgwiAiAERw0AQQBBACgCuNQBQX4gBXdxNgK41AEMAwsgAiAGRhogBCACNgIMIAIgBDYCCAwCCyABKAIYIQcCQAJAIAEoAgwiBiABRg0AIAQgASgCCCICSxogAiAGNgIMIAYgAjYCCAwBCwJAIAFBFGoiAigCACIEDQAgAUEQaiICKAIAIgQNAEEAIQYMAQsDQCACIQUgBCIGQRRqIgIoAgAiBA0AIAZBEGohAiAGKAIQIgQNAAsgBUEANgIACyAHRQ0BAkACQCABKAIcIgRBAnRB6NYBaiICKAIAIAFHDQAgAiAGNgIAIAYNAUEAQQAoArzUAUF+IAR3cTYCvNQBDAMLIAdBEEEUIAcoAhAgAUYbaiAGNgIAIAZFDQILIAYgBzYCGAJAIAEoAhAiAkUNACAGIAI2AhAgAiAGNgIYCyABKAIUIgJFDQEgBkEUaiACNgIAIAIgBjYCGAwBCyADKAIEIgJBA3FBA0cNAEEAIAA2AsDUASADIAJBfnE2AgQgASAAQQFyNgIEIAEgAGogADYCAA8LIAMgAU0NACADKAIEIgJBAXFFDQACQAJAIAJBAnENAAJAQQAoAtDUASADRw0AQQAgATYC0NQBQQBBACgCxNQBIABqIgA2AsTUASABIABBAXI2AgQgAUEAKALM1AFHDQNBAEEANgLA1AFBAEEANgLM1AEPCwJAQQAoAszUASADRw0AQQAgATYCzNQBQQBBACgCwNQBIABqIgA2AsDUASABIABBAXI2AgQgASAAaiAANgIADwsgAkF4cSAAaiEAAkACQCACQf8BSw0AIAMoAggiBCACQQN2IgVBA3RB4NQBaiIGRhoCQCADKAIMIgIgBEcNAEEAQQAoArjUAUF+IAV3cTYCuNQBDAILIAIgBkYaIAQgAjYCDCACIAQ2AggMAQsgAygCGCEHAkACQCADKAIMIgYgA0YNAEEAKALI1AEgAygCCCICSxogAiAGNgIMIAYgAjYCCAwBCwJAIANBFGoiAigCACIEDQAgA0EQaiICKAIAIgQNAEEAIQYMAQsDQCACIQUgBCIGQRRqIgIoAgAiBA0AIAZBEGohAiAGKAIQIgQNAAsgBUEANgIACyAHRQ0AAkACQCADKAIcIgRBAnRB6NYBaiICKAIAIANHDQAgAiAGNgIAIAYNAUEAQQAoArzUAUF+IAR3cTYCvNQBDAILIAdBEEEUIAcoAhAgA0YbaiAGNgIAIAZFDQELIAYgBzYCGAJAIAMoAhAiAkUNACAGIAI2AhAgAiAGNgIYCyADKAIUIgJFDQAgBkEUaiACNgIAIAIgBjYCGAsgASAAQQFyNgIEIAEgAGogADYCACABQQAoAszUAUcNAUEAIAA2AsDUAQ8LIAMgAkF+cTYCBCABIABBAXI2AgQgASAAaiAANgIACwJAIABB/wFLDQAgAEEDdiICQQN0QeDUAWohAAJAAkBBACgCuNQBIgRBASACdCICcQ0AQQAgBCACcjYCuNQBIAAhAgwBCyAAKAIIIQILIAAgATYCCCACIAE2AgwgASAANgIMIAEgAjYCCA8LQR8hAgJAIABB////B0sNACAAQQh2IgIgAkGA/j9qQRB2QQhxIgJ0IgQgBEGA4B9qQRB2QQRxIgR0IgYgBkGAgA9qQRB2QQJxIgZ0QQ92IAIgBHIgBnJrIgJBAXQgACACQRVqdkEBcXJBHGohAgsgAUIANwIQIAFBHGogAjYCACACQQJ0QejWAWohBAJAAkACQAJAQQAoArzUASIGQQEgAnQiA3ENAEEAIAYgA3I2ArzUASAEIAE2AgAgAUEYaiAENgIADAELIABBAEEZIAJBAXZrIAJBH0YbdCECIAQoAgAhBgNAIAYiBCgCBEF4cSAARg0CIAJBHXYhBiACQQF0IQIgBCAGQQRxakEQaiIDKAIAIgYNAAsgAyABNgIAIAFBGGogBDYCAAsgASABNgIMIAEgATYCCAwBCyAEKAIIIgAgATYCDCAEIAE2AgggAUEYakEANgIAIAEgBDYCDCABIAA2AggLQQBBACgC2NQBQX9qIgFBfyABGzYC2NQBCwuMAQECfwJAIAANACABELYWDwsCQCABQUBJDQAQoAtBMDYCAEEADwsCQCAAQXhqQRAgAUELakF4cSABQQtJGxC5FiICRQ0AIAJBCGoPCwJAIAEQthYiAg0AQQAPCyACIABBfEF4IABBfGooAgAiA0EDcRsgA0F4cWoiAyABIAMgAUkbEMAWGiAAELcWIAILzQcBCX8gACgCBCICQXhxIQMCQAJAIAJBA3ENAAJAIAFBgAJPDQBBAA8LAkAgAyABQQRqSQ0AIAAhBCADIAFrQQAoApjYAUEBdE0NAgtBAA8LIAAgA2ohBQJAAkAgAyABSQ0AIAMgAWsiA0EQSQ0BIAAgAkEBcSABckECcjYCBCAAIAFqIgEgA0EDcjYCBCAFIAUoAgRBAXI2AgQgASADELoWDAELQQAhBAJAQQAoAtDUASAFRw0AQQAoAsTUASADaiIDIAFNDQIgACACQQFxIAFyQQJyNgIEIAAgAWoiAiADIAFrIgFBAXI2AgRBACABNgLE1AFBACACNgLQ1AEMAQsCQEEAKALM1AEgBUcNAEEAIQRBACgCwNQBIANqIgMgAUkNAgJAAkAgAyABayIEQRBJDQAgACACQQFxIAFyQQJyNgIEIAAgAWoiASAEQQFyNgIEIAAgA2oiAyAENgIAIAMgAygCBEF+cTYCBAwBCyAAIAJBAXEgA3JBAnI2AgQgACADaiIBIAEoAgRBAXI2AgRBACEEQQAhAQtBACABNgLM1AFBACAENgLA1AEMAQtBACEEIAUoAgQiBkECcQ0BIAZBeHEgA2oiByABSQ0BIAcgAWshCAJAAkAgBkH/AUsNACAFKAIIIgMgBkEDdiIJQQN0QeDUAWoiBkYaAkAgBSgCDCIEIANHDQBBAEEAKAK41AFBfiAJd3E2ArjUAQwCCyAEIAZGGiADIAQ2AgwgBCADNgIIDAELIAUoAhghCgJAAkAgBSgCDCIGIAVGDQBBACgCyNQBIAUoAggiA0saIAMgBjYCDCAGIAM2AggMAQsCQCAFQRRqIgMoAgAiBA0AIAVBEGoiAygCACIEDQBBACEGDAELA0AgAyEJIAQiBkEUaiIDKAIAIgQNACAGQRBqIQMgBigCECIEDQALIAlBADYCAAsgCkUNAAJAAkAgBSgCHCIEQQJ0QejWAWoiAygCACAFRw0AIAMgBjYCACAGDQFBAEEAKAK81AFBfiAEd3E2ArzUAQwCCyAKQRBBFCAKKAIQIAVGG2ogBjYCACAGRQ0BCyAGIAo2AhgCQCAFKAIQIgNFDQAgBiADNgIQIAMgBjYCGAsgBSgCFCIDRQ0AIAZBFGogAzYCACADIAY2AhgLAkAgCEEPSw0AIAAgAkEBcSAHckECcjYCBCAAIAdqIgEgASgCBEEBcjYCBAwBCyAAIAJBAXEgAXJBAnI2AgQgACABaiIBIAhBA3I2AgQgACAHaiIDIAMoAgRBAXI2AgQgASAIELoWCyAAIQQLIAQL0AwBBn8gACABaiECAkACQCAAKAIEIgNBAXENACADQQNxRQ0BIAAoAgAiAyABaiEBAkACQEEAKALM1AEgACADayIARg0AAkAgA0H/AUsNACAAKAIIIgQgA0EDdiIFQQN0QeDUAWoiBkYaIAAoAgwiAyAERw0CQQBBACgCuNQBQX4gBXdxNgK41AEMAwsgACgCGCEHAkACQCAAKAIMIgYgAEYNAEEAKALI1AEgACgCCCIDSxogAyAGNgIMIAYgAzYCCAwBCwJAIABBFGoiAygCACIEDQAgAEEQaiIDKAIAIgQNAEEAIQYMAQsDQCADIQUgBCIGQRRqIgMoAgAiBA0AIAZBEGohAyAGKAIQIgQNAAsgBUEANgIACyAHRQ0CAkACQCAAKAIcIgRBAnRB6NYBaiIDKAIAIABHDQAgAyAGNgIAIAYNAUEAQQAoArzUAUF+IAR3cTYCvNQBDAQLIAdBEEEUIAcoAhAgAEYbaiAGNgIAIAZFDQMLIAYgBzYCGAJAIAAoAhAiA0UNACAGIAM2AhAgAyAGNgIYCyAAKAIUIgNFDQIgBkEUaiADNgIAIAMgBjYCGAwCCyACKAIEIgNBA3FBA0cNAUEAIAE2AsDUASACIANBfnE2AgQgACABQQFyNgIEIAIgATYCAA8LIAMgBkYaIAQgAzYCDCADIAQ2AggLAkACQCACKAIEIgNBAnENAAJAQQAoAtDUASACRw0AQQAgADYC0NQBQQBBACgCxNQBIAFqIgE2AsTUASAAIAFBAXI2AgQgAEEAKALM1AFHDQNBAEEANgLA1AFBAEEANgLM1AEPCwJAQQAoAszUASACRw0AQQAgADYCzNQBQQBBACgCwNQBIAFqIgE2AsDUASAAIAFBAXI2AgQgACABaiABNgIADwsgA0F4cSABaiEBAkACQCADQf8BSw0AIAIoAggiBCADQQN2IgVBA3RB4NQBaiIGRhoCQCACKAIMIgMgBEcNAEEAQQAoArjUAUF+IAV3cTYCuNQBDAILIAMgBkYaIAQgAzYCDCADIAQ2AggMAQsgAigCGCEHAkACQCACKAIMIgYgAkYNAEEAKALI1AEgAigCCCIDSxogAyAGNgIMIAYgAzYCCAwBCwJAIAJBFGoiBCgCACIDDQAgAkEQaiIEKAIAIgMNAEEAIQYMAQsDQCAEIQUgAyIGQRRqIgQoAgAiAw0AIAZBEGohBCAGKAIQIgMNAAsgBUEANgIACyAHRQ0AAkACQCACKAIcIgRBAnRB6NYBaiIDKAIAIAJHDQAgAyAGNgIAIAYNAUEAQQAoArzUAUF+IAR3cTYCvNQBDAILIAdBEEEUIAcoAhAgAkYbaiAGNgIAIAZFDQELIAYgBzYCGAJAIAIoAhAiA0UNACAGIAM2AhAgAyAGNgIYCyACKAIUIgNFDQAgBkEUaiADNgIAIAMgBjYCGAsgACABQQFyNgIEIAAgAWogATYCACAAQQAoAszUAUcNAUEAIAE2AsDUAQ8LIAIgA0F+cTYCBCAAIAFBAXI2AgQgACABaiABNgIACwJAIAFB/wFLDQAgAUEDdiIDQQN0QeDUAWohAQJAAkBBACgCuNQBIgRBASADdCIDcQ0AQQAgBCADcjYCuNQBIAEhAwwBCyABKAIIIQMLIAEgADYCCCADIAA2AgwgACABNgIMIAAgAzYCCA8LQR8hAwJAIAFB////B0sNACABQQh2IgMgA0GA/j9qQRB2QQhxIgN0IgQgBEGA4B9qQRB2QQRxIgR0IgYgBkGAgA9qQRB2QQJxIgZ0QQ92IAMgBHIgBnJrIgNBAXQgASADQRVqdkEBcXJBHGohAwsgAEIANwIQIABBHGogAzYCACADQQJ0QejWAWohBAJAAkACQEEAKAK81AEiBkEBIAN0IgJxDQBBACAGIAJyNgK81AEgBCAANgIAIABBGGogBDYCAAwBCyABQQBBGSADQQF2ayADQR9GG3QhAyAEKAIAIQYDQCAGIgQoAgRBeHEgAUYNAiADQR12IQYgA0EBdCEDIAQgBkEEcWpBEGoiAigCACIGDQALIAIgADYCACAAQRhqIAQ2AgALIAAgADYCDCAAIAA2AggPCyAEKAIIIgEgADYCDCAEIAA2AgggAEEYakEANgIAIAAgBDYCDCAAIAE2AggLCwcAPwBBEHQLVAECf0EAKAKcqwEiASAAQQNqQXxxIgJqIQACQAJAIAJFDQAgACABTQ0BCwJAIAAQuxZNDQAgABAbRQ0BC0EAIAA2ApyrASABDwsQoAtBMDYCAEF/C9gGAgR/A34jAEGAAWsiBSQAAkACQAJAIAMgBEIAQgAQqAtFDQAgAyAEEL8WRQ0AIAJCMIinIgZB//8BcSIHQf//AUcNAQsgBUEQaiABIAIgAyAEEKMLIAUgBSkDECIEIAVBEGpBCGopAwAiAyAEIAMQrwsgBUEIaikDACECIAUpAwAhBAwBCwJAIAEgB61CMIYgAkL///////8/g4QiCSADIARCMIinQf//AXEiCK1CMIYgBEL///////8/g4QiChCoC0EASg0AAkAgASAJIAMgChCoC0UNACABIQQMAgsgBUHwAGogASACQgBCABCjCyAFQfgAaikDACECIAUpA3AhBAwBCwJAAkAgB0UNACABIQQMAQsgBUHgAGogASAJQgBCgICAgICAwLvAABCjCyAFQegAaikDACIJQjCIp0GIf2ohByAFKQNgIQQLAkAgCA0AIAVB0ABqIAMgCkIAQoCAgICAgMC7wAAQowsgBUHYAGopAwAiCkIwiKdBiH9qIQggBSkDUCEDCyAKQv///////z+DQoCAgICAgMAAhCELIAlC////////P4NCgICAgICAwACEIQkCQCAHIAhMDQADQAJAAkAgCSALfSAEIANU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Bq0gB61CIIaEIAitIAmtQiCGhBDRFgsZACAAIAEgAiADrSAErUIghoQgBSAGENIWCyQBAX4gACABIAKtIAOtQiCGhCAEENMWIQUgBUIgiKcQHSAFpwscACAAIAEgAiADpyADQiCIpyAEpyAEQiCIpxAeCxMAIAAgAacgAUIgiKcgAiADEB8LC7GjgYAAAgBBgAgLgJ4B44Od44Kk44Oz44K/AOODoeODouODquino+aUvgDpoILngrnoqIjnrpcA5a2Y5Zyo44Gq44GXAOWtmOWcqOOBguOCigDlm7rmnIkA5YWx5pyJAOeiuuS/nea4iADpoILngrnoqIjnrpcg57WC5LqGAOabtOaWsOaJseOBhABEZWxldGVWZXJ0ZXhYeXoAQWRkVmVydGV4WHl6AGluZmluaXR5AGNyZWF0ZV9kaXJlY3RvcnkARmVicnVhcnkASmFudWFyeQBKdWx5AENvbnNpc3RlbmN5U3VydmV5AEdldFZlcnRleFh5ekRhdGFLZXkAR2V0U3VyZmFjZURhdGFLZXkAVGh1cnNkYXkAVHVlc2RheQBXZWRuZXNkYXkAU2F0dXJkYXkAU3VuZGF5AE1vbmRheQBGcmlkYXkATWF5ACVtLyVkLyV5AE5ld1ZpZXdQeABEZWxldGVWaWV3UHgALSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABHZXRWaWV3AFBvaW50RHJhdwBOb3YAVGh1AHVuc3VwcG9ydGVkIGxvY2FsZSBmb3Igc3RhbmRhcmQgaW5wdXQAQXVndXN0AHVuc2lnbmVkIHNob3J0AHVuc2lnbmVkIGludABHZXRfeV9oaWdodABzZXQAZ2V0AE9jdABwb3NpeF9zdGF0AGZsb2F0AFNhdAB1aW50NjRfdABDYW1lcmFDb29yZGluYXRlcwBBcHIAdmVjdG9yAHVuc3BlY2lmaWVkIHN5c3RlbV9jYXRlZ29yeSBlcnJvcgB1bnNwZWNpZmllZCBnZW5lcmljX2NhdGVnb3J5IGVycm9yAE9jdG9iZXIATm92ZW1iZXIAU2VwdGVtYmVyAERlY2VtYmVyAHVuc2lnbmVkIGNoYXIAaW9zX2Jhc2U6OmNsZWFyAE1hcgBzYWx0M0R0ZW1wAFNlcAAlSTolTTolUyAlcABTdW4ASnVuAHN0ZDo6ZXhjZXB0aW9uAENhbWVyYURpcmVjdGlvbgBfX2N4YV9ndWFyZF9hY3F1aXJlIGRldGVjdGVkIHJlY3Vyc2l2ZSBpbml0aWFsaXphdGlvbgBTdXJmYWNlU3BhdGlhbENhbGN1bGF0aW9uAFN1cmZhY2VQbGFuZUNhbGN1bGF0aW9uAE1vbgBuYW4ASmFuAHN5c3RlbQBKdWwAR2V0VmVydGV4Q29udHJvbABib29sAGxsAEFwcmlsAGVtc2NyaXB0ZW46OnZhbABwdXNoX2JhY2sARnJpAEdldF94X3dpZHRoAGZhaWxlZCB0byBkZXRlcm1pbmUgYXR0cmlidXRlcyBmb3IgdGhlIHNwZWNpZmllZCBwYXRoAE1hcmNoAEF1ZwB1bnNpZ25lZCBsb25nAHN0ZDo6d3N0cmluZwBiYXNpY19zdHJpbmcAc3RkOjpzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAaW5mACUuMExmACVMZgByZXNpemUAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQB0cnVlAFR1ZQBmYWxzZQBKdW5lAGRvdWJsZQBBZGRWZXJ0ZXhYeXpDb25zaWRlcmF0aW9uQ2hhbmdlAEFkZFZlcnRleEZvclN1cmZhY2UAR2V0VmVydGV4WHl6RGF0YUtleUZyb21TdXJmYWNlAEFkZFN1cmZhY2UARm9ySnNJbnRlcmZhY2UAU3VyZmFjZUNhbGN1bGF0aW9uIGVuZAB2b2lkAGNsb2NrX2dldHRpbWUoQ0xPQ0tfUkVBTFRJTUUpIGZhaWxlZABXZWQAVW5rbm93biBlcnJvciAlZABnZW5lcmljAERlYwBGZWIAU3VyZmFjZUNhbGN1bGF0aW9uIHN0YQBWaWV3UHhEYXRhAEdldFhZWgAlYSAlYiAlZCAlSDolTTolUyAlWQBQT1NJWAAlSDolTTolUwBOQU4AUE0AQU0ATENfQUxMAExBTkcASU5GAEMAR2V0RHJhd1JHQgBHZXREcmF3UkdCQQBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AdmVjdG9yPGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgB2ZWN0b3I8c3RkOjpzdHJpbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4AMDEyMzQ1Njc4OQBDLlVURi04AC4AKG51bGwpAFB1cmUgdmlydHVhbCBmdW5jdGlvbiBjYWxsZWQhAFggWSBaIOaknOiovCAA5YuV55qE56K65L+dIABpbiAAOiAAAE5TdDNfXzI2dmVjdG9ySU5TXzEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUVOUzRfSVM2X0VFRUUATlN0M19fMjEzX192ZWN0b3JfYmFzZUlOU18xMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFTlM0X0lTNl9FRUVFAE5TdDNfXzIyMF9fdmVjdG9yX2Jhc2VfY29tbW9uSUxiMUVFRQAADFIAALINAACQUgAAVA0AAAAAAAABAAAA2A0AAAAAAACQUgAA/gwAAAAAAAABAAAA4A0AAAAAAABQTlN0M19fMjZ2ZWN0b3JJTlNfMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRU5TNF9JUzZfRUVFRQAA7FIAABAOAAAAAAAA+A0AAFBLTlN0M19fMjZ2ZWN0b3JJTlNfMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRU5TNF9JUzZfRUVFRQDsUgAAeA4AAAEAAAD4DQAAaWkAdgB2aQBoDgAASFEAAGgOAABoDwAATlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUATlN0M19fMjIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFRQAAAAAMUgAANw8AAJBSAAD4DgAAAAAAAAEAAABgDwAAAAAAAHZpaWkAAAAAAAAAAAAAAABIUQAAaA4AAMxRAABoDwAAdmlpaWkAAADMUQAA0A4AAGlpaQDUDwAA+A0AAMxRAABOMTBlbXNjcmlwdGVuM3ZhbEUAAAxSAADADwAAaWlpaQAAAAAAAAAAAAAAAAAAAABgUQAA+A0AAMxRAABoDwAAaWlpaWkATlN0M19fMjZ2ZWN0b3JJaU5TXzlhbGxvY2F0b3JJaUVFRUUATlN0M19fMjEzX192ZWN0b3JfYmFzZUlpTlNfOWFsbG9jYXRvcklpRUVFRQAAAJBSAAAqEAAAAAAAAAEAAADYDQAAAAAAAJBSAAAGEAAAAAAAAAEAAABYEAAAAAAAAFBOU3QzX18yNnZlY3RvcklpTlNfOWFsbG9jYXRvcklpRUVFRQAAAADsUgAAiBAAAAAAAABwEAAAUEtOU3QzX18yNnZlY3RvcklpTlNfOWFsbG9jYXRvcklpRUVFRQAAAOxSAADAEAAAAQAAAHAQAACwEAAASFEAALAQAACoUQAAAAAAAAAAAABIUQAAsBAAAMxRAACoUQAAzFEAAOgQAADUDwAAcBAAAMxRAAAAAAAAAAAAAAAAAABgUQAAcBAAAMxRAACoUQAAMTRGb3JKc0ludGVyZmFjZQAAAAAMUgAAUBEAAFAxNEZvckpzSW50ZXJmYWNlAAAA7FIAAGwRAAAAAAAAZBEAAFBLMTRGb3JKc0ludGVyZmFjZQAA7FIAAJARAAABAAAAZBEAAIARAADQEQAAgBEAADEzVmVydGV4Q29udHJvbAAMUgAAwBEAADEwVmlld1B4RGF0YQAAAAAMUgAA2BEAAFAxMFZpZXdQeERhdGEAAADsUgAA8BEAAAAAAADoEQAAUEsxMFZpZXdQeERhdGEAAOxSAAAQEgAAAQAAAOgRAAAAEgAAqFEAAKhRAAAAAAAASFEAAAASAACoUQAAqFEAAKhRAACoUQAAqFEAAKhRAAB2aWlpaWlpaWkAAACoUQAAABIAAAAAAAAAAAAAAAAAAKhRAAAAEgAAqFEAAKhRAACoUQAAaWlpaWlpAFAxM1ZlcnRleENvbnRyb2wA7FIAAJsSAAAAAAAA0BEAAFBLMTNWZXJ0ZXhDb250cm9sAAAA7FIAALwSAAABAAAA0BEAAEhRAACsEgAAqFEAAKhRAACoUQAAdmlpaWlpAAAAAAAASFEAAKwSAACoUQAAqFEAAEhRAACsEgAAdmlpAAASAACsEgAAAAAAAAAAAAAAAAAASFEAAKwSAABoDwAAaA8AAKhRAABIUQAArBIAAGgPAABIUQAArBIAAGgPAACoUQAAqFEAAKhRAAB2aWlpaWlpAEhRAACsEgAAaA8AAGgPAAD4DQAArBIAAGgPAAD4DQAArBIAAHAQAACsEgAAaA8AAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAACQUgAAoBMAAAAAAAABAAAAYA8AAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAAkFIAAPgTAAAAAAAAAQAAAGAPAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAACQUgAAUBQAAAAAAAABAAAAYA8AAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAAJBSAACsFAAAAAAAAAEAAABgDwAAAAAAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAADFIAAAgVAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAAAxSAAAwFQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAAAMUgAAWBUAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAADFIAAIAVAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAAAxSAACoFQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAAAMUgAA0BUAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAADFIAAPgVAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAAAxSAAAgFgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAAAMUgAASBYAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWZFRQAADFIAAHAWAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lkRUUAAAxSAACYFgAA0XSeAFedvSqAcFIP//8+JwoAAABkAAAA6AMAABAnAACghgEAQEIPAICWmAAA4fUFGAAAADUAAABxAAAAa////877//+Sv///AAAAAAAAAAD/////////////////////////////////////////////////////////////////AAECAwQFBgcICf////////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI////////woLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wABAgQHAwYFAAAAAAAAAAIAAMADAADABAAAwAUAAMAGAADABwAAwAgAAMAJAADACgAAwAsAAMAMAADADQAAwA4AAMAPAADAEAAAwBEAAMASAADAEwAAwBQAAMAVAADAFgAAwBcAAMAYAADAGQAAwBoAAMAbAADAHAAAwB0AAMAeAADAHwAAwAAAALMBAADDAgAAwwMAAMMEAADDBQAAwwYAAMMHAADDCAAAwwkAAMMKAADDCwAAwwwAAMMNAADTDgAAww8AAMMAAAy7AQAMwwIADMMDAAzDBAAM0wAAAADeEgSVAAAAAP////////////////AYAAAUAAAAQy5VVEYtOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGQAAAAAAAAAAAAAAAAAAAAAAAAAAAABMQ19DVFlQRQAAAABMQ19OVU1FUklDAABMQ19USU1FAAAAAABMQ19DT0xMQVRFAABMQ19NT05FVEFSWQBMQ19NRVNTQUdFUwAAAAAAAAAAABEACgAREREAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAEQAPChEREQMKBwABAAkLCwAACQYLAAALAAYRAAAAERERAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAABEACgoREREACgAAAgAJCwAAAAkACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAADQAAAAQNAAAAAAkOAAAAAAAOAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAADwAAAAAJEAAAAAAAEAAAEAAAEgAAABISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAEhISAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAACgAAAAAKAAAAAAkLAAAAAAALAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAAMDEyMzQ1Njc4OUFCQ0RFRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgACAAIAAyACIAIgAiACIAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAFgBMAEwATABMAEwATABMAEwATABMAEwATABMAEwATACNgI2AjYCNgI2AjYCNgI2AjYCNgEwATABMAEwATABMAEwAjVCNUI1QjVCNUI1QjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUEwATABMAEwATABMAI1gjWCNYI1gjWCNYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGBMAEwATABMACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAhAAAAIgAAACMAAAAkAAAAJQAAACYAAAAnAAAAKAAAACkAAAAqAAAAKwAAACwAAAAtAAAALgAAAC8AAAAwAAAAMQAAADIAAAAzAAAANAAAADUAAAA2AAAANwAAADgAAAA5AAAAOgAAADsAAAA8AAAAPQAAAD4AAAA/AAAAQAAAAEEAAABCAAAAQwAAAEQAAABFAAAARgAAAEcAAABIAAAASQAAAEoAAABLAAAATAAAAE0AAABOAAAATwAAAFAAAABRAAAAUgAAAFMAAABUAAAAVQAAAFYAAABXAAAAWAAAAFkAAABaAAAAWwAAAFwAAABdAAAAXgAAAF8AAABgAAAAQQAAAEIAAABDAAAARAAAAEUAAABGAAAARwAAAEgAAABJAAAASgAAAEsAAABMAAAATQAAAE4AAABPAAAAUAAAAFEAAABSAAAAUwAAAFQAAABVAAAAVgAAAFcAAABYAAAAWQAAAFoAAAB7AAAAfAAAAH0AAAB+AAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AADsQgAAdwEAAHgBAABOU3QzX18yOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRQAAADRSAADAQgAA/EQAAAAAAAA0QwAAeQEAAHoBAABOU3QzX18yOWJhc2ljX2lvc0l3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRQAAADRSAAAIQwAA/EQAAE5TdDNfXzIxNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRQAAAAAMUgAAQEMAAE5TdDNfXzIxNWJhc2ljX3N0cmVhbWJ1Zkl3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRQAAAAAMUgAAfEMAAE5TdDNfXzIxM2Jhc2ljX2lzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUAAJBSAAC4QwAAAAAAAAEAAADsQgAAA/T//05TdDNfXzIxM2Jhc2ljX2lzdHJlYW1Jd05TXzExY2hhcl90cmFpdHNJd0VFRUUAAJBSAAAARAAAAAAAAAEAAAA0QwAAA/T//05TdDNfXzIxM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUAAJBSAABIRAAAAAAAAAEAAADsQgAAA/T//05TdDNfXzIxM2Jhc2ljX29zdHJlYW1Jd05TXzExY2hhcl90cmFpdHNJd0VFRUUAAJBSAACQRAAAAAAAAAEAAAA0QwAAA/T//wAAAAD8RAAAewEAAHwBAABOU3QzX18yOGlvc19iYXNlRQAAAAxSAADoRAAAAAAAAAAAAAAAAAAAGRJEOwI/LEcUPTMwChsGRktFNw9JDo4XA0AdPGkrNh9KLRwBICUpIQgMFRYiLhA4Pgs0MRhkdHV2L0EJfzkRI0MyQomKiwUEJignDSoeNYwHGkiTE5SVAAAAAAAAAAAASWxsZWdhbCBieXRlIHNlcXVlbmNlAERvbWFpbiBlcnJvcgBSZXN1bHQgbm90IHJlcHJlc2VudGFibGUATm90IGEgdHR5AFBlcm1pc3Npb24gZGVuaWVkAE9wZXJhdGlvbiBub3QgcGVybWl0dGVkAE5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnkATm8gc3VjaCBwcm9jZXNzAEZpbGUgZXhpc3RzAFZhbHVlIHRvbyBsYXJnZSBmb3IgZGF0YSB0eXBlAE5vIHNwYWNlIGxlZnQgb24gZGV2aWNlAE91dCBvZiBtZW1vcnkAUmVzb3VyY2UgYnVzeQBJbnRlcnJ1cHRlZCBzeXN0ZW0gY2FsbABSZXNvdXJjZSB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZQBJbnZhbGlkIHNlZWsAQ3Jvc3MtZGV2aWNlIGxpbmsAUmVhZC1vbmx5IGZpbGUgc3lzdGVtAERpcmVjdG9yeSBub3QgZW1wdHkAQ29ubmVjdGlvbiByZXNldCBieSBwZWVyAE9wZXJhdGlvbiB0aW1lZCBvdXQAQ29ubmVjdGlvbiByZWZ1c2VkAEhvc3QgaXMgZG93bgBIb3N0IGlzIHVucmVhY2hhYmxlAEFkZHJlc3MgaW4gdXNlAEJyb2tlbiBwaXBlAEkvTyBlcnJvcgBObyBzdWNoIGRldmljZSBvciBhZGRyZXNzAEJsb2NrIGRldmljZSByZXF1aXJlZABObyBzdWNoIGRldmljZQBOb3QgYSBkaXJlY3RvcnkASXMgYSBkaXJlY3RvcnkAVGV4dCBmaWxlIGJ1c3kARXhlYyBmb3JtYXQgZXJyb3IASW52YWxpZCBhcmd1bWVudABBcmd1bWVudCBsaXN0IHRvbyBsb25nAFN5bWJvbGljIGxpbmsgbG9vcABGaWxlbmFtZSB0b28gbG9uZwBUb28gbWFueSBvcGVuIGZpbGVzIGluIHN5c3RlbQBObyBmaWxlIGRlc2NyaXB0b3JzIGF2YWlsYWJsZQBCYWQgZmlsZSBkZXNjcmlwdG9yAE5vIGNoaWxkIHByb2Nlc3MAQmFkIGFkZHJlc3MARmlsZSB0b28gbGFyZ2UAVG9vIG1hbnkgbGlua3MATm8gbG9ja3MgYXZhaWxhYmxlAFJlc291cmNlIGRlYWRsb2NrIHdvdWxkIG9jY3VyAFN0YXRlIG5vdCByZWNvdmVyYWJsZQBQcmV2aW91cyBvd25lciBkaWVkAE9wZXJhdGlvbiBjYW5jZWxlZABGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQATm8gbWVzc2FnZSBvZiBkZXNpcmVkIHR5cGUASWRlbnRpZmllciByZW1vdmVkAERldmljZSBub3QgYSBzdHJlYW0ATm8gZGF0YSBhdmFpbGFibGUARGV2aWNlIHRpbWVvdXQAT3V0IG9mIHN0cmVhbXMgcmVzb3VyY2VzAExpbmsgaGFzIGJlZW4gc2V2ZXJlZABQcm90b2NvbCBlcnJvcgBCYWQgbWVzc2FnZQBGaWxlIGRlc2NyaXB0b3IgaW4gYmFkIHN0YXRlAE5vdCBhIHNvY2tldABEZXN0aW5hdGlvbiBhZGRyZXNzIHJlcXVpcmVkAE1lc3NhZ2UgdG9vIGxhcmdlAFByb3RvY29sIHdyb25nIHR5cGUgZm9yIHNvY2tldABQcm90b2NvbCBub3QgYXZhaWxhYmxlAFByb3RvY29sIG5vdCBzdXBwb3J0ZWQAU29ja2V0IHR5cGUgbm90IHN1cHBvcnRlZABOb3Qgc3VwcG9ydGVkAFByb3RvY29sIGZhbWlseSBub3Qgc3VwcG9ydGVkAEFkZHJlc3MgZmFtaWx5IG5vdCBzdXBwb3J0ZWQgYnkgcHJvdG9jb2wAQWRkcmVzcyBub3QgYXZhaWxhYmxlAE5ldHdvcmsgaXMgZG93bgBOZXR3b3JrIHVucmVhY2hhYmxlAENvbm5lY3Rpb24gcmVzZXQgYnkgbmV0d29yawBDb25uZWN0aW9uIGFib3J0ZWQATm8gYnVmZmVyIHNwYWNlIGF2YWlsYWJsZQBTb2NrZXQgaXMgY29ubmVjdGVkAFNvY2tldCBub3QgY29ubmVjdGVkAENhbm5vdCBzZW5kIGFmdGVyIHNvY2tldCBzaHV0ZG93bgBPcGVyYXRpb24gYWxyZWFkeSBpbiBwcm9ncmVzcwBPcGVyYXRpb24gaW4gcHJvZ3Jlc3MAU3RhbGUgZmlsZSBoYW5kbGUAUmVtb3RlIEkvTyBlcnJvcgBRdW90YSBleGNlZWRlZABObyBtZWRpdW0gZm91bmQAV3JvbmcgbWVkaXVtIHR5cGUATm8gZXJyb3IgaW5mb3JtYXRpb24AAOBTAABwVAAAAFUAAAAAAADgTAAASwEAAIQBAACFAQAATgEAAE8BAABQAQAAUQEAAFIBAABTAQAAhgEAAIcBAACIAQAAVwEAAFgBAABOU3QzX18yMTBfX3N0ZGluYnVmSWNFRQA0UgAAyEwAAHRDAAAAAAAARE0AAFkBAACJAQAAigEAAFwBAABdAQAAXgEAAF8BAABgAQAAYQEAAIsBAACMAQAAjQEAAGUBAABmAQAATlN0M19fMjEwX19zdGRpbmJ1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';
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
    //assert(wasmMemory.buffer.byteLength === 36700160);
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
  function ___sys_mkdir(path, mode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doMkdir(path, mode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_stat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
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

  var _emscripten_get_now;_emscripten_get_now = function() { return performance.now(); }
  ;
  
  var _emscripten_get_now_is_monotonic = true;;
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  function _clock_gettime(clk_id, tp) {
      // int clock_gettime(clockid_t clk_id, struct timespec *tp);
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[((tp)>>2)] = (now/1000)|0; // seconds
      HEAP32[(((tp)+(4))>>2)] = ((now % 1000)*1000*1000)|0; // nanoseconds
      return 0;
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
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_ClassHandle();
init_RegisteredPointer();
init_embind();;
UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');;
init_emval();;
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
  "__sys_mkdir": ___sys_mkdir,
  "__sys_stat64": ___sys_stat64,
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
  "clock_gettime": _clock_gettime,
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