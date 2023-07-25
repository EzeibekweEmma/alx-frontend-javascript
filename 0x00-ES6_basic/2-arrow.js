export default function getNeighborhoodsList() {
  // making use of arrow functions
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];
  
  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    // making use of anonymous functions
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
