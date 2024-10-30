import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableOperations1730283671085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "operation" (
          "id" SERIAL NOT NULL,
          "operand1" INT NOT NULL,
          "operand2" INT NOT NULL,
          "operator" VARCHAR(50) NOT NULL,
          "result" INT NOT NULL,
          "email" VARCHAR(255) NOT NULL,
          "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
          CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "operation"`);
  }
}
