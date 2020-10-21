var Mock = require('mockjs');
var Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。

/**
 * 随机生成一段文本。
 */
describe('Text', () => {
	/**
	 * 随机生成一段文本（英文）
	*/
	it('Random.paragraph(x)', () => {
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
	 * 随机生成一个句子，第一个的单词的首字母大写。（英文）
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
	 * 随机生成一个单词。（英文）
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
	 * 随机生成一句标题，其中每个单词的首字母大写。（英文）
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
	 * 随机生成一段文本（中文）
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
	 * 随机生成一个句子（中文）
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
	 * 随机生成一个中文词语。
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
	 * 随机生成一个句子，第一个的单词的首字母大写。（中文）
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
