#ifndef LinearFunction_include
#define LinearFunction_include
#include "../stdload/stdload.hpp"

class LinearFunction
{
private:
    int m_mode;

    double m0_a;
    double m0_b;
    int m0_x1;
    int m0_x2;

    int m1_tan90_x;
    int m1_y1;
    int m1_y2;
    int m1_fx;

public:
    LinearFunction()
    {
        //std::cout << "LinearFunction コンストラクタ" << std::endl;
    }
    ~LinearFunction()
    {
        //std::cout << "LinearFunction デストラクタ" << std::endl;
    }
    void SetModeDiagonal(double send_a, double send_b, int send_x1, int send_x2) //mode0
    {
        m0_a = send_a;   //傾き
        m0_b = send_b;   //定数 １次関数のあれ
        m0_x1 = send_x1; // x1 << x << x2って数学でやりますよね？
        m0_x2 = send_x2;
        m_mode = 0;

        //std::cout << "SetModeDiagonal " << m0_a << " " << m0_b << " " << m0_x1 << " " << m0_x2 << " " << m_mode << std::endl;
    }
    void SetModeTan90(int send_x, int send_y1, int send_y2) //mode1
    {
        m1_fx = send_x;  //基準値(左右確認)
        m1_y1 = send_y1; //下限値
        m1_y2 = send_y2; //上限値
        m_mode = 1;

        //std::cout << "SetModeTan90 " << m1_fx << " " << m1_y1 << " " << m1_y2 << " " << m_mode << std::endl;
    }
    int GetMode()
    {
        return m_mode;
    }

    double GetA(int mode1_number)
    {
        double returnA;
        if (m_mode == 0)
        {
            returnA = m0_a;
        }
        if (m_mode == 1)
        {
            returnA = mode1_number;
        }
        return returnA;
    }

    int RangeQuery(int y)
    {
        int result;
        if (m_mode == 0) //傾きが垂直ではない場合
        {
            double x = (y - m0_b) / m0_a;

            bool x1x2;
            bool x2x1;

            // if (m0_a > 0)
            // {
            //     x1x2 = m0_x1 <= x && x < m0_x2;
            //     x2x1 = m0_x2 <= x && x < m0_x1;
            // }
            // else if (m0_a < 0)
            // {
            //     x1x2 = m0_x1 < x && x <= m0_x2;
            //     x2x1 = m0_x2 < x && x <= m0_x1;
            // }
            // else
            // {
            //     x1x2 = false;
            //     x2x1 = false;
            // }

            x1x2 = m0_x1 <= x && x <= m0_x2;
            x2x1 = m0_x2 <= x && x <= m0_x1;

            int resultX = x1x2 || x2x1 ? 1 : 0;

            result = resultX;

            //std::cout << "result x1x2 " << x1x2 << " x2x1 " << x2x1 << " x " << x << " y " << y << " x1 " << x1 << " x2 " << x2 << std::endl;
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

    double YtoX(int y)
    {
        //int region = y > a * x + b ? 1 : -1; //領域が上か否か

        double returnX = 1;

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
    double XtoY(int x)
    {
        double y = m0_a * x + m0_b;
        double y_int = y;
        return y;
    }
};

#endif // C_HPP
