//3D処理用

// 16ビット モノラル
#include <bits/stdc++.h>
#include <math.h>
#include <stdio.h>
#include <sys/time.h>
//#include <boost/python.hpp>
//#include <boost/python/numpy.hpp>
#include <iomanip>
using namespace std;
//namespace py = boost::python;
//namespace np = boost::python::numpy;
#include <chrono>
#include <ctime>
#include <opencv2/opencv.hpp>

#include "VertexXyzData/VertexXyzData.hpp"
#include "SurfaceData/SurfaceData.hpp"
#include "LinearFunction/LinearFunction.hpp"
#include "PlaneCalculation/PlaneCalculation.hpp"
#include "VertexControl/VertexControl.hpp"

class SpatialCalculationControl
{
};
int main()
{
    VertexControl *vertex_control = new VertexControl;
    std::vector<std::string> test_get_xyz_key = vertex_control->GetVertexXyzDataKey();

    //cout << "main GetVertexXyzDataKey終了" << endl;

    //int test_get_xyz_key.size();

    int test_get_xyz_key_size = test_get_xyz_key.size();

    for (int i = 0; i < test_get_xyz_key_size; i++) //テスト用コード
    {
        //cout << test_get_xyz_key[i] << i << endl;
    }

    delete vertex_control;
    //cout << "終了" << endl;

    //vertex_control->DeleteVertexXyz(key); //テスト用コード
}

// g++ -o main main.cpp -std=c++14

//https://ttsuki.github.io/styleguide/cppguide.ja.html#File_Names
//グーグル命名規則