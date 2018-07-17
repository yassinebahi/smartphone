const Projet = require('../models/projets');


module.exports = {
    
    readAll (req,res) {
        Projet.find().then((projets) => {
             res.send(projets);
        });
    },
    read (req,res) {
         
        const id = req.params.id;
        Projet.findById({_id:id}).then( (projet) => {
             res.send({projet});
        })
       
    },
    async create(req,res){
        // const rlt = [];
        // for (var i=0; i<req.body.length; i++) {
        //     var element = req.body[i];
        //     const jsonControl = element.jsonControl;
        //     const jsonPlatform = element.jsonPlatform;
        //     const jsonNetwork = element.jsonNetwork;
        //     const jsonTraffic = element.jsonTraffic;
        //     const projet = new Projet({ jsonControl, jsonPlatform, jsonNetwork, jsonTraffic });
        //     await projet.save();
        //     rlt.push(projet);
        // }
        try{
            console.log('~~~~~~ data from client side ~~~~~~~~');
            console.log(req.body);
            const rlt = await Projet.create(req.body);
            res.send({ reports: rlt });
        } catch (err) {
            res.status(400).send({err})
        }
        
        
    },
        
    delete(req,res){
         const id = req.body.id;
         Projet.findByIdAndRemove({_id:id}).then( (projet) =>{
             res.send({projet});
         }); 
    },

    
};
