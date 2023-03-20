export function isEmpty(...arg: string[]) {
  arg.forEach((element) => {
    if (!element.length)
      throw new Error(`400-El campo ${element} no es valido`);
  });
}

export function isvalidate(arg: string[], regex: RegExp, message: string) {
  const validate = new RegExp(regex);
  arg.forEach((element) => {
    if (!validate.test(element)) {
      throw new Error(`400-${message}`);
    }
  });
}
