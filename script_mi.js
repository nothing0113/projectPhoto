const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const imagePaths = [
    './images/DSCF1395.jpg','./images/DSCF1399.jpg','./images/DSCF1400.jpg',
    './images/DSCF1411.jpg','./images/DSCF1420.jpg','./images/DSCF1476.jpg',
    './images/DSCF1772.jpg','./images/DSCF1773.jpg','./images/DSCF1777.jpg',
    './images/DSCF1778.jpg','./images/DSCF1779.jpg','./images/DSCF1780.jpg',
    './images/DSCF1781.jpg','./images/DSCF1782.jpg','./images/DSCF1783.jpg',
    './images/DSCF1784.jpg','./images/DSCF1785.jpg','./images/DSCF1786.jpg',
    './images/DSCF1787.jpg','./images/DSCF1788.jpg','./images/DSCF1788.jpg',
    './images/DSCF1789.jpg','./images/DSCF1790.jpg','./images/DSCF1791.jpg',
    './images/DSCF1792.jpg','./images/DSCF1793.jpg','./images/DSCF1794.jpg',
    './images/DSCF1795.jpg','./images/DSCF1797.jpg','./images/DSCF1799.jpg',
    './images/DSCF1800.jpg','./images/DSCF1801.jpg','./images/DSCF1803.jpg',
    './images/DSCF1804.jpg','./images/DSCF1805.jpg','./images/DSCF1806.jpg',
    './images/DSCF1807.jpg','./images/DSCF1808.jpg','./images/DSCF1809.jpg',
    './images/DSCF1810.jpg','./images/DSCF1811.jpg','./images/DSCF1812.jpg',
    './images/DSCF1813.jpg','./images/DSCF1814.jpg','./images/DSCF1815.jpg',
    './images/DSCF1819.jpg','./images/DSCF1820.jpg','./images/DSCF1821.jpg',
    './images/DSCF1822.jpg','./images/DSCF1823.jpg','./images/DSCF1824.jpg',
    './images/DSCF1825.jpg','./images/DSCF1826.jpg','./images/DSCF1827.jpg',
    './images/DSCF1828.jpg','./images/DSCF1829.jpg','./images/DSCF1830.jpg',
    './images/DSCF1831.jpg','./images/DSCF1832.jpg','./images/DSCF1833.jpg',
    './images/DSCF1834.jpg','./images/DSCF1835.jpg','./images/DSCF1836.jpg',
    './images/DSCF1837.jpg','./images/DSCF1838.jpg','./images/DSCF1839.jpg',
    './images/DSCF1840.jpg','./images/DSCF1841.jpg','./images/DSCF1842.jpg',
    './images/DSCF1843.jpg','./images/DSCF1844.jpg','./images/DSCF1845.jpg',
    './images/DSCF1846.jpg','./images/DSCF1847.jpg','./images/DSCF1848.jpg',
    './images/DSCF1849.jpg','./images/DSCF1850.jpg','./images/DSCF1851.jpg',
    './images/DSCF1852.jpg','./images/DSCF1853.jpg','./images/DSCF1854.jpg',
    './images/DSCF1855.jpg','./images/DSCF1856.jpg','./images/DSCF1857.jpg',
    './images/DSCF1858.jpg','./images/DSCF1859.jpg','./images/DSCF1860.jpg'
];



// 메뉴 버튼 클릭 이벤트 설정
menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden'); // 'hidden' 클래스를 추가/제거하여 메뉴 표시/숨김
});

// 페이지 아무 곳이나 클릭 시 메뉴 닫기
document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden'); // 메뉴 숨김
    }
});

window.onload = generateRandomImages;

function generateRandomImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // 기존 내용을 초기화

    // 랜덤으로 이미지 배열을 섞음
    const shuffledImages = imagePaths.sort(() => 0.5 - Math.random());

    // 섞인 이미지 배열에서 첫 8개 이미지를 갤러리에 추가
    shuffledImages.slice(0, 8).forEach((path, index) => {
        const imageCard = document.createElement('div');
        imageCard.className = 'p-2';

        imageCard.innerHTML = `
        <div class="aspect-square overflow-hidden group">
            <a href="gallery.html">
                <img src="${path}" loading="lazy" alt="Random Image ${index + 1}" 
                    class="object-cover w-full h-full group-hover:opacity-75 transition duration-300">
            </a>
        </div>
        <p class="mt-2 text-left font-semibold">전시회 ${index + 1}</p>
    `;
    

        gallery.appendChild(imageCard);
    });
}

const loginContainer = document.getElementById("login-container");
const loginText = document.getElementById("login-text");

loginContainer.addEventListener("click", () => {
    // 로그인 메시지 업데이트
    loginContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A10.943 10.943 0 0112 15c2.326 0 4.468.69 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0zM12 3c4.418 0 8 3.582 8 8a8 8 0 01-16 0c0-4.418 3.582-8 8-8z" />
        </svg>
        <span>안녕하세요 <span class="text-blue-400">박성완</span> 작가님</span>
    `;
});
