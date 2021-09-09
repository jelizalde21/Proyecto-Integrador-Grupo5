const detailController = {
    user: function (req, res) {
        res.render ('detailUser')
    },
    add: function (req, res) {
        res.render ('detailAdd')
    },
    post: function (req, res) {
        res.render ('detailPost')
    }
}

module.exports = detailController