

const pool = require('../../../../db');
const queries = require('./queries')

const getSportstypes = (req,res) => {
    pool.query(queries.getSportstypes,(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};


const getSportstypesById = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getSportstypesById,[id],(error,results) => {
        if(error) {
            console.log(error.message);
        }
        res.status(200).json(results.rows);
    });
};

const addSportstype = (req, res) => {
    const { name,description  } = req.body;
    console.log("Adding Sportstype");
        // Second query to add the Sportstype
        pool.query(queries.addSportstype, [name,description ], (error, results) => {
            if (error) {
                console.error('Error adding Sportstype:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            console.log("Adding Sportstype");
            res.status(201).send('Sportstype created successfully');
        });

};


const removeSportstype = (req,res) => {
    const id = req.params.id;
    pool.query(queries.getSportstypesById,[id],(error,results) => {
        const noSportstypesFound = !results.rows.length;
        console.log(noSportstypesFound);
        if(noSportstypesFound){
            return res.send("Sportstypes doesn't exist");
        }
        pool.query(queries.removeSportstype,[id],(error,results) => {
            res.status(201).send('Sportstypes deleted successfully');
        });
        
    });
};

const updateSportstype = (req,res) => {
    const id = req.params.id;
    const {name} = req.body
    pool.query(queries.getSportstypesById,[id],(error,results) => {
        const noSportstypeFound = !results.rows.length;
        if(noSportstypeFound){
            return res.send("Sportstype doesn't exist");
        }
        pool.query(queries.updateSportstype,[name,id],(error,results) => {
            if(error) throw error;
            res.status(200).send("Edited successfully");
        });
    });
}


module.exports = {
    getSportstypes,
    getSportstypesById,
    addSportstype,
    removeSportstype,
    updateSportstype,
};





