let teams = [];
let rootNodeForBracket = {};
const teamCount = 16;

function onPageLoad() {
    intializeBracketNodes()
}

function intializeBracketNodes() {
    function recursiveFunction (node, level, rightTurnsCounts, addTo) {
        const maxLevel = Math.floor(Math.log(teamCount));
        if (level <= maxLevel)
        {
            
        }
    }
}

window.onload = onPageLoad;