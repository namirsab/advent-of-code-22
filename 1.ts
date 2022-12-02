function calculateCaloriesByElf(caloriesList: string[]): number[] {
  const elfs: number[] = [];
  let sum = 0;
  caloriesList.forEach((number) => {
    if (number) {
      sum += +number;
    } else {
      elfs.push(sum);
      sum = 0;
    }
  });
  return elfs;
}

function calculateFirstElf(elfs: number[]) {
  const firstElf = Math.max(...elfs);
  console.log(`First Elf: ${firstElf}`);
}

function calculateTop3Elfs(elfs: number[]) {
  const top3Elfs = elfs.toSorted((elfA, elfB) => elfB - elfA).slice(0, 3)
    .reduce(
      (acc, current) => acc + current,
      0,
    );

  console.log(`Top 3 Elfs: ${top3Elfs}`);
}

function main() {
  const elfs: number[] = calculateCaloriesByElf(
    Deno.readTextFileSync("1.input.txt").split("\n"),
  );
  calculateFirstElf(elfs);
  calculateTop3Elfs(elfs);
}

main();





