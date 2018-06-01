function checkForShip(player, coordinates) {
  let shipPresent, ship;

  for(let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter( actualCoordinate =>
      (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1])
    )[0];

    if (shipPresent) {
      return true;
    }
  }
  return false;
}

module.exports.checkForShip = checkForShip;
