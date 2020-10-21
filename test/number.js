var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
 * 数值
 */
describe('Number', () => {
	/**
	 * 累加
	 */
	it("'name|+1': number", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|+1': 202
		});
		// 输出结果
		console.log("'name|+1': number", data);
	});
	/**
	 * 指定范围随机整数
	 */
	it("'name|min-max': number", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|1-100': 100
		});
		// 输出结果
		console.log("'name|min-max': number", data);
	});
	/**
	 * 指定范围随机数，带指定范围小数点
	 */
	it("'name|min-max.dmin-dmax': number", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|1-100.1-10': 1
		});
		// 输出结果
		console.log("'name|min-max.dmin-dmax': number", data);
	});
	/**
	 * 整数位固定，小数位生成指定范围小数
	 */
	it('number|123.1-10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|123.1-10': 1
		});
		// 输出结果
		console.log('number|123.1-10', data);
	});
	/**
	 * 整数位固定，小数位生成？？？
	 */
	it('number|123.3', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|123.3': 2
		});
		// 输出结果
		console.log('number|123.3', data);
	});
	/**
	 * 整数位固定，小数位生成？？？
	 */
	it('number|123.10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|123.10': 1.123
		});
		// 输出结果
		console.log('number|123.10', data);
	});
});

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
