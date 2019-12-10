export const iphoneSpringback = () => {
  const {
    navigator: { userAgent }
  } = window;
  const isIphone = userAgent.match(/iphone/gi);
  if (isIphone) {
    const dom = document.querySelector("#app");
    const createDom = document.createElement("div");
    createDom.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 999999;
            display: none;
        `;
    dom.appendChild(createDom);
    const body = document.body;
    let show = false;
    const preventDefault = e => {
      e.preventDefault();
    };
    body.addEventListener("touchmove", () => {
      if (!show) {
        createDom.style.display = "block";
        body.addEventListener("click", preventDefault);
        show = true;
      }
    });
    body.addEventListener("touchend", event => {
      if (event.touches.length >= 1) return;
      setTimeout(() => {
        createDom.style.display = "none";
        body.removeEventListener("click", preventDefault);
        show = false;
      }, 100);
    });
  }
};
