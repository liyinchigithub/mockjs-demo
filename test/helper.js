var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。


/**
 *  大小写转化、 数组顺序
 */
describe('Helper', () => {
	/**
	 * 把字符串的第一个字母转换为大写。
	*/
	it('Random.capitalize( word )', () => {
		// 实例化 Mock对象
		// Random.capitalize( word )
		Random.capitalize('hello');
		var data = Mock.mock('@capitalize("hello")');
		// 输出结果
		console.log(data);
	});
	/**
	* 把字符串转换为大写。
	*/
	it('Random.upper( str )', () => {
		// 实例化 Mock对象
		// Random.upper( str )
		Random.upper('hello');
		var data = Mock.mock('@upper("hello")');
		// 输出结果
		console.log(data);
	});
	/**
	* 把字符串转换为小写。
	*/
	it('Random.lower( str )', () => {
		// 实例化 Mock对象
		// Random.lower( str )
		Random.lower('HELLO');
		var data = Mock.mock('@lower("HELLO")');
		// 输出结果
		console.log(data);
	});
	/**
	* 从数组中随机选取一个元素，并返回。
	*/
	it('Random.pick( arr )', () => {
		// 实例化 Mock对象
		// Random.pick( arr )
		Random.pick(['a', 'e', 'i', 'o', 'u']);
		var data = Mock.mock('@pick(["a", "e", "i", "o", "u"])');
		// 输出结果
		console.log(data);
	});
	/**
	* 打乱数组中元素的顺序，并返回。
	*/
	it('Random.shuffle( arr )', () => {
		// 实例化 Mock对象
		// Random.shuffle( arr )
		Random.shuffle(['a', 'e', 'i', 'o', 'u']);
		var data = Mock.mock('@shuffle(["a", "e", "i", "o", "u"])');
		// 输出结果
		console.log(data);
	});
});
