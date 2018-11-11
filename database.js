const pgp = require('pg-promise')();
var db = pgp('postgres://jcdfmzgcegkkxy:1cc0dec1ae4fa101a6fc4696b090b7b90f0f3847eb819bba2c969986f380b44e@ec2-54-243-147-162.compute-1.amazonaws.com:5432/d51ai2ptaqnqhd?ssl=true');

//product
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success', //ให้คนเรียกใช้ไปใช้งานถ้าไม่errorจะขึ้นsuccess
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getProductByID(req, res) {
    db.any('select * from products where product_id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve products id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertProduct(req, res) {
    db.none('insert into products(product_id, title, price, created_at, tags)' +
        'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateProduct(req, res) {
    db.none('update products set product_id = ${product_id} ,title = ${title} , price= ${price} , tags= ${tags} where product_id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.none('delete from products where product_id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//User
function getAllUsers(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success', //ให้คนเรียกใช้ไปใช้งานถ้าไม่errorจะขึ้นsuccess
                    data: data,
                    message: 'Retrieved ALL users'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getUserByID(req, res) {
    db.any('select * from users where users_id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved users id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve users id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertUser(req, res) {
    db.none('insert into users(users_id, title, price, created_at, tags)' +
        'values(${users_id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateUser(req, res) {
    db.none('update users set users_id = ${users_id} ,title = ${title} , price= ${price} , tags= ${tags} where users_id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteUser(req, res) {
    db.none('delete from users where users_id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//purchases

function getAllPurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success', //ให้คนเรียกใช้ไปใช้งานถ้าไม่errorจะขึ้นsuccess
                    data: data,
                    message: 'Retrieved ALL purchases'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getPurchasesByID(req, res) {
    db.any('select * from purchases where purchase_id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchases id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve purchases id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertPurchases(req, res) {
    db.none('insert into purchases(purchase_id, title, price,state, created_at, tags)' +
        'values(${purchase_id}, ${title}, ${price}, ${state}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchases(req, res) {
    db.none('update purchases set purchase_id = ${purchase_id} ,title = ${title} , price= ${price} ,state= ${state} , tags= ${tags} where purchase_id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchases(req, res) {
    db.none('delete from purchases where purchase_id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//purchase_items
function getAllPurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success', //ให้คนเรียกใช้ไปใช้งานถ้าไม่errorจะขึ้นsuccess
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getPurchase_itemsByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase_items id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve purchase_items id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertPurchase_items(req, res) {
    db.none('insert into purchase_items(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchase_items(req, res) {
    db.none('update purchase_items set id = ${id} ,title = ${title} , price= ${price} , tags= ${tags} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchase_items(req, res) {
    db.none('delete from purchase_items where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct, 
    //user
    getAllUsers,
    getUserByID,
    insertUser,
    updateUser,
    deleteUser,
    //purchases
    getAllPurchases,
    getPurchasesByID,
    insertPurchases,
    updatePurchases,
    deletePurchases, 
    //Purchase_items
    getAllPurchase_items,
    getPurchase_itemsByID,
    insertPurchase_items,
    updatePurchase_items,
    deletePurchase_items
};



