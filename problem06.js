for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// output : 5 5 5 5 5
/*
khi vòng for chạy xong setTimeout mới dược chạy và khi đó giá trị của i là bằn 5 do đó sẽ in 
ra 5 5 5 5 5 
*/
