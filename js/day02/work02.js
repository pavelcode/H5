//为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？
//小明要到美国旅游，可是那里的温度是以华氏度为单位记录的。它需要一个程序将华氏温度（80度）转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度。
//提示：摄氏度与华氏度的转换公式为：摄氏度 = 5/9.0*(华氏度-32)保留3位小数(toFixed(3))
//给定一个三位数，分别把这个数字的百位、十位、个位算出来并显示。
var num = 123;
var ge = num % 10;
var shi = parseInt(num / 10) % 10;
var bai = parseInt(num / 100);
document.write("个位是:"+ge);
document.write("十位是:"+shi);
document.write("百位是:"+bai);