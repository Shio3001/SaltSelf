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

class VertexXyzData
{
private:
    int m_xyz[3] = {0, 0, 0};
    std::string m_vertex_xyz_data_key;

public:
    VertexXyzData(std::string send_vertex_xyz_data_key)
    {
        m_vertex_xyz_data_key = send_vertex_xyz_data_key;
        cout << "VertexXyzData コンストラクタ" << endl;
    }
    ~VertexXyzData()
    {
        cout << "VertexXyzData デストラクタ" << endl;
    }

    std::string VertexKey()
    {
        return m_vertex_xyz_data_key;
    }

    void Xyz(int x, int y, int z)
    {
        m_xyz[0] = x;
        m_xyz[1] = y;
        m_xyz[2] = z;
    }
    void Xy(int x, int y)
    {
        m_xyz[0] = x;
        m_xyz[1] = y;
    }

    void X(int x)
    {
        m_xyz[0] = x;
    }
    void Y(int y)
    {
        m_xyz[1] = y;
    }
    void Z(int z)
    {
        m_xyz[2] = z;
    }
    int *Get_xyz() //これはアドレスが返却されます
    {
        return &m_xyz[0];
    }
};

class SurfaceData
{
private:
    std::string m_surface_data_key;
    std::map<int, VertexXyzData *> m_edge_data;
    int color[4];

public:
    SurfaceData(std::string send_surface_data_key)
    {
        m_surface_data_key = send_surface_data_key;
        cout << "SurfaceData コンストラクタ" << endl;
    }
    ~SurfaceData()
    {
        cout << "SurfaceData デストラクタ" << endl;
    }

    VertexXyzData *GetVertex(int vertex_number)
    {
        VertexXyzData *vertex;
        vertex = m_edge_data[vertex_number];
        return vertex;
    }

    void AddVertex(VertexXyzData &vertex)
    {

        cout << "SurfaceData    AddVertex" << endl;
        cout << &vertex << endl;
        cout << " " << endl;
        int vertex_size = GetVertexSize();
        m_edge_data[vertex_size] = &vertex;
    }
    void DeleteVertex(std::string vertex_key)
    {
        int vertex_size = GetVertexSize();
        int discoveries = 0;

        for (int i = 0; i < vertex_size; i++)
        {
            VertexXyzData *vertex_xyz_data = m_edge_data[vertex_size];

            if (vertex_xyz_data->VertexKey() == vertex_key)
            {
                m_edge_data.erase(vertex_size);
                discoveries++;
            }
            else
            {
                m_edge_data[vertex_size - discoveries] = m_edge_data[vertex_size];
            }
        }
    }

    int GetVertexSize()
    {
        int vertex_size = m_edge_data.size();
        return vertex_size;
    }
    std::vector<int> GetVertexKey()
    {
        std::vector<int> surface_data_key;
        auto begin = m_edge_data.begin(), end = m_edge_data.end();
        for (auto iter = begin; iter != end; iter++)
        {
            int key = iter->first;
            surface_data_key.push_back(key);
        }
        return surface_data_key;
    }
};

class LinearFunction
{
private:
    int mode;
    int inequalities;

    double a;
    int b;
    int x1;
    int x2;

    int tan90_x;
    int y1;
    int y2;

public:
    LinearFunction()
    {
        cout << "LinearFunction コンストラクタ" << endl;
    }
    ~LinearFunction()
    {
        cout << "LinearFunction デストラクタ" << endl;
    }
    void SetModeDiagonal(int send_inequalities, double send_a, int send_b, int send_x1, int send_x2) //mode0
    {
        inequalities = send_inequalities;
        a = send_a;
        b = send_b;
        x1 = send_x1;
        x2 = send_x2;
        mode = 0;
    }
    void SetModeTan90(int send_inequalities, int send_x, int send_y1, int send_y2) //mode1
    {
        inequalities = send_inequalities;
        y1 = send_y1;
        y2 = send_y2;
        mode = 1;
    }
    int GetMode()
    {
        return mode;
    }

    bool SurfaceTreatment(int x, int y)
    {
    }
    int LineTreatment(int x)
    {
    }
};

class PlaneCalculationControl
{
private:
    SurfaceData *surface_data;

public:
    PlaneCalculationControl(SurfaceData &send_surface_data)
    {
        surface_data = &send_surface_data;
        cout << "PlaneCalculationControl コンストラクタ" << endl;
    }
    ~PlaneCalculationControl()
    {
        cout << "PlaneCalculationControl デストラクタ" << endl;
    }

    void Slope()
    {
        int vertex_size = surface_data->GetVertexSize();

        if (vertex_size <= 1)
        {
            cout << "1次元破棄" << endl;
            return;
        }

        for (int i = 0; i < vertex_size; i++)
        {
            int now = i;
            cout << "now " << now << endl;
            //<条件式> ? <数値１> : <数値２>
            VertexXyzData *vertex1 = surface_data->GetVertex(now);
            cout << "vertex1 class 取得済み" << endl;
            int *xyz1 = vertex1->Get_xyz();
            cout << "vertex1 座標値 取得済み" << endl;
            int x1 = xyz1[0];
            int y1 = xyz1[1];
            cout << "x1 y1 " << x1 << " " << y1 << endl;

            cout << " " << endl;

            int x2 = 0;
            int y2 = 0;
            int x2_add = 0;
            int y2_add = 0;

            int add = 1;

            int dimension = 2;
            int inequalities = 0;

            do
            {
                int next = (i + add) % (vertex_size);

                cout << "next " << next << endl;
                cout << "add " << add << endl;

                if (now == next)
                {
                    cout << "一次元終了" << endl;
                    dimension = 1;
                    break;
                }

                VertexXyzData *vertex2 = surface_data->GetVertex(next);
                cout << "vertex2 class 取得済み" << endl;
                int *xyz2 = vertex2->Get_xyz();

                if (add == 1)
                {
                    x2 = xyz2[0];
                    y2 = xyz2[1];
                }

                x2_add = xyz2[0];
                y2_add = xyz2[1];
                cout << "vertex2 座標値 取得済み" << endl;
                cout << "x2 y2 " << x2 << " " << y2 << endl;
                add++;

            } while (x1 == x2_add);

            if (dimension != 1)
            {
                if (x1 < x2_add)
                {
                    inequalities = 1;
                }
                if (x1 > x2_add)
                {
                    inequalities = -1;
                }
            }
            else
            {
                inequalities = 0;
            }

            int x_distance = x2 - x1;
            int y_distance = y2 - y1;

            if (x_distance == 0)
            {
                int evaluation_x = x1;
            }
            else
            {
                double slope = 0;
                slope = y_distance / x_distance;
                int b = y1 - slope * x1;
                cout << "slope " << slope << " b " << b << endl;
            }

            cout << " " << endl;
            cout << " " << endl;
        }
    }
};
class SpatialCalculationControl
{
};
class VertexControl
{
private:
    std::map<std::string, VertexXyzData *> m_vertex_data;
    std::map<std::string, SurfaceData *> m_surface_data;

    //std::map<std::string, EdgeData *> m_edge_data;

public:
    VertexControl()
    {
        cout << "VertexControl コンストラクタ" << endl;

        //ここからテスト
        AddVertexXyz("A", 0, 0, 0);
        AddVertexXyz("B", 100, 0, 0);
        AddVertexXyz("C", 0, 100, 0);

        AddSurface("S");
        AddVertexForSurface("S", "A");
        AddVertexForSurface("S", "B");
        AddVertexForSurface("S", "C");

        SurfacePlaneCalculation("S");

        VertexXyzData *vertex_xyz_dataA = m_vertex_data["A"];
        cout << "m_vertex_dataA" << &vertex_xyz_dataA << endl;
        cout << vertex_xyz_dataA->VertexKey() << endl;

        VertexXyzData *vertex_xyz_dataB = m_vertex_data["B"];
        cout << "m_vertex_dataB" << &vertex_xyz_dataB << endl;
        cout << vertex_xyz_dataB->VertexKey() << endl;

        VertexXyzData *vertex_xyz_dataC = m_vertex_data["C"];
        cout << "m_vertex_dataC" << &vertex_xyz_dataC << endl;
        cout << vertex_xyz_dataC->VertexKey() << endl;
    }
    ~VertexControl()
    {
        cout << "VertexControl デストラクタ" << endl;
    }
    //ここら辺に出力への関数を記入する
    //SurfaceData丸ごと渡せば良い(ポインタで繋いでるのおで)

    void SurfacePlaneCalculation(std::string surface_key) //平面計算
    {
        SurfaceData *surface_data = m_surface_data[surface_key];
        PlaneCalculationControl *plane_calculation_control = new PlaneCalculationControl(*surface_data);
        plane_calculation_control->Slope();
        delete plane_calculation_control;
    }

    void SurfaceSpatialCalculation() //空間計算
    {
    }

    void AddSurface(std::string key)
    {
        SurfaceData *surface_data = new SurfaceData(key);

        cout << "AddSurface    surface_data" << endl;
        cout << &surface_data << endl;
        cout << " " << endl;

        m_surface_data[key] = surface_data;
    }

    void AddVertexForSurface(std::string surface_key, std::string vertex_key)
    {
        SurfaceData *surface_data = m_surface_data[surface_key];
        VertexXyzData *vertex_xyz_data = m_vertex_data[vertex_key];

        cout << "AddVertexForSurface    surface_data" << endl;
        cout << &surface_data << endl;
        cout << "AddVertexForSurface    vertex_xyz_data" << endl;
        cout << &vertex_xyz_data << endl;
        cout << " " << endl;

        surface_data->AddVertex(*vertex_xyz_data);
    }

    void AddVertexXyz(std::string key, int x, int y, int z)
    {

        VertexXyzData *vertex_xyz_data = new VertexXyzData(key);
        vertex_xyz_data->Xyz(x, y, z);

        m_vertex_data[key] = vertex_xyz_data;

        cout << "AddVertexXyz   vertex_xyz_data " << key << endl;
        cout << &vertex_xyz_data << endl;
        cout << " " << endl;

        //cout << vertex_key_pointer[key] << endl;
    }

    void DeleteVertexXyz(std::string key)
    {
        VertexXyzData *vertex_xyz_data = m_vertex_data[key];
        delete vertex_xyz_data;
        m_vertex_data.erase(key);
    }

    std::vector<std::string> GetVertexXyzDataKey()
    {
        std::vector<std::string> vertex_xyz_data_key;
        auto begin = m_vertex_data.begin(), end = m_vertex_data.end();
        for (auto iter = begin; iter != end; iter++)
        {
            std::string key = iter->first;
            vertex_xyz_data_key.push_back(key);
        }
        return vertex_xyz_data_key;
    }
};

int main()
{
    VertexControl *vertex_control = new VertexControl;

    std::vector<std::string> test_get_xyz_key = vertex_control->GetVertexXyzDataKey();
    for (int i = 0; i < test_get_xyz_key.size(); i++) //テスト用コード
    {
        cout << test_get_xyz_key[i] << endl;
    }

    //vertex_control->DeleteVertexXyz(key); //テスト用コード
}

// g++ -o main main.cpp -std=c++14

//https://ttsuki.github.io/styleguide/cppguide.ja.html#File_Names
//グーグル命名規則