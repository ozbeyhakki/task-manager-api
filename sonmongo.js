// Create read uopdate delete CRUD operatiroms


const mongodb = require('mongodb') 
const MongoClient = mongodb.MongoClient
const ObjectID= mongodb.ObjectId
const id = new ObjectID()

async function connect() {

const connectionURL= 'mongodb://127.0.0.1:27017' //mongoya baglanma 127 li olan localhost ayni
const databaseName = 'task-manager'

console.log('Halil')
const client = new MongoClient(connectionURL, { useNewUrlParser: true} ) 
return await client.connect()
  
} 
// connect().then(async(client) => {
//     console.log("connected") //burda calisilcak
//     const db= client.db('task-manager')
//     const collection= db.collection('users')
//     const result = await collection.insertMany([
//     {
//         name:'James',
//         age: 31
//     }, {
//         name: 'Julian',
//         age: 15
//     }])
//     console.log(result)
// }).catch(e => {
//     console.log('Unable to insert user')
// })

// connect().then(async(client) => {
//     console.log("connected") //burda calisilcak
//     const db= client.db('task-manager')
//     const collection= db.collection('Kullanici')
//     const result = await collection.insertMany([
//     {
//         Task:'Evi guzel temizle',
//         completed: true
//     }, {
//         Task: 'Tras guzel ol',
//         completed: false
//     }])
//     console.log(result)
// }).catch(e => {
//     console.log('Unable to insert user')
// })

// //update ornegi

// connect().then(async(client) => {
//     console.log("connected") //burda calisilcak
//     const db= client.db('task-manager')
//     const collection= db.collection('Kullanici')
//     const result = await collection.updateOne(
//     {
//         _id: new ObjectID('63ee31e37acd0599a9350779')
//     }, {
//         $set : {
//             Task:'Istedigini yaps'
//         }
//     }).then((result) =>{
//         console.log(result)
//     })
//     }).catch(e => {
//     console.log('Unable to insert user')
// })

// connect().then(async(client) => {
//     console.log("connected") //burda calisilcak
//     const db= client.db('task-manager')
//     const collection= db.collection('users')
//     const result = await collection.updateOne(
//     {
//         _id: new ObjectID('63ed27333ca354476b0ed87b')
//     }, {
//         $inc : { // artirmak
//             age: 2
//         }
//     }).then((result) =>{
//         console.log(result)
//     })
//     }).catch(e => {
//     console.log('Unable to insert user')
// })
// //update many
// connect().then(async(client) => {
//     console.log("connected") //burda calisilcak
//     const db= client.db('task-manager')
//     const collection= db.collection('tasks')
//     const result = await collection.updateMany(
//     {
//         completed: false
//     }, {
//         $set : { 
//             completed: true
//         }
//     }).then((result) =>{
//         console.log(result.modifiedCount)
//     })
//     }).catch(e => {
//     console.log(error)
// })

//Deleting docs


//delete many
connect().then(async(client) => {
    console.log("connected") //burda calisilcak
    const db= client.db('task-manager')
    const collection= db.collection('users')
    const result = await collection.deleteMany({
         age: 15
    }).then((result) =>{
        console.log(result)
    }).catch(e => {
        console.log('error')
    })
})
//deleteone
connect().then(async(client) => {
    console.log("connected") //burda calisilcak
    const db= client.db('task-manager')
    const collection= db.collection('tasks')
    const result = await collection.deleteOne({
         _id :new ObjectID('63ee39eaff99ecb4b04cdcff')
    }).then((result) =>{
        console.log(result)
    }).catch(e => {
        console.log('error')
    })
})

connect().then(async(client) => {
    console.log("connected") //burda calisilcak
    const db= client.db('task-manager')
    const collection= db.collection('tasks')
    const result = await collection.deleteMany({
         Task: 'Tras guzel ol'
    }).then((result) =>{
        console.log(result)
    }).catch(e => {
        console.log('error')
    })
})