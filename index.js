"use strict";

/* globals history */

const contents = {
  "/": `This is Index!!!!!!`,
  "/foo": `This is Foo!!!!!!!`,
  "/bar": `This is Bar!!!!!!!`
};

function updateContentForRoute(routeName) {
  const content = document.querySelector(".content");
  content.innerHTML = contents[routeName];
}

function setupNavLinks() {
  let links = document.querySelectorAll("a");

  links.forEach(link => {
    let targetHref = link.getAttribute("href");

    link.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();

      // do the push state thing here
      // let data = {};
      // history.pushState([data], [title], [url]);
      history.pushState(null, null, targetHref);
      updateContentForRoute(targetHref);
    });
  });
}

setupNavLinks();