const RETRY_RESPONSES = [
    '服务器繁忙，请稍后再试。',
    'The server is busy. Please try again later.'
];

new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE && node.matches('div.ds-markdown.ds-markdown--block')) {
                const response = node.querySelector('p')?.textContent;
                if (RETRY_RESPONSES.includes(response)) {
                    const retryButton = node.parentElement.querySelector('#重新生成')?.parentElement?.parentElement?.parentElement?.parentElement;
                    retryButton?.click?.();
                    console.info('[AutoRetry] Retrying...');
                }
            }
        });
    });
}).observe(document.body, { childList: true, subtree: true });