CREATE MIGRATION m1bc53xhpgytzc5fqv4fmssd5pkgusfgd5kl6o4dss44zow7mc2ada
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Task {
      CREATE MULTI LINK subTasks -> default::Task {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE PROPERTY isLeaf := (SELECT
          (true IF (std::count(.subTasks) = 0) ELSE false)
      );
      CREATE REQUIRED PROPERTY createdAt -> std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE PROPERTY deadline -> std::datetime;
      CREATE REQUIRED PROPERTY deadlineType -> std::str {
          CREATE CONSTRAINT std::one_of('none', 'soft', 'hard', 'asap');
      };
      CREATE REQUIRED PROPERTY effort -> std::str {
          CREATE CONSTRAINT std::one_of('low', 'high');
      };
      CREATE REQUIRED PROPERTY impact -> std::str {
          CREATE CONSTRAINT std::one_of('low', 'high');
      };
      CREATE PROPERTY isDone -> std::bool;
      CREATE PROPERTY timeTaken -> std::duration;
      CREATE PROPERTY isStarted := (SELECT
          (true IF (.timeTaken > <std::duration>'0') ELSE false)
      );
      CREATE REQUIRED PROPERTY title -> std::str;
      CREATE REQUIRED PROPERTY updatedAt -> std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
  };
};
