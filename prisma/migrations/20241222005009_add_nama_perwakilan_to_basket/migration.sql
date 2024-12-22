/*
  Warnings:

  - Added the required column `nama_perwakilan` to the `Basket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Basket" ADD COLUMN     "nama_perwakilan" TEXT NOT NULL;
