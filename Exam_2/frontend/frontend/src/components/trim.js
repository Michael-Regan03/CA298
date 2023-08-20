const Trim = (item) => {
    if (item === undefined) { //I had errors with substring so i added an if statement to check if our argument cohort is defined
      return '';
    }
    
    let trimmedItem = item.substring(item.lastIndexOf('r/') + 2);
    trimmedItem = trimmedItem.replace("/", "");
    
    return trimmedItem;
  };
  
  export default Trim;