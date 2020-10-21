var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
* 正则表达式
*/
describe('RegExp', () => {
	/**
	* 生成指定正则规则的字符串，字母（大小写）、数字
	*/
	it('/[a-z][A-Z][0-9][a-x][0-5]/', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			regexp: /[a-z][A-Z][0-9]/
		});
		// 输出结果
		console.log(data);
	});
	
	it('/wWsSdD/', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			regexp: /\w\W\s\S\d\D/
		});
		// 输出结果
		console.log(data);
	});
	/**
	* 生成指定范围位数正则规则的数字
	*/
	it('/d{5,10}/', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			regexp: /\d{5,10}/
		});
		// 输出结果
		console.log(data);
	});
	/**
	 * 生成指定重复数量，指定范围位数正则规则的数字
	*/
	it('/d{5,10}-/', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'regexp|4': /\d{5,10}\-/
		});
		// 输出结果
		console.log(data);
	});
	/**
	 * 生成指定范围，随机重复数量（1-5），指定范围位数正则规则的数字
	*/
	it('/d{5,10}-/', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'regexp|1-5': /\d{5,10}\-/
		});
		// 输出结果
		console.log(data);
	});
});
