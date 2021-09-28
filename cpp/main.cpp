//3D処理用

// 16ビット モノラル
#include <bits/stdc++.h>
#include <math.h>
#include <stdio.h>

//#include <boost/python.hpp>
//#include <boost/python/numpy.hpp>
#include <iomanip>
using namespace std;
//namespace py = boost::python;
//namespace np = boost::python::numpy;

class VertexXyzData
{
private:
    int xyz[3] = {0, 0, 0};

public:
    VertexXyzData()
    {
        cout << "VertexXyzData コンストラクタ" << endl;
    }
    ~VertexXyzData()
    {
        cout << "VertexXyzData デストラクタ" << endl;
    }

    void Xyz(int x, int y, int z)
    {
        xyz[0] = x;
        xyz[1] = y;
        xyz[2] = z;
    }
    void Xy(int x, int y)
    {
        xyz[0] = x;
        xyz[1] = y;
    }

    void X(int x)
    {
        xyz[0] = x;
    }
    void Y(int y)
    {
        xyz[1] = y;
    }
    void Z(int z)
    {
        xyz[2] = z;
    }
    int *Get_xyz() //これはアドレスが返却されます
    {
        return &xyz[0];
    }
};

class VertexControl
{
private:
    std::map<std::string, VertexXyzData *> vertex_data;

public:
    VertexControl()
    {
        cout << "VertexControl コンストラクタ" << endl;
    }
    ~VertexControl()
    {
        cout << "VertexControl デストラクタ" << endl;
    }
    void AddVertexXyz(std::string key, int x, int y, int z)
    {
        VertexXyzData *vertex_xyz_data = new VertexXyzData;
        vertex_xyz_data->Xyz(x, y, z);
        cout << vertex_xyz_data << endl;
        vertex_data[key] = vertex_xyz_data;

        cout << "AddVertexXyz" << endl;
        //cout << vertex_key_pointer[key] << endl;
    }

    void DeleteVertexXyz(std::string key)
    {
        VertexXyzData *vertex_xyz_data = vertex_data[key];
        delete vertex_xyz_data;
        vertex_data.erase(key);
    }

    std::vector<std::string> GetVertexXyzDataKey()
    {
        std::vector<std::string> vertex_xyz_data_key;
        auto begin = vertex_data.begin(), end = vertex_data.end();
        for (auto iter = begin; iter != end; iter++)
        {
            std::string key = iter->first;
            vertex_xyz_data_key.push_back(key);
        }
        return vertex_xyz_data_key;
    }

private:
};

int main()
{
    VertexControl *vertex_control = new VertexControl();
    std::string key;
    int x;
    int y;
    int z;

    cin >> key;
    cin >> x;
    cin >> y;
    cin >> z;

    vertex_control->AddVertexXyz(key, x, y, z);

    std::vector<std::string> test_get_xyz_key = vertex_control->GetVertexXyzDataKey();
    for (int i = 0; i < test_get_xyz_key.size(); i++)
    {
        cout << test_get_xyz_key[i] << endl;
    }

    vertex_control->DeleteVertexXyz(key);

    std::vector<std::string> test_get_xyz_key2 = vertex_control->GetVertexXyzDataKey();
    for (int i = 0; i < test_get_xyz_key2.size(); i++)
    {
        cout << test_get_xyz_key2[i] << endl;
    }
}

// g++ -o main main.cpp -std=c++14

//https://ttsuki.github.io/styleguide/cppguide.ja.html#File_Names
//グーグル命名規則