<h2 align="center">Recap Updating Objects in State</h2>

<h3 align="center">Why is mutating state not recommended in React?</h3>

-  There are a few reasons:
  
-  Debugging: If you use console.log and don’t mutate state, your past logs won’t get clobbered by the more recent state changes. So you can clearly see how state has changed between renders.
-  Optimizations: Common React optimization strategies rely on skipping work if previous props or state are the same as the next ones. If you never mutate state, it is very fast to check whether there were any changes. If prevObj === obj, you can be sure that nothing could have changed inside of it.
-  New Features: The new React features we’re building rely on state being treated like a snapshot. If you’re mutating past versions of state, that may prevent you from using the new features.
-  Requirement Changes: Some application features, like implementing Undo/Redo, showing a history of changes, or letting the user reset a form to earlier values, are easier to do when nothing is mutated. This is because you can keep past copies of state in memory, and reuse them when appropriate. If you start with a mutative approach, features like this can be difficult to add later on.
-  Simpler Implementation: Because React does not rely on mutation, it does not need to do anything special with your objects. It does not need to hijack their properties, always wrap them into Proxies, or do other work at initialization as many “reactive” solutions do. This is also why React lets you put any object into state—no matter how large—without additional performance or correctness pitfalls.
-  In practice, you can often “get away” with mutating state in React, but we strongly advise you not to do that so that you can use new React features developed with this approach in mind. Future contributors and perhaps even your future self will thank you!

<h3 align='center'>Summary</h3>

- Treat all state in React as immutable.
- When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
- Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
- You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
- Spread syntax is shallow: it only copies one level deep.
- To update a nested object, you need to create copies all the way up from the place you’re updating.
- To reduce repetitive copying code, use Immer.