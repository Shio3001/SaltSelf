user_name = $(shell whoami)
# Only need to change if you install boost-python from source
#OPENCV = /Users/$(user_name)/opt/anaconda3/envs/py39/include/opencv4/
OPENCV = /usr/local/Cellar/opencv/4.5.3_2/include/opencv4
# -I$(OPENCV)

# PlaneCalculation/PointDraw.cpp PlaneCalculation/Slope.cpp PlaneCalculation/SurfaceCalculation.cpp

# PlaneCalculation/PointDraw.o : PlaneCalculation/PointDraw.cpp
# 	g++ -c PlaneCalculation/PointDraw.cpp -std=c++14  `pkg-config --cflags opencv4` `pkg-config --libs opencv4`

# PlaneCalculation/Slope.o : PlaneCalculation/Slope.cpp
# 	g++ -c PlaneCalculation/Slope.cpp -std=c++14  `pkg-config --cflags opencv4` `pkg-config --libs opencv4`

# PlaneCalculation/SurfaceCalculation.o : PlaneCalculation/SurfaceCalculation.cpp
# 	g++ -c PlaneCalculation/SurfaceCalculation.cpp -std=c++14  `pkg-config --cflags opencv4` `pkg-config --libs opencv4`

# PlaneCalculation/GetTime.o : PlaneCalculation/GetTime.cpp
# 	g++ -c PlaneCalculation/GetTime.cpp -std=c++14  `pkg-config --cflags opencv4` `pkg-config --libs opencv4`

# PlaneCalculation/OpenCvOutput.o : PlaneCalculation/OpenCvOutput.cpp
# 	g++ -c PlaneCalculation/OpenCvOutput.cpp -std=c++14  `pkg-config --cflags opencv4` `pkg-config --libs opencv4`
user_name = $(shell whoami)

main: main.cpp
	g++ -c PlaneCalculation/PointDraw.cpp -std=c++14
	g++ -c PlaneCalculation/Slope.cpp -std=c++14
	g++ -c PlaneCalculation/SurfaceCalculation.cpp -std=c++14
	g++ -c PlaneCalculation/GetTime.cpp -std=c++14
	g++ -c PlaneCalculation/OpenCvOutput.cpp -std=c++14  `pkg-config --cflags opencv4` `pkg-config --libs opencv4`
#g++ -c integration.cpp -std=c++14

#g++ -c integration.cpp GetTime.o PointDraw.o Slope.o SurfaceCalculation.o OpenCvOutput.o

# ここからmain

	g++ -o main.a main.cpp GetTime.o PointDraw.o Slope.o SurfaceCalculation.o OpenCvOutput.o -v -std=c++14 `pkg-config --cflags opencv4` `pkg-config --libs opencv4`
	g++ -o main main.cpp GetTime.o PointDraw.o Slope.o SurfaceCalculation.o OpenCvOutput.o -v -std=c++14 `pkg-config --cflags opencv4` `pkg-config --libs opencv4`

#ここからforjs
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc -c PlaneCalculation/PointDraw.cpp -o js_PointDraw.o -std=c++14
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc -c PlaneCalculation/Slope.cpp  -o js_Slope.o -std=c++14
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc -c PlaneCalculation/SurfaceCalculation.cpp  -o js_SurfaceCalculation.o -std=c++14
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc -c PlaneCalculation/GetTime.cpp  -o js_GetTime.o -std=c++14
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc -c PlaneCalculation/OpenCvOutput.cpp  -o js_OpenCvOutput.o -std=c++14  `pkg-config --cflags opencv4` `pkg-config --libs opencv4`
	/Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc --bind forjs.cpp -s WASM=1 -o wasm_forweb.js `pkg-config --cflags opencv4` `pkg-config --libs opencv4` js_GetTime.o js_PointDraw.o js_Slope.o js_SurfaceCalculation.o js_OpenCvOutput.o

# g++ -o main main.cpp -std=c++14 -c -I/Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

#-I /Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

# 天才 http://omilab.naist.jp/~mukaigawa/misc/Makefile.html

# https://ja.stackoverflow.com/questions/53767/macos-c%E3%81%A7opencv%E3%81%8C%E5%AE%9F%E8%A1%8C%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84 
#救われましたありがとう