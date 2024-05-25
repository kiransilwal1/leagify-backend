const getPlayer_team_pivots = "select * from Player_team_pivots";
const getPlayer_team_pivotsById = "select * from Player_team_pivots where id = $1";
const checkPlayer_team_pivotsExists = "select s from Player_team_pivots s where s.name = $1";
const addPlayer_team_pivot = "INSERT INTO Player_team_pivots(player_id,team_id,from_date,to_date ) values ($1,$2,$3,$4)";
const removePlayer_team_pivot = "delete from Player_team_pivots where id = $1";
const updatePlayer_team_pivot = "update Player_team_pivots set name = $1 where id = $2";

module.exports = {
    getPlayer_team_pivots,
    getPlayer_team_pivotsById,
    checkPlayer_team_pivotsExists,
    addPlayer_team_pivot,
    removePlayer_team_pivot,
    updatePlayer_team_pivot,
};
