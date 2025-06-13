// 折叠/展开步骤
function toggleStep(stepId) {
    const content = document.getElementById(stepId).querySelector('.step-content');
    const icon = document.getElementById(stepId).querySelector('.toggle-icon');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.textContent = '-';
    } else {
        content.style.display = 'none';
        icon.textContent = '+';
    }
}

// 打开图片模态框
function openModal(imgId) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    // 假设图片路径为：images/step1.png → 需与实际文件命名一致
    modalImg.src = `images/${imgId}.png`; 
    modal.style.display = 'block';

    // 添加点击模态框背景关闭的功能
    modal.onclick = function(event) {
        if (event.target == modal) { // 如果点击的是模态框背景，而不是图片本身
            closeModal();
        }
    };
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    // 移除事件监听器，避免重复添加或内存泄漏
    modal.onclick = null; 
}

// 监听ESC按键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});