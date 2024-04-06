function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // digunakan untuk menyimpan panjang (jumlah elemen) dari array result (jika tanpa built in function)
  const n = result.length;

  // Tulis code-mu disini

  // menggunakan built in function sort
  // result.sort((a, b) => a.year - b.year);

  // tanpa built in function
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (result[j].year > result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
