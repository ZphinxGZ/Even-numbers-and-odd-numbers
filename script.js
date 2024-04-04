//input
const n = document.getElementById("number");
//display Array
const result = document.getElementById("result");
//display lekke
const lekke = document.getElementById("Lke");
//display lekku
const lekku = document.getElementById("Lku");

//สร้างตัวแปรมารับค่าใน input
let item = [];
function displayArray() {
  //แสดงผลข้อมูล
  //เอา input มาใส่ใน Array ของ Item
  //parseInt() ทำให้เป็นตัเลขจำนวนเต็ม
  //n = input
  //value = ข้อมูล
  item.push(parseInt(n.value));
  result.innerHTML = "ตัวเลข = " + item + "<br>";

  //reset ข้อมูลใน input ทุกครั้งที่กดปุ่ม
  n.value = "";
}
function resultData() {
  //คำนวนข้อมูล
  //กำหนดตัวแปร
  //เลขคู่
  let Lk = 1;
  //เลขคี่
  let Lkk = 1;
  //0 คือ index ที่เริ่มต้นค้นหาข้อมูลใน Array
  for (let i = 0; i < item.length; i++) {
    //เลขคู่
    if (item[i] % 2 == 0) {
      Lk = Lk * item[i];
    } else {
      Lkk = Lkk * item[i];
    }
  }
  //แสดงผลผลคูณเลขคู่
  lekku.innerHTML = "ผลคูณเลขคู่ = " + Lk + "<br>";
  //แสดงผลผลคูณเลขคี่
  lekke.innerHTML = "ผลคูณเลขคี่ = " + Lkk + "<br>";
}
function resetData() {
  //Reset ข้อมูล
  result.innerHTML = "";
  lekke.innerHTML = "";
  lekku.innerHTML = "";
  n.value = "";
  item = [];
}
