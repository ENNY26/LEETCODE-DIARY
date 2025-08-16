/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    for (let [course, pre] of prerequisites) {
        graph[pre].push(course);
    }
    const visited = new Array(numCourses).fill(0);
    const stack = [];
    let hasCycle = false

    function dfs(node){
        if(visited[node] === 1){
            hasCycle = true;
            return;
        }
        if(visited[node] === 2 )return

        visited[node] = 1

            for(let neighbor of graph[node]){
                dfs(neighbor)
            }
                    visited[node] = 2; 
        stack.push(node);  
    }
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0) dfs(i);
    }
    if (hasCycle) return []; 
    return stack.reverse();
    }

