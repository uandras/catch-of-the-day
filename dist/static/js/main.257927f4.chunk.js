(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    34: function(e, t, a) {
      e.exports = a(64);
    },
    39: function(e, t, a) {},
    64: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        s = a(20),
        i = (a(39), a(12)),
        o = a(6),
        c = a(7),
        l = a(9),
        u = a(8),
        h = a(10);
      var m = function(e) {
          return r.a.createElement(
            "header",
            { className: "top" },
            r.a.createElement(
              "h1",
              null,
              "Catch",
              r.a.createElement(
                "span",
                { className: "ofThe" },
                r.a.createElement("span", { className: "of" }, "of"),
                r.a.createElement("span", { className: "the" }, "the")
              ),
              "Day"
            ),
            r.a.createElement(
              "h3",
              { className: "tagline" },
              r.a.createElement("span", null, e.tagline)
            )
          );
        },
        p = a(15);
      function d(e) {
        return (e / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        });
      }
      function f(e) {
        return e[Math.floor(Math.random() * e.length)];
      }
      function g() {
        var e = [
          "adorable",
          "beautiful",
          "clean",
          "drab",
          "elegant",
          "fancy",
          "glamorous",
          "handsome",
          "long",
          "magnificent",
          "old-fashioned",
          "plain",
          "quaint",
          "sparkling",
          "ugliest",
          "unsightly",
          "angry",
          "bewildered",
          "clumsy",
          "defeated",
          "embarrassed",
          "fierce",
          "grumpy",
          "helpless",
          "itchy",
          "jealous",
          "lazy",
          "mysterious",
          "nervous",
          "obnoxious",
          "panicky",
          "repulsive",
          "scary",
          "thoughtless",
          "uptight",
          "worried"
        ];
        return ""
          .concat(f(e), "-")
          .concat(f(e), "-")
          .concat(
            f([
              "women",
              "men",
              "children",
              "teeth",
              "feet",
              "people",
              "leaves",
              "mice",
              "geese",
              "halves",
              "knives",
              "wives",
              "lives",
              "elves",
              "loaves",
              "potatoes",
              "tomatoes",
              "cacti",
              "foci",
              "fungi",
              "nuclei",
              "syllabuses",
              "analyses",
              "diagnoses",
              "oases",
              "theses",
              "crises",
              "phenomena",
              "criteria",
              "data"
            ])
          );
      }
      var b = (function(e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
              s[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(s))
              )).renderOrder = function(e) {
                var t = a.props.fishes[e],
                  n = a.props.order[e];
                return t
                  ? t && "available" === t.status
                    ? r.a.createElement(
                        p.CSSTransition,
                        {
                          classNames: "order",
                          key: e,
                          timeout: { enter: 250, exit: 250 }
                        },
                        r.a.createElement(
                          "li",
                          { key: e },
                          r.a.createElement(
                            "span",
                            null,
                            r.a.createElement(
                              p.TransitionGroup,
                              { component: "span", className: "count" },
                              r.a.createElement(
                                p.CSSTransition,
                                {
                                  classNames: "count",
                                  key: n,
                                  timeout: { enter: 250, exit: 250 }
                                },
                                r.a.createElement("span", null, n)
                              )
                            ),
                            "lbs ",
                            t.name,
                            d(n * t.price),
                            r.a.createElement(
                              "button",
                              {
                                onClick: function() {
                                  return a.props.removeFromOrder(e);
                                }
                              },
                              "\xd7"
                            )
                          )
                        )
                      )
                    : r.a.createElement(
                        p.CSSTransition,
                        {
                          classNames: "order",
                          key: e,
                          timeout: { enter: 250, exit: 250 }
                        },
                        r.a.createElement(
                          "li",
                          { key: e },
                          "Sorry, ",
                          t ? t.name : "this fish",
                          " is no longer available!"
                        )
                      )
                  : null;
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.order;
                  console.log("myOrders: ", t, " ", typeof t);
                  var a = [];
                  null !== t && (a = Object.keys(this.props.order));
                  var n = a.reduce(function(t, a) {
                    var n = e.props.fishes[a],
                      r = e.props.order[a];
                    return n && "available" === n.status ? t + r * n.price : t;
                  }, 0);
                  return r.a.createElement(
                    "div",
                    { className: "order-wrap" },
                    r.a.createElement("h2", null, "Order"),
                    r.a.createElement(
                      p.TransitionGroup,
                      { component: "ul", className: "order" },
                      a.map(this.renderOrder)
                    ),
                    r.a.createElement(
                      "div",
                      { className: "total" },
                      "Total:",
                      r.a.createElement("strong", null, d(n))
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        v = a(18),
        y = a.n(v),
        E = a(24),
        O = a(17),
        j = a(13),
        k = a.n(j),
        w = (function(e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
              s[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(s))
              )).nameRef = r.a.createRef()),
              (a.priceRef = r.a.createRef()),
              (a.statusRef = r.a.createRef()),
              (a.descRef = r.a.createRef()),
              (a.imageRef = r.a.createRef()),
              (a.createFish = function(e) {
                e.preventDefault();
                var t = {
                  name: a.nameRef.current.value,
                  price: parseFloat(a.priceRef.current.value),
                  status: a.statusRef.current.value,
                  desc: a.descRef.current.value,
                  image: a.imageRef.current.value
                };
                a.props.addFish(t), e.currentTarget.reset();
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "form",
                    { className: "fish-edit", onSubmit: this.createFish },
                    r.a.createElement("input", {
                      name: "name",
                      ref: this.nameRef,
                      type: "text",
                      placeholder: "Name"
                    }),
                    r.a.createElement("input", {
                      name: "price",
                      ref: this.priceRef,
                      type: "text",
                      placeholder: "Price"
                    }),
                    r.a.createElement(
                      "select",
                      { name: "status", ref: this.statusRef },
                      r.a.createElement(
                        "option",
                        { value: "available" },
                        "Fresh!"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "unavailable" },
                        "Sold Out!"
                      )
                    ),
                    r.a.createElement("textarea", {
                      name: "desc",
                      ref: this.descRef,
                      placeholder: "Desc"
                    }),
                    r.a.createElement("input", {
                      name: "image",
                      type: "text",
                      ref: this.imageRef,
                      placeholder: "Image"
                    }),
                    r.a.createElement(
                      "button",
                      { type: "submit" },
                      "+ Add Fish"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        S = a(21),
        F = (function(e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).handleChange = function(e) {
                var t = Object(i.a)(
                  {},
                  a.props.fish,
                  Object(S.a)({}, e.currentTarget.name, e.currentTarget.value)
                );
                a.props.updateFish(a.props.index, t);
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { className: "fish-edit" },
                    r.a.createElement("input", {
                      type: "text",
                      name: "name",
                      onChange: this.handleChange,
                      value: this.props.fish.name
                    }),
                    r.a.createElement("input", {
                      type: "text",
                      name: "price",
                      onChange: this.handleChange,
                      value: this.props.fish.price
                    }),
                    r.a.createElement(
                      "select",
                      {
                        type: "text",
                        name: "status",
                        onChange: this.handleChange,
                        value: this.props.fish.status
                      },
                      r.a.createElement(
                        "option",
                        { value: "available" },
                        "Fresh!"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "unavailable" },
                        "Sold Out!"
                      )
                    ),
                    r.a.createElement("textarea", {
                      type: "text",
                      name: "desc",
                      onChange: this.handleChange,
                      value: this.props.fish.desc
                    }),
                    r.a.createElement("input", {
                      type: "text",
                      name: "image",
                      onChange: this.handleChange,
                      value: this.props.fish.image
                    }),
                    r.a.createElement(
                      "button",
                      {
                        onClick: function() {
                          return e.props.deleteFish(e.props.index);
                        }
                      },
                      "Remove Fish"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        C = function(e) {
          return r.a.createElement(
            "nav",
            { className: "login" },
            r.a.createElement("h2", null, "Inventory login"),
            r.a.createElement(
              "p",
              null,
              "Sign in to manage your store's inventory:"
            ),
            r.a.createElement(
              "button",
              {
                className: "github",
                onClick: function() {
                  return e.authenticate("Github");
                }
              },
              "Log In with GitHub"
            ),
            r.a.createElement(
              "button",
              {
                className: "facebook",
                onClick: function() {
                  return e.authenticate("Facebook");
                }
              },
              "Log In with FaceBook"
            )
          );
        },
        x = a(32),
        N = a.n(x),
        R = k.a.initializeApp({
          apiKey: "AIzaSyAnmJB9NgLEWHtc1sZXLTmm4EEz-RFGlAY",
          authDomain: "catch-of-the-day-au.firebaseapp.com",
          databaseURL: "https://catch-of-the-day-au.firebaseio.com",
          projectId: "catch-of-the-day-au",
          storageBucket: "catch-of-the-day-au.appspot.com",
          messagingSenderId: "913119599322",
          appId: "1:913119599322:web:ac0e35fb16b7f7aed223e3",
          measurementId: "G-KKP7F7WY6X"
        }),
        I = N.a.createClass(R.database()),
        T = (function(e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { owner: null, uid: null }),
              (a.authHandler = (function() {
                var e = Object(E.a)(
                  y.a.mark(function e(t) {
                    var n;
                    return y.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              I.fetch(a.props.storeId, {
                                context: Object(O.a)(Object(O.a)(a))
                              })
                            );
                          case 2:
                            if (((n = e.sent), console.log(n), n.owner)) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (e.next = 7),
                              I.post("".concat(a.props.storeId, "/owner"), {
                                data: t.user.uid
                              })
                            );
                          case 7:
                            a.setState({
                              uid: t.user.uid,
                              owner: n.owner || t.user.uid
                            }),
                              console.log(t);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.authenticate = function(e) {
                var t;
                switch (e) {
                  case "Facebook":
                    t = new k.a.auth.FacebookAuthProvider();
                    break;
                  case "Github":
                    t = new k.a.auth.GithubAuthProvider();
                }
                R.auth()
                  .signInWithPopup(t)
                  .then(a.authHandler);
              }),
              (a.logout = Object(E.a)(
                y.a.mark(function e() {
                  return y.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log("Logging out!"),
                            (e.next = 3),
                            k.a.auth().signOut()
                          );
                        case 3:
                          a.setState({ uid: null });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  k.a.auth().onAuthStateChanged(function(t) {
                    t && e.authHandler({ user: t });
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = r.a.createElement(
                      "button",
                      { onClick: this.logout },
                      "Log Out!"
                    );
                  return this.state.uid
                    ? this.state.uid !== this.state.owner
                      ? r.a.createElement(
                          "div",
                          null,
                          r.a.createElement(
                            "p",
                            null,
                            "Sorry, but you are not the owner!"
                          ),
                          t
                        )
                      : r.a.createElement(
                          "div",
                          { className: "inventory" },
                          r.a.createElement("h2", null, "Inventory"),
                          t,
                          Object.keys(this.props.fishes).map(function(t) {
                            return r.a.createElement(F, {
                              key: t,
                              index: t,
                              updateFish: e.props.updateFish,
                              deleteFish: e.props.deleteFish,
                              fish: e.props.fishes[t]
                            });
                          }),
                          r.a.createElement(w, { addFish: this.props.addFish }),
                          r.a.createElement(
                            "button",
                            { onClick: this.props.loadSampleFishes },
                            "Load Sample Fishes"
                          )
                        )
                    : r.a.createElement(C, { authenticate: this.authenticate });
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        A = (function(e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).handleClick = function() {
                a.props.addToOrder(a.props.index);
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.details,
                    t = e.image,
                    a = e.name,
                    n = e.price,
                    s = e.desc,
                    i = "available" === e.status;
                  return r.a.createElement(
                    "li",
                    { className: "menu-fish" },
                    r.a.createElement("img", { src: t, alt: a }),
                    r.a.createElement(
                      "h3",
                      { className: "fish-name" },
                      a,
                      r.a.createElement("span", { className: "price" }, d(n))
                    ),
                    r.a.createElement("p", null, s),
                    r.a.createElement(
                      "button",
                      { onClick: this.handleClick, disabled: !i },
                      i ? "Add To Order" : "Sold Out"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        L = {
          fish1: {
            name: "Pacific Halibut",
            image: "/images/hali.jpg",
            desc:
              "Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",
            price: 1724,
            status: "available"
          },
          fish2: {
            name: "Lobster",
            image: "/images/lobster.jpg",
            desc:
              "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
            price: 3200,
            status: "available"
          },
          fish3: {
            name: "Sea Scallops",
            image: "/images/scallops.jpg",
            desc:
              "Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",
            price: 1684,
            status: "unavailable"
          },
          fish4: {
            name: "Mahi Mahi",
            image: "/images/mahi.jpg",
            desc:
              "Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",
            price: 1129,
            status: "available"
          },
          fish5: {
            name: "King Crab",
            image: "/images/crab.jpg",
            desc:
              "Crack these open and enjoy them plain or with one of our cocktail sauces",
            price: 4234,
            status: "available"
          },
          fish6: {
            name: "Atlantic Salmon",
            image: "/images/salmon.jpg",
            desc:
              "This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",
            price: 1453,
            status: "available"
          },
          fish7: {
            name: "Oysters",
            image: "/images/oysters.jpg",
            desc:
              "A soft plump oyster with a sweet salty flavor and a clean finish.",
            price: 2543,
            status: "available"
          },
          fish8: {
            name: "Mussels",
            image: "/images/mussels.jpg",
            desc:
              "The best mussels from the Pacific Northwest with a full-flavored and complex taste.",
            price: 425,
            status: "available"
          },
          fish9: {
            name: "Jumbo Prawns",
            image: "/images/prawns.jpg",
            desc:
              "With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",
            price: 2250,
            status: "available"
          }
        },
        D = (function(e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { fishes: {}, order: {} }),
              (a.addFish = function(e) {
                console.log("Adding a fish!");
                var t = Object(i.a)({}, a.state.fishes);
                (t["fish".concat(Date.now())] = e), a.setState({ fishes: t });
              }),
              (a.updateFish = function(e, t) {
                var n = Object(i.a)({}, a.state.fishes);
                (n[e] = t), a.setState({ fishes: n });
              }),
              (a.deleteFish = function(e) {
                var t = Object(i.a)({}, a.state.fishes);
                (t[e] = null), a.setState({ fishes: t });
              }),
              (a.loadSampleFishes = function() {
                console.log("Loading sample fishes!!!"),
                  a.setState({ fishes: L });
              }),
              (a.addToOrder = function(e) {
                var t = Object(i.a)({}, a.state.order);
                (t[e] = t[e] + 1 || 1), a.setState({ order: t });
              }),
              (a.removeFromOrder = function(e) {
                var t = Object(i.a)({}, a.state.order);
                (t[e] = t[e] - 1),
                  0 === t[e] && delete t[e],
                  a.setState({ order: t });
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = localStorage.getItem(this.props.match.params.storeId);
                  console.log("localstorageRef: ", e),
                    console.log("typeof localstorageRef: ", typeof e),
                    this.setState({ order: JSON.parse(e) }),
                    (this.ref = I.syncState(
                      "".concat(this.props.match.params.storeId, "/fishes"),
                      { context: this, state: "fishes" }
                    ));
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e, t, a) {
                  localStorage.setItem(
                    this.props.match.params.storeId,
                    JSON.stringify(this.state.order)
                  );
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  I.remove(this.ref);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { className: "catch-of-the-day" },
                    r.a.createElement(
                      "div",
                      { className: "menu" },
                      r.a.createElement(m, {
                        tagline: "Fresh Seafood Market",
                        age: 500,
                        cool: !0
                      }),
                      r.a.createElement(
                        "ul",
                        { className: "fishes" },
                        Object.keys(this.state.fishes).map(function(t) {
                          return r.a.createElement(A, {
                            key: t,
                            index: t,
                            details: e.state.fishes[t],
                            addToOrder: e.addToOrder
                          });
                        })
                      )
                    ),
                    r.a.createElement(
                      b,
                      Object.assign({}, this.state, {
                        removeFromOrder: this.removeFromOrder
                      })
                    ),
                    r.a.createElement(T, {
                      addFish: this.addFish,
                      updateFish: this.updateFish,
                      deleteFish: this.deleteFish,
                      loadSampleFishes: this.loadSampleFishes,
                      fishes: this.state.fishes,
                      storeId: this.props.match.params.storeId
                    })
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        P = (function(e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
              s[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(s))
              )).myInput = r.a.createRef()),
              (a.goToStore = function(e) {
                e.preventDefault();
                var t = a.myInput.current.value;
                a.props.history.push("/store/".concat(t));
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "form",
                      {
                        action: "",
                        className: "store-selector",
                        onSubmit: this.goToStore
                      },
                      r.a.createElement("h2", null, "Please Enter a Store!"),
                      r.a.createElement("input", {
                        type: "text",
                        ref: this.myInput,
                        required: !0,
                        placeholder: "Store Name",
                        defaultValue: g()
                      }),
                      r.a.createElement(
                        "button",
                        { type: "submit" },
                        "Visit Store\u2192"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        G = a(67),
        M = a(68),
        H = a(69),
        J = function() {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement("h2", null, "Page not found!!!!")
          );
        },
        W = function() {
          return r.a.createElement(
            G.a,
            null,
            r.a.createElement(
              M.a,
              null,
              r.a.createElement(H.a, { exact: !0, path: "/", component: P }),
              r.a.createElement(H.a, { path: "/store/:storeId", component: D }),
              r.a.createElement(H.a, { component: J })
            )
          );
        };
      Object(s.render)(
        r.a.createElement(W, null),
        document.querySelector("#main")
      );
    }
  },
  [[34, 1, 2]]
]);
//# sourceMappingURL=main.257927f4.chunk.js.map
