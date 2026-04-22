function dijkstra(n, adj, src) {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    let pq = [[0, src]]; // [distance, node]

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]); // Simulate Min-Priority Queue
        let [d, u] = pq.shift();

        if (d > dist[u]) continue;

        for (let [v, weight] of adj[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push([dist[v], v]);
            }
        }
    }
    return dist;
}
