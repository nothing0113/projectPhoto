document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.getElementById('slide-container');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');
    const survey = document.getElementById('survey');
    const closeSurvey = document.getElementById('close-survey');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenButton = document.getElementById('fullscreen-button');

    if (!slideContainer) {
        console.error("slide-container 요소를 찾을 수 없습니다.");
        return;
    }

    // 랜덤 이미지 배열
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
    // 랜덤 이미지 10개 선택
    const randomImages = imagePaths.sort(() => 0.5 - Math.random()).slice(0, 10);

    randomImages.forEach((path, index) => {
    const slideItem = document.createElement('div');
    slideItem.className = "flex flex-col items-center justify-center h-screen w-screen flex-shrink-0";

    if (index === randomImages.length - 1) { // 마지막 사진에만 설문지 버튼 추가
        slideItem.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full">
                <img src="${path}" alt="작품 ${index + 1}" 
                    class="max-w-[70%] max-h-[80%] object-contain custom-shadow mb-8 cursor-pointer data-index="${index}">
                <p class="text-xl font-bold text-black mt-8">작품명 ${index + 1}</p>
                <p id="metadata-${index}" class="text-sm text-gray-300 mt-2">메타데이터를 로드 중...</p>
                <button id="open-survey" class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                작품 투표하기
                </button>
            </div>
        `;
    } else {
        slideItem.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full">
                <img src="${path}" alt="작품 ${index + 1}" 
                    class="max-w-[70%] max-h-[80%] object-contain custom-shadow mb-8 cursor-pointer data-index="${index}">
                <p class="text-xl font-bold text-black mt-8">작품명 ${index + 1}</p>
                <p id="metadata-${index}" class="text-sm text-gray-300 mt-1">메타데이터를 로드 중...</p>
            </div>
        `;
    }

        slideContainer.appendChild(slideItem);
                // EXIF 데이터 읽기
    const img = slideItem.querySelector('img');
    img.onload = () => {
        EXIF.getData(img, function () {
            const metadata = `
                카메라: ${EXIF.getTag(this, 'Model') || '정보 없음'}<br>
                ISO: ${EXIF.getTag(this, 'ISOSpeedRatings') || '정보 없음'}<br>
                노출 시간: ${EXIF.getTag(this, 'ExposureTime') || '정보 없음'}<br>
                조리개 값: ${EXIF.getTag(this, 'FNumber') || '정보 없음'}
            `;
            document.getElementById(`metadata-${index}`).innerHTML = metadata;
        });
     };
    });

        // "작품 투표하기" 버튼 클릭 이벤트
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'open-survey') {
                survey.classList.remove('hidden'); // 설문지 모달 창 표시
            }
        });

        // 설문지 닫기 버튼
        closeSurvey.addEventListener('click', () => {
            survey.classList.add('hidden'); // 설문지 모달 창 닫기
        });

    // 클릭 이벤트: 이미지 확대
    slideContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                modalImage.src = e.target.src; // 클릭한 이미지의 소스를 모달에 적용
                modal.classList.remove('hidden'); // 모달 창 표시
            }
        });

        // 모달 닫기 버튼
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // 모달 창 외부 클릭 시 닫기
        modal.addEventListener('click', (e) => {
            if (e.target == modal) { // 클릭한 대상이 모달 배경일 때만 닫기
                modal.classList.add('hidden');
            }
        });



    // 전체 화면 버튼 클릭 이벤트
        fullscreenButton.addEventListener('click', () => {
            const docEl = document.documentElement;
            if (docEl.requestFullscreen) {
                docEl.requestFullscreen();
            } else if (docEl.webkitRequestFullscreen) { // Safari
                docEl.webkitRequestFullscreen();
            } else if (docEl.msRequestFullscreen) { // IE
                docEl.msRequestFullscreen();
            }
            fullscreenOverlay.classList.add('hidden'); // 오버레이 숨김
        });

        // ESC 키로 전체 화면 종료
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.fullscreenElement) {
                document.exitFullscreen();
            }
        });
    });

const slide = document.querySelector('.slide');
let isDragging = false;
let startX = 0;
let currentIndex = 0;

// 드래그 시작
slide.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    slide.style.transition = 'none';
});

// 드래그 중
slide.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const offset = -currentIndex * window.innerWidth + deltaX;
    slide.style.transform = `translateX(${offset}px)`;
});

// 드래그 종료
slide.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;

    const deltaX = e.clientX - startX;
    const threshold = 100; // 밀기 기준 거리

    if (deltaX > threshold && currentIndex > 0) {
        currentIndex--; // 이전 슬라이드로 이동
    } else if (deltaX < -threshold && currentIndex < slide.children.length - 1) {
        currentIndex++; // 다음 슬라이드로 이동
    }

    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(-${currentIndex * window.innerWidth}px)`;
});
    // 방향키 이벤트 추가
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--; // 왼쪽 화살표 키로 이전 슬라이드로 이동
        } else if (e.key === 'ArrowRight' && currentIndex < slide.children.length - 1) {
            currentIndex++; // 오른쪽 화살표 키로 다음 슬라이드로 이동
        }

        slide.style.transition = 'transform 0.5s ease-in-out';
        slide.style.transform = `translateX(-${currentIndex * window.innerWidth}px)`;
});

// 초기 슬라이드 설정
slide.style.transform = `translateX(0px)`;
