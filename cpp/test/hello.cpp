#include <stdio.h>
#include <emscripten.h>
#include <emscripten/bind.h>
using namespace emscripten;

std::string Kagawa()
{
  return "うどん食べたい";
}

class Miyoshi
{
public:
  std::string station = "阿波池田";

  Miyoshi()
  {
  }

  void station_edit(std::string new_station)
  {
    station = new_station;
  }

  std::string get_station()
  {
    return station;
  }
};

EMSCRIPTEN_BINDINGS(hello)
{
  function("Kagawa", &Kagawa);

  class_<Miyoshi>("Miyoshi")
      .constructor<>()
      .function("get_station", &Miyoshi::get_station)
      .function("station_edit", &Miyoshi::station_edit);
}

// /https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html