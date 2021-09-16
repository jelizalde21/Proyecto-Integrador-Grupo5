const profileController = {
    index: function (req, res) {
        res.render ('profile')
    },
    edit: function (req, res) {
        res.render ('profileEdit')
    }
}

module.exports = profileController