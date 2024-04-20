window.onload = function() {
  var inputElement = document.getElementById('search-input');
  var suggestionElement = document.getElementById('autocomplete-suggestion');
  var meditationSuffix = " meditation";

  inputElement.addEventListener('input', function() {
    updateSuggestion();
  });

  // 更新建议文本
  function updateSuggestion() {
    var text = inputElement.value;
    // 如果已输入包括了“meditation”，就不显示建议
    if (text.toLowerCase().includes("meditation")) {
      suggestionElement.textContent = '';
    } else {
      suggestionElement.textContent = meditationSuffix;
    }
  }

  // 处理用户点击建议，将建议添加到输入
  suggestionElement.addEventListener('click', function() {
    if (suggestionElement.textContent) {
      inputElement.value += suggestionElement.textContent;
      suggestionElement.textContent = '';
    }
  });
};
