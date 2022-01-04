var express = require('express');
var router = express.Router();
var stagiaire = require('../models/stagiaire');

// retrieve all stagiaires 
router.get('/', function(req, res, next) {
  stagiaire.find(
    (err, stagiaires)=>{
     console.log(stagiaires);
     res.render('stagiaires.twig',
     {
      title : "Stagiaires Liste",
      cont : stagiaires
      });
    }
  ) 
});
// afficher form stagiaire
router.get('/add', function(req,res, next){
    res.render('add_stagiaire.twig')
});
// ajout stagiaire
router.post('/ajout', function(req, res, next){
  new stagiaire ({
    cin : req.body.cin,
    nom : req.body.nom,
    prenom : req.body.prenom,
    email : req.body.email,
    genre : req.body.genre,
    phone : req.body.phone,
    option : req.body.option,
  }).save(function(err,data){
    res.redirect('/')
    })
});

// delete stagiaire
router.get('/delete/:id', function (req, res, next) {
  stagiaire.findById({ _id: req.params.id }, function (err, doc) {
      if (err)
          console.log(err);
      doc.remove(function (err, comment) {
          res.redirect('/');
      })
  })
});
// affiche editer 
router.get('/edit/:id', function(req,res, next){
  stagiaire.findById({_id: req.params.id}, function(err,stagiaire){
    if (err)
    console.log(err);
    res.render('edit_stagiaire.twig', {
      stagiaire : stagiaire
    });
  })
  
});
// editer stagiaire
router.post('/edit/:id', function(req, res, next){
  stagiaire.findById({_id: req.params.id}, function(err, stagi){
    if (err)
    console.log(err);
    stagi.cin = req.body.cin;
    stagi.nom = req.body.nom;
    stagi.prenom = req.body.prenom;
    stagi.email = req.body.email;
    stagi.genre = req.body.genre;
    stagi.phone = req.body.phone;
    stagi.option = req.body.option;
    stagi.save(function(err, todo){
      if(err){
        res.status(500).send(err)
      }
      res.redirect('/');
    })
  })
})
module.exports = router;
