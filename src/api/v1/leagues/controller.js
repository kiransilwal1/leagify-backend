

const pool = require('../../../../db');
const queries = require('./queries')

const getLeagues = (req,res) => {
    pool.query(queries.getLeagues,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getLeaguesById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getLeaguesById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addLeague = (req, res) => {
    const { name,leagueformat_id,game_length,team_size,substitutes,number_of_teams,start_date,end_date,sports_id,photo_url  } = req.body;
    console.log("Adding League");
        // Second query to add the League
        pool.query(queries.addLeague, [name,leagueformat_id,game_length,team_size,substitutes,number_of_teams,start_date,end_date,sports_id,photo_url ], (error, results) => {
            if (error) {
                console.error('Error adding League:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding League");
            res.status(201).send('League created successfully');
        });

};


const removeLeague = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getLeaguesById,[id],(error,results) => {
        const noLeaguesFound = !results.rows.length;
        console.log(noLeaguesFound);
        if(noLeaguesFound){
            return res.send("Leagues doesn't exist");
        }
        pool.query(queries.removeLeague,[id],(error,results) => {
            res.status(201).send('Leagues deleted successfully');
        });
        
    });
};

const updateLeague = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getLeaguesById,[id],(error,results) => {
        const noLeagueFound = !results.rows.length;
        if(noLeagueFound){
            return res.send("League doesn't exist");
        }
        pool.query(queries.updateLeague,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getLeagues,
    getLeaguesById,
    addLeague,
    removeLeague,
    updateLeague,
};





