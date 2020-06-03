import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamps', image:'lamps.svg'},
    { title: 'Batteries', image:'batteries.svg'},
    { title: 'Plastics', image:'plastics.svg'},
    { title: 'Organic Waste', image:'organics.svg'},
    { title: 'Papers', image:'papers.svg'},
    { title: 'Metals', image:'metals.svg'},
  ])
}