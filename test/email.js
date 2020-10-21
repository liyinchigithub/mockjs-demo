var Mock = require('mockjs');

var Random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据。// 实例化 mock对象	Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

describe('Email', () => {
	/**
	 * Email
	*/
	it('生成随机邮箱账号', () => {
		
		// 调用邮箱方法
		Random.email();
		// => "n.clark@miller.io"
		var emial1 = Mock.mock('@EMAIL');
		// => "y.lee@lewis.org"
		var emial2 = Mock.mock({ email: '@EMAIL' });
		// => { email: "v.lewis@hall.gov" }
		console.log(emial1);
		console.log(emial2);
	});

	/**
 * 随机生成一个邮箱。
*/
	it('Random.email()', () => {
		// 实例化 Mock对象
		// Random.email()
		Random.email();
		var data1 = Mock.mock('@email');
		var data2 = Mock.mock('@email()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});

});
