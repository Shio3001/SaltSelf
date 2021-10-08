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

void OpenCvOutput(int draw_pointer[], int x_width, int y_hight)
{

    int channel = 3;

    //y_hight, x_width, channel

    //cv::Mat output_mat = cv::Mat::zeros(500, 500, CV_8UC3);

    cv::Mat output_mat(cv::Size(x_width, y_hight), CV_8UC3, cv::Scalar(0, 0, 0));
    //cv::Mat output_mat(cv::Size(320, 240), CV_8UC3, cv::Scalar(0, 0, 0));
    //https://tech-blog.s-yoshiki.com/entry/76

    cout << "x y" << x_width << " " << y_hight << endl;

    for (int y = 0; y < y_hight; y++)
    {
        for (int x = 0; x < x_width; x++)
        {
            int ipx = x_width * y + x;

            //cout << ipx << endl;
            //cout << draw_pointer[ipx] << endl;

            //int cvy = y_hight - y;

            for (int c = 0; c < channel; c++)
            {
                if (draw_pointer[ipx] == 255)
                {
                    output_mat.at<cv::Vec3b>(y, x)[0] = draw_pointer[ipx];
                    output_mat.at<cv::Vec3b>(y, x)[1] = draw_pointer[ipx];
                    output_mat.at<cv::Vec3b>(y, x)[2] = draw_pointer[ipx];
                    continue;
                }

                output_mat.at<cv::Vec3b>(y, x)[0] = draw_pointer[ipx] & (83 * 3);
                output_mat.at<cv::Vec3b>(y, x)[1] = draw_pointer[ipx] & (83 * 2);
                output_mat.at<cv::Vec3b>(y, x)[2] = draw_pointer[ipx] & (83 * 1);
            }
        }
    }

    cv::imwrite("/Users/maruyama/Programs/MV55project/salt3DCG/cpp/output_mat.png", output_mat);
}
void DimensionsTwoOne(int *draw_pointer, int x_width, int y_hight)
{
}
void DimensionsOneTwo(int *draw_pointer, int x_width, int y_hight)
{
}

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
    int m_mode;

    double m0_a;
    int m0_b;
    int m0_x1;
    int m0_x2;

    int m1_tan90_x;
    int m1_y1;
    int m1_y2;
    int m1_fx;

public:
    LinearFunction()
    {
        cout << "LinearFunction コンストラクタ" << endl;
    }
    ~LinearFunction()
    {
        cout << "LinearFunction デストラクタ" << endl;
    }
    void SetModeDiagonal(double send_a, int send_b, int send_x1, int send_x2) //mode0
    {
        m0_a = send_a;   //傾き
        m0_b = send_b;   //定数 １次関数のあれ
        m0_x1 = send_x1; // x1 << x << x2って数学でやりますよね？
        m0_x2 = send_x2;
        m_mode = 0;

        cout << "SetModeDiagonal " << m0_a << " " << m0_b << " " << m0_x1 << " " << m0_x2 << " " << m_mode << endl;
    }
    void SetModeTan90(int send_x, int send_y1, int send_y2) //mode1
    {
        m1_fx = send_x;  //基準値(左右確認)
        m1_y1 = send_y1; //下限値
        m1_y2 = send_y2; //上限値
        m_mode = 1;

        cout << "SetModeTan90 " << m1_fx << " " << m1_y1 << " " << m1_y2 << " " << m_mode << endl;
    }
    int GetMode()
    {
        return m_mode;
    }

    int RangeQuery(int y)
    {
        int result;
        if (m_mode == 0) //傾きが垂直ではない場合
        {
            double x = (y - m0_b) / m0_a;

            bool x1x2 = m0_x1 <= x && x < m0_x2;
            bool x2x1 = m0_x2 <= x && x < m0_x1;
            int resultX = x1x2 || x2x1 ? 1 : 0;

            result = resultX;

            //cout << "result x1x2 " << x1x2 << " x2x1 " << x2x1 << " x " << x << " y " << y << " x1 " << x1 << " x2 " << x2 << endl;
        }
        if (m_mode == 1) //垂直な場合 tan90は解無しなのでそれの対策
        {
            bool y1y2 = m1_y1 <= y && y <= m1_y2;
            bool y2y1 = m1_y2 <= y && y <= m1_y1;
            int resultY = y1y2 || y2y1 ? 1 : 0;

            result = resultY;
        }
        return result;
    }

    int YtoX(int y)
    {
        //int region = y > a * x + b ? 1 : -1; //領域が上か否か

        int returnX = 1;

        if (m_mode == 0) //傾きが垂直ではない場合
        {
            returnX = (y - m0_b) / m0_a;
        }
        if (m_mode == 1) //垂直な場合 tan90は解無しなのでそれの対策
        {
            returnX = m1_fx;
        }
        return returnX;
    }
    int XtoY(int x)
    {
        int y = m0_a * x + m0_b;
        return y;
    }
};

class PlaneCalculationControl
{
private:
    SurfaceData *surface_data;
    std::vector<LinearFunction *> m_linear_function_data;

    int x_width = 1280;
    int y_hight = 720;

    int *draw = new int[y_hight * x_width];

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

        for (int vs = 0; vs < vertex_size; vs++)
        {
            int now = vs;
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

            int vertex_point_add = 1;
            int next;

            next = (vs + vertex_point_add) % vertex_size;

            cout << "next " << next << endl;
            cout << "vertex_point_add " << vertex_point_add << endl;

            VertexXyzData *vertex2 = surface_data->GetVertex(next);
            cout << "vertex2 class 取得済み" << endl;
            int *xyz2 = vertex2->Get_xyz();

            x2 = xyz2[0];
            y2 = xyz2[1];

            cout << "vertex2 座標値 取得済み" << endl;
            cout << "x2 y2 " << x2 << " " << y2 << endl;

            double x_distance = x2 - x1;
            double y_distance = y2 - y1;

            cout << "x_distance " << x_distance << " y_distance " << y_distance << endl;

            LinearFunction *linear_function = new LinearFunction();

            if (x_distance == 0)
            {
                int evaluation_x = x1;
                linear_function->SetModeTan90(evaluation_x, y1, y2);
            }
            else
            {
                double slope = y_distance / x_distance;
                int b = y1 - slope * x1;
                cout << "slope " << slope << " b " << b << endl;

                linear_function->SetModeDiagonal(slope, b, x1, x2);
            }

            m_linear_function_data.push_back(linear_function);

            //ここにDeleteを書いてはならない(消えちゃうので)

            cout << " " << endl;
            cout << " " << endl;
        }
    }

    void SurfaceCalculation()
    {
        cout << "SurfaceCalculation sta" << endl;

        int sum = 0;

        auto sec_since_epoch1 = std::chrono::duration_cast<std::chrono::seconds>(std::chrono::system_clock::now().time_since_epoch()).count();

        int linear_size = m_linear_function_data.size();

        for (int y = 0; y < y_hight; y++)
        {
            for (int x = 0; x < x_width; x++)
            {
                int ipx = x_width * y + x;

                int *fx = new int[linear_size];

                int left = 0;

                int range_query = 1;

                for (int fi_add = 0; fi_add < linear_size; fi_add++)
                {
                    LinearFunction *now_linear_function = m_linear_function_data[fi_add];
                    int returnX = now_linear_function->YtoX(y);

                    int now_range_query = now_linear_function->RangeQuery(y);

                    if (now_range_query != 0)
                    {
                        fx[fi_add - left] = returnX;
                    }
                    else
                    {
                        left += 1;
                    }

                    range_query += now_range_query;
                    //ソート https://codezine.jp/article/detail/6020
                }

                //cout << "linear_size " << linear_size << " left " << left << endl;

                int linear_search_from_before = -1;
                int linear_search_from_after = 0;

                for (int fi_search = 0; fi_search < linear_size - left; fi_search++)
                {
                    if (fx[fi_search] <= x)
                    {
                        linear_search_from_before += 1;
                        //cout << fi_add << " " << fx[fi_search] << " " << x << endl;
                    }
                    else
                    {
                        linear_search_from_after += 1;
                    }
                }

                int mod2 = linear_search_from_before & 2;

                if (mod2 == 0 && range_query != 0 && linear_search_from_after != 0)
                {
                    int result = range_query;
                    sum += result;
                    draw[ipx] = result * 83;
                }
                delete[] fx;
            }
        }
        cout << "み" << endl;
        for (int x = 0; x < x_width; x++)
        {
            for (int fi_add = 0; fi_add < linear_size; fi_add++)
            {
                LinearFunction *now_linear_function = m_linear_function_data[fi_add];
                int returnY = now_linear_function->XtoY(x);
                int ipx = x_width * returnY + x;

                if (ipx >= x_width * y_hight)
                {
                    continue;
                }

                if (ipx + 1 < x_width * y_hight)
                {
                    draw[ipx + 1] = 255;
                }
                if (ipx - 1 >= 0)
                {
                    draw[ipx - 1] = 255;
                }

                draw[ipx] = 255;

                cout << ipx << endl;
            }
        }
        cout << "出" << endl;

        auto sec_since_epoch2 = std::chrono::duration_cast<std::chrono::seconds>(std::chrono::system_clock::now().time_since_epoch()).count();

        cout << sec_since_epoch1 << endl;
        cout << sec_since_epoch2 << endl;

        cout << sum << endl;

        cout << "SurfaceCalculation end" << endl;

        OpenCvOutput(draw, x_width, y_hight);
    }
    void FunctionCalculation()
    {
    }

    void image_output()
    {
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
        AddVertexXyz("A", 50, 50, 0);
        AddVertexXyz("B", 360, 360, 0);
        AddVertexXyz("C", 600, 400, 0);
        AddVertexXyz("D", 1000, 150, 0);
        AddVertexXyz("E", 200, 100, 0);

        AddSurface("S");
        AddVertexForSurface("S", "A");
        AddVertexForSurface("S", "B");
        AddVertexForSurface("S", "C");
        AddVertexForSurface("S", "D");
        AddVertexForSurface("S", "E");

        SurfacePlaneCalculation("S");
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
        plane_calculation_control->SurfaceCalculation();
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