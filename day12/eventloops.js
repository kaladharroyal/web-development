
/*
Theory: JavaScript Event Loop (concise)

- Call Stack: where synchronous code executes (LIFO).
- Web APIs / Host environment: timers, DOM events, XHR, etc., produce async callbacks.
- Macrotask Queue (task queue): callbacks from `setTimeout`, `setInterval`, I/O, UI events.
- Microtask Queue: promise callbacks (`.then`), `queueMicrotask`, MutationObservers — higher priority than macrotasks.
- Tick order: run one macrotask from the macrotask queue, then drain the entire microtask queue (including microtasks produced by other microtasks), then render/paint, then repeat.

Key consequences:
- Microtasks always run before the next macrotask, so Promise callbacks often execute earlier than `setTimeout(..., 0)`.
- Creating long microtask chains can starve rendering and macrotasks.
- Macrotasks are useful for deferring work between rendering frames.

Workflow (how an event loop cycle works):
1. Execute synchronous script until the call stack is empty.
2. Process one macrotask from the macrotask queue (if available).
3. After that macrotask finishes, drain the microtask queue completely:
  - Execute each microtask in FIFO order.
  - Microtasks may enqueue additional microtasks; continue until none remain.
4. Perform rendering/paint if needed (browser hosts do this between ticks).
5. Repeat from step 2: pick the next macrotask.

Practical tips / examples:
- Use microtasks (`Promise.then`, `queueMicrotask`) for small immediate follow-ups to current work.
- Use macrotasks (`setTimeout`) to schedule work after the browser had a chance to paint.
- Avoid infinite microtask loops — they block rendering and other I/O.

References: conceptual model applies to browsers and Node.js; Node's internals have additional phases but follow the same microtask/macrotask prioritization.
*/


/*
  eventloops.js
  Purpose: Collection of small examples demonstrating the behavior
  of the JavaScript event loop, microtasks (Promise.then, queueMicrotask)
  and macrotasks (setTimeout). Meant for learning and quick experiments.

*/

// Examples demonstrating microtask and macrotask ordering
console.log("Examples based on microtask and macrotasks");
console.log('A');
setTimeout(()=>{
    console.log('B');
},0);
Promise.resolve().then(()=>{
    console.log('C');
});
console.log('D');



console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve().then(() => {
  console.log(3);
});
console.log(4);


Promise.resolve().then(() => {
  console.log('First');
});
console.log('Second');
setTimeout(() => {
  console.log('Third');
}, 0);
console.log('Fourth');

console.log( "`Promise.then` and `queueMicrotask` are both microtasks, executed in order after sync code.");

console.log('one');
setTimeout(() => {
  console.log('two');
}, 0);
Promise.resolve().then(() => {
  console.log('three');
}).then(() => {
  console.log('four');
});
console.log('five');





setTimeout(() => {
  console.log('A');
}, 1000);
setTimeout(() => {
  console.log('B');
}, 0);
Promise.resolve().then(() => {
  console.log('C');
});
Promise.resolve().then(() => {
  console.log('D');
});


Promise.resolve().then(() => {
  console.log('Promise 1');
  return Promise.resolve('Inner');
}).then((val) => {
  console.log(val);
});
console.log('Sync');


setTimeout(() => {
  console.log('timeout 1');
}, 0);
Promise.resolve().then(() => {
  console.log('promise 2');
});
setTimeout(() => {
  console.log('timeout 2');
}, 0);
Promise.resolve().then(() => {
  console.log('promise 1');
});




console.log('Start');

queueMicrotask(() => {
  console.log('Microtask 1');
});
Promise.resolve().then(() => {
  console.log('Promise then');
});
console.log('End');



console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
queueMicrotask(() => {
  console.log('Microtask');
});
console.log('End');


console.log("Nested Promises & Microtask inside `then`");

Promise.resolve().then(() => {
  console.log('2');
  queueMicrotask(() => {
    console.log('3');
  });
  return Promise.resolve();
}).then(() => {
  console.log('4');
});

console.log('5');



console.log('A');
setTimeout(() => {
  console.log('B');
  queueMicrotask(() => {
    console.log('C');
  });
  Promise.resolve().then(() => {
    console.log('D');
  });
  console.log('E');
}, 0);
console.log('F');


console.log("Mixed chaining & nested microtasks");
console.log('start');
Promise.resolve().then(() => {
  console.log('promise 1');
  queueMicrotask(() => {
    console.log('microtask 1');
  });
  return Promise.resolve('inner');
}).then((val) => {
  console.log(val);
  queueMicrotask(() => {
    console.log('microtask 2');
  });
});
console.log('end');


console.log('X');
queueMicrotask(() => {
  console.log('Y');
  queueMicrotask(() => {
    console.log('Z');
  });
});
console.log('W');


 console.log("Macrotask enqueues microtask which enqueues another microtask");

setTimeout(() => {
  console.log('1');
  queueMicrotask(() => {
    console.log('2');
    queueMicrotask(() => {
      console.log('3');
    });
  });
  console.log('4');
}, 0);
console.log('5');



console.log("Promise inside microtask");


queueMicrotask(() => {
  console.log('A');

  Promise.resolve().then(() => {
    console.log('B');
  });

  console.log('C');
});

console.log('D');


console.log("Microtask chain explosion");


console.log('start');

Promise.resolve().then(() => {
  console.log('1');
  return Promise.resolve().then(() => {
    console.log('2');
  });
}).then(() => {
  console.log('3');
});

console.log('end');



console.log("Microtask > Macrotask even when deeply nested");

setTimeout(() => {
  console.log('T1');
}, 0);
Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => {
    console.log('T2');
  }, 0);
  return Promise.resolve().then(() => {
    console.log('P2');
  });
}).then(() => {
  console.log('P3');
});
console.log('S');



console.log("`queueMicrotask` inside `.then` vs direct");

Promise.resolve().then(() => {
  console.log('A');
  queueMicrotask(() => {
    console.log('B');
  });
});
queueMicrotask(() => {
  console.log('C');
});
console.log('D');

