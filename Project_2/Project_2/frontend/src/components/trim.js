const Trim = (cohort) => {
  if (cohort === undefined) { //I had errors with substring so i added an if statement to check if our argument cohort is defined
    return '';
  }
  
  let trimmedCohort = cohort.substring(cohort.lastIndexOf('t/') + 2);
  trimmedCohort = trimmedCohort.replace("/", "");
  
  return trimmedCohort;
};

export default Trim;
