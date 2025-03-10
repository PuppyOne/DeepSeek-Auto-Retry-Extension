const RETRY_RESPONSES = [
    '服务器繁忙，请稍后再试。',
    'The server is busy. Please try again later.'
];
const CONTINUE_RESPONSES = [
    '继续生成',
    'Continue'
];

new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.matches('div.ds-markdown.ds-markdown--block')) {
                    const response = node.querySelector('p')?.textContent;
                    if (RETRY_RESPONSES.includes(response)) {
                        const retryButton = node.parentElement.querySelector('#重新生成')?.parentElement?.parentElement?.parentElement?.parentElement;
                        retryButton?.click?.();
                        console.info('[AutoRetry] Retrying...');
                    }
                } else if (node.matches('div.ds-flex')) {
                    const continueButton = node.querySelector('div.ds-button');
                    if (CONTINUE_RESPONSES.includes(continueButton?.innerText)) {
                        continueButton.click();
                        console.info('[AutoRetry] Continue...');
                    }
                }
            }
        });
    });
}).observe(document.body, { childList: true, subtree: true });