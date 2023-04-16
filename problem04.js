//-------------------CASE 1----------------------//
console.log("A");
setTimeout(function () {
  console.log("B");
}, 0);
setTimeout(function () {
  console.log("C");
}, 0);
console.log("D");
/*
output : A D B C
- Do hàm setTimeout là hàm bất đồng bộ, nó sẽ được đưa vào web API để xử lý nên sẽ hiển thị sau 
kể cả khi đặt thời gian là 0,còn các hàm đồng bộ sẽ được đưa vào callstack và hiển thị ra trước vì
thế sẽ in ra A trước rồi in ra D, sau đó ỉn ra B và C
*/

//-------------------CASE 2----------------------//
setTimeout(function () {
  setTimeout(function () {
    console.log("A");
  }, 0);
}, 0);

setTimeout(function () {
  console.log("B");
}, 0);

setTimeout(function () {
  setTimeout(function () {
    console.log("C");
  }, 0);
}, 10);

setTimeout(function () {
  console.log("D");
}, 0);
/*
output : B D A C
-  4 hàm setTimeout  là bất đồng bộ và dều có thời gian là 0s vì thế sẽ chạy từ trên xuống dưới và
đưa lần lượt vào web API và cho chạy timer,sau khi đếm timer lần đầu tiên thì B được in ra trước 
do chỉ có 1 setTimeout và thời gian chờ 0ms.Tiếp theo D được in ra vì cũng chỉ có 1 setTimeout 
và thời gian chờ là 0ms.Sau đó A được in ra do có 2 setTimeout lồng nhau, sau lần 1 thì hàm
setTimeout bên trong lại được đưa vào web API và tổng thơi gian đều là 0ms nên in ra thứ 3 Cuối 
cùng in ra C do có thời gian của 2 lần setTimeout là 10ms
*/

//-------------------CASE 3----------------------//
var x = "A";
setTimeout(function () {
  console.log(x);
  x = "B";
}, 3);
setTimeout(function () {
  console.log(x);
  x = "C";
}, 2);
setTimeout(function () {
  console.log(x);
  x = "D";
}, 1);

setTimeout(function () {
  console.log(x);
}, 4);
/*
output : A D C B
Hàm setTimeout có thời gian chờ ngắn nhất sẽ in ra trước vì thế in ra A D C B
*/

//-------------------CASE 4----------------------//
var t1 = setTimeout(function () {
  console.log("A");
  setTimeout(function () {
    console.log("B");
  }, 0);
}, 100);

var t2 = setTimeout(function () {
  console.log("C");
  setTimeout(function () {
    console.log("D");
  }, 0);
}, 200);

clearTimeout(t1);

setTimeout(function () {
  clearTimeout(t2);
}, 250);
/*
output : C D
- Do khi clearTimeout(t1) thì t1 bị xóa bỏ và sẽ không chạy in ra B
- Khi clearTimeout(t2) được gọi sau 250ms, lúc này t2 đã được thực hiện rồi vì t2 thực hiện sau 
200ms vì thế sẽ in ra C D
*/
