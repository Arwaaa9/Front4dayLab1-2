// قم بكتابة مصفوفة جديدة تحتوي على بقية ايام الاسبوع ,قم بدمج مصفوفة weekDays معها وحفظها في مصفوفة جديده باسم week Q1
// LAB1
const weekDays = ["Sunday", "Monday", "Tuesday"];
const week = weekDays.concat(weekDays);
console.log(week);

//**************************************************Q2****استخرج الكلمات التي تتكون من اكثر من 6 حروف وحفظ في مصفوفة longWords
const words = ["knot", "roof", "nake", "humanity", "available", "automatic"];
const longWords = words.filter((word) => word.length > 6);
console.log(longWords); // ['knot', 'nake', 'humanity', 'available', 'automatic']
//**************************************************Q2 استخرج الكلمات التي تتكون من 4 حروف فقط واحفظها في مصفوفة shortWords
const words1 = ["knot", "roof", "nake", "humanity", "available", "automatic"];
const shortWords = words1.filter((word) => word.length === 4);
console.log(shortWords);

//****************************************************Q3****من المصفوف التالية استخرج مصفوفة جديدة تقوم بتخزين مضروب العدد في نفسه
const num1 = [1, 9, 16, 15, 36, 45];
const powered = num1.map((element) => element ** 2);
console.log("powered: " + powered);
//في مصفوفة جديده استخرج الجذر التربيعي للاعداد
const squared = num1.map((element) => Math.sqrt(element));
console.log("squared: " + squared);

//****************************************************Q4****من مصفوفة num استخرج اول قيمة تقبل القسيمة على 3 و على 5
console.log(
  "devidable by 3 and 5: " +
    num1.find((element) => element % 3 === 0 && element % 5 === 0)
); // result is 15
//****************************************************من مصفوفة num استخرج اول عدد يقبل القسمة على 2 .
const num = [1, 9, 16, 15, 36, 45];
const result = num.find((num) => num % 2 === 0);
console.log(result); //result is 16
//**************************************************قم بكتابة دالة جديدة تقوم بـدمج مصفوفة weekو مصفوفة num وحفظها في مصفوفه جديده وقم بطباعة محتويات المصفوفة الجديدة .

const allarays = week.concat(num);
console.log("2arrays: " + allarays);

//**************************************************اكتب داله تبحث عن الرقم 3 في المصفوفة التالية :

function findNumber(arr) {
  return arr.find((num) => num === "3");
}

const number = ["5", "6", "3"];
const result2 = findNumber(number);
console.log(result2); // result is 3
//**************************************************Q4حول مصفوفة week الى String
const week1 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekString = week1.join(', ');
console.log(weekString); // result is "Sun, Mon, Tue, Wed, Thu, Fri, Sat"
//***************************************************حول مصفوفة num الى Stringو ضع بين عنصر @.
const stringNum = num.join("@");
console.log(stringNum);

//*************************************************قم بعكس ترتيب مصفوفة week 

let week2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
week2.reverse();
console.log(week2);
//***************************************************حول النص التالي الى مصفوفة بحيث يكون كل عنصر هو جمله تنتهي بـفاصلة , :
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Eveniet beatae ut sequi ipsa, labore commodi,';
const sentences = text.split(',');
console.log(sentences);

////////////////////////////////////////////////////////////////////////////////////////////////////////////LAB 2


//قم بعمل صفحة Html تحتوي على button و p باستخدام js غير قيمة النص عند الضغط على الزر .

const paragraph = document.getElementById("paragraph");
//const button = document.getElementById("button");
document.getElementById("button").onclick = () => {
    paragraph.textContent =  "Yes, that's for sure!!!!!!!!!!!";
};

// قم بإضافة خيار زيادة حجم الخط و تقليص حجم الخط

document.getElementById("increase").onclick = () => {
    paragraph.style.fontSize = "larger";
};
document.getElementById("decrease").onclick = () => {
    paragraph.style.fontSize = "smaller";
};

// قم بعمل خيار وضع خلفية للنص .
document.getElementById("background").onclick = () => {
    paragraph.style.background = "pink";
    paragraph.style.color = "white";
};
//قم بعمل form تاخذ معطيات من المستخدم و تظيفها الى list .

document.getElementById("submit").onclick = () => {
    let input = document.getElementById("username").value;
    let li = document.createElement("li");
    li.textContent = input;
    document.getElementById("ul").append(li);
};

//باستخدام js قم بعرض صورة وتغيرها عند الضغط على زر تغير الصوره .

document.getElementById("changeimg").onclick = () => {
    document.getElementById("img").src = "/image/hh.jpg";
};

//قم بعمل حاسبة تقوم بعمل العملايات الرياضية الاساسية وعرض النتائج للمستخدم

document.getElementById("calc").onclick = () => {
    const result = document.getElementById("result");
    const nb1 = Number(document.getElementById("nb1").value);
    const nb2 = Number(document.getElementById("nb2").value);
    const select = document.getElementById("select").value;
    switch (select) {
        case "Multiply":
            result.textContent = nb1 * nb2;
            break;
        case "Add":
            result.textContent = nb1 + nb2;
            break;
        case "Sub":
            result.textContent = nb1 - nb2;
            break;
        case "Divide":
            result.textContent = nb1 / nb2;
            break;
    }
};

//بستخدام get Element قم بغير قيمة name الى اسمك :
document.getElementById("name").textContent = "Arwa <3";

//اضف Events على قيمة name عند الضغط عليها تقوم بعرض تنبيه يعرض التاريخ 
document.getElementById("name").onclick = () => {
    alert(new Date());
};
//-أضف Events عند الضغط مرتين يقوم بالصعود للأعلى الصفحة 
document.getElementById("doubleclick").ondblclick = () => {
    scroll(0, 0);
};