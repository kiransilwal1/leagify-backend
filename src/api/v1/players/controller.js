

const pool = require('../../../../db');
const queries = require('./queries')

const getPlayers = (req,res) => {
    pool.query(queries.getPlayers,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getPlayersById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getPlayersById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addPlayer = (req, res) => {
    const { name , photo_url , description , age , height , weight , team_id , user_id } = req.body;
    console.log("Adding Player");
        // Second query to add the Player
        pool.query(queries.addPlayer, [name , photo_url , description , age , height , weight , team_id , user_id ,], (error, results) => {
            if (error) {
                console.error('Error adding Player:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Player");
            res.status(201).send('Player created successfully');
        });

};


const removePlayer = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getPlayersById,[id],(error,results) => {
        const noPlayersFound = !results.rows.length;
        console.log(noPlayersFound);
        if(noPlayersFound){
            return res.send("Players doesn't exist");
        }
        pool.query(queries.removePlayer,[id],(error,results) => {
            res.status(201).send('Players deleted successfully');
        });
        
    });
};

const updatePlayer = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getPlayersById,[id],(error,results) => {
        const noPlayerFound = !results.rows.length;
        if(noPlayerFound){
            return res.send("Player doesn't exist");
        }
        pool.query(queries.updatePlayer,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getPlayers,
    getPlayersById,
    addPlayer,
    removePlayer,
    updatePlayer,
};


