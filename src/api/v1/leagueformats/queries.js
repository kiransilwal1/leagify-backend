const getLeagueformats = "select * from Leagueformats";
const getLeagueformatsById = "select * from Leagueformats where id = $1";
const checkLeagueformatsExists = "select s from Leagueformats s where s.name = $1";
const addLeagueformat = "INSERT INTO Leagueformats(name,description ) values ($1,$2)";
const removeLeagueformat = "delete from Leagueformats where id = $1";
const updateLeagueformat = "update Leagueformats set name = $1 where id = $2";

module.exports = {
    getLeagueformats,
    getLeagueformatsById,
    checkLeagueformatsExists,
    addLeagueformat,
    removeLeagueformat,
    updateLeagueformat,
};
