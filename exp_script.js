window.onload = function() {
  // Check for the existence of the search input box
  var checkExist = setInterval(function() {
    var inputElement = document.querySelector('input.gsc-input');
    if (inputElement) {
      clearInterval(checkExist);
      inputElement.placeholder = '                              Search for meditation information';

      // Add an event listener to modify the input value
      inputElement.addEventListener('input', function() {
        var currentValue = inputElement.value.toLowerCase(); // Convert to lowercase to check
        var meditationSuffix = " meditation";

        // Remove all instances of "meditation" and trim spaces
        var cleanedInput = currentValue.replace(/meditation/g, '').trim();

        // Append "meditation" to the end of the input
        inputElement.value = cleanedInput + (cleanedInput ? meditationSuffix : '');
      });

      // Handle changes in the dropdown for meditation types
      document.querySelector('.meditation-type-dropdown').addEventListener('change', function() {
        var selectedType = this.value; // Get the selected meditation type
        var formattedType = selectedType.replace(/-/g, ' '); // Replace hyphens with spaces for better readability

        // Update the search box and append "meditation"
        inputElement.value = formattedType + " meditation";

        // If needed, trigger a search or handle the updated input as required
        // This part depends on how the search functionality is implemented
        // For example, if you need to submit a form or call a search function, do it here
        document.getElementById('searchForm').submit(); // Uncomment and adjust if applicable
      });
    }
  }, 5000);
};
