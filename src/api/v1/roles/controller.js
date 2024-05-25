

const pool = require('../../../../db');
const queries = require('./queries')

const getRoles = (req,res) => {
    pool.query(queries.getRoles,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getRolesById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getRolesById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addRole = (req, res) => {
    const { name  } = req.body;
    console.log("Adding Role");
        // Second query to add the Role
        pool.query(queries.addRole, [name ], (error, results) => {
            if (error) {
                console.error('Error adding Role:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Role");
            res.status(201).send('Role created successfully');
        });

};


const removeRole = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getRolesById,[id],(error,results) => {
        const noRolesFound = !results.rows.length;
        console.log(noRolesFound);
        if(noRolesFound){
            return res.send("Roles doesn't exist");
        }
        pool.query(queries.removeRole,[id],(error,results) => {
            res.status(201).send('Roles deleted successfully');
        });
        
    });
};

const updateRole = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getRolesById,[id],(error,results) => {
        const noRoleFound = !results.rows.length;
        if(noRoleFound){
            return res.send("Role doesn't exist");
        }
        pool.query(queries.updateRole,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getRoles,
    getRolesById,
    addRole,
    removeRole,
    updateRole,
};





