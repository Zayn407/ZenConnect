window.onload = function() {
  // Check for the existence of the search input box
  var checkExist = setInterval(function() {
    var inputElement = document.querySelector('input.gsc-input');
    if (inputElement) {
      clearInterval(checkExist);
      inputElement.placeholder = '                                          Search for meditation information';

      // Debounce function to limit how often a function can run
      function debounce(func, wait) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            func.apply(context, args);
          }, wait);
        };
      }

      // Function to append "meditation" to the input
      var appendMeditation = debounce(function() {
        var currentValue = inputElement.value.toLowerCase(); // Convert to lowercase to check
        var meditationSuffix = " meditation";
        // Remove all instances of "meditation" and trim spaces
        var cleanedInput = currentValue.replace(/meditation/g, '').trim();
        // Append "meditation" to the end of the input
        inputElement.value = cleanedInput + (cleanedInput ? meditationSuffix : '');
      }, 1000); // Wait 1000 ms after the last key press

      // Add event listener to modify the input value using debounce
      inputElement.addEventListener('input', appendMeditation);

      // Handle changes in the dropdown for meditation types
      document.querySelector('.meditation-type-dropdown').addEventListener('change', function() {
        var selectedType = this.value; // Get the selected meditation type
        var formattedType = selectedType.replace(/-/g, ' '); // Replace hyphens with spaces for better readability

        // Update the search box and append "meditation"
        inputElement.value = formattedType + " meditation";

        // Optionally trigger a search or handle the updated input as required
        // This part depends on how the search functionality is implemented
        // For example, if you need to submit a form or call a search function, do it here
        document.getElementById('searchForm').submit(); // Uncomment and adjust if applicable
      });
    }
  }, 5000);
};
