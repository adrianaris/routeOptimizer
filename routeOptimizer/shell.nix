with import <nixpkgs> {};
(python38.withPackages (ps: [ps.ortools])).env
