ALTER TABLE `estado`
ADD COLUMN `uf` CHAR(2) NOT NULL;

ALTER TABLE `cidade`
DROP COLUMN `uf`;
