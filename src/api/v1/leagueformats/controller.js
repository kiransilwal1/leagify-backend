

const pool = require('../../../../db');
const queries = require('./queries')

const getLeagueformats = (req,res) => {
    pool.query(queries.getLeagueformats,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getLeagueformatsById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getLeagueformatsById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addLeagueformat = (req, res) => {
    const { name,description  } = req.body;
    console.log("Adding Leagueformat");
        // Second query to add the Leagueformat
        pool.query(queries.addLeagueformat, [name,description ], (error, results) => {
            if (error) {
                console.error('Error adding Leagueformat:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Leagueformat");
            res.status(201).send('Leagueformat created successfully');
        });

};


const removeLeagueformat = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getLeagueformatsById,[id],(error,results) => {
        const noLeagueformatsFound = !results.rows.length;
        console.log(noLeagueformatsFound);
        if(noLeagueformatsFound){
            return res.send("Leagueformats doesn't exist");
        }
        pool.query(queries.removeLeagueformat,[id],(error,results) => {
            res.status(201).send('Leagueformats deleted successfully');
        });
        
    });
};

const updateLeagueformat = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getLeagueformatsById,[id],(error,results) => {
        const noLeagueformatFound = !results.rows.length;
        if(noLeagueformatFound){
            return res.send("Leagueformat doesn't exist");
        }
        pool.query(queries.updateLeagueformat,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getLeagueformats,
    getLeagueformatsById,
    addLeagueformat,
    removeLeagueformat,
    updateLeagueformat,
};





