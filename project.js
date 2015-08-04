var ship = function(name,type,HP,firepower,torpedo,armor,avoid,antiair,slot,load,antisub,speed,search,range,minluck,maxluck,oil,ammo){
  this.name = name;                 //STRING
  this.type = type;                 //STRING
  this.HP = HP;                     //integer
  this.firepower = firepower;       //integer
  this.torpedo = torpedo;           //integer
  this.armor = armor;               //integer
  this.avoid = avoid;               //integer
  this.antiair = antiair;           //integer
  this.slot = slot;                 //integer
  this.load = load;                 //ARRAY
  this.antisub = antisub;           //integer
  this.speed = speed;               //STRING
  this.search = search;             //integer
  this.range = range;               //STRING
  this.minluck = minluck;           //integer
  this.maxluck = maxluck;           //integer
  this.oil = oil;                   //integer
  this.ammo = ammo;                 //integer
};
var equip = function(name,type,firepower,torpedo,bomb,antiair,search,accuracy,avoid,range,available){
  this.name = name;                 //STRING
  this.type = type;                 //STRING
  this.firepower = firepower;       //integer
  this.torpedo = torpedo;           //integer
  this.bomb = bomb;                 //integer
  this.antiair = antiair;           //integer
  this.search = search;             //integer
  this.accuracy = accuracy;         //integer
  this.avoid = avoid;               //integer
  this.range = range;               //STRING
  this.available = available;       //[boolean]
//[destroyer,light cruiser,heavy cruiser,battleship,NAGATO&YAMATO,BISMARCK,light aircraft carrier,AKITSUSHIMA,torpedo cruiser
//aircraft carrier,plane carrier,aircraft cruiser,aircraft battleship,submarine,TAIGEI,AKASHI,aircraft submarine,ABUKUMA]
};
var
