// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res){

        let newFriend = req.body;
        let newScore = req.body.scores;
        let newTotal = getTotal(newScore);
        let totalDiff = [];
        let matchArr = [];


        for(let i = 0; i<friendData.length; i++){
            
            totalDiff.push(Math.abs(newTotal - getTotal(friendData[i].scores)));
            
        }

        let friendIndex = getIndex(totalDiff);

        console.log('totalDiff = '+totalDiff);
        console.log('friendIndex = '+friendIndex);

        for(let i = 0; i<friendIndex.length; i++){
            matchArr.push(friendData[friendIndex[i]]);
        };

        console.log(matchArr);

        friendData.push(newFriend);

        res.json(matchArr);

    });

    function getTotal(friendScores){

        let Total = 0;

        for(let i = 0; i<friendScores.length; i++){
            let toInt = parseInt(friendScores[i]);
            Total = Total + toInt;
        }
        console.log('Total = '+Total);

        return Total;
    }

    function getIndex(totalDiff){

        indexArr = [];

        let smallVal = Math.min(...totalDiff);  

        for(let i = 0; i<totalDiff.length; i++){
            if(totalDiff[i] === smallVal){
                indexArr.push(i);
            }
        }

        return indexArr;
    }


};
