function commonSkills(skills1, skills2) {
  // Convert skills2 to lowercase and store them in a Set
  const skillSet = new Set(
    skills2.map((skill) => skill.toLowerCase())
  );

  // Find skills that exist in both arrays
  const common = skills1
    .map((skill) => skill.toLowerCase())
    .filter((skill) => skillSet.has(skill));

  // Remove duplicates and sort alphabetically
  return [...new Set(common)].sort();
}

console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"]))
console.log(commonSkills(["Python", "SQL"], ["Java", "C++"]))