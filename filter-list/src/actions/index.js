export function filterTracks(filterTerm) {
  return {
    type: "FILTER_LIST",
    payload: filterTerm
  }
}
