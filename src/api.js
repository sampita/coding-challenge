const remoteURL = "http://localhost:5002"

export default {
  getCandidates() {
    return fetch(`${remoteURL}/results`).then(results => results.json())
  },
}