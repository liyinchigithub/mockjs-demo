var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

describe.skip('Email', () => {
	/**
     * Email
    */
	it('随机邮箱号', () => {
		var Random = Mock.Random;
		Random.email();
		// => "n.clark@miller.io"
		var emial1 = Mock.mock('@EMAIL');
		// => "y.lee@lewis.org"
		var emial2 = Mock.mock({ email: '@EMAIL' });
		// => { email: "v.lewis@hall.gov" }
		console.log(emial1);
		console.log(emial2);
	});
	it.skip('', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'list|1-10': [
				{
					// 属性 id 是一个自增数，起始值为 1，每次增 1
					'id|+1': 1
				}
			]
		});
		// 输出结果
		console.log(JSON.stringify(data, null, 4));
	});
});

/**
 * 字符串
 */
describe.skip('String', () => {
	/**
     * 生成随机指定范围大小长度的字符串
     */
	it("'name|min-max': string", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'string|1-10': '★'
		});
		// 输出结果
		console.log("'name|min-max': string", data);
	});
	/**
     * 生成指定字符，重复count次的字符串
     */
	it("'name|count': string", () => {
		var data = Mock.mock({
			'string|3': 'ab'
		});
		// 输出结果
		console.log("'name|count': string", data);
	});
});

/**
 * 数值
 */
describe.skip('Number', () => {
	/**
     * 累加
     */
	it("'name|+1': number", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|+1': 202
		});
		// 输出结果
		console.log("'name|+1': number", data);
	});
	/**
     * 指定范围随机整数
     */
	it("'name|min-max': number", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|1-100': 100
		});
		// 输出结果
		console.log("'name|min-max': number", data);
	});
	/**
     * 指定范围随机数，带指定范围小数点
     */
	it("'name|min-max.dmin-dmax': number", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|1-100.1-10': 1
		});
		// 输出结果
		console.log("'name|min-max.dmin-dmax': number", data);
	});
	/**
     * 整数位固定，小数位生成指定范围小数
     */
	it('number|123.1-10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|123.1-10': 1
		});
		// 输出结果
		console.log('number|123.1-10', data);
	});
	/**
     * 整数位固定，小数位生成？？？
     */
	it('number|123.3', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|123.3': 2
		});
		// 输出结果
		console.log('number|123.3', data);
	});
	/**
     * 整数位固定，小数位生成？？？
     */
	it('number|123.10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'number|123.10': 1.123
		});
		// 输出结果
		console.log('number|123.10', data);
	});
});

/**
* 布尔类型
*/
describe.skip('Boolean', () => {
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

/**
* 对象
*/
describe.skip('Object', () => {
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

/**
* 数组
*/
describe.skip('Array', () => {
	/**
    * 
    */
	it("'name|1': array", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1': [ 'AMD', 'CMD', 'UMD' ]
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
			'array|+1': [ 'AMD', 'CMD', 'UMD' ]
		});
		// 输出结果
		console.log(data);
	});
	it('array|1-10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1-10': [
				{
					'name|+1': [ 'Hello', 'Mock.js', '!' ]
				}
			]
		});
		// 输出结果
		console.log(data);
	});
	it("'name|min-max': array", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1-10': [ 'Mock.js' ]
		});
		// 输出结果
		console.log(data);
	});
	it('array|1-10', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|1-10': [ 'Hello', 'Mock.js', '!' ]
		});
		// 输出结果
		console.log(data);
	});
	it("'name|count': array", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|3': [ 'Mock.js' ]
		});
		// 输出结果
		console.log(data);
	});
	it('array|3', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			'array|3': [ 'Hello', 'Mock.js', '!' ]
		});
		// 输出结果
		console.log(data);
	});
});

/**
* 函数
*/
describe.skip('Function', () => {
	it("'name': function", () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			foo: 'Syntax Demo',
			name: function() {
				return this.foo;
			}
		});
		// 输出结果
		console.log(data);
	});
});

/**
* 正则表达式
*/
describe.skip('RegExp', () => {
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

/**
* 正则表达式
*/
describe.skip('Path', () => {
	/**
    * 绝对路径
    */
	it('Absolute Path', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			foo: 'Hello', // @/foo
			nested: {
				// @/nested
				a: {
					// @/nested/a
					b: {
						// @/nested/a/b
						c: 'Mock.js' // @/nested/a/b/c
					}
				}
			},
			absolutePath: '@/foo @/nested/a/b/c'
		});
		// 输出结果
		console.log(JSON.stringify(data));
		// {"foo":"Hello","nested":{"a":{"b":{"c":"Mock.js"}}},"absolutePath":"Hello Mock.js"}
	});
	/**
    * 相对路径
    */
	it('Relative Path', () => {
		// 实例化 Mock对象
		var data = Mock.mock({
			foo: 'Hello',
			nested: {
				a: {
					b: {
						c: 'Mock.js'
					}
				}
			},
			relativePath: {
				a: {
					b: {
						c: '@../../../foo @../../../nested/a/b/c'
					}
				}
			}
		});
		// 输出结果
		console.log(JSON.stringify(data));
		//{"foo":"Hello","nested":{"a":{"b":{"c":"Mock.js"}}},"relativePath":{"a":{"b":{"c":"Hello Mock.js"}}}}
	});
});

describe('Basic', () => {
	/**
     * 随机布尔值 真或假
    */
	it('Random.boolean( min?, max?, current? )', () => {
		// 实例化 Mock对象
		// Random.boolean()
		Random.boolean();
		var b1 = Mock.mock('@boolean');
		var b2 = Mock.mock('@boolean()');

		// Random.boolean( min, max, current )
		Random.boolean(1, 9, true);
		var b3 = Mock.mock('@boolean(1, 9, true)');
		// 输出结果
		console.log(b1);
		console.log(b2);
		console.log(b3);
	});
	/**
     * 返回一个随机的自然数（大于等于 0 的整数）。
    */
	it('Random.natural( min?, max? )', () => {
		// 实例化 Mock对象
		// Random.natural()
		Random.natural();
		var b1 = Mock.mock('@natural');
		var b2 = Mock.mock('@natural()');

		// Random.natural( min )
		Random.natural(10000);
		var b3 = Mock.mock('@natural(10000)');

		// Random.natural( min, max )
		Random.natural(60, 100);
		var b4 = Mock.mock('@natural(60, 100)');
		// 输出结果
		console.log('Random.natural', b1);
		console.log('Random. ()', b2);
		console.log('Random.natural(10000)', b3);
		console.log('Random.natural(60, 100)', b4);
	});
	/**
     * 返回一个随机的整数
     */
	it('Random.integer( min?, max? )', () => {
		// 实例化 Mock对象
		// Random.natural()
		Random.natural();
		var b1 = Mock.mock('@integer');
		var b2 = Mock.mock('@integer()');

		// Random.natural( min )
		Random.natural(10000);
		var b3 = Mock.mock('@integer(10000)');

		// Random.natural( min, max )
		Random.natural(60, 100);
		var b4 = Mock.mock('@integer(60, 100)');
		// 输出结果
		console.log('Random.integer', b1);
		console.log('Random.integer()', b2);
		console.log('Random.integer(10000)', b3);
		console.log('Random.integer(60, 100)', b4);
	});

	/**
     * 返回一个随机的浮点数。
     */
	it('Random.float( min?, max?, dmin?, dmax? )', () => {
		// 实例化 Mock对象
		// Random.float()
		Random.float();
		var b1 = Mock.mock('@float');
		Mock.mock('@float()');

		// Random.float( min )
		Random.float(0);
		var b2 = Mock.mock('@float(0)');

		// Random.float( min, max )
		Random.float(60, 100);
		var b3 = Mock.mock('@float(60, 100)');

		// Random.float( min, max, dmin )
		Random.float(60, 100, 3);
		var b4 = Mock.mock('@float(60, 100, 3)');

		// Random.float( min, max, dmin, dmax )
		Random.float(60, 100, 3, 5);
		var b5 = Mock.mock('@float(60, 100, 3, 5)');
		// 输出结果
		console.log('Random.@float', b1);
		console.log('Random.@float(0)', b2);
		console.log('Random.@float(60, 100)', b3);
		console.log('Random.@float(60, 100, 3)', b4);
		console.log('Random.@float(60, 100, 3, 5)', b5);
	});
	/**
     * 返回一个随机字符。
     */
	it('Random.character( pool? )', () => {
		// 实例化 Mock对象
		// Random.character()
		Random.character();
		console.log(Mock.mock('@character'));
		console.log(Mock.mock('@character()'));

		// Random.character( 'lower/upper/number/symbol' )
		Random.character('lower');
		Random.character('upper');
		Random.character('number');
		Random.character('symbol');

		console.log(Mock.mock('@character("lower")'));
		console.log(Mock.mock('@character("upper")'));
		console.log(Mock.mock('@character("number")'));
		console.log(Mock.mock('@character("symbol")'));

		// Random.character( pool )
		Random.character('aeiou');
		console.log(Mock.mock('@character("aeiou")'));
	});
	/**
     * 返回一个随机字符串
     */
	it('Random.string( pool?, min?, max? )', () => {
		// 实例化 Mock对象
		// Random.string()
		Random.string();
		var str1 = Mock.mock('@string');
		var str2 = Mock.mock('@string()');

		// Random.string( length )
		Random.string(5);
		var str3 = Mock.mock('@string(5)');

		// Random.string( pool, length )
		Random.string('lower', 5);
		Random.string('upper', 5);
		Random.string('number', 5);
		Random.string('symbol', 5);
		Random.string('aeiou', 5);

		var str4 = Mock.mock('@string("lower", 5)');
		var str5 = Mock.mock('@string("upper", 5)');
		var str6 = Mock.mock('@string("number", 5)');
		var str7 = Mock.mock('@string("symbol", 5)');
		var str8 = Mock.mock('@string("aeiou", 5)');

		// Random.string( min, max )
		Random.string(7, 10);
		var str9 = Mock.mock('@string(7, 10)');

		// Random.string( pool, min, max )
		Random.string('lower', 1, 3);
		Random.string('upper', 1, 3);
		Random.string('number', 1, 3);
		Random.string('symbol', 1, 3);
		Random.string('aeiou', 1, 3);

		var str10 = Mock.mock('@string("lower", 1, 3)');
		var str11 = Mock.mock('@string("upper", 1, 3)');
		var str12 = Mock.mock('@string("number", 1, 3)');
		var str13 = Mock.mock('@string("symbol", 1, 3)');
		var str14 = Mock.mock('@string("aeiou", 1, 3)');
		// 输出结果
		console.log(str1);
		console.log(str2);
		console.log(str3);
		console.log(str4);
		console.log(str5);
		console.log(str6);
		console.log(str7);
		console.log(str8);
		console.log(str9);
		console.log(str10);
		console.log(str11);
		console.log(str12);
		console.log(str13);
		console.log(str14);
	});
	/**
     * 返回一个整型数组。
     */
	it('Random.range(start?, stop, step?)', () => {
		// 实例化 Mock对象
		// Random.range( stop )
		Random.range(10);
		var r1 = Mock.mock('@range(10)');

		// Random.range( start, stop )
		Random.range(3, 7);
		var r2 = Mock.mock('@range(3, 7)');

		// Random.range( start, stop, step )
		Random.range(1, 10, 2);
		Random.range(1, 10, 3);

		var r3 = Mock.mock('@range(1, 10, 2)');
		var r4 = Mock.mock('@range(1, 10, 3)');
		// 输出结果
		console.log(r1);
		console.log(r2);
		console.log(r3);
		console.log(r4);
	});
});

/**
     * 返回一个随机的日期字符串。
     */
describe('Date', () => {
	it('Random.date( format? )', () => {
		// 实例化 Mock对象
		// Random.date()
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

/**
     * 生成一个随机的图片地址。
     */
describe('Image', () => {
	it('Random.image( size?, background?, foreground?, format?, text? )', () => {
		// Random.image()
		var t1 = Random.image(); //http://dummyimage.com/720x300
		// Random.image( size )
		var t2 = Random.image('200x100'); // http://dummyimage.com/200x100
		// Random.image( size, background )
		var t3 = Random.image('200x100', '#FF6600'); //http://dummyimage.com/200x100/FF6600
		// Random.image( size, background, text )
		var t4 = Random.image('200x100', '#4A7BF7', 'Hello'); // http://dummyimage.com/200x100/4A7BF7&text=Hello
		// Random.image( size, background, foreground, text )
		var t5 = Random.image('200x100', '#50B347', '#FFF', 'Mock.js'); // http://dummyimage.com/200x100/50B347/FFF&text=Mock.js
		// Random.image( size, background, foreground, format, text )
		var t6 = Random.image('200x100', '#894FC4', '#FFF', 'png', '!'); // http://dummyimage.com/200x100/894FC4/FFF.png&text=!
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
		console.log(t5);
		console.log(t6);
	});
	// it('Random.dataImage( size?, text? )', () => {
	// 	// Random.dataImage()
	// 	var t1 = Random.dataImage();
	// 	// Random.dataImage( size )
	// 	var t2 = Random.dataImage('200x100');
	// 	// Random.dataImage( size, text )
	// 	var t3 = Random.dataImage('200x100', 'Hello Mock.js!');
	// 	// 输出结果
	// 	console.log(t1);
	// 	console.log(t2);
	// 	console.log(t3);
	// });
});

/**
     * 随机生成一个颜色，格式为 '#RRGGBB'。
     */
describe('Color', () => {
	it('Random.color()', () => {
		// Random.color()
		Random.color();
		var c1 = Mock.mock('@color');
		var c2 = Mock.mock('@color()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.hex()', () => {
		// Random.hex()
		Random.hex();
		var c1 = Mock.mock('@hex');
		var c2 = Mock.mock('@hex()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.rgb()', () => {
		// Random.rgb()
		Random.rgb();
		var c1 = Mock.mock('@rgb');
		var c2 = Mock.mock('@rgb()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.rgba()', () => {
		// Random.rgba()
		Random.rgba();
		var c1 = Mock.mock('@rgba');
		var c2 = Mock.mock('@rgba()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
	it('Random.hsl()', () => {
		// Random.hsl()
		Random.hsl();
		var c1 = Mock.mock('@hsl');
		var c2 = Mock.mock('@hsl()');
		// 输出结果
		console.log(c1);
		console.log(c2);
	});
});
/**
     * 随机生成一段文本。
     */
describe('Text', () => {
	/**
     * 随机生成一段文本。
    */
	it('', () => {
		// 实例化 Mock对象
		// Random.paragraph()
		Random.paragraph();

		var t1 = Mock.mock('@paragraph');

		var t2 = Mock.mock('@paragraph()');

		// Random.paragraph( len )
		Random.paragraph(2);

		var t3 = Mock.mock('@paragraph(2)');

		// Random.paragraph( min, max )
		Random.paragraph(1, 3);

		var t4 = Mock.mock('@paragraph(1, 3)');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
	/**
     * 随机生成一个句子，第一个的单词的首字母大写。
    */
	it('Random.sentence( min?, max? )', () => {
		// Random.sentence()
		Random.sentence();
		var t1 = Mock.mock('@sentence');
		var t2 = Mock.mock('@sentence()');

		// Random.sentence( len )
		Random.sentence(5);
		var t3 = Mock.mock('@sentence(5)');

		// Random.sentence( min, max )
		Random.sentence(3, 5);
		var t4 = Mock.mock('@sentence(3, 5)');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
	/**
     * 随机生成一个单词。
    */
	it('Random.word( min?, max? )', () => {
		// Random.word()
		Random.word();
		var t1 = Mock.mock('@word');
		var t2 = Mock.mock('@word()');

		// Random.word( len )
		Random.word(5);
		var t3 = Mock.mock('@word(5)');

		// Random.word( min, max )
		Random.word(3, 5);
		var t4 = Mock.mock('@word(3, 5)');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
	/**
     * 随机生成一句标题，其中每个单词的首字母大写。
    */
	it('Random.title( min?, max? )', () => {
		// Random.title()
		Random.title();
		var t1 = Mock.mock('@title');
		var t2 = Mock.mock('@title()');

		// Random.title( len )
		Random.title(5);
		var t3 = Mock.mock('@title(5)');

		// Random.title( min, max )
		Random.title(3, 5);
		var t4 = Mock.mock('@title(3, 5)');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
	/**
     * 
    */
	it('Random.cparagraph( min?, max? )', () => {
		// Random.cparagraph()
		Random.cparagraph();

		var t1 = Mock.mock('@cparagraph');

		var t2 = Mock.mock('@cparagraph()');

		// Random.cparagraph( len )
		Random.cparagraph(2);

		var t3 = Mock.mock('@cparagraph(2)');

		// Random.cparagraph( min, max )
		Random.cparagraph(1, 3);

		var t4 = Mock.mock('@cparagraph(1, 3)');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
	/**
     * 
    */
	it('Random.csentence( min?, max? )', () => {
		// Random.csentence()
		Random.csentence();
		var t1 = Mock.mock('@csentence');
		var t2 = Mock.mock('@csentence()');

		// Random.csentence( len )
		Random.csentence(5);
		var t3 = Mock.mock('@csentence(5)');

		// Random.csentence( min, max )
		Random.csentence(3, 5);
		var t4 = Mock.mock('@csentence(3, 5)');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
	/**
     * 
    */
	it('Random.cword( pool?, min?, max? )', () => {
		// Random.cword()
		Random.cword();
		var t1 = Mock.mock('@cword');
		var t2 = Mock.mock('@cword()');

		// Random.cword( pool )
		Random.cword('零一二三四五六七八九十');
		var t3 = Mock.mock('@cword("零一二三四五六七八九十")');

		// Random.cword( length )
		Random.cword(3);
		var t4 = Mock.mock('@cword(3)');

		// Random.cword( pool, length )
		Random.cword('零一二三四五六七八九十', 3);
		var t5 = Mock.mock('@cword("零一二三四五六七八九十", 3)');

		// Random.cword( min, max )
		Random.cword(3, 5);
		var t6 = Mock.mock('@cword(3, 5)');

		// Random.cword( pool, min, max )
		Random.cword('零一二三四五六七八九十', 5, 7);
		var t7 = Mock.mock('@cword("零一二三四五六七八九十", 5, 7)');
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
     * 随机生成一个句子，第一个的单词的首字母大写。
    */
	it('Random.ctitle( min?, max? )', () => {
		// Random.ctitle()
		Random.ctitle();
		var t1 = Mock.mock('@ctitle');
		var t2 = Mock.mock('@ctitle()');

		// Random.ctitle( len )
		Random.ctitle(5);
		var t3 = Mock.mock('@ctitle(5)');

		// Random.ctitle( min, max )
		Random.ctitle(3, 5);
		var t4 = Mock.mock('@ctitle(3, 5)');
		// 输出结果
		console.log(t1);
		console.log(t2);
		console.log(t3);
		console.log(t4);
	});
});

/**
     * 随机生成一个常见的英文名。
     */
describe('Name', () => {
	/**
     * 随机生成一个常见的英文名。
     */
	it('Random.first()', () => {
		// 实例化 Mock对象
		// Random.last()
		Random.last();
		var name1 = Mock.mock('@last');
		var name2 = Mock.mock('@last()');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
	/**
     * 随机生成一个常见的英文姓。
     */
	it('Random.name( middle? )', () => {
		// 实例化 Mock对象
		// Random.name()
		Random.name();
		var name1 = Mock.mock('@name');
		var name2 = Mock.mock('@name()');

		// Random.name( middle )
		Random.name(true);
		var name3 = Mock.mock('@name(true)');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
		console.log(name3);
	});
	/**
     * 随机生成一个常见的中文姓。
     */
	it('Random.cfirst()', () => {
		// 实例化 Mock对象
		// Random.cfirst()
		Random.cfirst();
		var name1 = Mock.mock('@cfirst');
		var name2 = Mock.mock('@cfirst()');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
	/**
     * 随机生成一个常见的中文名
     */
	it('Random.clast()', () => {
		// Random.clast()
		Random.clast();
		var name1 = Mock.mock('@clast');
		var name2 = Mock.mock('@clast()');
		// 输出结果
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
	/**
     * 随机生成一个常见的中文姓名。
     */
	it('Random.cname()', () => {
		// 实例化 Mock对象
		// Random.cname()
		Random.cname();
		var name1 = Mock.mock('@cname');
		var name2 = Mock.mock('@cname()');
		// 输出结果
		console.log(name1);
		console.log(name2);
	});
});

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

    /**
     * 地址。
     */
describe('Address', () => {
	/**
     * 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
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
     * 随机生成一个？？？
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

    /**
     * 
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
		Random.pick([ 'a', 'e', 'i', 'o', 'u' ]);
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
		Random.shuffle([ 'a', 'e', 'i', 'o', 'u' ]);
		var data = Mock.mock('@shuffle(["a", "e", "i", "o", "u"])');
		// 输出结果
		console.log(data);
	});
});

    /**
     * 随机生成一个 GUID
     */
describe('Miscellaneous', () => {

    /**
     * 随机生成一个 GUID
     */
    it('Random.guid()', () => {
        // 实例化 Mock对象
		// Random.guid()
		Random.guid();
		var data1 = Mock.mock('@guid');
		var data2 = Mock.mock('@guid()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
    /**
     * 随机生成一个 18 位身份证。
     */
    it('Random.id()', () => {
        // 实例化 Mock对象
		// Random.id()
		Random.id();
		var data1 = Mock.mock('@id');
		var data2 = Mock.mock('@id()');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
    /**
     * 生成一个全局的自增整数。
     */
	it('Random.increment( step? )', () => {
		// 实例化 Mock对象
		// Random.increment()
		Random.increment();
		var data1 = Mock.mock('@increment');
		var data2 = Mock.mock('@increment()');

		// Random.increment( step )
		Random.increment(100);
		var data1 = Mock.mock('@increment(100)');
		Random.increment(1000);
		var data2 = Mock.mock('@increment(1000)');
		// 输出结果
		console.log(data1);
		console.log(data2);
	});
});
