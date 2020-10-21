var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
* 正则表达式
*/
describe('Path', () => {
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
