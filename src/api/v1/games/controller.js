

const pool = require('../../../../db');
const queries = require('./queries')

const getGames = (req,res) => {
    pool.query(queries.getGames,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getGamesById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getGamesById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addGame = (req, res) => {
    const { team_id_1 , team_id_2 , date_time , location , league_id  } = req.body;
    console.log("Adding Game");
        // Second query to add the Game
        pool.query(queries.addGame, [team_id_1 , team_id_2 , date_time , location , league_id ], (error, results) => {
            if (error) {
                console.error('Error adding Game:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Game");
            res.status(201).send('Game created successfully');
        });

};


const removeGame = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getGamesById,[id],(error,results) => {
        const noGamesFound = !results.rows.length;
        console.log(noGamesFound);
        if(noGamesFound){
            return res.send("Games doesn't exist");
        }
        pool.query(queries.removeGame,[id],(error,results) => {
            res.status(201).send('Games deleted successfully');
        });
        
    });
};

const updateGame = (req,res) => {
    const id = req.params.id;
    const {date_time} = req.body
    pool.query(queries.getGamesById,[id],(error,results) => {
        const noGameFound = !results.rows.length;
        if(noGameFound){
            return res.send("Game doesn't exist");
        }
        pool.query(queries.updateGame,[date_time,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getGames,
    getGamesById,
    addGame,
    removeGame,
    updateGame,
};





