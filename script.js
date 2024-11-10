// script.js
let index = 1; // 복제된 첫 번째 이미지를 시작 위치로 설정
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const slideCount = slideImages.length;
const slideWidth = 400; // 슬라이드 이미지의 너비
const intervalTime = 3000; // 슬라이드가 넘어가는 시간 간격 (밀리초)

// 초기 위치 설정 (첫 번째 슬라이드 위치로 이동)
slides.style.transform = `translateX(-${slideWidth * index}px)`;

function moveToNextSlide() {
    index++;
    slides.style.transition = "transform 0.8s ease"; // 이동 속도 조정
    slides.style.transform = `translateX(-${slideWidth * index}px)`;

    // 마지막 슬라이드에서 첫 슬라이드로 돌아가도록 처리
    slides.addEventListener("transitionend", () => {
        if (index === slideCount - 1) {
            index = 1; // 첫 번째 이미지로 돌아감
            slides.style.transition = "none"; // 애니메이션을 잠시 비활성화
            slides.style.transform = `translateX(-${slideWidth * index}px)`; // 첫 번째 슬라이드로 이동
            setTimeout(() => {
                slides.style.transition = "transform 0.8s ease"; // 애니메이션 다시 활성화
            }, 50); // 짧은 지연 시간 후에 애니메이션 활성화
        }
    });
}

// 일정 시간마다 moveToNextSlide 함수 호출
setInterval(moveToNextSlide, intervalTime);
