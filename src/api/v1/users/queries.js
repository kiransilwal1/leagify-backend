const getUsers = "select * from Users";
const getUsersById = "select * from Users where id = $1";
const checkUsersExists = "select s from Users s where s.name = $1";
const addUser = "INSERT INTO Users(name,email,role_id,is_verified,is_active,date_joined ) values ($1,$2,$3,$4,$5,$6)";
const removeUser = "delete from Users where id = $1";
const updateUser = "update Users set name = $1 where id = $2";

module.exports = {
    getUsers,
    getUsersById,
    checkUsersExists,
    addUser,
    removeUser,
    updateUser,
};
