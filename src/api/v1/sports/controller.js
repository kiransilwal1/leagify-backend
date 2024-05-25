

const pool = require('../../../../db');
const queries = require('./queries')

const getSports = (req,res) => {
    pool.query(queries.getSports,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getSportsById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getSportsById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addSport = (req, res) => {
    const { name,sportstype_id,description,logo_url,photo_url  } = req.body;
    console.log("Adding Sport");
        // Second query to add the Sport
        pool.query(queries.addSport, [name,sportstype_id,description,logo_url,photo_url ], (error, results) => {
            if (error) {
                console.error('Error adding Sport:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Sport");
            res.status(201).send('Sport created successfully');
        });

};


const removeSport = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getSportsById,[id],(error,results) => {
        const noSportsFound = !results.rows.length;
        console.log(noSportsFound);
        if(noSportsFound){
            return res.send("Sports doesn't exist");
        }
        pool.query(queries.removeSport,[id],(error,results) => {
            res.status(201).send('Sports deleted successfully');
        });
        
    });
};

const updateSport = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getSportsById,[id],(error,results) => {
        const noSportFound = !results.rows.length;
        if(noSportFound){
            return res.send("Sport doesn't exist");
        }
        pool.query(queries.updateSport,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getSports,
    getSportsById,
    addSport,
    removeSport,
    updateSport,
};





