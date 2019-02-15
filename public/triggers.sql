CREATE TRIGGER increment_nApplications AFTER
INSERT ON
Applications
FOR
EACH
ROW
UPDATE Practicas
     SET applications = applications + 1
   WHERE Practicas.id_practicas = NEW.practica_fk;


CREATE TRIGGER decrement_nApplications AFTER
INSERT ON
Applications
FOR
EACH
ROW
UPDATE Practicas
     SET applications = applications - 1
   WHERE Practicas.id_practicas = OLD.practica_fk;