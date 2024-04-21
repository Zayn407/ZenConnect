window.onload = function() {
  var checkExist = setInterval(function() {
    var inputElement = document.querySelector('input.gsc-input');
    if (inputElement) {
      clearInterval(checkExist);
      inputElement.placeholder = '                                         Search for meditation information';

      // 添加事件监听器来处理输入值的改变
      inputElement.addEventListener('input', function() {
        var currentValue = inputElement.value.toLowerCase();  // 转换为小写进行检查
        var meditationSuffix = " meditation";
        // 检查当前输入是否已经包含 "meditation"（不区分大小写）
        if (!currentValue.includes("meditation")) {
          // 如果当前有输入，且没有包含 "meditation"，则添加
          if (currentValue.trim()) {
            // 使用.trim()处理输入前后的空格，并添加 " meditation"
            inputElement.value = currentValue.trim() + meditationSuffix;
          }
        }
      });
    }
  }, 1000);
};
