#include <opencv2/opencv.hpp>
#include "ViewPxData.hpp"

void ViewPxData::OpenCvOutput()
{
    std::cout << "opencv start" << std::endl;

    int channel = 3;

    cv::Mat output_mat(cv::Size(x_width, y_hight), CV_8UC3, cv::Scalar(0, 0, 0));

    int *draw_pointer = GetDrawArray();

    for (int y = 0; y < y_hight; y++)
    {
        for (int x = 0; x < x_width; x++)
        {
            int ipx = (x_width * y + x) * 4;

            //std::cout << ipx << std::endl;
            //std::cout << draw_pointer[ipx] << std::endl;

            double A = draw_pointer[ipx + 3];

            for (int c = 0; c < 3; c++)
            {
                int colour = draw_pointer[ipx + c] * (A / 255.0);

                std::cout << colour << std::endl;
                output_mat.at<cv::Vec3b>(y, x)[c] = colour;
            }

            //int cvy = y_hight - y;
        }
    }

    fs::path p = fs::current_path();
    std::cout << p << std::endl;
    cv::imwrite("salt3Dtemp/output_mat.png", output_mat);
    std::cout << "opencv end" << std::endl;
}