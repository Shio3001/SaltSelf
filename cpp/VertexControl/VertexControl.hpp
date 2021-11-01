#ifndef VertexControl_include
#define VertexControl_include
#include "../stdload/stdload.hpp"
#include "../PlaneCalculation/PlaneCalculation.hpp"
#include "../ViewPxData/ViewPxData.hpp"

class VertexControl
{
private:
    std::map<std::string, VertexXyzData *> m_vertex_data;
    std::map<std::string, SurfaceData *> m_surface_data;

    //std::map<std::string, EdgeData *> m_edge_data;

    ViewPxData *view_px_data;

public:
    VertexControl(ViewPxData *send_view_px_data)
    {
        view_px_data = send_view_px_data;
        //ここからテスト
        AddSurface("S");
        SurfacePlaneCalculation("S");
    }
    ~VertexControl()
    {
        //std::cout << "VertexControl デストラクタ" << std::endl;
    }
    //ここら辺に出力への関数を記入する
    //SurfaceData丸ごと渡せば良い(ポインタで繋いでるのおで)

    void SurfacePlaneCalculation(std::string surface_key) //平面計算
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

    void AddSurface(std::string key)
    {
        SurfaceData *surface_data = new SurfaceData(key);

        //std::cout << "AddSurface    surface_data" << std::endl;
        //std::cout << &surface_data << std::endl;
        //std::cout << " " << std::endl;

        m_surface_data[key] = surface_data;
    }

    void AddVertexForSurface(std::string surface_key, std::string vertex_key)
    {
        SurfaceData *surface_data = m_surface_data[surface_key];
        VertexXyzData *vertex_xyz_data = m_vertex_data[vertex_key];

        //std::cout << "AddVertexForSurface    surface_data" << std::endl;
        //std::cout << &surface_data << std::endl;
        //std::cout << "AddVertexForSurface    vertex_xyz_data" << std::endl;
        //std::cout << &vertex_xyz_data << std::endl;
        //std::cout << " " << std::endl;

        surface_data->AddVertex(vertex_xyz_data);
    }

    void AddVertexXyz(std::string key, int x, int y, int z)
    {

        VertexXyzData *vertex_xyz_data = new VertexXyzData(key);
        vertex_xyz_data->Xyz(x, y, z);

        m_vertex_data[key] = vertex_xyz_data;

        //std::cout << "AddVertexXyz   vertex_xyz_data " << key << std::endl;
        //std::cout << &vertex_xyz_data << std::endl;
        //std::cout << " " << std::endl;

        //std::cout << vertex_key_pointer[key] << std::endl;
    }

    void DeleteVertexXyz(std::string key)
    {
        VertexXyzData *vertex_xyz_data = m_vertex_data[key];
        delete vertex_xyz_data;
        m_vertex_data.erase(key);
    }
    std::vector<int> GetXYZ(std::string vertex_key)
    {
        std::vector<int> XYZ;
        VertexXyzData *vertex_xyz_data = m_vertex_data[vertex_key];

        int *get_xyz = vertex_xyz_data->Get_xyz();

        for (int i = 0; i < 3; i++)
        {
            XYZ.push_back(get_xyz[i]);
        }

        return XYZ;
    }

    std::vector<std::string> GetVertexXyzDataKeyFromSurface(std::string surface_key)
    {
        std::vector<std::string> surface_vertex_data_key;
        SurfaceData *surface_data = m_surface_data[surface_key];

        surface_vertex_data_key = surface_data->GetVertexKey();

        return surface_vertex_data_key;
    }

    std::vector<std::string> GetSurfaceDataKey()
    {
        std::vector<std::string> surface_data_key;

        auto begin = m_surface_data.begin(), end = m_surface_data.end();
        for (auto iter = begin; iter != end; iter++)
        {
            std::string key = iter->first;
            surface_data_key.push_back(key);
        }
        return surface_data_key;
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
