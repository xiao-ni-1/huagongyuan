/**
 * 轮播图功能脚本
 * 实现自动轮播、导航点切换等功能
 */

// 当DOM内容加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面中的轮播图元素
    const slides = document.querySelectorAll('.slide'); // 所有轮播项
    const dots = document.querySelectorAll('.slider-dot'); // 所有导航点
    let currentSlide = 0; // 当前显示的轮播图索引
    const slideInterval = 5000; // 轮播间隔时间：5秒切换一次
    let slideTimer; // 轮播定时器

    /**
     * 初始化轮播图功能
     * 设置初始状态并绑定事件
     */
    function initSlider() {
        // 设置第一张图片为激活状态
        slides[0].classList.add('active');
        dots[0].classList.add('active');
        
        // 启动自动轮播
        startSlideTimer();
        
        // 为导航点添加点击事件
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index); // 切换到点击的轮播图
                resetSlideTimer(); // 重置自动轮播计时器
            });
        });
    }

    /**
     * 切换到指定索引的轮播图
     * @param {number} index - 目标轮播图的索引
     */
    function goToSlide(index) {
        // 移除当前激活状态
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // 更新当前幻灯片索引
        currentSlide = index;
        
        // 如果索引超出范围，重置为第一张
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        // 如果索引小于0，设置为最后一张
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        
        // 添加新的激活状态
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    /**
     * 切换到下一张轮播图
     */
    function nextSlide() {
        goToSlide(currentSlide + 1); // 当前索引加1
    }

    /**
     * 启动自动轮播计时器
     */
    function startSlideTimer() {
        slideTimer = setInterval(nextSlide, slideInterval);
    }

    /**
     * 重置轮播计时器
     * 用于用户交互后重新开始计时
     */
    function resetSlideTimer() {
        clearInterval(slideTimer); // 清除当前定时器
        startSlideTimer(); // 重新启动自动轮播
    }

    // 初始化轮播图
    initSlider();
});