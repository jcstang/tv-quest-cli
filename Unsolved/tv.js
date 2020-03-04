const axios = require('axios');


var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    
    return axios.get(URL)
      .then(function(response) {
        const show = response.data;
        return show;
        
        // TODO: print out the stuff pretty
        console.log("------------------------------------------------");
          console.log(`Tv Show: ${show.name}`);
          
        // console.log(
        //   `Tv Show: ${show['name']}`
        //   `Type: ${show.Scripted}`
        // );


        
        console.log("------------------------------------------------");
        


        // return show;
      }).catch(function(error) {
        console.log(error);
      });

  };

  this.findActor = function(name) {
    var URL = `http://api.tvmaze.com/search/people?q=${name}`;

    axios.get(URL).then(response => {
      console.log(response.data);
      
    }).catch(error => {

    });
  }
};



module.exports = TV;
