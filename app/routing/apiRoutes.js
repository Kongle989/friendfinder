var friends = require("../data/friends.js");
module.exports = function (app) {
    // GET FRIENDS OBJECT
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    // CALCULATE AND GIVE BEST MATCH
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        let userScore = friends[friends.length - 1].scores,
            matchIndex;

        for (let i = 0; i < friends.length - 1; i++) {
            let matchCount = 100,
                total = 0;
            for (let j in friends[i].scores) {
                total += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j]));
            }
            if (total < matchCount) matchIndex = i;
        }
        res.json(friends[matchIndex]);
    });
};