//// [errorsForAssignmentOfArrayLiteralToNever.ts]
let y: never;

y = [1, 2, 3];

y = [1, '2', 3];

y = {x: '1'};

declare function nv(x: never): void;

nv([1, 2, 3]);

nv({ x: 1 });


//// [errorsForAssignmentOfArrayLiteralToNever.js]
var y;
y = [1, 2, 3];
y = [1, '2', 3];
y = { x: '1' };
nv([1, 2, 3]);
nv({ x: 1 });
