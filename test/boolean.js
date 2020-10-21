var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
* 布尔类型
*/
describe('Boolean', () => {
		/**
		* 固定值 1为真 0为假
		*/
	it("'name|1': boolean", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'boolean|1': true
		});
		// 输出结果
		console.log("'name|1': boolean", data);
	});
	/**
		* 随机值，真或假
		*/
	it("'name|min-max': boolean", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'boolean|1-2': true
		});
		// 输出结果
		console.log("'name|min-max': boolean", data);
	});
});
