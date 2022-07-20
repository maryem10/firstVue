//gona use by json server
let todod =[
    {
        id: 1,
        content: "tache 1 "
    },
    {
        id: 2,
        content: "tache 2"
    },
    {
        id: 3,
        content: "tache 3 "
    }
]
module.exports = function(){
    return {
        todod: todod,
    }

}
// module.exports = {
//     firstName: 'James',
//     lastName: 'Bond'
// }