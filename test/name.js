var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
 * 随机生成一个常见的英文名。
 */
describe('Name', () => {
	/**
	 * 随机生成一个常见的英文名。
	 */
	it('Random.first()', () => {
		// 实例化 Mock对象
		// Random.last()
		Random.last();
		var name1 = Mock.mock('@last');
		var name2 = Mock.mock('@last()');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
	/**
	 * 随机生成一个常见的英文姓。
	 */
	it('Random.name( middle? )', () => {
		// 实例化 Mock对象
		// Random.name()
		Random.name();
		var name1 = Mock.mock('@name');
		var name2 = Mock.mock('@name()');

		// Random.name( middle )
		Random.name(true);
		var name3 = Mock.mock('@name(true)');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
		console.log(name3);
	});
	/**
	 * 随机生成一个常见的中文姓。
	 */
	it('Random.cfirst()', () => {
		// 实例化 Mock对象
		// Random.cfirst()
		Random.cfirst();
		var name1 = Mock.mock('@cfirst');
		var name2 = Mock.mock('@cfirst()');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
	/**
	 * 随机生成一个常见的中文名
	 */
	it('Random.clast()', () => {
		// Random.clast()
		Random.clast();
		var name1 = Mock.mock('@clast');
		var name2 = Mock.mock('@clast()');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
	/**
	 * 随机生成一个常见的中文姓名。
	 */
	it('Random.cname()', () => {
		// 实例化 Mock对象
		// Random.cname()
		Random.cname();
		var name1 = Mock.mock('@cname');
		var name2 = Mock.mock('@cname()');
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
});
