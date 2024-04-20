window.onload = function() {
    var checkExist = setInterval(function() {
      var inputElement = document.querySelector('input.gsc-input');
      if (inputElement) {
        clearInterval(checkExist);
        inputElement.placeholder = 'Search for meditation information';
  
        // 添加事件监听器来处理输入值的改变
        inputElement.addEventListener('input', function() {
          var currentValue = inputElement.value.trim();  // 取得当前输入，去除首尾空格
          var lowerCaseValue = currentValue.toLowerCase(); // 将输入值转换为小写，用于检查
          var meditationSuffix = " meditation";
          
          // 检查当前输入是否已经包含 "meditation"（不区分大小写）
          if (!lowerCaseValue.includes("meditation")) {
            // 在用户停止输入1秒后添加 "meditation"，如果仍然需要
            clearTimeout(inputElement.dataset.timeout);
            inputElement.dataset.timeout = setTimeout(function() {
              if (!inputElement.value.toLowerCase().includes("meditation")) {
                inputElement.value = currentValue + meditationSuffix;
              }
            }, 1000);
          }
        });
      }
    }, 100);
  };
  