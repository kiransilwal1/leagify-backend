const getLeagues = "select * from Leagues";
const getLeaguesById = "select * from Leagues where id = $1";
const checkLeaguesExists = "select s from Leagues s where s.name = $1";
const addLeague = "INSERT INTO Leagues(name,leagueformat_id,game_length,team_size,substitutes,number_of_teams,start_date,end_date,sports_id,photo_url ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
const removeLeague = "delete from Leagues where id = $1";
const updateLeague = "update Leagues set name = $1 where id = $2";

module.exports = {
    getLeagues,
    getLeaguesById,
    checkLeaguesExists,
    addLeague,
    removeLeague,
    updateLeague,
};
