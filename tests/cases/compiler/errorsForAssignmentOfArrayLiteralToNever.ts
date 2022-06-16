let y: never;

y = [1, 2, 3];

y = [1, '2', 3];

y = {x: '1'};

declare function nv(x: never): void;

nv([1, 2, 3]);

nv({ x: 1 });
