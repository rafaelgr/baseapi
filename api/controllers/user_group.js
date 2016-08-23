var userGroupDb = require('asw_basepkg').userGroup;

var userGroupAPI = {
    get: function (req, res) {
        userGroupDb.get(function (err, groups) {
            if (err) return res.status(500).send(err.message);
            res.json(groups);
        })
    }
}

module.exports = userGroupAPI;

