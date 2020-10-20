var Mock = require('mockjs')

describe("", () => {
    it("", () => {
        // 使用 Mock
        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        })
        // 输出结果
        console.log(JSON.stringify(data, null, 4))
    })
})

describe("String", () => {
    it("'name|min-max': string", () => {
        // 使用 Mock
        var data = Mock.mock({
            "string|1-10": "★"
        })
        // 输出结果
        console.log("'name|min-max': string", data)
    })

    it("'name|count': string", () => {
        var data = Mock.mock({
            "string|3": "★★★"
        })
        // 输出结果
        console.log("'name|count': string", data)
    })

})

describe("Number", () => {
    it("'name|+1': number", () => {
        // 使用 Mock
        var data = Mock.mock({
            "number|+1": 202
        });
        // 输出结果
        console.log("'name|+1': number", data)
    })

    it("'name|min-max': number", () => {
        // 使用 Mock
        var data = Mock.mock({
            "number|1-100": 100
        });
        // 输出结果
        console.log("'name|min-max': number", data)
    })

    it("'name|min-max.dmin-dmax': number", () => {
        // 使用 Mock
        var data = Mock.mock({
            "number|1-100.1-10": 1
        });
        // 输出结果
        console.log("'name|min-max.dmin-dmax': number", data)
    })
    it("number|123.1-10", () => {
        // 使用 Mock
        var data = Mock.mock({
            "number|123.1-10": 1
        });
        // 输出结果
        console.log("number|123.1-10", data)
    })
    it("number|123.3", () => {
        // 使用 Mock
        var data = Mock.mock({
            "number|123.3": 1
        });
        // 输出结果
        console.log("number|123.3", data)
    })
    it("number|123.10", () => {
        // 使用 Mock
        var data = Mock.mock({
            "number|123.10": 1.123
        });
        // 输出结果
        console.log("number|123.10", data)
    })

})
describe("Boolean", () => {
    it("'name|1': boolean", () => {
        // 使用 Mock
        var data = Mock.mock({
            "boolean|1": true
        });
        // 输出结果
        console.log("'name|1': boolean", data)
    })
    it("'name|min-max': boolean", () => {
        // 使用 Mock
        var data = Mock.mock({
            "boolean|1-2": true
        });
        // 输出结果
        console.log("'name|min-max': boolean", data)
    })
})


describe("Object", () => {
    it("'name|count': object", () => {
        // 使用 Mock
        var data = Mock.mock({
            "object|2": {
                "310000": "上海市",
                "320000": "江苏省",
                "330000": "浙江省",
                "340000": "安徽省"
            }
        })
        // 输出结果
        console.log("'name|count': object", data)
    })
    it("'name|min-max': object", () => {
        // 使用 Mock
        var data = Mock.mock({
            "object|2-4": {
                "110000": "北京市",
                "120000": "天津市",
                "130000": "河北省",
                "140000": "山西省"
            }
        })
        // 输出结果
        console.log("'name|min-max': object", data)
    })
})

describe("Array", () => {

    it("'name|1': array", () => {
        // 使用 Mock
        var data = Mock.mock({
            "array|1": [
                "AMD",
                "CMD",
                "UMD"
            ]
        });
        // 输出结果
        console.log(data)
    })
    it("'name|+1': array", () => {
        // 使用 Mock
        var data = Mock.mock({
            "array|+1": [
                "AMD",
                "CMD",
                "UMD"
            ]
        });
        // 输出结果
        console.log(data)
    })
    it("array|1-10", () => {
        // 使用 Mock
        var data = Mock.mock({
            "array|1-10": [
                {
                    "name|+1": [
                        "Hello",
                        "Mock.js",
                        "!"
                    ]
                }
            ]
        });
        // 输出结果
        console.log(data)
    })
    it("'name|min-max': array", () => {
        // 使用 Mock
        var data = Mock.mock({
            "array|1-10": [
                "Mock.js"
            ]
        });
        // 输出结果
        console.log(data)
    })
    it("array|1-10", () => {
        // 使用 Mock
        var data = Mock.mock({
            "array|1-10": [
                "Hello",
                "Mock.js",
                "!"
            ]
        });
        // 输出结果
        console.log(data)
    })
    it("'name|count': array", () => {
        // 使用 Mock
        var data = Mock.mock({
            "array|3": [
                "Mock.js"
            ]
        });
        // 输出结果
        console.log(data)
    })
    it("array|3", () => {
        // 使用 Mock
        var data = Mock.mock({
            "array|3": [
                "Hello",
                "Mock.js",
                "!"
            ]
        });
        // 输出结果
        console.log(data)
    })
})

describe("Function", () => {
    it("'name': function", () => {
        // 使用 Mock
        var data = Mock.mock({
            'foo': 'Syntax Demo',
            'name': function () {
                return this.foo
            }
        })
        // 输出结果
        console.log(data)
    })
})

describe("RegExp", () => {
    it("/[a-z][A-Z][0-9]/", () => {
        // 使用 Mock
        var data = Mock.mock({
            'regexp': /[a-z][A-Z][0-9]/
        })
        // 输出结果
        console.log(data)
    })
    it("/\w\W\s\S\d\D/", () => {
        // 使用 Mock
        var data = Mock.mock({
            'regexp': /\w\W\s\S\d\D/
        })
        // 输出结果
        console.log(data)
    })
    it("/\d{5,10}/", () => {
        // 使用 Mock
        var data = Mock.mock({
            'regexp': /\d{5,10}/
        })
        // 输出结果
        console.log(data)
    })
    it("/\d{5,10}\-/", () => {
        // 使用 Mock
        var data = Mock.mock({
            'regexp|3': /\d{5,10}\-/
        })
        // 输出结果
        console.log(data)
    })
    it("/\d{5,10}\-/", () => {
        // 使用 Mock
        var data = Mock.mock({
            'regexp|1-5': /\d{5,10}\-/
        })
        // 输出结果
        console.log(data)
    })
})

describe("Path", () => {
    it("Absolute Path", () => {
        // 使用 Mock
        var data = Mock.mock({
            "foo": "Hello",
            "nested": {
                "a": {
                    "b": {
                        "c": "Mock.js"
                    }
                }
            },
            "absolutePath": "@/foo @/nested/a/b/c"
        })
        // 输出结果
        console.log(data)
    })
    it("Relative Path", () => {
        // 使用 Mock
        var data = Mock.mock({
            "foo": "Hello",
            "nested": {
                "a": {
                    "b": {
                        "c": "Mock.js"
                    }
                }
            },
            "relativePath": {
                "a": {
                    "b": {
                        "c": "@../../../foo @../../../nested/a/b/c"
                    }
                }
            }
        })
        // 输出结果
        console.log(data)
    })

})

describe("Basic", () => {
    it("Random.boolean( min?, max?, current? )", () => {
        // 使用 Mock
        // Random.boolean()
        Random.boolean()
        var b1 = Mock.mock('@boolean')
        var b2 = Mock.mock('@boolean()')

        // Random.boolean( min, max, current )
        Random.boolean(1, 9, true)
        var b3 = Mock.mock('@boolean(1, 9, true)')
        // 输出结果
        console.log(b1)
        console.log(b2)
        console.log(b3)
    })
    it("Random.natural( min?, max? )", () => {
        // 使用 Mock
        // Random.natural()
        Random.natural()
        var b1 = Mock.mock('@natural')
        var b2 = Mock.mock('@natural()')

        // Random.natural( min )
        Random.natural(10000)
        var b3 = Mock.mock('@natural(10000)')

        // Random.natural( min, max )
        Random.natural(60, 100)
        var b4 = Mock.mock('@natural(60, 100)')
        // 输出结果
        console.log("Random.natural", b1)
        console.log("Random.natural()", b2)
        console.log("Random.natural(10000)", b3)
        console.log("Random.natural(60, 100)", b4)
    })
    it("Random.integer( min?, max? )", () => {
        // 使用 Mock
        // Random.natural()
        Random.natural()
        var b1 = Mock.mock('@integer')
        var b2 = Mock.mock('@integer()')

        // Random.natural( min )
        Random.natural(10000)
        var b3 = Mock.mock('@integer(10000)')

        // Random.natural( min, max )
        Random.natural(60, 100)
        var b4 = Mock.mock('@integer(60, 100)')
        // 输出结果
        console.log("Random.integer", b1)
        console.log("Random.integer()", b2)
        console.log("Random.integer(10000)", b3)
        console.log("Random.integer(60, 100)", b4)
    })
    it("Random.float( min?, max?, dmin?, dmax? )", () => {
        // 使用 Mock
        // Random.float()
        Random.float()
        var b1 = Mock.mock('@float')
        Mock.mock('@float()')

        // Random.float( min )
        Random.float(0)
        var b2 = Mock.mock('@float(0)')

        // Random.float( min, max )
        Random.float(60, 100)
        var b3 = Mock.mock('@float(60, 100)')

        // Random.float( min, max, dmin )
        Random.float(60, 100, 3)
        var b4 = Mock.mock('@float(60, 100, 3)')

        // Random.float( min, max, dmin, dmax )
        Random.float(60, 100, 3, 5)
        var b5 = Mock.mock('@float(60, 100, 3, 5)')
        // 输出结果
        console.log("Random.@float", b1)
        console.log("Random.@float(0)", b2)
        console.log("Random.@float(60, 100)", b3)
        console.log("Random.@float(60, 100, 3)", b4)
        console.log("Random.@float(60, 100, 3, 5)", b5)
    })
    it("Random.character( pool? )", () => {
        // 使用 Mock
        var data = ""
        // 输出结果
        console.log(data)
    })
    it("Random.string( pool?, min?, max? )", () => {
        // 使用 Mock
        var data = ""
        // 输出结果
        console.log(data)
    })
    it("Random.range(start?, stop, step?)", () => {
        // 使用 Mock
        var data = ""
        // 输出结果
        console.log(data)
    })
})


describe("Date", () => {
    it("Random.date( format? )", () => {
        // 使用 Mock
        // Random.date()
        Random.date()
        var d1 = Mock.mock('@date')
        var d2 = Mock.mock('@date()')

        // Random.date( format )
        Random.date('yyyy-MM-dd')
        Random.date('yy-MM-dd')
        Random.date('y-MM-dd')
        Random.date('y-M-d')

        var d3 = Mock.mock('@date("yyyy-MM-dd")')
        var d4 = Mock.mock('@date("yy-MM-dd")')
        var d5 = Mock.mock('@date("y-MM-dd")')
        var d6 = Mock.mock('@date("y-M-d")')

        Mock.mock('@date("yyyy yy y MM M dd d")')
        // 输出结果
        console.log(d1)
        console.log(d2)
        console.log(d3)
        console.log(d4)
        console.log(d5)
        console.log(d6)
    })
    it("Random.time( format? )", () => {
        // Random.time()
        Random.time()
        var t1 = Mock.mock('@time')
        var t2 = Mock.mock('@time()')

        // Random.time( format )
        Random.time('A HH:mm:ss')
        Random.time('a HH:mm:ss')
        Random.time('HH:mm:ss')
        Random.time('H:m:s')

        var t3 = Mock.mock('@time("A HH:mm:ss")')
        var t4 = Mock.mock('@time("a HH:mm:ss")')
        var t5 = Mock.mock('@time("HH:mm:ss")')
        var t6 = Mock.mock('@time("H:m:s")')

        var t7 = Mock.mock('@datetime("HH H hh h mm m ss s SS S A a T")')
        // 输出结果
        console.log(t1)
        console.log(t2)
        console.log(t3)
        console.log(t4)
        console.log(t5)
        console.log(t6)
        console.log(t7)
    })
    it("Random.datetime( format? )", () => {
        // Random.datetime()
        Random.datetime()
        var t1 = Mock.mock('@datetime')
        var t2 = Mock.mock('@datetime()')

        // Random.datetime( format )
        Random.datetime('yyyy-MM-dd A HH:mm:ss')
        Random.datetime('yy-MM-dd a HH:mm:ss')
        Random.datetime('y-MM-dd HH:mm:ss')
        Random.datetime('y-M-d H:m:s')

        var t3 = Mock.mock('@datetime("yyyy-MM-dd A HH:mm:ss")')
        var t4 = Mock.mock('@datetime("yy-MM-dd a HH:mm:ss")')
        var t5 = Mock.mock('@datetime("y-MM-dd HH:mm:ss")')
        var t6 = Mock.mock('@datetime("y-M-d H:m:s")')

        var t7 = Mock.mock('@datetime("yyyy yy y MM M dd d HH H hh h mm m ss s SS S A a T")')
        // 输出结果
        console.log(t1)
        console.log(t2)
        console.log(t3)
        console.log(t4)
        console.log(t5)
        console.log(t6)
        console.log(t7)
    })
    it("Random.now( unit?, format? )", () => {
        // Ranndom.now()
        Random.now()
        var t1 = Mock.mock('@now')
        var t2 = Mock.mock('@now()')

        // Ranndom.now( unit )
        Random.now('year')
        Random.now('month')
        Random.now('week')
        Random.now('day')
        Random.now('hour')
        Random.now('minute')
        Random.now('second')

        // Ranndom.now( format )
        var t3 = Random.now('yyyy-MM-dd HH:mm:ss SS')

        // Ranndom.now( unit, format )
        var t4 = Random.now('day', 'yyyy-MM-dd HH:mm:ss SS')
        // 输出结果
        console.log(t1)
        console.log(t2)
        console.log(t3)
        console.log(t4)
    })

})

describe("Image", () => {
    it("Random.image( size?, background?, foreground?, format?, text? )", () => {
        // Random.image()
        var t1 = Random.image()
        // Random.image( size )
        var t2 = Random.image('200x100')
        // Random.image( size, background )
        var t3 = Random.image('200x100', '#FF6600')
        // Random.image( size, background, text )
        var t4 = Random.image('200x100', '#4A7BF7', 'Hello')
        // Random.image( size, background, foreground, text )
        var t5 = Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
        // Random.image( size, background, foreground, format, text )
        var t6 = Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
        // 输出结果
        console.log(t1)
        console.log(t2)
        console.log(t3)
        console.log(t4)
        console.log(t5)
        console.log(t6)
    })
    it("Random.dataImage( size?, text? )", () => {
        // Random.dataImage()
        var t1 = Random.dataImage()
        // Random.dataImage( size )
        var t2 = Random.dataImage('200x100')
        // Random.dataImage( size, text )
        var t3 = Random.dataImage('200x100', 'Hello Mock.js!')
        // 输出结果
        console.log(t1)
        console.log(t2)
        console.log(t3)

    })
})



describe("Color", () => {
    it("Random.color()", () => {
        // Random.color()
        Random.color()
        var c1 = Mock.mock('@color')
        var c2 = Mock.mock('@color()')
        // 输出结果
        console.log(c1)
        console.log(c2)
    })
    it("Random.hex()", () => {
        // Random.hex()
        Random.hex()
        var c1 = Mock.mock('@hex')
        var c2 = Mock.mock('@hex()')
        // 输出结果
        console.log(c1)
        console.log(c2)
    })
    it("Random.rgb()", () => {
        // Random.rgb()
        Random.rgb()
        var c1 = Mock.mock('@rgb')
        var c2 = Mock.mock('@rgb()')
        // 输出结果
        console.log(c1)
        console.log(c2)
    })
    it("Random.rgba()", () => {
        // Random.rgba()
        Random.rgba()
        var c1 = Mock.mock('@rgba')
        var c2 = Mock.mock('@rgba()')
        // 输出结果
        console.log(c1)
        console.log(c2)
    })
    it("Random.hsl()", () => {
        // Random.hsl()
        Random.hsl()
        var c1 = Mock.mock('@hsl')
        var c2 = Mock.mock('@hsl()')
        // 输出结果
        console.log(c1)
        console.log(c2)
    })
})

describe("Text", () => {
    it("", () => {
        // 使用 Mock
        // Random.paragraph()
        Random.paragraph()

        Mock.mock('@paragraph')

        Mock.mock('@paragraph()')

        // Random.paragraph( len )
        Random.paragraph(2)

        Mock.mock('@paragraph(2)')

        // Random.paragraph( min, max )
        Random.paragraph(1, 3)

        Mock.mock('@paragraph(1, 3)')
        // 输出结果
        console.log(data)
    })
    it("Random.sentence( min?, max? )", () => {
        // Random.sentence()
        Random.sentence()
        Mock.mock('@sentence')
        Mock.mock('@sentence()')

        // Random.sentence( len )
        Random.sentence(5)
        Mock.mock('@sentence(5)')

        // Random.sentence( min, max )
        Random.sentence(3, 5)
        Mock.mock('@sentence(3, 5)')
    })
    it("Random.word( min?, max? )", () => {
        // Random.word()
        Random.word()
        Mock.mock('@word')
        Mock.mock('@word()')

        // Random.word( len )
        Random.word(5)
        Mock.mock('@word(5)')

        // Random.word( min, max )
        Random.word(3, 5)
        Mock.mock('@word(3, 5)')
    })
    it("Random.title( min?, max? )", () => {
        // Random.title()
        Random.title()
        Mock.mock('@title')
        Mock.mock('@title()')

        // Random.title( len )
        Random.title(5)
        Mock.mock('@title(5)')

        // Random.title( min, max )
        Random.title(3, 5)
        Mock.mock('@title(3, 5)')
    })
    it("Random.cparagraph( min?, max? )", () => {
        // Random.cparagraph()
        Random.cparagraph()

        Mock.mock('@cparagraph')

        Mock.mock('@cparagraph()')

        // Random.cparagraph( len )
        Random.cparagraph(2)

        Mock.mock('@cparagraph(2)')

        // Random.cparagraph( min, max )
        Random.cparagraph(1, 3)

        Mock.mock('@cparagraph(1, 3)')
    })
    it("Random.csentence( min?, max? )", () => {
        // Random.csentence()
        Random.csentence()
        Mock.mock('@csentence')
        Mock.mock('@csentence()')

        // Random.csentence( len )
        Random.csentence(5)
        Mock.mock('@csentence(5)')

        // Random.csentence( min, max )
        Random.csentence(3, 5)
        Mock.mock('@csentence(3, 5)')
    })
    it("Random.cword( pool?, min?, max? )", () => {
        // Random.cword()
        Random.cword()
        Mock.mock('@cword')
        Mock.mock('@cword()')

        // Random.cword( pool )
        Random.cword('零一二三四五六七八九十')
        Mock.mock('@cword("零一二三四五六七八九十")')

        // Random.cword( length )
        Random.cword(3)
        Mock.mock('@cword(3)')

        // Random.cword( pool, length )
        Random.cword('零一二三四五六七八九十', 3)
        Mock.mock('@cword("零一二三四五六七八九十", 3)')

        // Random.cword( min, max )
        Random.cword(3, 5)
        Mock.mock('@cword(3, 5)')

        // Random.cword( pool, min, max )
        Random.cword('零一二三四五六七八九十', 5, 7)
        Mock.mock('@cword("零一二三四五六七八九十", 5, 7)')
    })
    it("Random.ctitle( min?, max? )", () => {
        // Random.ctitle()
        Random.ctitle()
        Mock.mock('@ctitle')
        Mock.mock('@ctitle()')

        // Random.ctitle( len )
        Random.ctitle(5)
        Mock.mock('@ctitle(5)')

        // Random.ctitle( min, max )
        Random.ctitle(3, 5)
        Mock.mock('@ctitle(3, 5)')
    })

})

describe("Name", () => {
    it("Random.first()", () => {
        // 使用 Mock
        // Random.last()
        Random.last()
        var name1 = Mock.mock('@last')
        var name2 = Mock.mock('@last()')
        // 输出结果
        // 输出结果
        console.log(name1)
        console.log(name2)
    })
    it("Random.name( middle? )", () => {
        // 使用 Mock
        // Random.name()
        Random.name()
        var name1 = Mock.mock('@name')
        var name2 = Mock.mock('@name()')

        // Random.name( middle )
        Random.name(true)
        var name3 = Mock.mock('@name(true)')
        // 输出结果
        // 输出结果
        console.log(name1)
        console.log(name2)
        console.log(name3)
    })
    it("Random.cfirst()", () => {
        // 使用 Mock
        // Random.cfirst()
        Random.cfirst()
        var name1 = Mock.mock('@cfirst')
        var name2 = Mock.mock('@cfirst()')
        // 输出结果
        // 输出结果
        console.log(name1)
        console.log(name2)
    })
    it("Random.clast()", () => {
        // Random.clast()
        Random.clast()
        var name1 = Mock.mock('@clast')
        var name2 = Mock.mock('@clast()')
        // 输出结果
        // 输出结果
        console.log(name1)
        console.log(name2)
    })
    it("Random.cname()", () => {
        // 使用 Mock
        // Random.cname()
        Random.cname()
        var name1 = Mock.mock('@cname')
        var name2 = Mock.mock('@cname()')
        // 输出结果
        console.log(name1)
        console.log(name2)
    })
})

describe("Web", () => {
    it("Random.url()", () => {
        // Random.url()
        Random.url()
        var data1 = Mock.mock('@url')
        var data2 = Mock.mock('@url()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.domain()", () => {
        // 使用 Mock
        Random.domain()
        var data1 = Mock.mock('@domain');
        var data2 = Mock.mock('@domain()');
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.protocol()", () => {
        // 使用 Mock
        // Random.protocol()
        Random.protocol()
        var data1 = Mock.mock('@protocol')
        var data2 = Mock.mock('@protocol()')
        // 输出结果
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.tld()", () => {
        // 使用 Mock
        // Random.tld()
        Random.tld()
        var data1 = Mock.mock('@tld');
        var data2 = Mock.mock('@tld()');
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.email()", () => {
        // 使用 Mock
        // Random.email()
        Random.email()
        var data1 = Mock.mock('@email')
        var data2 = Mock.mock('@email()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.ip()", () => {
        // 使用 Mock
        // Random.ip()
        Random.ip()
        var data1 = Mock.mock('@ip')
        var data2 = Mock.mock('@ip()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })

})

describe("Address", () => {
    it("Random.region()", () => {
        // 使用 Mock
        // Random.region()
        Random.region()
        var data1 = Mock.mock('@region')
        var data2 = Mock.mock('@region()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.province()", () => {
        // 使用 Mock
        // Random.province()
        Random.province()
        var data1 = Mock.mock('@province')
        var data2 = Mock.mock('@province()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.city( prefix? )", () => {
        // 使用 Mock
        // Random.city()
        Random.city()
        var data1 = Mock.mock('@city')
        var data2 = Mock.mock('@city()')
        // Random.city( prefix )
        Random.city(true)
        var data3 = Mock.mock('@city(true)')
        // 输出结果
        console.log(data1)
        console.log(data2)
        console.log(data3)
    })
    it("Random.county( prefix? )", () => {
        // 使用 Mock
        // Random.county()
        Random.county()
        var data1 = Mock.mock('@county')
        var data2 = Mock.mock('@county()')
        // Random.county( prefix )
        Random.county(true)
        var data3 = Mock.mock('@county(true)')
        // 输出结果
        console.log(data1)
        console.log(data2)
        console.log(data3)
    })
    it("Random.zip()", () => {
        // 使用 Mock
        // Random.zip()
        Random.zip()
        var data1 = Mock.mock('@zip')
        var data2 = Mock.mock('@zip()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
})


describe("Helper", () => {
    it("Random.capitalize( word )", () => {
        // 使用 Mock
        // Random.capitalize( word )
        Random.capitalize('hello')
        var data = Mock.mock('@capitalize("hello")')
        // 输出结果
        console.log(data)
    })
    it("Random.upper( str )", () => {
        // 使用 Mock
        // Random.upper( str )
        Random.upper('hello')
        var data = Mock.mock('@upper("hello")')
        // 输出结果
        console.log(data)
    })
    it("Random.lower( str )", () => {
        // 使用 Mock
        // Random.lower( str )
        Random.lower('HELLO')
        var data = Mock.mock('@lower("HELLO")')
        // 输出结果
        console.log(data)
    })
    it("Random.pick( arr )", () => {
        // 使用 Mock
        // Random.pick( arr )
        Random.pick(['a', 'e', 'i', 'o', 'u'])
        var data = Mock.mock('@pick(["a", "e", "i", "o", "u"])')
        // 输出结果
        console.log(data)
    })
    it("Random.shuffle( arr )", () => {
        // 使用 Mock
        // Random.shuffle( arr )
        Random.shuffle(['a', 'e', 'i', 'o', 'u'])
        var data = Mock.mock('@shuffle(["a", "e", "i", "o", "u"])')
        // 输出结果
        console.log(data)
    })

})

describe("Miscellaneous", () => {
    it("Random.guid()", () => {
        // 使用 Mock
        // Random.guid()
        Random.guid()
        var data1 = Mock.mock('@guid')
        var data2 = Mock.mock('@guid()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.id()", () => {
        // 使用 Mock
        // Random.id()
        Random.id()
        var data1 = Mock.mock('@id')
        var data2 = Mock.mock('@id()')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
    it("Random.increment( step? )", () => {
        // 使用 Mock
        // Random.increment()
        Random.increment()
        var data1 = Mock.mock('@increment')
        var data2 = Mock.mock('@increment()')

        // Random.increment( step )
        Random.increment(100)
        var data1 = Mock.mock('@increment(100)')
        Random.increment(1000)
        var data2 = Mock.mock('@increment(1000)')
        // 输出结果
        console.log(data1)
        console.log(data2)
    })
})