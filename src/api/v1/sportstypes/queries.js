const getSportstypes = "select * from Sportstypes";
const getSportstypesById = "select * from Sportstypes where id = $1";
const checkSportstypesExists = "select s from Sportstypes s where s.name = $1";
const addSportstype = "INSERT INTO Sportstypes(name,description ) values ($1,$2)";
const removeSportstype = "delete from Sportstypes where id = $1";
const updateSportstype = "update Sportstypes set name = $1 where id = $2";

module.exports = {
    getSportstypes,
    getSportstypesById,
    checkSportstypesExists,
    addSportstype,
    removeSportstype,
    updateSportstype,
};
