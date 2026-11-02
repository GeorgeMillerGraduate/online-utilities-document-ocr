const assert=require('node:assert/strict'),c=require('../js/core.js');
assert.deepEqual([...c.treatment(new Uint8ClampedArray([0,0,0,0]),'gray')],[255,255,255,255],'transparent pixels composite onto white');
assert.deepEqual([...c.treatment(new Uint8ClampedArray([100,100,100,255,200,200,200,255]),'binary',1,160)],[0,0,0,255,255,255,255,255]);
assert.deepEqual(c.clampRect({x:120,y:90},{x:-10,y:20},100,100),{x:0,y:20,w:100,h:70});
assert.equal(c.count('  A page\nwith five words. '),5);assert.equal(c.count(' '),0);
assert.equal(c.words([{paragraphs:[{lines:[{words:[{text:'Hello',confidence:95,bbox:{x0:1,y0:2,x1:3,y1:4}},{text:' '}]}]}]}]).length,1);
assert.deepEqual(c.words(null),[]);console.log('Preparation, crop bounds, word count and block extraction checks passed.');
