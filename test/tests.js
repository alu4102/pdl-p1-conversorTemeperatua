var assert = chai.assert;

suite('temperature', function() {
	test('32F = 0C', function() {
		original.value = "32F";
		calculate();
		assert.deepEqual(converted.innerHTML, "0.0 Celsius");
	})
	test('45C = ...
