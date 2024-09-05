function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function playersDraw() {
  try {
    const resultJoe = await luckyDraw("Tina");
    console.log(resultJoe);

    const resultCaroline = await luckyDraw("Jorge");
    console.log(resultCaroline);

    const resultSabrina = await luckyDraw("Julien");
    console.log(resultSabrina);
  } catch (error) {
    console.error("Errore durante la lotteria:", error.message); // Gestisce eventuali errori
  }
}

playersDraw();
