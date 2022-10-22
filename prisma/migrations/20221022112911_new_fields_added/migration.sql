/*
  Warnings:

  - You are about to drop the column `yearOfProduction` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registrationNumber]` on the table `cars` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pesel]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numberOfSeats` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productionYear` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationNumber` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `rents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pesel` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Transmission" AS ENUM ('MANUAL', 'AUTOMATIC');

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "yearOfProduction",
ADD COLUMN     "numberOfSeats" INTEGER NOT NULL,
ADD COLUMN     "photo" BYTEA NOT NULL,
ADD COLUMN     "productionYear" INTEGER NOT NULL,
ADD COLUMN     "registrationNumber" TEXT NOT NULL,
ADD COLUMN     "transmission" "Transmission" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usable" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "capacity" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "rents" ADD COLUMN     "damagedCar" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "age",
ADD COLUMN     "pesel" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cars_registrationNumber_key" ON "cars"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "users_pesel_key" ON "users"("pesel");
