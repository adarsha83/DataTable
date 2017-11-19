(function() {
    "use strict";

    var dataTableComponent = {
        view: function(vnode) {
            var vdom = [
                m("div", {class: "w-60 ml7 tc"}, [
                    m("div", {class: "dib w-10 tr"}, [
                        m("a", {href: "#", title: "First Page", class: "link white bg-blue pa1", onclick: fetchData()}, ["|<"]),
                        m("a", {href: "#", title: "Previuos Page", class: "link white bg-blue pa1"}, ["<<"]),
                        m("a", {href: "#", title: "Previuos Row", class: "link white bg-blue pa1"}, ["<"])
                    ]),
                    m("form", {class: "dib pa2 tc"}, [
                        m("div", {class: "dib mw4"}, [
                            m("label", {for: "size", class: "f6 b dib mb2"}, ["Showing"]),
                            m("input", {id: "size", class: "b--black-20 pa2 mb2 dib w-30", type: "text"})
                        ]),
                        m("div", {class: "dib mw4"}, [
                            m("label", {for: "total", class: "f6 b dib mb2"}, ["rows out of"]),
                            m("input", {id: "total", class: "b--black-20 pa2 mb2 dib w-30", type: "text"})
                        ]),
                        m("div", {class: "dib mw4"},[
                            m("label", {for: "start", class: "f6 b dib mb2"}, ["starting at"]),
                            m("input", {id: "start", class: "b--black-20 pa2 mb2 dib w-30", type: "text"})
                        ])
                    ]),
                    m("div", {class: "dib w-10 tr"}, [
                        m("a", {href: "#", title: "Next Row", class: "link white bg-blue pa1"}, [">"]),
                        m("a", {href: "#", title: "Next Page", class: "link white bg-blue pa1"}, [">>"]),
                        m("a", {href: "#", title: "Last Page", class: "link white bg-blue pa1"}, [">|"])
                    ])
                ]),
                m("div", {class: "pa4"}, [
                    m("div", {class: "overflow-auto"}, [
                        m("table", {class: "f6 w-60 mw8 center", cellspacing: "0"})
                    ])
                ])
            ]
            return vdom;
        }
    }

    m.mount(document.body, dataTableComponent);
    // Total rows in DB
    var totalRows = 100;

    // Fetch next set of rows (fake API)
    function fetchData(count) {
        var rows = [];
        return rows;
    }

    // Initialize the buffer
    var tableData = fetchData(10);
})();