var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

// update
stooge.middle_name = 'Lester';
stooge.nickname = 'Curly';
stooge['height'] = '6 ft';

document.writeln('stooge middle name is ', stooge.middle_name); // can use dot because '_' conforms to naming standard
document.writeln('stooge hight is ', stooge['height']); // try diff syntax
document.writeln('stooge nickname is ', stooge.nickname);
 
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

// prototype inherit from stooge
var another_stooge = Object.create(stooge);

document.writeln("\n", 'another_stooge nickname is ', another_stooge.nickname);
updated_nickname = another_stooge.nickname = 'Moe';
document.writeln('another_stooge updated nickname is (two times) ', updated_nickname, ' ', another_stooge.nickname);

// delete nickname property from another_stooge
delete another_stooge.nickname;
document.writeln('another_stooge nickname after delete property is ', another_stooge.nickname);
