export const generateRandomDominos = () => {
  // Array tetap yang akan digunakan untuk menghasilkan domino
  return [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
    [2, 2],
  ];
};

export const sort = (dominoes, order = "asc") => {
  try {
    return dominoes.slice().sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];

      if (totalA === totalB) {
        if (order === "asc") {
          return a[0] - b[0];
        } else {
          return b[0] - a[0];
        }
      }
      return order === "asc" ? totalA - totalB : totalB - totalA;
    });
  } catch (error) {
    console.error(error);
  }
};

export const countDoubleNumber = (dominoes) => {
  try {
    return dominoes.reduce((count, [a, b]) => (a === b ? count + 1 : count), 0);
  } catch (error) {
    console.log(error);
  }
};

export const removeDuplicates = (dominoes) => {
  try {
    const uniqueDominoes = [];
    const seen = new Set();

    dominoes.forEach(([a, b]) => {
      const key = `${Math.min(a, b)}|${Math.max(a, b)}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueDominoes.push([a, b]);
      }
    });

    return uniqueDominoes.filter(([a, b]) => a !== b); // Exclude double dominoes
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const flipDominos = (dominoes) => {
  try {
    return dominoes.map(([a, b]) => [b, a]);
  } catch (error) {
    console.log(error);
  }
};

export const removeCardsWithTotal = (dominoes, total) => {
  try {
    return dominoes.filter(([a, b]) => a + b !== total);
  } catch (error) {
    console.log(error);
  }
};

export const resetData = () => {
  const defaultDominoes = generateRandomDominos();
  return {
    dominos: defaultDominoes,
    sourceDominos: defaultDominoes,
  };
};
