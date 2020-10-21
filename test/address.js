var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。


/**
 * 地址
 */
describe('Address', () => {
	/**
	 * 随机生成一个地区（华南、华北、西北...）
	 */
	it('Random.region()', () => {
		// 实例化 Mock对象
		// Random.region()
		Random.region();
		var data1 = Mock.mock('@region');
		var data2 = Mock.mock('@region()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
	/**
	 * 随机生成一个中国省份（或直辖市、自治区、特别行政区）。
	 */
	it('Random.province()', () => {
		// 实例化 Mock对象
		// Random.province()
		Random.province();
		var data1 = Mock.mock('@province');
		var data2 = Mock.mock('@province()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
	/**
	 * 随机生成一个城市
	 */
	it('Random.city( prefix? )', () => {
		// 实例化 Mock对象
		// Random.city()
		Random.city();
		var data1 = Mock.mock('@city');
		var data2 = Mock.mock('@city()');
		// Random.city( prefix )
		Random.city(true);
		var data3 = Mock.mock('@city(true)');
		// 输出结果
		console.log(data1);
		console.log(data2);
		console.log(data3);
	});
	/**
	 * 随机生成一个省、市、县
	 */
	it('Random.county( prefix? )', () => {
		// 实例化 Mock对象
		// Random.county()
		Random.county();
		var data1 = Mock.mock('@county');
		var data2 = Mock.mock('@county()');
		// Random.county( prefix )
		Random.county(true);
		var data3 = Mock.mock('@county(true)');
		// 输出结果
		console.log(data1);
		console.log(data2);
		console.log(data3);
	});
	/**
	 * 随机生成一个邮编
	 */
	it('Random.zip()', () => {
		// 实例化 Mock对象
		// Random.zip()
		Random.zip();
		var data1 = Mock.mock('@zip');
		var data2 = Mock.mock('@zip()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
});
