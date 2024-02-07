import { useEffect } from "react";

function useTransition() {
  useEffect(() => {
    function reveal() {
      let reveals = document.querySelectorAll(".reveals");

      reveals.forEach((element) => {
        let windowHeight = window.innerHeight;
        let elementTop = element?.getBoundingClientRect().top!;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element?.classList.add("aos-animate");
        } else {
          element?.classList.remove("aos-animate");
        }
      });
    }
    document.querySelector("body")?.addEventListener("scroll", reveal);
  });
}

export default useTransition;
