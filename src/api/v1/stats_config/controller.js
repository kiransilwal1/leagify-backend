

const pool = require('../../../../db');
const queries = require('./queries')

const getStatsConfigs = (req,res) => {
    pool.query(queries.getStatsConfigs,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getStatsConfigsById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getStatsConfigsById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addStatsConfig = (req, res) => {
    const { league_id , stats_name , sports_id   } = req.body;
    console.log("Adding StatsConfig");
        // Second query to add the StatsConfig
        pool.query(queries.addStatsConfig, [league_id , stats_name , sports_id  ], (error, results) => {
            if (error) {
                console.error('Error adding StatsConfig:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding StatsConfig");
            res.status(201).send('StatsConfig created successfully');
        });

};


const removeStatsConfig = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getStatsConfigsById,[id],(error,results) => {
        const noStatsConfigsFound = !results.rows.length;
        console.log(noStatsConfigsFound);
        if(noStatsConfigsFound){
            return res.send("StatsConfigs doesn't exist");
        }
        pool.query(queries.removeStatsConfig,[id],(error,results) => {
            res.status(201).send('StatsConfigs deleted successfully');
        });
        
    });
};

const updateStatsConfig = (req,res) => {
    const id = req.params.id;
    const {stats_name} = req.body
    pool.query(queries.getStatsConfigsById,[id],(error,results) => {
        console.log(results);
        const noStatsConfigFound = !results.rows.length;
        if(noStatsConfigFound){
            return res.send("StatsConfig doesn't exist");
        }
        pool.query(queries.updateStatsConfig,[stats_name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getStatsConfigs,
    getStatsConfigsById,
    addStatsConfig,
    removeStatsConfig,
    updateStatsConfig,
};





