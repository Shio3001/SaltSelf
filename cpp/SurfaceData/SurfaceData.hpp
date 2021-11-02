#ifndef SurfaceData_include
#define SurfaceData_include
#include "../stdload/stdload.hpp"
#include "../VertexXyzData/VertexXyzData.hpp"

class SurfaceData
{
private:
    std::string m_surface_data_key;
    //std::map<int, VertexXyzData *> m_edge_data;
    std::map<std::string, VertexXyzData> m_edge_VertexXyzData_data;
    std::map<int, std::string> m_edge_int_data;

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

    VertexXyzData GetVertex(int vertex_number)
    {
        VertexXyzData vertex;
        vertex = m_edge_VertexXyzData_data[vertex_number];
        return vertex;
    }

    void AddVertex(VertexXyzData vertex)
    {
        m_edge_VertexXyzData_data.push_back(vertex);
    }

    void DeleteVertex(std::string vertex_key)
    {
        int vertex_size = GetVertexSize();
        int discoveries = 0;

        for (int i = 0; i < vertex_size; i++)
        {
            VertexXyzData *vertex_xyz_data = m_edge_int_data[vertex_size];

            if (vertex_xyz_data->VertexKey() == vertex_key)
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
    std::vector<std::string> GetVertexKey()
    {
        std::vector<std::string> surface_data_key;

        int vertex_size = GetVertexSize();

        for (int i = 0; i < vertex_size; i++)
        {
            surface_data_key.push_back(m_edge_int_data[i])
        }

        return surface_data_key;
    }
};

#endif // C_HPP