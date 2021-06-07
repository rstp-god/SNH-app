let GeomFuncArray = new Map();

function CircleSquare (r) {
    return (pi*r*r);
}

GeomFuncArray.set('CircleSquare', {
    id: 1,
    arg: 1,
    func: CircleSquare
});

export default GeomFuncArray;