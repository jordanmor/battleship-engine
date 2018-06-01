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
});
