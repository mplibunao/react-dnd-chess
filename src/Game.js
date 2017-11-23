let knightPosition = [1, 7];
let observer = null;

function emitChange() {
    observer(knightPosition);
}

// Entry point
export function observe(o) {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}

export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

// export function observe(receive) {
//     setInterval(() => receive([
//         Math.floor(Math.random() * 8),
//         Math.floor(Math.random() * 8)
//     ]), 500);
// }