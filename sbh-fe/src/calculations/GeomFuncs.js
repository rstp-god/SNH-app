let GeomFuncArray = new Map();

function CircleSquare (r) {
    return (Math.PI*r*r);
}

GeomFuncArray.set('CircleSquare', {
    id: 1,
    args: 1,
    func: CircleSquare
});

export default GeomFuncArray;