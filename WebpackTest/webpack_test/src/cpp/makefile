user_name = $(shell whoami)
output: forjs.cpp
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc --bind forjs.cpp --no-entry -s SINGLE_FILE=1 -s ENVIRONMENT="web" -s WASM=1 -s EXPORT_NAME='createModule' -o wasm_forweb.mjs -std=c++14 -s USE_ES6_IMPORT_META=0

#パス通すのめんどくさかった許して