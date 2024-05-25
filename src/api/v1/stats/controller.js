

const pool = require('../../../../db');
const queries = require('./queries')

const getStats = (req,res) => {
    pool.query(queries.getStats,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getStatsById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getStatsById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addStat = (req, res) => {
    const { player_id,stats_config_id,game_id,stats_at  } = req.body;
    console.log("Adding Stat");
        // Second query to add the Stat
        pool.query(queries.addStat, [player_id,stats_config_id,game_id,stats_at ], (error, results) => {
            if (error) {
                console.error('Error adding Stat:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Stat");
            res.status(201).send('Stat created successfully');
        });

};


const removeStat = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getStatsById,[id],(error,results) => {
        const noStatsFound = !results.rows.length;
        console.log(noStatsFound);
        if(noStatsFound){
            return res.send("Stats doesn't exist");
        }
        pool.query(queries.removeStat,[id],(error,results) => {
            res.status(201).send('Stats deleted successfully');
        });
        
    });
};

const updateStat = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getStatsById,[id],(error,results) => {
        const noStatFound = !results.rows.length;
        if(noStatFound){
            return res.send("Stat doesn't exist");
        }
        pool.query(queries.updateStat,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getStats,
    getStatsById,
    addStat,
    removeStat,
    updateStat,
};





