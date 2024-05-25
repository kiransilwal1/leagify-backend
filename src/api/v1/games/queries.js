const getGames = "select * from Games";
const getGamesById = "select * from Games where id = $1";
const checkGamesExists = "select s from Games s where s.name = $1";
const addGame = "INSERT INTO Games(team_id_1 , team_id_2 , date_time , location , league_id ) values ($1,$2,$3,$4,$5)";
const removeGame = "delete from Games where id = $1";
const updateGame = "update Games set date_time = $1 where id = $2";

module.exports = {
    getGames,
    getGamesById,
    checkGamesExists,
    addGame,
    removeGame,
    updateGame,
};
