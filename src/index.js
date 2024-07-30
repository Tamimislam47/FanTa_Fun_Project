document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  function timeLine1page2() {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
        end: "top 0%",
        scrub: true,
      },
    });

    t1.to(
      ".fanta",
      {
        top: "126%",
        right: "60%",
      },
      "fanta"
    );
    t1.to(
      ".bottomLeaf",
      {
        top: "110%",
        right: "45%",
        rotate: 176,
      },
      "fanta"
    );

    t1.to(
      ".LotOrange",
      {
        top: "160%",
        right: "0",
        width: "15vw",
      },
      "fanta"
    );
    t1.to(
      ".fantaUpperOrange",
      {
        top: "115%",
        right: "80%",
      },
      "fanta"
    );
  }

  function timeLine1page3() {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "top 80%",
        end: "top 0%",
        scrub: true,
      },
    });

    t2.to(
      ".fanta",
      {
        top: "220%",
        right: "29%",
      },
      "fanta"
    );
    t2.to(
      ".fantaUpperOrange",
      {
        top: "210%",
        right: "48%",
      },
      "fanta"
    );
    t2.from(
      ".pepsi",
      {
        x: -500,
        y: 700,
      },
      "fanta"
    );
    t2.from(
      ".rightSide",
      {
        x: 500,
        y: 700,
      },
      "fanta"
    );
  }

  timeLine1page2();
  timeLine1page3();
});
