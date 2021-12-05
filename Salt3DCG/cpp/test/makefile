user_name = $(shell whoami)

hello:hello.cpp
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc --bind hello.cpp -s WASM=1 -o hello2.js