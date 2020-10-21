var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。


/**
* 数组
*/
describe('Array', () => {
	/**
	* 
	*/
	it("'name|1': array", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1': ['AMD', 'CMD', 'UMD']
		});
		// 输出结果
		console.log(data);
	});
	/**
	* 对象
	*/
	it("'name|+1': array", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|+1': ['AMD', 'CMD', 'UMD']
		});
		// 输出结果
		console.log(data);
	});
	it('array|1-10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1-10': [
				{
					'name|+1': ['Hello', 'Mock.js', '!']
				}
			]
		});
		// 输出结果
		console.log(data);
	});
	it("'name|min-max': array", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1-10': ['Mock.js']
		});
		// 输出结果
		console.log(data);
	});
	it('array|1-10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1-10': ['Hello', 'Mock.js', '!']
		});
		// 输出结果
		console.log(data);
	});
	it("'name|count': array", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|3': ['Mock.js']
		});
		// 输出结果
		console.log(data);
	});
	it('array|3', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|3': ['Hello', 'Mock.js', '!']
		});
		// 输出结果
		console.log(data);
	});
});
