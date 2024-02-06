export const getAlphabetList = psychologists => {
    return psychologists
      .flatMap(psychologist => psychologist.price_per_hour)
      .filter((item, index, array) => array.indexOf(item) === index);
  };
  export const getExperienceList = psychologists => {
    return psychologists
      .flatMap(psychologist => psychologist.experience)
      .filter((item, index, array) => array.indexOf(item) === index);
  };