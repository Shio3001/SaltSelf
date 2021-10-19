#include <stdio.h>
#include <emscripten/bind.h>

using namespace emscripten;

int main(char ** argv)
{
  printf("Hello World\n");
  return 334;
}
