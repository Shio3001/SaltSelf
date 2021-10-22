#ifndef SurfaceData_include
#define SurfaceData_include
#include "../stdload/stdload.hpp"
#include "../VertexXyzData/VertexXyzData.hpp"

class SurfaceData
{
private:
    string m_surface_data_key;
    map<int, VertexXyzData *> m_edge_data;

public:
    SurfaceData(string send_surface_data_key)
    {
        m_surface_data_key = send_surface_data_key;
        //cout << "SurfaceData コンストラクタ" << endl;
    }
    ~SurfaceData()
    {
        //cout << "SurfaceData デストラクタ" << endl;
    }

    VertexXyzData *GetVertex(int vertex_number)
    {
        VertexXyzData *vertex;
        vertex = m_edge_data[vertex_number];
        return vertex;
    }

    void AddVertex(VertexXyzData &vertex)
    {

        //cout << "SurfaceData    AddVertex" << endl;
        //cout << &vertex << endl;
        //cout << " " << endl;
        int vertex_size = GetVertexSize();
        m_edge_data[vertex_size] = &vertex;
    }
    void DeleteVertex(string vertex_key)
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
    vector<int> GetVertexKey()
    {
        vector<int> surface_data_key;
        auto begin = m_edge_data.begin(), end = m_edge_data.end();
        for (auto iter = begin; iter != end; iter++)
        {
            int key = iter->first;
            surface_data_key.push_back(key);
        }
        return surface_data_key;
    }
};

#endif // C_HPP