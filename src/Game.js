let knightPosition = [0, 0];
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

// export function observe(receive) {
//     setInterval(() => receive([
//         Math.floor(Math.random() * 8),
//         Math.floor(Math.random() * 8)
//     ]), 500);
// }