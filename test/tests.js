var assert = chai.assert;

suite('temperature', function() {
	test('32F = 0C', function() {
		original.value = "32F";
		calculate();
		assert.deepEqual(converted.innerHTML, "0.0 Celsius");
	})
	test('45C = 113F' function() {
		original.value = "45C";
		calculate();
		assert.deepEqual(convert.innerHTML, "113 Fahrenheit");
	})
}
