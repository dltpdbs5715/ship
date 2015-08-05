//pipe style
var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');
var output = fs.createWriteStream('equip_obj.js');
var parser = parse();
var input = fs.createReadStream('equip_obj.csv');

var transformer = transform(function(data, callback){
    callback(null,
      'var obj_equip_'+ data[0] +' = {'+
      'no : '+data[0]+', '+             // No.,FIREPOWER,TORPEDO,BOMB,ANTIAIR,ANTISUB,SEARCH,ACCURACY,AVOID,ARMOR,RANGE
      'name : '+'"'+data[1]+'"'+', '+     // NAME
      'firepower : '+(data[2] == '-'?null:data[2])+', '+             // FIREPOWER
      'torpedo : '+(data[3] == '-'?null:data[3])+', '+             // TORPEDO
      'bomb : '+(data[4] == '-'?null:data[4])+', '+             // BOMB
      'antiair : '+(data[5] == '-'?null:data[5])+', '+             // ANTIAIR
      'antisub : '+(data[6] == '-'?null:data[6])+', '+             // ANTISUB
      'search : '+(data[7] == '-'?null:data[7])+', '+             // SEARCH
      'accuracy : '+(data[8] == '-'?null:data[8])+', '+             // ACCURACY
      'avoid : '+(data[9] == '-'?null:data[9])+', '+             // AVOID
      'armor : '+(data[10] == '-'?null:data[10])+', '+            // ARMOR
      'range : '+(data[11] == '-'?null:data[11])+' '+            // RANGE
      '};\n');
}, {parallel: 10});
input.pipe(parser).pipe(transformer).pipe(output);

//OOOOOOOOOO
