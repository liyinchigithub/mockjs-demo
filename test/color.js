var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
 * 随机生成一个颜色，格式为 '#RRGGBB'。
 */
describe('Color', () => {
	it('Random.color()', () => {
		// Random.color()
		Random.color();
		var c1 = Mock.mock('@color');
		var c2 = Mock.mock('@color()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.hex()', () => {
		// Random.hex()
		Random.hex();
		var c1 = Mock.mock('@hex');
		var c2 = Mock.mock('@hex()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.rgb()', () => {
		// Random.rgb()
		Random.rgb();
		var c1 = Mock.mock('@rgb');
		var c2 = Mock.mock('@rgb()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.rgba()', () => {
		// Random.rgba()
		Random.rgba();
		var c1 = Mock.mock('@rgba');
		var c2 = Mock.mock('@rgba()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.hsl()', () => {
		// Random.hsl()
		Random.hsl();
		var c1 = Mock.mock('@hsl');
		var c2 = Mock.mock('@hsl()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
});
