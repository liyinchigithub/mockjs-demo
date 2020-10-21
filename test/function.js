var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。


/**
* 函数
*/
describe('Function', () => {
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
