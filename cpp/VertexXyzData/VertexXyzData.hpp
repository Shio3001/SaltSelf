#ifndef C_HPP
#define C_HPP

class VertexXyzData
{
private:
    int m_xyz[3] = {0, 0, 0};
    std::string m_vertex_xyz_data_key;

public:
    VertexXyzData(std::string send_vertex_xyz_data_key)
    {
        m_vertex_xyz_data_key = send_vertex_xyz_data_key;
        //cout << "VertexXyzData コンストラクタ" << endl;
    }
    ~VertexXyzData()
    {
        //cout << "VertexXyzData デストラクタ" << endl;
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

#endif // C_HPP
