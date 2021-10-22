#ifndef VertexControl_include
#define VertexControl_include
#include "../stdload/stdload.hpp"
#include "../PlaneCalculation/PlaneCalculation.hpp"
#include "../ViewPxData/ViewPxData.hpp"

class VertexControl
{
private:
    map<string, VertexXyzData *> m_vertex_data;
    map<string, SurfaceData *> m_surface_data;

    //map<string, EdgeData *> m_edge_data;

    ViewPxData *view_px_data;

public:
    VertexControl(ViewPxData *send_view_px_data)
    {
        view_px_data = send_view_px_data;
        //ここからテスト
        AddVertexXyz("A", 50, 50, 0);
        AddVertexXyz("B", 5000, 700, 0);
        AddVertexXyz("C", 70, 600, 0);
        AddVertexXyz("D", 20, 400, 0);

        AddSurface("S");
        AddVertexForSurface("S", "A");
        AddVertexForSurface("S", "B");
        AddVertexForSurface("S", "C");
        AddVertexForSurface("S", "D");

        SurfacePlaneCalculation("S");
    }
    ~VertexControl()
    {
        //cout << "VertexControl デストラクタ" << endl;
    }
    //ここら辺に出力への関数を記入する
    //SurfaceData丸ごと渡せば良い(ポインタで繋いでるのおで)

    void SurfacePlaneCalculation(string surface_key) //平面計算
    {
        SurfaceData *surface_data = m_surface_data[surface_key];

        int x_width = view_px_data->Get_x_width();
        int y_hight = view_px_data->Get_y_hight();

        PlaneCalculationControl *plane_calculation_control = new PlaneCalculationControl(x_width, y_hight, *surface_data, *view_px_data);
        plane_calculation_control->Slope();
        plane_calculation_control->SurfaceCalculation();
        delete plane_calculation_control;
    }

    void SurfaceSpatialCalculation() //空間計算
    {
    }

    void AddSurface(string key)
    {
        SurfaceData *surface_data = new SurfaceData(key);

        //cout << "AddSurface    surface_data" << endl;
        //cout << &surface_data << endl;
        //cout << " " << endl;

        m_surface_data[key] = surface_data;
    }

    void AddVertexForSurface(string surface_key, string vertex_key)
    {
        SurfaceData *surface_data = m_surface_data[surface_key];
        VertexXyzData *vertex_xyz_data = m_vertex_data[vertex_key];

        //cout << "AddVertexForSurface    surface_data" << endl;
        //cout << &surface_data << endl;
        //cout << "AddVertexForSurface    vertex_xyz_data" << endl;
        //cout << &vertex_xyz_data << endl;
        //cout << " " << endl;

        surface_data->AddVertex(*vertex_xyz_data);
    }

    void AddVertexXyz(string key, int x, int y, int z)
    {

        VertexXyzData *vertex_xyz_data = new VertexXyzData(key);
        vertex_xyz_data->Xyz(x, y, z);

        m_vertex_data[key] = vertex_xyz_data;

        //cout << "AddVertexXyz   vertex_xyz_data " << key << endl;
        //cout << &vertex_xyz_data << endl;
        //cout << " " << endl;

        //cout << vertex_key_pointer[key] << endl;
    }

    void DeleteVertexXyz(string key)
    {
        VertexXyzData *vertex_xyz_data = m_vertex_data[key];
        delete vertex_xyz_data;
        m_vertex_data.erase(key);
    }

    vector<string> GetVertexXyzDataKey()
    {
        vector<string> vertex_xyz_data_key;
        auto begin = m_vertex_data.begin(), end = m_vertex_data.end();
        for (auto iter = begin; iter != end; iter++)
        {
            string key = iter->first;
            vertex_xyz_data_key.push_back(key);
        }
        return vertex_xyz_data_key;
    }
};

#endif // C_HPP
