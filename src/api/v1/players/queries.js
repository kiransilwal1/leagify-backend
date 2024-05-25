const getPlayers = "select * from Players";
const getPlayersById = "select * from Players where id = $1";
const checkPlayersExists = "select s from Players s where s.name = $1";
const addPlayer = "INSERT INTO Players(name , photo_url , description , age , height , weight , team_id , user_id) values ($1,$2,$3,$4,$5,$6,$7,$8)";
const removePlayer = "delete from Players where id = $1";
const updatePlayer = "update Players set name = $1 where id = $2";

module.exports = {
    getPlayers,
    getPlayersById,
    checkPlayersExists,
    addPlayer,
    removePlayer,
    updatePlayer,
};