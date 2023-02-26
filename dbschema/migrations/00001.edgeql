CREATE MIGRATION m1fnhbehvza52uxktku3nwgsaexdh5zkpmftexvaz27wtkyb42a3dq
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Task {
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
