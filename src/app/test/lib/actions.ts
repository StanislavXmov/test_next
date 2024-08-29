export const getData = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res("DATA");
    }, 4000);
  });
}