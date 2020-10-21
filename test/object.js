var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
* 对象
*/
describe('Object', () => {
	/**
	* 随机生成，指定数量的键值对对象
	*/
	it("'name|count': object", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'object|2': {
				'310000': '上海市',
				'320000': '江苏省',
				'330000': '浙江省',
				'340000': '安徽省'
			}
		});
		// 输出结果
		console.log("'name|count': object", data);
	});
	/**
	* 随机生成，指定范围数量的键值对对象
	*/
	it("'name|min-max': object", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'object|1-4': {
				'110000': '北京市',
				'120000': '天津市',
				'130000': '河北省',
				'140000': '山西省'
			}
		});
		// 输出结果
		console.log("'name|min-max': object", data);
	});
});

