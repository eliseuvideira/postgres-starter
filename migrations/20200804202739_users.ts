import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary('pk_users_user_id');
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('username').notNullable();
    table.text('password').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
