var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
 * 返回一个随机的日期字符串。
 */
describe('Date', () => {
	it('Random.date( format? )', () => {
		// 实例化 Mock对象
		Random.date();
		var d1 = Mock.mock('@date');
		var d2 = Mock.mock('@date()');

		// Random.date( format )
		Random.date('yyyy-MM-dd');
		Random.date('yy-MM-dd');
		Random.date('y-MM-dd');
		Random.date('y-M-d');

		var d3 = Mock.mock('@date("yyyy-MM-dd")');
		var d4 = Mock.mock('@date("yy-MM-dd")');
		var d5 = Mock.mock('@date("y-MM-dd")');
		var d6 = Mock.mock('@date("y-M-d")');
		var d7 = Mock.mock('@date("yyyy yy y MM M dd d")');
		// 输出结果
		console.log(d1);
		console.log(d2);
		console.log(d3);
		console.log(d4);
		console.log(d5);
		console.log(d6);
		console.log(d7);
	});
	/**
	 * 返回一个随机的时间字符串。
	*/
	it('Random.time( format? )', () => {
		// Random.time()
		Random.time();
		var t1 = Mock.mock('@time');
		var t2 = Mock.mock('@time()');

		// Random.time( format )
		Random.time('A HH:mm:ss');
		Random.time('a HH:mm:ss');
		Random.time('HH:mm:ss');
		Random.time('H:m:s');

		var t3 = Mock.mock('@time("A HH:mm:ss")');
		var t4 = Mock.mock('@time("a HH:mm:ss")');
		var t5 = Mock.mock('@time("HH:mm:ss")');
		var t6 = Mock.mock('@time("H:m:s")');
		var t7 = Mock.mock('@datetime("HH H hh h mm m ss s SS S A a T")');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
		console.log(t5);
		console.log(t6);
		console.log(t7);
	});
	/** 
	 * 返回一个随机的日期和时间字符串。
	*/
	it('Random.datetime( format? )', () => {
		// Random.datetime()
		Random.datetime();
		var t1 = Mock.mock('@datetime');
		var t2 = Mock.mock('@datetime()');

		// Random.datetime( format )
		Random.datetime('yyyy-MM-dd A HH:mm:ss');
		Random.datetime('yy-MM-dd a HH:mm:ss');
		Random.datetime('y-MM-dd HH:mm:ss');
		Random.datetime('y-M-d H:m:s');

		var t3 = Mock.mock('@datetime("yyyy-MM-dd A HH:mm:ss")');
		var t4 = Mock.mock('@datetime("yy-MM-dd a HH:mm:ss")');
		var t5 = Mock.mock('@datetime("y-MM-dd HH:mm:ss")');
		var t6 = Mock.mock('@datetime("y-M-d H:m:s")');

		var t7 = Mock.mock('@datetime("yyyy yy y MM M dd d HH H hh h mm m ss s SS S A a T")');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
		console.log(t5);
		console.log(t6);
		console.log(t7);
	});
	/**
	 * 返回当前的日期和时间字符串
	*/
	it('Random.now( unit?, format? )', () => {
		// Ranndom.now()
		Random.now();
		var t1 = Mock.mock('@now');
		var t2 = Mock.mock('@now()');

		// Ranndom.now( unit )
		Random.now('year');
		Random.now('month');
		Random.now('week');
		Random.now('day');
		Random.now('hour');
		Random.now('minute');
		Random.now('second');

		// Ranndom.now( format )
		var t3 = Random.now('yyyy-MM-dd HH:mm:ss SS');

		// Ranndom.now( unit, format )
		var t4 = Random.now('day', 'yyyy-MM-dd HH:mm:ss SS');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
});
