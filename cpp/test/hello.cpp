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

void GetJs()
{
}

EMSCRIPTEN_BINDINGS(hello)
{
  function("Kagawa", &Kagawa);

  class_<Miyoshi>("Miyoshi")
      .constructor<>()
      .function("get_station", &Miyoshi::get_station)
      .function("station_edit", &Miyoshi::station_edit);
}

//参考にした記事

//https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html

//https://qiita.com/advent-calendar/2019/wasm

//https://qiita.com/soramimi_jp/items/1b7ed0ddcefb0f4a7172

//https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html

//https://semiexp.net/blog/2017-05-13-emscripten_bind.html

// WebAssembly

// js c++の相互連携について
//https://qiita.com/nokotan/items/35bea8b895eb7c9682de
//https://qiita.com/chikoski/items/9ac019a86095cfcf2c73