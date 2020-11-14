const Url = require('../models/Url');
const {nanoid} = require('nanoid');

exports.store = (req, res) => {
    let url = {};
    url.description = req.body.urlDescription;
    url.newDescription = "http://localhost:3000/" + nanoid(10);
    
    Url.create(url).then((id) => {
        console.log('Url created with id: ', id);
        res.redirect('/');
    });
}

exports.same = (req, res) =>{
    let code = "http://localhost:3000/"
    code = code + req.params.id
    if(code.charAt(code.length-1) === '+'){
        code = code.slice(0, -1)
        Url.findShort(code).then((url) => {
            res.render('homepage/description', {urls: url});
        })
    }
    else{
        Url.findShort(code).then((url) => {
            let count = url.count
            count= count + 1
            Url.update(url.id, count ).then((newUrl) => {
                res.redirect(url.description);
            })
        })
    }
}