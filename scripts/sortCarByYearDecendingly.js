function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // digunakan untuk menyimpan panjang (jumlah elemen) dari array result (jika tanpa built in function)
  const n = result.length;

  // Tulis code-mu disini

  // menggunakan built in function sort
  // result.sort((a, b) => b.year - a.year);

  // tanpa built in function
  for (let i = 1; i < n; i++) {
    let current = result[i];
    let j = i - 1;
    while (j >= 0 && result[j].year < current.year) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = current;
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
