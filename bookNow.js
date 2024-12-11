function toggleSecondDropdown() {
  const firstPackage = document.getElementById("package1").value;
  const secondPackageContainer = document.getElementById(
    "second-package-container"
  );
  const menuForm = document.getElementById("menuForm");

  if (firstPackage === "customized") {
    // Hide the second package dropdown
    secondPackageContainer.style.display = "none";
    document.getElementById("package2").value = ""; // Reset second dropdown value

    // Show the custom menu form
    menuForm.style.display = "block";
  } else if (firstPackage === "veg" || firstPackage === "non-veg") {
    // Show the second package dropdown
    secondPackageContainer.style.display = "block";

    // Hide the custom menu form
    menuForm.style.display = "none";
  } else {
    // Hide both for invalid selections
    secondPackageContainer.style.display = "none";
    menuForm.style.display = "none";
    document.getElementById("package2").value = "";
  }
}

function togglethirdDropdown() {
  const firstPackage = document.getElementById("package1").value;
  const secondPackage = document.getElementById("package2").value;
  const diamondVegForm = document.getElementById("diamongVeg");
  const goldVegForm = document.getElementById("goldVeg");
  const diamondNonVegForm = document.getElementById("diamondNonVeg");
  const goldNonVegForm = document.getElementById("goldNonVeg");

  // Show Diamond Veg menu when Veg package and Diamond sub-package is selected
  if (firstPackage === "veg" && secondPackage === "diamond") {
    diamondVegForm.style.display = "block";
    goldVegForm.style.display = "none"; // Hide Gold menu
    diamondNonVegForm.style.display = "none"; // Hide Non-Veg Diamond menu
    goldNonVegForm.style.display = "none"; // Hide Non-Veg Gold menu
  }
  // Show Gold Veg menu when Veg package and Gold sub-package is selected
  else if (firstPackage === "veg" && secondPackage === "gold") {
    goldVegForm.style.display = "block";
    diamondVegForm.style.display = "none"; // Hide Diamond menu
    diamondNonVegForm.style.display = "none"; // Hide Non-Veg Diamond menu
    goldNonVegForm.style.display = "none"; // Hide Non-Veg Gold menu
  }
  // Show Diamond Non-Veg menu when Non-Veg package and Diamond sub-package is selected
  else if (firstPackage === "non-veg" && secondPackage === "diamond") {
    diamondNonVegForm.style.display = "block";
    goldNonVegForm.style.display = "none"; // Hide Gold menu
    diamondVegForm.style.display = "none"; // Hide Veg Diamond menu
    goldVegForm.style.display = "none"; // Hide Veg Gold menu
  }
  // Show Gold Non-Veg menu when Non-Veg package and Gold sub-package is selected
  else if (firstPackage === "non-veg" && secondPackage === "gold") {
    goldNonVegForm.style.display = "block";
    diamondNonVegForm.style.display = "none"; // Hide Diamond menu
    diamondVegForm.style.display = "none"; // Hide Veg Diamond menu
    goldVegForm.style.display = "none"; // Hide Veg Gold menu
  } else {
    // Hide all menu forms for invalid combinations
    goldVegForm.style.display = "none";
    diamondVegForm.style.display = "none";
    goldNonVegForm.style.display = "none";
    diamondNonVegForm.style.display = "none";
  }
}

// Function to get query parameter from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
window.onload = function () {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("date").value = today;
};

// Get the package name from the URL
const packageName = getQueryParam("package");

// Set the heading based on the package name
if (packageName) {
  const heading = document.getElementById("eventHeading");
  if (packageName === "customized") {
    heading.textContent = "Book Customized Package";
  } else if (packageName === "veg") {
    heading.textContent = "Book Veg Package";
  } else if (packageName === "non-veg") {
    heading.textContent = "Book Non-Veg Package";
  }
}
