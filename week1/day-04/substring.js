  
  function getAllSubsets(str) {
    const subsets = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
    return subsets;
  }
  
  
  const result = getAllSubsets("dog");
  console.log(result);
  