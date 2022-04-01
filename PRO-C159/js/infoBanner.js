AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        superman: {
          banner_url: "./assets/posters/superman-banner.jpg",
          title: "Superman",
          released_year: "1983",
          description:
            "Superman is an American comic book series, that was created in 1983 about a man who is practically invincible and has lots of superpowers.",
        },
        spiderman: {
          banner_url: "./assets/posters/spiderman-banner.jpg",
          title: "Spiderman",
          released_year: "1962",
          description:
            "Spiderman is an American Comic book series that was created in 1962, about a teenager who was bitten by a radioactive spider and currently possess the powers of a spider.",
        },
        "captain-aero": {
          banner_url: "./assets/posters/captain-aero-banner.jpg",
          title: "Captain Aero",
          released_year: "1942",
          description:
            "Captain Aero Comics is a comic book series about a flying ace who tests out planes and encounters evil german scientists.",
        },
        "outer-space": {
          banner_url: "./assets/posters/outer-space-banner.jpg",
          title: "Outer Space",
          released_year: "1952",
          description:
            "Outer Space is a comic book series that makes stories about things that take place in outer space. Take notes NASA",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 1,
        height: 0.6,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.2, y: 0.15, z: 0.07 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.3, y: -0.28, z: 0.05 });
      return entityEl;
    },
  });