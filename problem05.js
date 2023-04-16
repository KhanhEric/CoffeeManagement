//Case1
function logA() {
  console.log("A");
}

function logB() {
  console.log("B");
}

function logC() {
  console.log("C");
}

function logD() {
  console.log("D");
}

logD(logA(logB(logC()))); 
// output : C B A D 

//Case1
function alogA() {
  setTimeout(function () {
    console.log("A");
  }, 0);
}

function alogB() {
  setTimeout(function () {
    console.log("B");
  }, 0);
}

function alogC() {
  setTimeout(function () {
    console.log("C");
  }, 0);
}

function alogD() {
  setTimeout(function () {
    console.log("D");
  }, 0);
}

alogD(alogA(alogB(alogC()))); 
// output : C B A D

//case3
setTimeout(function () {
  console.log("A");
  setTimeout(function () {
    console.log("B");
    setTimeout(function () {
      console.log("C");
      setTimeout(function () {
        console.log("D");
      }, 0);
    }, 100);
  }, 200);
}, 300);
// output : A B C D

//Case4
setTimeout(function () {
  console.log("A");
  setTimeout(function () {
    console.log("B");
  }, 100);
}, 200);

setTimeout(function () {
  console.log("C");
  setTimeout(function () {
    console.log("D");
  }, 200);
}, 100);
//output : C A B D
