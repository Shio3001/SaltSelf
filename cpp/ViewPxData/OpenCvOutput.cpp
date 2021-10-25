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
            int ipx = x_width * y + x;

            //std::cout << ipx << std::endl;
            //std::cout << draw_pointer[ipx] << std::endl;

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
    
    fs::path p = fs::current_path();
    std::cout << p << std::endl;
    cv::imwrite("salt3Dtemp/output_mat.png", output_mat);
    std::cout << "opencv end" << std::endl;
}