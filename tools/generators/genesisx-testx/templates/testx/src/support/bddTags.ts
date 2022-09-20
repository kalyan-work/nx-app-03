const getTags = () => {
  let tags = "";

  // Set device type tags
  switch (process.env.DEVICE) {
    case "@mobile": {
      tags = tags + "@mobile";
      break;
    }
    case "@tablet": {
      tags = tags + "@tablet";
      break;
    }
    default: {
      tags = tags + "not @tablet and not @mobile";
      break;
    }
  }

  // Set user type tags
  switch (process.env.USER_TYPE) {
    case "@customer": {
      tags = tags + " and not @colleague and not @bus_customer";
      break;
    }
    case "@colleague": {
      tags = tags + " and not @customer and not @bus_customer";
      break;
    }
    case "@bus_customer": {
      tags = tags + " and not @customer and not @colleague";
      break;
    }
    default: {
      tags = tags + " and not @colleague and not @bus_customer";
      break;
    }
  }

  tags = tags + " and not @manual and not @ignore";

  return tags;
};

export {getTags};