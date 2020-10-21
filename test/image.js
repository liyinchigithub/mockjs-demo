var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

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
