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
}

// 关闭模态框
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 监听ESC按键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});