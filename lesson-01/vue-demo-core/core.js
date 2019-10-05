const app = {
  template: `
    <h1>{{counter}}</h1>
    <p>{{ name }}</p>
    <button v-on:click="up()">Увеличить счетчик</button>
    <button v-on:click="down()">Уменьшить счетчик</button>
  `,

  el: "#app",

  data: {
    counter: 0,
    name: "Name goes here"
  },

  methods: {
    up() {
      this.counter++;
    },

    down() {
      this.counter--;
    }
  }
};


const updateTrigger = Symbol.for("MyVueRenderTrigger");

function initReactiveSystem(instance) {
  const keys = Object.keys(instance.data);

  for (let key of keys) {

    Object.defineProperty(instance, key, {
      configurable: true,
      enumerable: true,

      set (val) {
        this.data[key] = val;
        instance[updateTrigger]();
      },

      get () {
        return this.data[key];
      }
    });
  }

  instance.$element = document.querySelector(instance.el);

  instance[updateTrigger] = function () {
    instance.$element.innerHTML = render(instance);
    initEvents(instance);
  };

  const methods = instance.methods;

  for (const name in methods) {
    if (methods.hasOwnProperty(name) && typeof methods[name] === "function") {
      instance[name] = methods[name].bind(instance);
    }
  }

  instance[updateTrigger]();
}


function escapeRegExp(pattern) {
  return pattern
      .replace(/\{/g, "\\{")
      .replace(/\}/g, "\\}");
}

function extractDirectiveName(code) {
  return code
      .replace("{{", "")
      .replace("}}", "")
      .replace(/\s/g,"");
}

function extractMethodName(code) {
  return code
      .replace("(", "")
      .replace(")", "")
      .replace(/\s/g,"");
}

function render(instance) {
  const directives = instance.template.match(/\{\{\s*?(\w+?)\s*?\}\}/gu);
  let html = instance.template;

  for (const dir of directives) {
    let rg = new RegExp(escapeRegExp(dir),"gu");
    html = html.replace(rg, instance[extractDirectiveName(dir)]);
  }

  html = html.replace(/v-on:/g, "data-on-");
  return html;
}

function initEvents(instance) {
  instance.$element.querySelectorAll("[data-on-click]").forEach(function (element) {
    element.addEventListener("click", function () {
      const method = extractMethodName(this.getAttribute("data-on-click"));
      instance[method]();
    });
  });
}


window.addEventListener("load", function () {
  initReactiveSystem(app);
});


