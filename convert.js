const fs = require('fs')
const path = require('path')

//below structure is from https://www.npmjs.com/package/csvtojson
/** csv file
a,b,c
1,2,3
4,5,6
*/
const csvFilePath = path.join('.', 'customer-data.csv')
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj), (error)=>{
      if (error) throw error;
      console.log();
    })
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */
})
