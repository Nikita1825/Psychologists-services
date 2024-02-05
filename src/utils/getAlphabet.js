export const getAlphabetList = psychologists => {
    return psychologists
      .flatMap(psychologist => psychologist.rating)
      .filter((item, index, array) => array.indexOf(item) === index);
  };