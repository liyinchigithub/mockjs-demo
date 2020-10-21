var Mock = require('mockjs');


/**
 * 字符串
 */
describe('String', () => {
	/**
	 * 生成随机指定范围大小长度的字符串
	 */
	it("'name|min-max': string", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'string|1-10': '★'
		});
		// 输出结果
		console.log("生成随机指定范围大小长度的字符串", data);
	});
	/**
	 * 生成指定字符，重复count次的字符串
	 */
	it("'name|count': string", () => {
		var data = Mock.mock({
			'string|3': 'ab'
		});
		// 输出结果
		console.log("生成指定字符，重复count次的字符串", data);
	});
});
