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
target1_dir = ViewPxData

#target0_a = PointDraw
target0_b = Slope
target0_c = SurfaceCalculation
target0_d = GetTime
target0_e = OpenCvOutput

forjs_temp_dir = forjsdir
forjs_prefix = js

main_temp_dir = maindir

#opencvI = `pkg-config --cflags opencv4` 
#opencvL = `pkg-config --libs opencv4`

opencvI = -I/usr/local/opt/opencv/include/opencv4
opencvL = -L/usr/local/opt/opencv/lib -lopencv_gapi -lopencv_stitching -lopencv_alphamat -lopencv_aruco -lopencv_barcode -lopencv_bgsegm -lopencv_bioinspired -lopencv_ccalib -lopencv_dnn_objdetect -lopencv_dnn_superres -lopencv_dpm -lopencv_face -lopencv_freetype -lopencv_fuzzy -lopencv_hfs -lopencv_img_hash -lopencv_intensity_transform -lopencv_line_descriptor -lopencv_mcc -lopencv_quality -lopencv_rapid -lopencv_reg -lopencv_rgbd -lopencv_saliency -lopencv_sfm -lopencv_stereo -lopencv_structured_light -lopencv_phase_unwrapping -lopencv_superres -lopencv_optflow -lopencv_surface_matching -lopencv_tracking -lopencv_highgui -lopencv_datasets -lopencv_text -lopencv_plot -lopencv_videostab -lopencv_videoio -lopencv_viz -lopencv_wechat_qrcode -lopencv_xfeatures2d -lopencv_shape -lopencv_ml -lopencv_ximgproc -lopencv_video -lopencv_dnn -lopencv_xobjdetect -lopencv_objdetect -lopencv_calib3d -lopencv_imgcodecs -lopencv_features2d -lopencv_flann -lopencv_xphoto -lopencv_photo -lopencv_imgproc -lopencv_core
$(warning $(opencvI))
$(warning $(opencvL))

emcc_build = /Users/$(user_name)/Programs/emsdk/upstream/emscripten/emcc

#js_a = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_a).o
js_b = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_b).o
js_c = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_c).o
js_d = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_d).o
js_e = $(forjs_temp_dir)/$(forjs_prefix)_$(target0_e).o

#cpp_a = $(main_temp_dir)/$(target0_a).o
cpp_b = $(main_temp_dir)/$(target0_b).o
cpp_c = $(main_temp_dir)/$(target0_c).o
cpp_d = $(main_temp_dir)/$(target0_d).o
cpp_e = $(main_temp_dir)/$(target0_e).o

#(64*1024*8)の倍数でないとダメ
web_memory = -s INITIAL_MEMORY=20971520

main: main.cpp
#g++ -c $(target0_dir)/$(target0_a).cpp -o $(cpp_a) -std=c++14
	g++ -c $(target0_dir)/$(target0_b).cpp -o $(cpp_b) -std=c++14
	g++ -c $(target0_dir)/$(target0_c).cpp -o $(cpp_c) -std=c++14
	g++ -c $(target0_dir)/$(target0_d).cpp -o $(cpp_d) -std=c++14
	g++ -c $(target1_dir)/$(target0_e).cpp -o $(cpp_e) -std=c++14  $(opencvI) $(opencvL) 
#g++ -c $(target0_dir)/$(target0_e).cpp -std=c++14 $(opencvI) $(opencvL) 


#g++ -c integration.cpp -std=c++14

#g++ -c integration.cpp GetTime.o PointDraw.o Slope.o SurfaceCalculation.o OpenCvOutput.o

# ここからmain

	g++ -o main.a main.cpp $(cpp_b) $(cpp_c) $(cpp_d) $(cpp_e)  -std=c++14 $(opencvI) $(opencvL) 
	g++ -o main main.cpp $(cpp_b) $(cpp_c) $(cpp_d) $(cpp_e) -std=c++14 $(opencvI) $(opencvL) 

#ここからforjs


#$(emcc_build) -c $(target0_dir)/$(target0_a).cpp -o $(js_a) -std=c++14
	$(emcc_build) -c $(target0_dir)/$(target0_b).cpp $(web_memory) -o $(js_b) -std=c++14
	$(emcc_build) -c $(target0_dir)/$(target0_c).cpp $(web_memory) -o $(js_c) -std=c++14
	$(emcc_build) -c $(target0_dir)/$(target0_d).cpp $(web_memory) -o $(js_d) -std=c++14
#$(emcc_build) -c $(target0_dir)/$(target0_e).cpp -o $(js_e) -std=c++14  $(opencvI) $(opencvL) 
	$(emcc_build) --bind forjs.cpp $(js_b) $(js_c) $(js_d) $(web_memory) -s WASM=1 -o forjs/wasm_forweb.js -std=c++14

# g++ -o main main.cpp -std=c++14 -c -I/Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

#-I /Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

# 天才 http://omilab.naist.jp/~mukaigawa/misc/Makefile.html

# https://ja.stackoverflow.com/questions/53767/macos-c%E3%81%A7opencv%E3%81%8C%E5%AE%9F%E8%A1%8C%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84 
#救われましたありがとう