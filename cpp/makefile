user_name = $(shell whoami)
# Only need to change if you install boost-python from source
OPENCV = /Users/$(user_name)/opt/anaconda3/envs/py39/include/opencv4/
# -I$(OPENCV)

main.o: main.cpp
	g++ main.cpp -o main -std=c++14 -c -I$(OPENCV)


#-I /Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

# 天才 http://omilab.naist.jp/~mukaigawa/misc/Makefile.html