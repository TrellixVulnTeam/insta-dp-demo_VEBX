var express = require('express');
var request = require('request');
var path = require('path');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser())

app.use('/api/v1/users', users);

module.exports = app;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.route('/api/user/:username').get((req, res) => {
    const username = req.params.username;
    console.log(username);
    const byUsernameUrl = `https://www.instagram.com/${username}/?__a=1`;

    const tempUrl = 'https://www.instagram.com/kreshnikkatona/?__a=1';
    const cookie = 'mid=Ye8KrgAEAAHEdQhmQh5rs0og68V7; ig_did=A81A5436-29F0-457A-9A36-F02ED8EE7D50; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; csrftoken=8PaZDrdQs1SQnByGnvHP8DMTpigKzBhd; ds_user_id=51389886773; sessionid=51389886773:z2qpmKeA7H4EQj:11; fbsr_124024574287414=fDys8oXDS9w9QIf_J0Sbyx9C7pbt3I-AtCJrlWk7zmI.eyJ1c2VyX2lkIjoiMTQ0MzYzMTMzNCIsImNvZGUiOiJBUUJYUWlFbk9qRjhaS1hTd0ZJakxxZl9FWlBoUWMxajh2WEIxSjdmVFVRYlpRNTc3dnBlOHRyNEhCT2RDeXNablV4OTNfRU9OWG1uNUdXSDY5YjJBVnhpRVBCaU5qV1hCQ0ZVY090ZFBQWm1iX3hrTGt3YlJDWW1yUHFGY2VxeFNyU1dNX2h0QWZNQ24xOWtoN000QmJXTnBhd3RGdTFYUklFT1FVNDdCUGF6azlDbDBNaWpnTmhLem9TbG42QkgtUTNZVUlCZlFfanlPUGJCSGVzc3JnU3JfY2ZJcDI1aGVpaVlCWHpVOHJhLWFkOGJISkN1NFdBN2pORUFNQklkeVNNanRfR1VzSklYQVU5RG9yN21LXzgyMmNKcWFmbm5QMXpOdG9uNmNIaDdYenhFV3A5SGhJRFU1dEw3djBUM0ZvM2p0VU1aLUI2cWtFNEM1YjZoa1l6LUVFZGh3cnA3VGhkbTNXZnV2YWlhMEEiLCJvYXV0aF90b2tlbiI6IkVBQUJ3ekxpeG5qWUJBTGtPQmR3OERjY1pDdVdFN040OXN4aEdSYVV0MU9iVmI0UjE1alYxak9GU1RLQUJxb3JWYm42Zk9HcHZaQmE5dWdPWkJTbHJnSHhObEZ2NkpmcmNuWkNZNzRYeHQwVFpBYk5ORTJZcjExSTVWSkszcXJaQUF3cmo2V0pQczVFU0F5dHRsQVpBV09GelFzdzJDMnBRVXNiSW9JcXBpM1NXVW9NNG5RSVBjN3Y5dk9ZQUV3bEQ2Z3hyMXhxcnJYOWJBWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjQzODQzNjk1fQ; rur="FRC\05451389886773\0541675379696:01f7a2b5e5f060b1cec3d70bd373f32e88a5629c72b71271f9911f440c43efc1564208e8"';

    const options = {
        url: byUsernameUrl,
        headers: {
            cookie: cookie
        }
    }
    request(options, function (error, response, body) {
        res.send(body);
    })
})

app.route('/api/ig/:id').get((req, res) => {
    const id = req.params.id;
    const url = `https://i.instagram.com/api/v1/users/${id}/info/`;
    const cookie = 'mid=Ye8KrgAEAAHEdQhmQh5rs0og68V7; ig_did=A81A5436-29F0-457A-9A36-F02ED8EE7D50; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; csrftoken=8PaZDrdQs1SQnByGnvHP8DMTpigKzBhd; ds_user_id=51389886773; sessionid=51389886773:z2qpmKeA7H4EQj:11; fbsr_124024574287414=fDys8oXDS9w9QIf_J0Sbyx9C7pbt3I-AtCJrlWk7zmI.eyJ1c2VyX2lkIjoiMTQ0MzYzMTMzNCIsImNvZGUiOiJBUUJYUWlFbk9qRjhaS1hTd0ZJakxxZl9FWlBoUWMxajh2WEIxSjdmVFVRYlpRNTc3dnBlOHRyNEhCT2RDeXNablV4OTNfRU9OWG1uNUdXSDY5YjJBVnhpRVBCaU5qV1hCQ0ZVY090ZFBQWm1iX3hrTGt3YlJDWW1yUHFGY2VxeFNyU1dNX2h0QWZNQ24xOWtoN000QmJXTnBhd3RGdTFYUklFT1FVNDdCUGF6azlDbDBNaWpnTmhLem9TbG42QkgtUTNZVUlCZlFfanlPUGJCSGVzc3JnU3JfY2ZJcDI1aGVpaVlCWHpVOHJhLWFkOGJISkN1NFdBN2pORUFNQklkeVNNanRfR1VzSklYQVU5RG9yN21LXzgyMmNKcWFmbm5QMXpOdG9uNmNIaDdYenhFV3A5SGhJRFU1dEw3djBUM0ZvM2p0VU1aLUI2cWtFNEM1YjZoa1l6LUVFZGh3cnA3VGhkbTNXZnV2YWlhMEEiLCJvYXV0aF90b2tlbiI6IkVBQUJ3ekxpeG5qWUJBTGtPQmR3OERjY1pDdVdFN040OXN4aEdSYVV0MU9iVmI0UjE1alYxak9GU1RLQUJxb3JWYm42Zk9HcHZaQmE5dWdPWkJTbHJnSHhObEZ2NkpmcmNuWkNZNzRYeHQwVFpBYk5ORTJZcjExSTVWSkszcXJaQUF3cmo2V0pQczVFU0F5dHRsQVpBV09GelFzdzJDMnBRVXNiSW9JcXBpM1NXVW9NNG5RSVBjN3Y5dk9ZQUV3bEQ2Z3hyMXhxcnJYOWJBWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjQzODQzNjk1fQ; rur="FRC\05451389886773\0541675379696:01f7a2b5e5f060b1cec3d70bd373f32e88a5629c72b71271f9911f440c43efc1564208e8"';

    const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)';
    const options = {
        url: url,
        headers: {
            'User-Agent': userAgent,
            cookie: cookie
        },
    }
    request(options, function (error, response, body) {
        res.send(body)
    })
});

app.route('/api/getImg/:imgUrl').get((req, res) => {
    const imgUrl = req.params.imgUrl;
    const cookie = 'mid=Ye8KrgAEAAHEdQhmQh5rs0og68V7; ig_did=A81A5436-29F0-457A-9A36-F02ED8EE7D50; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; csrftoken=8PaZDrdQs1SQnByGnvHP8DMTpigKzBhd; ds_user_id=51389886773; sessionid=51389886773:z2qpmKeA7H4EQj:11; fbsr_124024574287414=fDys8oXDS9w9QIf_J0Sbyx9C7pbt3I-AtCJrlWk7zmI.eyJ1c2VyX2lkIjoiMTQ0MzYzMTMzNCIsImNvZGUiOiJBUUJYUWlFbk9qRjhaS1hTd0ZJakxxZl9FWlBoUWMxajh2WEIxSjdmVFVRYlpRNTc3dnBlOHRyNEhCT2RDeXNablV4OTNfRU9OWG1uNUdXSDY5YjJBVnhpRVBCaU5qV1hCQ0ZVY090ZFBQWm1iX3hrTGt3YlJDWW1yUHFGY2VxeFNyU1dNX2h0QWZNQ24xOWtoN000QmJXTnBhd3RGdTFYUklFT1FVNDdCUGF6azlDbDBNaWpnTmhLem9TbG42QkgtUTNZVUlCZlFfanlPUGJCSGVzc3JnU3JfY2ZJcDI1aGVpaVlCWHpVOHJhLWFkOGJISkN1NFdBN2pORUFNQklkeVNNanRfR1VzSklYQVU5RG9yN21LXzgyMmNKcWFmbm5QMXpOdG9uNmNIaDdYenhFV3A5SGhJRFU1dEw3djBUM0ZvM2p0VU1aLUI2cWtFNEM1YjZoa1l6LUVFZGh3cnA3VGhkbTNXZnV2YWlhMEEiLCJvYXV0aF90b2tlbiI6IkVBQUJ3ekxpeG5qWUJBTGtPQmR3OERjY1pDdVdFN040OXN4aEdSYVV0MU9iVmI0UjE1alYxak9GU1RLQUJxb3JWYm42Zk9HcHZaQmE5dWdPWkJTbHJnSHhObEZ2NkpmcmNuWkNZNzRYeHQwVFpBYk5ORTJZcjExSTVWSkszcXJaQUF3cmo2V0pQczVFU0F5dHRsQVpBV09GelFzdzJDMnBRVXNiSW9JcXBpM1NXVW9NNG5RSVBjN3Y5dk9ZQUV3bEQ2Z3hyMXhxcnJYOWJBWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjQzODQzNjk1fQ; rur="FRC\05451389886773\0541675379696:01f7a2b5e5f060b1cec3d70bd373f32e88a5629c72b71271f9911f440c43efc1564208e8"';

    const options = {
        url: imgUrl,
        headers: {
            cookie: cookie
        }
    }
    request(options, function (error, response, body) {
        res.send(body);
    })
})

const http = require('http');

const hostname = 'localhost';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
