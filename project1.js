var blank = function(N,type,num,title,Lv,firepower,torpedo,antiair,antisub,search,maxluck,minluck,HP,armor,
avoid,load,speed,slot,oil,ammo,accuracy,available,sky,airattack){
  this.N = N;
  this.type = type;
  this.num = num;
  this.title = title;
  this.Lv = Lv;
  this.firepower = firepower;
  this.torpedo = torpedo;
  this.antiair = antiair;
  this.antisub = antisub;
  this.search = search;
  this.maxluck = maxluck;
  this.minluck = minluck;
  this.HP = HP;
  this.armor = armor;
  this.avoid = avoid;
  this.load = load;
  this.speed = speed;
  this.slot = slot;
  this.oil = oil;
  this.ammo = ammo;
  this.accuracy = accuracy;
  this.available = available;
  this.sky = sky;
  this.airattack = airattack;
}
var ship = new blank;
var equip = new blank;
if(ship.type[0]==='carrier'||ship.type[0]==='lightcarrier'){
  ship.firepower = (ship.firepower+equip.firepower+equip.torpedo+equip.bomb*1.3)*1.5;
  ship.sky = root(ship.load[1])*equip.antiair
}