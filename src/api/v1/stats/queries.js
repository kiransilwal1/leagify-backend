const getStats = "select * from Stats";
const getStatsById = "select * from Stats where id = $1";
const checkStatsExists = "select s from Stats s where s.name = $1";
const addStat = "INSERT INTO Stats(player_id,stats_config_id,game_id,stats_at ) values ($1,$2,$3,$4)";
const removeStat = "delete from Stats where id = $1";
const updateStat = "update Stats set name = $1 where id = $2";

module.exports = {
    getStats,
    getStatsById,
    checkStatsExists,
    addStat,
    removeStat,
    updateStat,
};
