const { expect } = require('chai');

describe('checkForShip', () => {
	const { checkForShip } = require('../game_logic/ship_methods');

	it("should correctly report no ship at a given player's coordinate", () => {

		player = {
			ships: [
				{
					locations: [[0,0]]
				}
			]
		}

		expect(checkForShip(player, [1,1])).to.be.false;
	});

	it("should correctly report a ship located at the given coordinate", () => {

		player = {
			ships: [
				{
					locations: [[0,0]]
				}
			]
		}

		expect(checkForShip(player, [0,0])).to.be.true;
	});

	it("should handle ships at more than one coordinate", () => {

		player = {
			ships: [
				{
					locations: [[0,0], [0,1]]
				}
			]
		}
		expect(checkForShip(player, [0,0])).to.be.true;
		expect(checkForShip(player, [0,1])).to.be.true;
		expect(checkForShip(player, [9,9])).to.be.false;
	});

});
