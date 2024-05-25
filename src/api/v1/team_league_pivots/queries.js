const getTeam_league_pivots = "select * from Team_league_pivots";
const getTeam_league_pivotsById = "select * from Team_league_pivots where id = $1";
const checkTeam_league_pivotsExists = "select s from Team_league_pivots s where s.name = $1";
const addTeam_league_pivot = "INSERT INTO Team_league_pivots(team_id,league_id ) values ($1,$2)";
const removeTeam_league_pivot = "delete from Team_league_pivots where id = $1";
const updateTeam_league_pivot = "update Team_league_pivots set name = $1 where id = $2";

module.exports = {
    getTeam_league_pivots,
    getTeam_league_pivotsById,
    checkTeam_league_pivotsExists,
    addTeam_league_pivot,
    removeTeam_league_pivot,
    updateTeam_league_pivot,
};
