/*
* The trick behind currying is in the order of parameters.
* 
*/

const getProp = prop => obj => obj[prop];
const map = fn => arr => arr.map(fn);

const conditions = [{id: 1}, {id: 2}, {id: 3}];
const getIds = map(getProp('id'));

console.log(getIds(conditions));
