const axios = require('axios');

async function getJokes(req,res){
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    res.render('index', {joke: response.data.value, title: 'Chuck Norris Jokes'})
}

function getCategory(req,res){
    res.render('jokes/category');
}

async function getCJoke(req,res){
    const category = req.body.category;
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const joke = response.data.value;
    res.render('jokes/category', {joke: joke});
}

module.exports = {
    getJokes,
    getCategory,
    getCJoke
}