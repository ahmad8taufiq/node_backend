const bcrypt = require('bcrypt')

const salt = '$2a$12$RWqAKmzNclytlb5Buk95se2RLPwlfdldXV6Ya2CiHdYlDHHXjKEt2'
const pwd = 'secret'

let hash = ''

bcrypt.hash(pwd, salt).then(result => {
    hash = result
    console.log(hash)
})

bcrypt.compare('secret', '$2a$12$RWqAKmzNclytlb5Buk95seRryN3fX4.jIlKBzNPlKf5qqIqTZt5Xu')
.then(res => {
    console.log({ compare: res })
})