#include <stdio.h>

int main() {
  for (int i = 0; i <= 2000000; i++) {
    printf("%dok\r", i);
  }
  return 0;
}