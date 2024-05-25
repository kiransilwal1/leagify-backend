const getSports = "select * from Sports";
const getSportsById = "select * from Sports where id = $1";
const checkSportsExists = "select s from Sports s where s.name = $1";
const addSport = "INSERT INTO Sports(name,sportstype_id,description,logo_url,photo_url ) values ($1,$2,$3,$4,$5)";
const removeSport = "delete from Sports where id = $1";
const updateSport = "update Sports set name = $1 where id = $2";

module.exports = {
    getSports,
    getSportsById,
    checkSportsExists,
    addSport,
    removeSport,
    updateSport,
};
