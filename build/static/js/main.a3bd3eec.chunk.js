(this.webpackJsonpreactapp = this.webpackJsonpreactapp || []).push([
  [0],
  {
    10: function(e, t, n) {
      e.exports = n(18);
    },
    15: function(e, t, n) {},
    17: function(e, t, n) {},
    18: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        l = n.n(a),
        r = n(3),
        i = n.n(r),
        c = (n(15), n(1)),
        s = n(4),
        o = n(5),
        u = n(8),
        d = n(6),
        m = n(9),
        f = n(7),
        p = n.n(f),
        h =
          (n(17),
          function() {
            return l.a.createElement('header', null, 'Todo List ');
          }),
        E = function(e) {
          var t = e.list,
            n = e.doneHandler,
            a = e.delHandler;
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'ul',
              null,
              l.a.createElement('p', null, 'Tasks:'),
              t.map(function(e, t) {
                return l.a.createElement(
                  'li',
                  {
                    style: {
                      textDecoration: e.isCompleted ? 'line-through' : ''
                    },
                    key: t
                  },
                  ' ',
                  e.title,
                  l.a.createElement('i', {
                    className: 'fas fa-check',
                    onClick: function() {
                      n(t);
                    }
                  }),
                  l.a.createElement('i', {
                    className: 'fas fa-trash-alt',
                    onClick: function() {
                      a(t);
                    }
                  })
                );
              })
            )
          );
        },
        v = function(e) {
          return l.a.createElement(
            'footer',
            { className: 'footer' },
            'Calendar: ',
            e.name
          );
        },
        b = (function(e) {
          function t() {
            var e, n;
            Object(s.a)(this, t);
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++)
              l[r] = arguments[r];
            return (
              ((n = Object(u.a)(
                this,
                (e = Object(d.a)(t)).call.apply(e, [this].concat(l))
              )).state = { list: [], field: '' }),
              (n.onChange = function(e) {
                n.setState({ field: e.target.value });
              }),
              (n.submit = function(e) {
                e.preventDefault();
                var t = { title: n.state.field, isCompleted: !1 };
                n.setState({
                  list: [].concat(Object(c.a)(n.state.list), [t]),
                  field: '  '
                });
              }),
              (n.delHandler = function(e) {
                var t = Object(c.a)(n.state.list);
                t.splice(e, 1), n.setState({ list: t });
              }),
              (n.doneHandler = function(e) {
                var t = n.state.list.map(function(t, n) {
                  return (
                    e === n &&
                      ((t.isCompleted = !t.isCompleted),
                      console.log('val ', t)),
                    t
                  );
                });
                n.setState({ list: t });
              }),
              n
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.list,
                    n = e.field;
                  return l.a.createElement(
                    'div',
                    null,
                    l.a.createElement(h, null),
                    l.a.createElement(
                      'form',
                      { onSubmit: this.submit },
                      l.a.createElement('input', {
                        type: 'text',
                        onChange: this.onChange,
                        value: n
                      }),
                      l.a.createElement(
                        'button',
                        { disabled: !n },
                        'Add Here!!'
                      )
                    ),
                    l.a.createElement(E, {
                      list: t,
                      doneHandler: this.doneHandler,
                      delHandler: this.delHandler
                    }),
                    l.a.createElement(v, {
                      name: p()().format('MMMM Do YYYY, HH:mm:s')
                    })
                  );
                }
              }
            ]),
            t
          );
        })(a.Component);
      i.a.render(l.a.createElement(b, null), document.getElementById('app'));
    }
  },
  [[10, 1, 2]]
]);
//# sourceMappingURL=main.a3bd3eec.chunk.js.map
