console.log("train.js is loaded and running!");


/*(function initializeModules() {
  console.log("Running initializeModules...");

  let progress = JSON.parse(localStorage.getItem("moduleProgress"));
  console.log("Current progress from localStorage:", progress);

  // Initialize progress if not set
  if (!progress) {
    progress = {
      ptrain1: true, // Unlock the first module
      ptrain2: false,
      ptrain3: false,
      gtrain1: false,
      gtrain2: false,
      gtrain3: false,
      putrain1: false,
      putrain2: false,
      putrain3: false,
    };
    console.log("Initialized progress:", progress);
    localStorage.setItem("moduleProgress", JSON.stringify(progress));
  } else {
    console.log("Existing progress found:", progress);
  }

  // Ensure the first module is always unlocked
  if (!progress["ptrain1"]) {
    progress["ptrain1"] = true;
    console.log("Unlocking ptrain1.");
    localStorage.setItem("moduleProgress", JSON.stringify(progress));
  }

  console.log("Final progress after initialization:", progress);
})();

  
  // Save the updated progress back to localStorage
  localStorage.setItem("moduleProgress", JSON.stringify(progress));

  // Log the current progress for debugging
  console.log("Initialized module progress:", progress);
*/
function initializeModules() {
  console.log("Running initializeModules...");

  let progress = JSON.parse(localStorage.getItem("moduleProgress"));
  console.log("Current progress from localStorage:", progress);

  if (!progress) {
    progress = {
      ptrain1: true, // Unlock the first module
      ptrain2: false,
      ptrain3: false,
      gtrain1: false,
      gtrain2: false,
      gtrain3: false,
      putrain1: false,
      putrain2: false,
      putrain3: false,
    };
    console.log("Initialized progress:", progress);
    localStorage.setItem("moduleProgress", JSON.stringify(progress));
  }

  console.log("Final progress after initialization:", progress);
}

initializeModules();



function rateProgress(value) {
    const feedback = document.getElementById("feedback");
  
    if (value === 1 || value === 2) {
      feedback.textContent = "Keep trying! You will get there!";
    } else if (value === 3) {
      feedback.textContent = "Congratulations! You passed this module and unlocked the next one.";
      unlockNextModule();
    }
  }
  
  // Unlock the next module in localStorage
  function unlockNextModule() {
    // Get existing progress or start fresh
    const progress = JSON.parse(localStorage.getItem("moduleProgress")) || {};
  
    // Mark the next module as unlocked
    progress["ptrain2"] = true;
  
    // Save updated progress back to localStorage
    localStorage.setItem("moduleProgress", JSON.stringify(progress));
  }
  
  /*// Check if a module is locked
  function isModuleLocked(moduleName) {
    const progress = JSON.parse(localStorage.getItem("moduleProgress")) || {};
    return !progress[moduleName]; // Return true if the module is locked

  }
    */
  function isModuleLocked(moduleName) {
    const progress = JSON.parse(localStorage.getItem("moduleProgress")) || {};
    console.log("Progress object:", progress); // Debugging log
    console.log(`Checking if ${moduleName} is locked:`, !progress[moduleName]); // Debugging log
    return !progress[moduleName]; // Return true if locked
  }
  
  
  // Example: To use in the Train tab page
  /*function handleModuleClick(moduleName) {
    if (isModuleLocked(moduleName)) {
      alert("Keep trying! Complete the previous module to unlock this one.");
    } else {
      location.href = ptrain1.html//moduleName + ".html"; // Navigate to the unlocked module
    }
  }
    */
  
 