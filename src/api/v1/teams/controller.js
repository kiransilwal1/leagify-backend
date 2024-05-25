const pool = require('../../../../db');
const queries = require('./queries')

const getTeams = (req,res) => {
    pool.query(queries.getTeams,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getTeamsById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getTeamsById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addTeam = (req, res) => {
    const { name , logo_url , description , team_manager , team_captain  } = req.body;
    console.log("checking teams");
    // First query to check if the Team already exists
    pool.query(queries.checkTeamsExists, [name], (error, results) => {
        if (error) {
            console.error('Error checking if Team exists:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.rows.length > 0) {
            return res.status(409).send('Team already exists');
        }

        // Second query to add the Team
        pool.query(queries.addTeam, [name , logo_url , description , team_manager , team_captain ], (error, results) => {
            if (error) {
                console.error('Error adding Team:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Team");
            res.status(201).send('Team created successfully');
        });
    });
};


const removeTeam = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getTeamsById,[id],(error,results) => {
        const noTeamsFound = !results.rows.length;
        console.log(noTeamsFound);
        if(noTeamsFound){
            return res.send("Teams doesn't exist");
        }
        pool.query(queries.removeTeam,[id],(error,results) => {
            res.status(201).send('Teams deleted successfully');
        });
        
    });
};

const updateTeam = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getTeamsById,[id],(error,results) => {
        const noTeamFound = !results.rows.length;
        if(noTeamFound){
            return res.send("Team doesn't exist");
        }
        pool.query(queries.updateTeam,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getTeams,
    getTeamsById,
    addTeam,
    removeTeam,
    updateTeam,
};

 