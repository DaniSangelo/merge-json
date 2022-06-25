const fs = require('fs');

function main(){
  destiny = loadJSONDestiny();
  origin = loadJSONOrigin();

  if (origin.length === destiny.length){
    let newJsonFile;

    newJsonFile = destiny.map((item, i) => {
      return {
        ...item,
        new: origin[i],
      }
    })
    fs.writeFile('newJsonFile.json', JSON.stringify(newJsonFile), (err) => {
      if (err) throw err;

      console.log('File created');
    })
  }
}

function loadJSONDestiny(){
  const destiny = require('./destiny.json');
  return destiny;
}

function loadJSONOrigin(){
  const origin = require('./origin.json');
  return origin;
}

main();