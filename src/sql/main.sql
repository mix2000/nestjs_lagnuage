CREATE TABLE `ozma-language` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Идентификатор',
  `name` varchar(200) NOT NULL COMMENT 'Имя языка',
  `abbreviation` varchar(5) NOT NULL COMMENT 'Аббревиатура языка',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `ozma-translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Идентификатор',
  `languageId` int(11) NOT NULL COMMENT 'Идентификатор языка',
  `categoryType` varchar(20) NOT NULL COMMENT 'Идентификатор типа категории',
  `value` varchar(512) NOT NULL COMMENT 'Текстовое значение',
  `elementId` int NOT NULL COMMENT 'Идентификатор элемента' AFTER `value`,
  `fieldName` varchar(32) NOT NULL COMMENT 'Название поля',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_languageId_categoryType` (`elementId`, `categoryType`,`fieldName`,`languageId`),
  KEY `FK_languageId` (`languageId`),
  CONSTRAINT `FK_languageId` FOREIGN KEY (`languageId`) REFERENCES `ozma-language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
