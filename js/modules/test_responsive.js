const d = document;

export function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open(
        $form.dir.value,
        "tester",
        `innerWidth=${$form.pageWidht.value}, innerHeight=${$form.pageHeight.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.close) tester.close();
  });
}
