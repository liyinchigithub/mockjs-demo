var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。


describe('Basic', () => {
	/**
	 * 随机布尔值 真或假
	*/
	it('Random.boolean( min?, max?, current? )', () => {
		// 实例化 Mock对象
		// Random.boolean()
		Random.boolean();
		var b1 = Mock.mock('@boolean');
		var b2 = Mock.mock('@boolean()');

		// Random.boolean( min, max, current )
		Random.boolean(1, 9, true);
		var b3 = Mock.mock('@boolean(1, 9, true)');
		// 输出结果
		console.log(b1);
		console.log(b2);
		console.log(b3);
	});
	/**
	 * 返回一个随机的自然数（大于等于 0 的整数）。
	*/
	it('Random.natural( min?, max? )', () => {
		// 实例化 Mock对象
		// Random.natural()
		Random.natural();
		var b1 = Mock.mock('@natural');
		var b2 = Mock.mock('@natural()');

		// Random.natural( min )
		Random.natural(10000);
		var b3 = Mock.mock('@natural(10000)');

		// Random.natural( min, max )
		Random.natural(60, 100);
		var b4 = Mock.mock('@natural(60, 100)');
		// 输出结果
		console.log('Random.natural', b1);
		console.log('Random. ()', b2);
		console.log('Random.natural(10000)', b3);
		console.log('Random.natural(60, 100)', b4);
	});
	/**
	 * 返回一个随机的整数
	 */
	it('Random.integer( min?, max? )', () => {
		// 实例化 Mock对象
		// Random.natural()
		Random.natural();
		var b1 = Mock.mock('@integer');
		var b2 = Mock.mock('@integer()');

		// Random.natural( min )
		Random.natural(10000);
		var b3 = Mock.mock('@integer(10000)');

		// Random.natural( min, max )
		Random.natural(60, 100);
		var b4 = Mock.mock('@integer(60, 100)');
		// 输出结果
		console.log('Random.integer', b1);
		console.log('Random.integer()', b2);
		console.log('Random.integer(10000)', b3);
		console.log('Random.integer(60, 100)', b4);
	});

	/**
	 * 返回一个随机的浮点数。
	 */
	it('Random.float( min?, max?, dmin?, dmax? )', () => {
		// 实例化 Mock对象
		// Random.float()
		Random.float();
		var b1 = Mock.mock('@float');
		Mock.mock('@float()');

		// Random.float( min )
		Random.float(0);
		var b2 = Mock.mock('@float(0)');

		// Random.float( min, max )
		Random.float(60, 100);
		var b3 = Mock.mock('@float(60, 100)');

		// Random.float( min, max, dmin )
		Random.float(60, 100, 3);
		var b4 = Mock.mock('@float(60, 100, 3)');

		// Random.float( min, max, dmin, dmax )
		Random.float(60, 100, 3, 5);
		var b5 = Mock.mock('@float(60, 100, 3, 5)');
		// 输出结果
		console.log('Random.@float', b1);
		console.log('Random.@float(0)', b2);
		console.log('Random.@float(60, 100)', b3);
		console.log('Random.@float(60, 100, 3)', b4);
		console.log('Random.@float(60, 100, 3, 5)', b5);
	});
	/**
	 * 返回一个随机字符。
	 */
	it('Random.character( pool? )', () => {
		// 实例化 Mock对象
		// Random.character()
		Random.character();
		console.log(Mock.mock('@character'));
		console.log(Mock.mock('@character()'));

		// Random.character( 'lower/upper/number/symbol' )
		Random.character('lower');
		Random.character('upper');
		Random.character('number');
		Random.character('symbol');

		console.log(Mock.mock('@character("lower")'));
		console.log(Mock.mock('@character("upper")'));
		console.log(Mock.mock('@character("number")'));
		console.log(Mock.mock('@character("symbol")'));

		// Random.character( pool )
		Random.character('aeiou');
		console.log(Mock.mock('@character("aeiou")'));
	});
	/**
	 * 返回一个随机字符串
	 */
	it('Random.string( pool?, min?, max? )', () => {
		// 实例化 Mock对象
		// Random.string()
		Random.string();
		var str1 = Mock.mock('@string');
		var str2 = Mock.mock('@string()');

		// Random.string( length )
		Random.string(5);
		var str3 = Mock.mock('@string(5)');

		// Random.string( pool, length )
		Random.string('lower', 5);
		Random.string('upper', 5);
		Random.string('number', 5);
		Random.string('symbol', 5);
		Random.string('aeiou', 5);

		var str4 = Mock.mock('@string("lower", 5)');
		var str5 = Mock.mock('@string("upper", 5)');
		var str6 = Mock.mock('@string("number", 5)');
		var str7 = Mock.mock('@string("symbol", 5)');
		var str8 = Mock.mock('@string("aeiou", 5)');

		// Random.string( min, max )
		Random.string(7, 10);
		var str9 = Mock.mock('@string(7, 10)');

		// Random.string( pool, min, max )
		Random.string('lower', 1, 3);
		Random.string('upper', 1, 3);
		Random.string('number', 1, 3);
		Random.string('symbol', 1, 3);
		Random.string('aeiou', 1, 3);

		var str10 = Mock.mock('@string("lower", 1, 3)');
		var str11 = Mock.mock('@string("upper", 1, 3)');
		var str12 = Mock.mock('@string("number", 1, 3)');
		var str13 = Mock.mock('@string("symbol", 1, 3)');
		var str14 = Mock.mock('@string("aeiou", 1, 3)');
		// 输出结果
		console.log(str1);
		console.log(str2);
		console.log(str3);
		console.log(str4);
		console.log(str5);
		console.log(str6);
		console.log(str7);
		console.log(str8);
		console.log(str9);
		console.log(str10);
		console.log(str11);
		console.log(str12);
		console.log(str13);
		console.log(str14);
	});
	/**
	 * 返回一个整型数组。
	 */
	it('Random.range(start?, stop, step?)', () => {
		// 实例化 Mock对象
		// Random.range( stop )
		Random.range(10);
		var r1 = Mock.mock('@range(10)');

		// Random.range( start, stop )
		Random.range(3, 7);
		var r2 = Mock.mock('@range(3, 7)');

		// Random.range( start, stop, step )
		Random.range(1, 10, 2);
		Random.range(1, 10, 3);

		var r3 = Mock.mock('@range(1, 10, 2)');
		var r4 = Mock.mock('@range(1, 10, 3)');
		// 输出结果
		console.log(r1);
		console.log(r2);
		console.log(r3);
		console.log(r4);
	});
});
