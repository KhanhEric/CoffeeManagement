(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();

/*
output : 1 4 3 2
- Do hàm setTimeout là hàm bất đồng bộ, nó sẽ được đưa vào web API để xử lý nên sẽ hiển thị sau 
kể cả khi đặt thời gian là 0,còn các hàm đồng bộ sẽ được đưa vào callstack và hiển thị ra trước vì
thế sẽ in ra 1 trước rồi in ra 4, sau đó ỉn ra 2 và 3
*/
