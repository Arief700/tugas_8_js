const myTest8 = () => {
  let laptop = {
    merk: "acer",
    model: 14,
    warna: "putih"
  }
  console.log(laptop); //nilai awal sebelum berubah
  console.log("");
  laptop.warna = "hitam"; //merubah nilai
  console.log(laptop); //nilai awal setelah berubah
  console.log(laptop.warna); //menampilkan nilai yang dirubah
}

myTest8();
