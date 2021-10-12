user_name = $(shell whoami)
# Only need to change if you install boost-python from source
#OPENCV = /Users/$(user_name)/opt/anaconda3/envs/py39/include/opencv4/
OPENCV = /usr/local/Cellar/opencv/4.5.3_2/include/opencv4
# -I$(OPENCV)

main: main.cpp
	g++ -o main main.cpp -std=c++14 -I PlaneCalculation.hpp `pkg-config --cflags opencv4` `pkg-config --libs opencv4` -v

# g++ -o main main.cpp -std=c++14 -c -I/Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

#-I /Users/maruyama/opt/anaconda3/envs/py39/include/opencv4/

# 天才 http://omilab.naist.jp/~mukaigawa/misc/Makefile.html

# https://ja.stackoverflow.com/questions/53767/macos-c%E3%81%A7opencv%E3%81%8C%E5%AE%9F%E8%A1%8C%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84 
#救われましたありがとう