#include "PlaneCalculation.hpp"
void PlaneCalculationControl::SurfaceCalculation()
{
    //cout << "SurfaceCalculation sta" << endl;

    int sum = 0;

    int sec_since_epoch1 = GetTime();

    int linear_size = m_linear_function_data.size();

    //cout << "み" << endl;
    for (int x = 0; x < x_width; x++)
    {
        for (int fi_add = 0; fi_add < linear_size; fi_add++)
        {
            //cout << "now_linear_function" << endl;
            LinearFunction *now_linear_function = m_linear_function_data[fi_add];
            //cout << "now_linear_function2" << endl;
            int returnY = now_linear_function->XtoY(x);
            //cout << ipx << endl;
        }
    }
    //cout << "出" << endl;

    for (int x = 0; x < x_width; x++)
    {
        for (int fi_add = 0; fi_add < linear_size; fi_add++)
        {
            LinearFunction *now_linear_function = m_linear_function_data[fi_add];
            int returnY = now_linear_function->XtoY(x);
            view_px_data.PointDraw(x, returnY, 200);
        }
    }

    int debug_x = 70;
    int debug_y = 600;
    for (int y = 0; y < y_hight; y++)
    {
        for (int x = 0; x < x_width; x++)
        {

            int *fx = new int[linear_size];

            int left = 0;
            int range_query = 0;

            int corner = 0;

            for (int fi_add = 0; fi_add < linear_size; fi_add++)
            {

                LinearFunction *now_linear_function = m_linear_function_data[fi_add];
                double returnX = now_linear_function->YtoX(y);
                int now_range_query = now_linear_function->RangeQuery(y);

                double returnX_floor = std::floor(returnX);
                double difference = returnX - returnX_floor;

                if (difference != 0)
                {
                    returnX_floor++;
                }

                if (45 < x && x < 55 && y == 50)
                {
                    cout << fi_add << " " << x << " " << y << " " << returnX_floor << endl;
                }

                if (x == returnX_floor)
                {
                    //corner++;
                    //cout << "接点" << x << " " << y << endl;
                    if (x == debug_x && y == debug_y)
                    {
                        //cout << "特定箇所(corner) " << corner << endl;
                    }

                    if (corner >= 2)
                    {
                        cout << "[ 交点 ]" << corner << " " << x << " " << y << endl;
                    }
                }

                bool fx_add_bool = now_range_query != 0 && corner <= 1;

                if (returnX == x && y == debug_y)
                {
                    cout << " fx " << x << " " << y << endl;
                }

                if (x == debug_x && y == debug_y)
                {
                    //cout << "特定箇所(A0)" << now_range_query << " " << fx_add_bool << endl;
                }

                if (fx_add_bool)
                {
                    view_px_data.PointDraw(returnX, y, 255);
                    fx[fi_add - left] = returnX;
                }
                else
                {
                    left += 1;
                }

                range_query += now_range_query;

                //ソート https://codezine.jp/article/detail/6020
            }

            int linear_search_from_before = -1;

            for (int fi_search = 0; fi_search < linear_size - left; fi_search++)
            {

                if (fx[fi_search] <= x)
                {
                    linear_search_from_before += 1;
                }

                if (x == debug_x && y == debug_y)
                {
                    //cout << "比較辺 " << fi_search << " " << linear_size - left << " " << left << endl;
                    //cout << "特定箇所(A1)" << linear_search_from_before << endl;
                    //cout << "fx x比較" << fx[fi_search] << " " << x << endl;
                }
            }

            if (x == debug_x && y == debug_y)
            {
                //cout << "特定箇所(A2)" << linear_search_from_before << endl;
            }

            int mod2 = linear_search_from_before % 2;

            //cout << "linear_size " << linear_size << " left " << left << endl;
            if (x == debug_x && y == debug_y)
            {
                //cout << "特定箇所(A3)" << mod2 << " " << range_query << endl;
            }

            // if (mod2 == 1 && range_query != 0)
            // {
            //     cout << linear_search_from_before << " " << range_query << " " << x << " " << y << endl;
            // }

            if (mod2 == 0 && range_query != 0) //
            {

                int result = range_query;
                sum += result;
                view_px_data.PointDraw(x, y, result * 83);
            }
            delete[] fx;
        }
    }
    int sec_since_epoch2 = GetTime();

    //cout << sum << endl;

    //cout << "SurfaceCalculation end" << endl;

    int *draw_pointer = view_px_data.GetDraw();

    OpenCvOutput(draw_pointer, x_width, y_hight);

    int sec_since_epoch3 = GetTime();

    cout << sec_since_epoch1 << endl;
    cout << sec_since_epoch2 << endl;
    cout << sec_since_epoch3 << endl;

    cout << "終了" << endl;
}