
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'HarryPotter', password: '$2a$08$YPqrdlLzJZ1A1R2vr9le/ecdhRy5SF1UHRAgf73Ky.0DBwlOlU8L.'}, //password: 1234
    {username: 'RonWeasley', password: '$2a$08$YPqrdlLzJZ1A1R2vr9le/ecdhRy5SF1UHRAgf73Ky.0DBwlOlU8L.'}, //password: 1234
    {username: 'HermoineGranger', password: '$2a$08$YPqrdlLzJZ1A1R2vr9le/ecdhRy5SF1UHRAgf73Ky.0DBwlOlU8L.'} //password: 1234
  ]);
};
