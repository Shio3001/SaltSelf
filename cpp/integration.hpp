#include "stdload/stdload.hpp"
#include "ViewPxData/ViewPxData.hpp"
#include "VertexXyzData/VertexXyzData.hpp"
#include "SurfaceData/SurfaceData.hpp"
#include "LinearFunction/LinearFunction.hpp"
#include "PlaneCalculation/PlaneCalculation.hpp"
#include "VertexControl/VertexControl.hpp"

class Integration
{

    int x_width = 1280;
    int y_hight = 720;
    ViewPxData *view_px_data;
    VertexControl *vertex_control = new VertexControl();

public:
    Integration()
    {
        fs::create_directory("salt3Dtemp");
    }
    ~Integration()
    {
        delete view_px_data;
        delete vertex_control;
    }

    void NewViewPx()
    {
        view_px_data = new ViewPxData(x_width, y_hight);
        vertex_control->SetViewPxData(view_px_data);
    }
    void DeleteViewPx()
    {
        delete view_px_data;
    }

    ViewPxData GetViewPxData()
    {
        return *view_px_data;
    }
    VertexControl GetVertexControl()
    {
        return *vertex_control;
    }
};

//描画が残ってしまう原因わかった・・・・view_px_dataを初期化していないせい、そしてこのコードの状態で無理に初期化しようとするとメモリ不足で死ぬ

//http://wisdom.sakura.ne.jp/programming/cpp/cpp9.html