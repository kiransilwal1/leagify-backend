

const pool = require('../../../../db');
const queries = require('./queries')

const getTeam_league_pivots = (req,res) => {
    pool.query(queries.getTeam_league_pivots,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getTeam_league_pivotsById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getTeam_league_pivotsById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addTeam_league_pivot = (req, res) => {
    const { team_id,league_id  } = req.body;
    console.log("Adding Team_league_pivot");
        // Second query to add the Team_league_pivot
        pool.query(queries.addTeam_league_pivot, [team_id,league_id ], (error, results) => {
            if (error) {
                console.error('Error adding Team_league_pivot:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Team_league_pivot");
            res.status(201).send('Team_league_pivot created successfully');
        });

};


const removeTeam_league_pivot = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getTeam_league_pivotsById,[id],(error,results) => {
        const noTeam_league_pivotsFound = !results.rows.length;
        console.log(noTeam_league_pivotsFound);
        if(noTeam_league_pivotsFound){
            return res.send("Team_league_pivots doesn't exist");
        }
        pool.query(queries.removeTeam_league_pivot,[id],(error,results) => {
            res.status(201).send('Team_league_pivots deleted successfully');
        });
        
    });
};

const updateTeam_league_pivot = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getTeam_league_pivotsById,[id],(error,results) => {
        const noTeam_league_pivotFound = !results.rows.length;
        if(noTeam_league_pivotFound){
            return res.send("Team_league_pivot doesn't exist");
        }
        pool.query(queries.updateTeam_league_pivot,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getTeam_league_pivots,
    getTeam_league_pivotsById,
    addTeam_league_pivot,
    removeTeam_league_pivot,
    updateTeam_league_pivot,
};





