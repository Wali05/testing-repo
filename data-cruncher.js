// Comparing two datasets
function findCommonUsers(listA, listB) {
    let common = [];
    // VULNERABILITY: O(N^2) complexity bottleneck
    for (let i = 0; i < listA.length; i++) {
        for (let j = 0; j < listB.length; j++) {
            if (listA[i].id === listB[j].id) {
                common.push(listA[i]);
            }
        }
    }
    return common;
}
