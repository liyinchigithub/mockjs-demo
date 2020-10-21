var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
 * 随机生成一个 URL。
 */
describe('Web', () => {
	/**
	 * 随机生成一个 URL。
	 */
	it('Random.url()', () => {
		// Random.url()
		Random.url();
		var data1 = Mock.mock('@url');
		var data2 = Mock.mock('@url()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
	/**
	 * 随机生成一个域名。
	 */
	it('Random.domain()', () => {
		// 实例化 Mock对象
		Random.domain();
		var data1 = Mock.mock('@domain');
		var data2 = Mock.mock('@domain()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
	/**
	 * 随机生成一个 协议。
	 */
	it('Random.protocol()', () => {
		// 实例化 Mock对象
		// Random.protocol()
		Random.protocol();
		var data1 = Mock.mock('@protocol');
		var data2 = Mock.mock('@protocol()');
		// 输出结果
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
	/**
	 * 随机生成一个顶级域名。
	*/
	it('Random.tld()', () => {
		// 实例化 Mock对象
		// Random.tld()
		Random.tld();
		var data1 = Mock.mock('@tld');
		var data2 = Mock.mock('@tld()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});

	/**
	 * 随机生成一个ip地址。
	*/
	it('Random.ip()', () => {
		// 实例化 Mock对象
		// Random.ip()
		Random.ip();
		var data1 = Mock.mock('@ip');
		var data2 = Mock.mock('@ip()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
});
