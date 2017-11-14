var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe('replaceWith', function() {
	it('Replaces a character with a given character', function() {
      expect(replaceWith('hello world', 'o', 'a')).to.equal('hella warld');
	});
});