

const pool = require('../../../../db');
const queries = require('./queries')

const getPlayer_team_pivots = (req,res) => {
    pool.query(queries.getPlayer_team_pivots,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getPlayer_team_pivotsById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getPlayer_team_pivotsById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addPlayer_team_pivot = (req, res) => {
    const { player_id,team_id,from_date,to_date  } = req.body;
    console.log("Adding Player_team_pivot");
        // Second query to add the Player_team_pivot
        pool.query(queries.addPlayer_team_pivot, [player_id,team_id,from_date,to_date ], (error, results) => {
            if (error) {
                console.error('Error adding Player_team_pivot:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Player_team_pivot");
            res.status(201).send('Player_team_pivot created successfully');
        });

};


const removePlayer_team_pivot = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getPlayer_team_pivotsById,[id],(error,results) => {
        const noPlayer_team_pivotsFound = !results.rows.length;
        console.log(noPlayer_team_pivotsFound);
        if(noPlayer_team_pivotsFound){
            return res.send("Player_team_pivots doesn't exist");
        }
        pool.query(queries.removePlayer_team_pivot,[id],(error,results) => {
            res.status(201).send('Player_team_pivots deleted successfully');
        });
        
    });
};

const updatePlayer_team_pivot = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getPlayer_team_pivotsById,[id],(error,results) => {
        const noPlayer_team_pivotFound = !results.rows.length;
        if(noPlayer_team_pivotFound){
            return res.send("Player_team_pivot doesn't exist");
        }
        pool.query(queries.updatePlayer_team_pivot,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getPlayer_team_pivots,
    getPlayer_team_pivotsById,
    addPlayer_team_pivot,
    removePlayer_team_pivot,
    updatePlayer_team_pivot,
};





