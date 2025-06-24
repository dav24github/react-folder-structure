export const pinColStatusSetter = (setPinCol: any) => {
  setTimeout(() => {
    const elem = document.querySelector(".css-1rtad1");

    if (elem) {
      elem.addEventListener("scroll", (e) => {
        const scroll = (e.currentTarget as any)?.scrollLeft;

        if (scroll >= 80) {
          setPinCol(true);
        } else {
          setPinCol(false);
        }
      });
    }
  }, 100);
};
