const getStatsConfigs = "select * from StatsConfigs";
const getStatsConfigsById = "select * from StatsConfigs where id = $1";
const checkStatsConfigsExists = "select s from StatsConfigs s where s.name = $1";
const addStatsConfig = "INSERT INTO StatsConfigs(league_id , stats_name , sports_id  ) values ($1,$2,$3)";
const removeStatsConfig = "delete from StatsConfigs where id = $1";
const updateStatsConfig = "update StatsConfigs set stats_name = $1 where id = $2";

module.exports = {
    getStatsConfigs,
    getStatsConfigsById,
    checkStatsConfigsExists,
    addStatsConfig,
    removeStatsConfig,
    updateStatsConfig,
};
