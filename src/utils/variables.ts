export const changeColorStyle = (styles: {variable: string, color: string}[]) => {
  const root = document.documentElement;

  styles.forEach((item) => (
    root.style.setProperty(item.variable, item.color)
  ));
};
