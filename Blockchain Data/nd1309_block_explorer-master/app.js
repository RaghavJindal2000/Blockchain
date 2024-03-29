/**
 * Importing BlockExplorer API to search Block Data
 */
const be = require('blockexplorer');

/**
 *  Explore Block Data function
 * @param {*} index 
 * 
 * Start by requesting the hash then request the block and use console.log()
 * 
 * 
 */

function getBlock(index) {
	be.blockIndex(index)
	  .then(hash => {
		const hashAux = JSON.parse(hash).blockHash;
		console.log(hashAux);
		be.block(hashAux).then(info => {
		  console.log(info);
		});
	})
	  .catch(err => {
		console.warn(err);
	});
}

/**
 * Function to execute the `getBlock(index)` function
 * Nothing to implement here.
 */

(function theLoop (i) {
	setTimeout(function () {
        getBlock(i);
        i++;
		if (i < 3) theLoop(i);
	}, 3000);
  })(0);