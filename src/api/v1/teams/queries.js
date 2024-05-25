const getTeams = "select * from Teams";
const getTeamsById = "select * from Teams where id = $1";
const checkTeamsExists = "select s from Teams s where s.name = $1";
const addTeam = "INSERT INTO Teams(name , logo_url , description , team_manager , team_captain ) values ($1,$2,$3,$4,$5)";
const removeTeam = "delete from Teams where id = $1";
const updateTeam = "update Teams set name = $1 where id = $2";

module.exports = {
    getTeams,
    getTeamsById,
    checkTeamsExists,
    addTeam,
    removeTeam,
    updateTeam,
};