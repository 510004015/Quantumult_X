// 获取页面的 HTML 内容
const originalHtml = $response.body;

// 创建一个临时的 DOM 节点，用于操作和修改
const tempDiv = document.createElement('div');
tempDiv.innerHTML = originalHtml;

// 获取所有的 <script> 标签
const scriptTags = tempDiv.querySelectorAll('script');

// 遍历每个 <script> 标签
scriptTags.forEach(scriptTag => {
    const scriptContent = scriptTag.textContent;
    
    // 使用正则表达式检查是否包含 player.preroll() 调用
    if (scriptContent.includes('player.preroll()')) {
        // 移除包含 player.preroll() 的 <script> 标签
        scriptTag.remove();
    }
});

// 返回修改后的 HTML
const modifiedHtml = tempDiv.innerHTML;

$done({modifiedHtml});
