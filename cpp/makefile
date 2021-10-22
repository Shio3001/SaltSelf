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

wasm_ofile = forjs/
cpp_main_ofile = forjs/

target0_dir = PlaneCalculation

target0_a = PointDraw
target0_b = Slope
target0_c = SurfaceCalculation
target0_d = GetTime
target0_e = OpenCvOutput

forjs_temp_dir = forjsdir
forjs_prefix = js

opencv = `pkg-config --cflags opencv4` `pkg-config --libs opencv4`

emcc_build = /Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc

js_a = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_a).o
js_b = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_b).o
js_c = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_c).o
js_d = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_d).o
js_e = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_e).o

main: main.cpp
	g++ -c $(target0_dir)/$(target0_a).cpp -std=c++14
	g++ -c $(target0_dir)/$(target0_b).cpp -std=c++14
	g++ -c $(target0_dir)/$(target0_c).cpp -std=c++14
	g++ -c $(target0_dir)/$(target0_d).cpp -std=c++14
	g++ -c $(target0_dir)/$(target0_e).cpp -std=c++14 $(opencv)


#g++ -c integration.cpp -std=c++14

#g++ -c integration.cpp GetTime.o PointDraw.o Slope.o SurfaceCalculation.o OpenCvOutput.o

# ここからmain

	g++ -o main.a main.cpp $(target0_a).o $(target0_b).o $(target0_c).o $(target0_d).o $(target0_e).o -std=c++14 $(opencv)
	g++ -o main main.cpp $(target0_a).o $(target0_b).o $(target0_c).o $(target0_d).o $(target0_e).o -std=c++14 $(opencv)

#ここからforjs


	$(emcc_build) -c $(target0_dir)/$(target0_a).cpp -o $(js_a) -std=c++14
	$(emcc_build) -c $(target0_dir)/$(target0_b).cpp -o $(js_b) -std=c++14
	$(emcc_build) -c $(target0_dir)/$(target0_c).cpp -o $(js_c) -std=c++14
	$(emcc_build) -c $(target0_dir)/$(target0_d).cpp -o $(js_d) -std=c++14
	$(emcc_build) -c $(target0_dir)/$(target0_e).cpp -o $(js_e) -std=c++14  $(opencv)
	$(emcc_build)  $(js_a) $(js_b) $(js_c) $(js_d) $(js_e) --bind forjs.cpp -s WASM=1 -o forjs/wasm_forweb.js

# g++ -o main main.cpp -std=c++14 -c -I/Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

#-I /Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

# 天才 http://omilab.naist.jp/~mukaigawa/misc/Makefile.html

# https://ja.stackoverflow.com/questions/53767/macos-c%E3%81%A7opencv%E3%81%8C%E5%AE%9F%E8%A1%8C%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84 
#救われましたありがとう