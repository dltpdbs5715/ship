// make ship objects
var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');
var output = fs.createWriteStream('ship_obj.js');
var parser = parse();
var input = fs.createReadStream('equip_obj.csv');

var transformer = transform(function(data, callback){
    callback(null,
      'var obj_ship_'+ data[0] +' = {'+
      'no : '+data[0]+', '+             // NO
      'name : '+'"'+data[1]+'"'+', '+     // NAME
      'level : '+data[2]+', '+             // LV
      'firepower : '+data[3]+', '+             // FIREPOWER
      'toredo : '+data[4]+', '+             // TORPEDO
      'antiair : '+data[5]+', '+             // ANTIAIR
      'antisub : '+data[6]+', '+             // ANTISUB
      'search : '+data[7]+', '+             // SEARCH
      'minluck : '+data[8]+', '+             // MINLUCK
      'maxluck : '+data[9]+', '+             // MAXLUCK
      'hp : '+data[10]+', '+            // HP
      'armor : '+data[11]+', '+            // ARMOR
      'avoid : '+data[12]+', '+            // AVOID
      'load : '+data[13]+', '+            // LOAD
      'speed : '+'"'+data[14]+'"'+', '+    // SPEED
      'slot : '+data[15]+', '+            // SLOT
      'fuel : '+data[16]+', '+            // FUEL
      'ammo : '+data[17]+' '+             // AMMO
      '};\n');
}, {parallel: 10});
input.pipe(parser).pipe(transformer).pipe(output);
