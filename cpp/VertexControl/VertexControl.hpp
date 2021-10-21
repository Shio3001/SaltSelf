#ifndef VertexControl_include
#define VertexControl_include
#include <bits/stdc++.h>
#include "../PlaneCalculation/PlaneCalculation.hpp"

using namespace std;
class VertexControl
{
private:
    std::map<std::string, VertexXyzData *> m_vertex_data;
    std::map<std::string, SurfaceData *> m_surface_data;

    ViewPxData *view_px_data_have_vertex_control;

    //std::map<std::string, EdgeData *> m_edge_data;

public:
    VertexControl()
    {
        //cout << "VertexControl コンストラクタ" << endl;

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

    void SurfacePlaneCalculation(std::string surface_key) //平面計算
    {
        SurfaceData *surface_data = m_surface_data[surface_key];
        PlaneCalculationControl *plane_calculation_control = new PlaneCalculationControl(*surface_data);
        plane_calculation_control->Slope();
        plane_calculation_control->SurfaceCalculation();
        view_px_data_have_vertex_control = plane_calculation_control->GetViewPxData();
        delete plane_calculation_control;
    }

    ViewPxData* GetViewPxDataHaveVertexControl()
    {
        return *view_px_data_have_vertex_control;
    }

    void SurfaceSpatialCalculation() //空間計算
    {
    }

    void AddSurface(std::string key)
    {
        SurfaceData *surface_data = new SurfaceData(key);

        //cout << "AddSurface    surface_data" << endl;
        //cout << &surface_data << endl;
        //cout << " " << endl;

        m_surface_data[key] = surface_data;
    }

    void AddVertexForSurface(std::string surface_key, std::string vertex_key)
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

    void AddVertexXyz(std::string key, int x, int y, int z)
    {

        VertexXyzData *vertex_xyz_data = new VertexXyzData(key);
        vertex_xyz_data->Xyz(x, y, z);

        m_vertex_data[key] = vertex_xyz_data;

        //cout << "AddVertexXyz   vertex_xyz_data " << key << endl;
        //cout << &vertex_xyz_data << endl;
        //cout << " " << endl;

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

#endif // C_HPP
