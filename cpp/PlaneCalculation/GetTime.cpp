#include "PlaneCalculation.hpp"

int PlaneCalculationControl::GetTime()
{
    int now_time_int = std::chrono::duration_cast<std::chrono::seconds>(std::chrono::system_clock::now().time_since_epoch()).count();
    return now_time_int;
}
