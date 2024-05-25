

const pool = require('../../../../db');
const queries = require('./queries')

const getUsers = (req,res) => {
    pool.query(queries.getUsers,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getUsersById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getUsersById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { name,email,role_id,is_verified,is_active,date_joined  } = req.body;
    console.log("Adding User");
        // Second query to add the User
        pool.query(queries.addUser, [name,email,role_id,is_verified,is_active,date_joined ], (error, results) => {
            if (error) {
                console.error('Error adding User:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding User");
            res.status(201).send('User created successfully');
        });

};


const removeUser = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getUsersById,[id],(error,results) => {
        const noUsersFound = !results.rows.length;
        console.log(noUsersFound);
        if(noUsersFound){
            return res.send("Users doesn't exist");
        }
        pool.query(queries.removeUser,[id],(error,results) => {
            res.status(201).send('Users deleted successfully');
        });
        
    });
};

const updateUser = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getUsersById,[id],(error,results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            return res.send("User doesn't exist");
        }
        pool.query(queries.updateUser,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getUsers,
    getUsersById,
    addUser,
    removeUser,
    updateUser,
};





