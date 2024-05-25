const express = require('express');
const leagifyUserRoutes = require('./src/api/v1/users/routes');
const leagifySportRoutes = require('./src/api/v1/sports/routes');
const leagifyLeagueRoutes = require('./src/api/v1/leagues/routes');
const leagifyTeamRoutes = require('./src/api/v1/teams/routes');
const leagifyPlayerRoutes = require('./src/api/v1/players/routes');
const leagifyGameRoutes = require('./src/api/v1/games/routes');
const leagifyStatsConfigRoutes = require('./src/api/v1/stats_config/routes');
const leagifyRoleRoutes = require('./src/api/v1/roles/routes');
const leagifyStatRoutes = require('./src/api/v1/stats/routes');
const leagifySportstypeRoutes = require('./src/api/v1/sportstypes/routes');
const leagifyLeagueformatRoutes = require('./src/api/v1/leagueformats/routes');
const leagifyTeamleaguepivotRoutes = require('./src/api/v1/team_league_pivots/routes');
const leagifyPlayerteampivottRoutes = require('./src/api/v1/player_team_pivots/routes');

const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/v1/users",leagifyUserRoutes);
app.use("/api/v1/sports",leagifySportRoutes);
app.use("/api/v1/leagues",leagifyLeagueRoutes);
app.use("/api/v1/teams",leagifyTeamRoutes);
app.use("/api/v1/players",leagifyPlayerRoutes);
app.use("/api/v1/games",leagifyGameRoutes);
app.use("/api/v1/statsconfig",leagifyStatsConfigRoutes);
app.use("/api/v1/roles",leagifyRoleRoutes);
app.use("/api/v1/stats",leagifyStatRoutes);
app.use("/api/v1/sportstypes",leagifySportstypeRoutes);
app.use("/api/v1/leagueformats",leagifyLeagueformatRoutes);
app.use("/api/v1/teamleagues",leagifyTeamleaguepivotRoutes);
app.use("/api/v1/playerteams",leagifyPlayerteampivottRoutes);

app.listen(port,()=>{
    console.log(`Listening to ${port}`);
});


