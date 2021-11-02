#ifndef SurfaceData_include
#define SurfaceData_include
#include "../stdload/stdload.hpp"
#include "../VertexXyzData/VertexXyzData.hpp"

class SurfaceData
{
private:
    std::string m_surface_data_key;
    //std::map<int, VertexXyzData *> m_edge_data;
    std::map<std::string, VertexXyzData> m_edge_VertexXyzData_data; //タグから頂点データを探す
    std::map<int, std::string> m_edge_int_data;                     //何番めにどの頂点データが入るか

public:
    SurfaceData(std::string send_surface_data_key)
    {
        m_surface_data_key = send_surface_data_key;
        //std::cout << "SurfaceData コンストラクタ" << std::endl;
    }
    ~SurfaceData()
    {
        //std::cout << "SurfaceData デストラクタ" << std::endl;
    }

    VertexXyzData *GetVertex(int vertex_number)
    {
        std::string vertex_key = m_edge_int_data[vertex_number];
        VertexXyzData *vertex = &m_edge_VertexXyzData_data[vertex_key];
        return vertex;
    }

    // void UpdateVertex(VertexXyzData vertex)
    // {
    //     std::string vertex_key = vertex.VertexKey();
    //     m_edge_VertexXyzData_data[vertex_key] = vertex;
    // }

    void AddVertex(VertexXyzData vertex)
    {
        std::string vertex_key = vertex.VertexKey();
        std::vector<std::string> vertex_xyz_data_key = GetVertexXyzDataKey();

        bool flag = false;
        for (int i = 0; i < vertex_xyz_data_key.size(); i++)
        {
            if (vertex_xyz_data_key[i] == vertex_key)
            {
                flag = true;
            }
        }
        if (!flag)
        {
            int new_number = GetVertexSize();
            m_edge_int_data[new_number] = vertex_key;
        }
        //ぼくあんぱんまん 勇気が欲しい

        m_edge_VertexXyzData_data[vertex_key] = vertex;
    }

    void DeleteVertex(std::string vertex_key)
    {
        int vertex_size = GetVertexSize();
        int discoveries = 0;

        for (int i = 0; i < vertex_size; i++)
        {

            std::string edge_key = m_edge_int_data[vertex_size];
            VertexXyzData vertex_xyz_data = m_edge_VertexXyzData_data[edge_key];

            if (vertex_xyz_data.VertexKey() == vertex_key)
            {
                std::string vertex_key = m_edge_int_data[vertex_size];
                m_edge_VertexXyzData_data.erase(vertex_key);
                m_edge_int_data.erase(vertex_size);
                discoveries++;
            }
            else
            {
                m_edge_int_data[vertex_size - discoveries] = m_edge_int_data[vertex_size];
            }
        }
    }

    int GetVertexSize()
    {
        int vertex_size = m_edge_int_data.size();
        return vertex_size;
    }
    std::vector<std::string> GetVertexXyzDataKey()
    {
        std::vector<std::string> vertex_xyz_data_key;

        auto begin = m_edge_VertexXyzData_data.begin(), end = m_edge_VertexXyzData_data.end();
        for (auto iter = begin; iter != end; iter++)
        {
            std::string key = iter->first;
            vertex_xyz_data_key.push_back(key);
        }
        return vertex_xyz_data_key;
    }
    std::vector<std::string> GetVertexKey()
    {
        std::vector<std::string> surface_data_key;

        int vertex_size = GetVertexSize();

        for (int i = 0; i < vertex_size; i++)
        {
            surface_data_key.push_back(m_edge_int_data[i]);
        }

        return surface_data_key;
    }
};

#endif // C_HPP