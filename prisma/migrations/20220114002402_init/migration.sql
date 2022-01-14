-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `email` VARCHAR(191) NOT NULL DEFAULT '',
    `password` VARCHAR(191) NOT NULL DEFAULT '',
    `phone` VARCHAR(191) NOT NULL DEFAULT '',
    `type` VARCHAR(191) NOT NULL DEFAULT '',
    `defaultTemplate` VARCHAR(191) NULL DEFAULT '',
    `productLimit` VARCHAR(191) NULL DEFAULT '',
    `invoiceLimit` VARCHAR(191) NULL DEFAULT '',
    `currency` VARCHAR(191) NULL DEFAULT '',
    `favourite` JSON NOT NULL,
    `premium` JSON NOT NULL,
    `free` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
