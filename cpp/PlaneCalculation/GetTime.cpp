#include "PlaneCalculation.hpp"

int PlaneCalculationControl::GetTime()
{
    int now_time_int = chrono::duration_cast<chrono::seconds>(chrono::system_clock::now().time_since_epoch()).count();
    return now_time_int;
}
