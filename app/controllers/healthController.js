module.exports = {
    doHealthCheck : (req, res) => {
        console.log(req.payload);
        res.send('OK');
    }
}