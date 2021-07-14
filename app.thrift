namespace js Service

struct Information {
 1: required string name,
 2: required i16 age
}

service App {
  string add(1:Information information)
}