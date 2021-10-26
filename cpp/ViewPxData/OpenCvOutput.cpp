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

            int R = draw_pointer[ipx + 0] * (A / 255.0); //透明度反映
            int G = draw_pointer[ipx + 1] * (A / 255.0);
            int B = draw_pointer[ipx + 2] * (A / 255.0);

            output_mat.at<cv::Vec3b>(y, x)[0] = B; //openCVはBGRのため順番を入れ替える必要があり
            output_mat.at<cv::Vec3b>(y, x)[1] = G;
            output_mat.at<cv::Vec3b>(y, x)[2] = R;

            //int cvy = y_hight - y;
        }
    }

    fs::path p = fs::current_path();
    std::cout << p << std::endl;
    cv::imwrite("salt3Dtemp/output_mat.png", output_mat);
    std::cout << "opencv end" << std::endl;
}