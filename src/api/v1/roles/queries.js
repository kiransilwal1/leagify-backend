const getRoles = "select * from Roles";
const getRolesById = "select * from Roles where id = $1";
const checkRolesExists = "select s from Roles s where s.name = $1";
const addRole = "INSERT INTO Roles(name ) values ($1)";
const removeRole = "delete from Roles where id = $1";
const updateRole = "update Roles set name = $1 where id = $2";

module.exports = {
    getRoles,
    getRolesById,
    checkRolesExists,
    addRole,
    removeRole,
    updateRole,
};
