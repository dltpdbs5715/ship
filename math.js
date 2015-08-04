var kan = new blank(0);
for(var i = 1; i <= 4; i++){
  if(equip[i].type === 'attacker' || equip[i].type === 'bomber' || equip.type === 'fighter' || equip.type === 'seaRanger'){
    kan.sky += ((int)sqrt(ship.load[i])) * equip[i].antiair;
  }
}
if(ship.type === 'carrier' || ship.type === 'lightCarrier'){
  kan.firepower = ship.firepower * 1.5;
  for(var i = 1; i <= 4; i++){
    kan.firepower += (equip[i].bomb * 1.3 + equip[i].torpedo + equip[i].firepower) * 1.5;
  }
}
else {
  kan.firepower = ship.firepower;
  kan.torpedo = ship.torpedo;
  for(var i = 1; i <= 4; i++){
    kan.firepower += equip[i].firepower;
    kan.torpedo += equip[i].torpedo;
  }
}
