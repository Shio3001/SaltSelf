# default PTRHON_VERSION is 3.6 on Mac, 3.5 in other os
# if you installed other python version, Please specific your Python Version below
PYTHON_VERSION = 3.9
TARGET = main

CFLAGS = -lm -pthread -O3 -std=c++11 -march=native -Wall -funroll-loops -Wno-unused-result
osname := $(shell uname)
user_name = $(shell whoami)

# Only need to change if you install boost-python from source

g++ -o main main.cpp -std=c++14

#/$(user_name)/

#g++ -I`python -c 'from distutils.sysconfig import *; print get_python_inc()'` -DPIC -bundle -fPIC -o basic.so basic.cpp -lboost_python  -framework Python


#https://github.com/zpoint/Boost-Python-Examples/tree/master/Examples/basic_interface ← 参考にしました

#make しなさい〜〜〜〜〜〜！

#PYTHON_INCLUDE = /Users/"name"/opt/anaconda3/envs/py39/include/python3.9
#LIBPYTHON_PATH = /Users/"name"/opt/anaconda3/envs/py39/lib/python3.9/config-3.9-darwin

#boostは別にビルドしろばか