// 定义一个回调函数，用于在搜索框中添加 "meditation" 关键字
function addMeditationTerm(query) {
  // 检查输入中是否已包含 "meditation"（不区分大小写）
  if (!query.toLowerCase().includes("meditation")) {
    return query + " meditation";
  }
  return query;
}

// 等待 Google CSE 脚本加载完毕
window.__gcse = {
  parsetags: 'explicit',
  callback: function() {
    var searchBoxElement = document.querySelector('input.gsc-input');
    var typeSelect = document.getElementById('meditation-type');
    
    // 当用户在下拉菜单中选择一个选项时，修改搜索框的内容
    typeSelect.addEventListener('change', function() {
      var typeValue = typeSelect.value;
      var typeText = typeSelect.options[typeSelect.selectedIndex].text;
      searchBoxElement.value = addMeditationTerm(typeText);
    });

    if (searchBoxElement) {
      // 当用户触发搜索时（例如，按下 Enter 键），修改查询
      searchBoxElement.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) { // Enter 键被按下
          var modifiedQuery = addMeditationTerm(searchBoxElement.value);
          searchBoxElement.value = modifiedQuery;
        }
      });
    }
  }
};

// 加载 Google CSE 脚本
(function() {
  var cx = '664e348dc06344073'; // 你的 Google CSE ID
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

// 这里不需要 DOMContentLoaded 因为 __gcse.callback 会在 CSE 加载完成后调用
