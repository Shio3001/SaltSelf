#include "PlaneCalculation.hpp"
void PlaneCalculationControl::Slope()
{
    int vertex_size = surface_data->GetVertexSize();

    if (vertex_size <= 1)
    {
        //cout << "1次元破棄" << endl;
        return;
    }

    for (int vs = 0; vs < vertex_size; vs++)
    {
        int now = vs;
        //cout << "now " << now << endl;
        //<条件式> ? <数値１> : <数値２>
        VertexXyzData *vertex1 = surface_data->GetVertex(now);
        //cout << "vertex1 class 取得済み" << endl;
        int *xyz1 = vertex1->Get_xyz();
        //cout << "vertex1 座標値 取得済み" << endl;
        int x1 = xyz1[0];
        int y1 = xyz1[1];
        //cout << "x1 y1 " << x1 << " " << y1 << endl;

        //cout << " " << endl;

        int x2 = 0;
        int y2 = 0;

        int vertex_point_add = 1;
        int next;

        next = (vs + vertex_point_add) % vertex_size;

        //cout << "next " << next << endl;
        //cout << "vertex_point_add " << vertex_point_add << endl;

        VertexXyzData *vertex2 = surface_data->GetVertex(next);
        //cout << "vertex2 class 取得済み" << endl;
        int *xyz2 = vertex2->Get_xyz();

        x2 = xyz2[0];
        y2 = xyz2[1];

        //cout << "vertex2 座標値 取得済み" << endl;
        //cout << "x2 y2 " << x2 << " " << y2 << endl;

        double x_distance = x2 - x1;
        double y_distance = y2 - y1;

        //cout << "x_distance " << x_distance << " y_distance " << y_distance << endl;

        LinearFunction *linear_function = new LinearFunction();

        if (x_distance == 0)
        {
            int evaluation_x = x1;
            linear_function->SetModeTan90(evaluation_x, y1, y2);
        }
        else
        {
            double slope = y_distance / x_distance;
            double b = y1 - slope * x1;
            //cout << "slope " << slope << " b " << b << endl;

            linear_function->SetModeDiagonal(slope, b, x1, x2);
        }

        m_linear_function_data.push_back(linear_function);

        //ここにDeleteを書いてはならない(消えちゃうので)

        //cout << " " << endl;
        //cout << " " << endl;
    }
}