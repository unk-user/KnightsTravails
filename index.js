const KnightsMoves = (start, target) => {

    let queue = [[start, [start]]];
    const visited = [];

    while(queue.length > 0){
        const [current, path] = queue.shift();

        if(current[0] === target[0] && current[1] === target[1]) return path;
        let neightbors = nextMoves(current);
        for(const move of neightbors){
            if(!hasVisited(move, visited)){
                visited.push(move);
                queue.push([move, [...path, move]]);
            }
        }
    }
    return null;
}

const isInRange = (value) => {
    return value > 0 && value < 8;
};

const nextMoves = ([x, y]) => {
    const combination = [
        [1, 2],
        [2, 1],
        [-1, 2],
        [1, -2],
        [-2, 1],
        [2, -1],
        [-1, -2],
        [-2, -1]
    ];
    let moves = [];
    for(let i = 0; i < 8; i++){
        const dx = combination[i][0];
        const dy = combination[i][1];
        let newX = x + dx;
        let newY = y + dy;
        if(isInRange(newX) && isInRange(newY)){
            moves.push([newX, newY])
        }
    }
    return moves;
}

const hasVisited = (position, visited) => {
    for(let i = 0; i < visited.length; i++) {
        if(visited[i][0] === position[0] && visited[i][1] === position[1]) {
            return true;
        }
    }
    return false;
};

console.log(KnightsMoves([0,0], [6, 5]))