#ifndef C_HPP
#define C_HPP

int GetTime()
{
    int now_time_int = std::chrono::duration_cast<std::chrono::seconds>(std::chrono::system_clock::now().time_since_epoch()).count();
    return now_time_int;
}

void OpenCvOutput(int draw_pointer[], int x_width, int y_hight)
{

    int channel = 3;

    //y_hight, x_width, channel

    //cv::Mat output_mat = cv::Mat::zeros(500, 500, CV_8UC3);

    cv::Mat output_mat(cv::Size(x_width, y_hight), CV_8UC3, cv::Scalar(0, 0, 0));
    //cv::Mat output_mat(cv::Size(320, 240), CV_8UC3, cv::Scalar(0, 0, 0));
    //https://tech-blog.s-yoshiki.com/entry/76

    //cout << "x y" << x_width << " " << y_hight << endl;

    for (int y = 0; y < y_hight; y++)
    {
        for (int x = 0; x < x_width; x++)
        {
            int ipx = x_width * y + x;

            //cout << ipx << endl;
            //cout << draw_pointer[ipx] << endl;

            //int cvy = y_hight - y;

            for (int c = 0; c < channel; c++)
            {
                if (draw_pointer[ipx] == 255 || draw_pointer[ipx] == 100)
                {
                    output_mat.at<cv::Vec3b>(y, x)[0] = draw_pointer[ipx];
                    output_mat.at<cv::Vec3b>(y, x)[1] = draw_pointer[ipx];
                    output_mat.at<cv::Vec3b>(y, x)[2] = draw_pointer[ipx];
                    continue;
                }

                output_mat.at<cv::Vec3b>(y, x)[0] = draw_pointer[ipx] & (83 * 3);
                output_mat.at<cv::Vec3b>(y, x)[1] = draw_pointer[ipx] & (83 * 2);
                output_mat.at<cv::Vec3b>(y, x)[2] = draw_pointer[ipx] & (83 * 1);
            }
        }
    }

    cv::imwrite("/Users/maruyama/Programs/MV55project/salt3DCG/cpp/output_mat.png", output_mat);
}

class PlaneCalculationControl
{
private:
    SurfaceData *surface_data;
    std::vector<LinearFunction *> m_linear_function_data;

    int x_width = 1280;
    int y_hight = 720;

    int *draw = new int[y_hight * x_width];

public:
    PlaneCalculationControl(SurfaceData &send_surface_data)
    {
        surface_data = &send_surface_data;
        //cout << "PlaneCalculationControl コンストラクタ" << endl;
    }
    ~PlaneCalculationControl()
    {
        //cout << "PlaneCalculationControl デストラクタ" << endl;
    }
    void SurfaceCalculation();
    void Slope();
    void PointDraw(int x, int y, int line_color);
};

#endif // C_HPP
