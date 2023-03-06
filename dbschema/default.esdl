module default {
	type Task {
		required property title -> str;
		required property effort -> str {
			constraint one_of("low", "high")
		}
		required property impact -> str {
			constraint one_of("low", "high")
		}
		required property timeTaken -> duration {
			default := <duration>'0s';
		}
		required property deadlineType -> str {
			constraint one_of("none", "soft", "hard", "asap")
		}
		property deadline -> datetime;
		multi link subTasks -> Task {
			# ensures a one-to-many relationship
			constraint exclusive;
		}
		property isDone -> bool;
		required property createdAt -> datetime {
			readonly := true;
			default := datetime_of_statement();
		}
		required property updatedAt -> datetime {
			readonly := true;
			default := datetime_of_statement();
		}
		# Computed fields
		property isStarted := (select true if .timeTaken > <duration>'0' else false);
		property isLeaf := (select true if count(.subTasks) = 0 else false);
	}
}
