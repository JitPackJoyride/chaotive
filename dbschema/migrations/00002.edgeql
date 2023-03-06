CREATE MIGRATION m1cy4y7diertegd6znsr4u3jx6s46eivdfp2gu2a2xpxizias4kgfa
    ONTO m1bc53xhpgytzc5fqv4fmssd5pkgusfgd5kl6o4dss44zow7mc2ada
{
  ALTER TYPE default::Task {
      ALTER PROPERTY timeTaken {
          SET default := (<std::duration>'0s');
          SET REQUIRED USING (<std::duration>'0');
      };
  };
};
