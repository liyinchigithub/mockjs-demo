var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
 * 随机生成一个 用户ID
 */
describe('Miscellaneous', () => {
	/**
	 * 随机生成一个 GUID
	 */
	it('Random.guid()', () => {
		// 实例化 Mock对象
		// Random.guid()
		Random.guid();
		var data1 = Mock.mock('@guid');
		var data2 = Mock.mock('@guid()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
	/**
	 * 随机生成一个 18 位身份证。
	 */
	it('Random.id()', () => {
		// 实例化 Mock对象
		// Random.id()
		Random.id();
		var data1 = Mock.mock('@id');
		var data2 = Mock.mock('@id()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
	/**
	 * 生成一个全局的自增整数。
	 */
	it('Random.increment( step? )', () => {
		// 实例化 Mock对象
		// Random.increment()
		Random.increment();
		var data1 = Mock.mock('@increment');
		var data2 = Mock.mock('@increment()');

		// Random.increment( step )
		Random.increment(100);
		var data1 = Mock.mock('@increment(100)');
		Random.increment(1000);
		var data2 = Mock.mock('@increment(1000)');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
});
