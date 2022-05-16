import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTelephoneLine1652732147860 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "telephoneLines",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "line_number",
                        type: "varchar"
                    },
                    {
                        name: "chip_number",
                        type: "varchar"
                    },
                    {
                        name: "data_plan",
                        type: "varchar"
                    },
                    {
                        name: "account_number",
                        type: "varchar"
                    },
                    {
                        name: "telephone_operator",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("telephoneLines")
    }

}
