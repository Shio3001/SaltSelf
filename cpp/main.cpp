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

class VertexControl
{
private:
    std::vector<std::vector<int>> vertex_xyz;
    std::map<std::string, int *> vertex_key_pointer;

public:
    VertexControl()
    {
    }

    void add_vertex_xyz(std::string key, int x, int y, int z)
    {
        std::vector<int> in_data;
        in_data.push_back(x);
        in_data.push_back(y);
        in_data.push_back(z);

        vertex_xyz.push_back(in_data);

        int &add_xyz = vertex_xyz.back()[0];
        //int &add_x = add_xyz.begin();
        vertex_key_pointer[key] = &add_xyz;

        cout << vertex_key_pointer[key] << endl;
    }

    std::vector<int> get_vertex_xyz(int num)
    {
        std::vector<int> re_vector = vertex_xyz[num];
        return re_vector;
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

    vertex_control->add_vertex_xyz(key, x, y, z);
}
