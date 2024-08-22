//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) { //min~max 범위
    //toFixed()를 통해 반환된 문자 데이터를,
    //parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingCircle(item, delayAfter, size) {
    gsap.to(
        item, //선택자
        random(1.5, 2.5), //1.5~2.5초 사이의 랜덤한 애니메이션 동작 시간
        {
            delay: random(0, delayAfter), //몇초 뒤에 애니메이션을 실행, 지연 시간 설정
            y: size, //transform: translateY(수치)와 같음. 수직으로 움직이는 크기
            repeat: -1, //몇 번 반복하는지를 설정, -1은 무한 반복.
            yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생-위아래 움직임
            ease: Power1.easeInOut //easing 함수 적용
        }
    );
}

// ========================카테고리 드래그====================================


const scrollContainer = document.querySelector('.goodsGroup-scroll');
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조정
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// ===================카테고리 펼치고, 닫기====================================
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const scrollContainerForUX = document.querySelector('.goodsGroup-scroll');

    // 초기 상태 설정
    function updateLayout() {
        if (window.innerWidth > 1280) {
            // 화면 너비가 1281px 이상일 때
            scrollContainerForUX.style.height = 'auto'; // 항상 펼쳐진 상태
            scrollContainerForUX.style.overflowX = 'auto'; // 스크롤바 보이기
            toggleBtn.style.display = 'none'; // 버튼 숨기기
        } else {
            // 화면 너비가 1280px 이하일 때
            scrollContainerForUX.style.height = '0'; // 초기 숨김 상태
            scrollContainerForUX.style.overflowX = 'hidden'; // 스크롤바 숨기기
            toggleBtn.style.display = 'block'; // 버튼 보이기
            toggleBtn.classList.add('closed'); // 버튼에 'closed' 클래스 추가
            toggleBtn.classList.remove('open'); // 'open' 클래스 제거
        }
    }

    // 초기 상태 설정
    updateLayout();

    // 윈도우 리사이즈 시 레이아웃 업데이트
    window.addEventListener('resize', updateLayout);

    if (window.innerWidth <= 1280) {
        let isExpanded = false; // 기본 상태는 접혀 있는 상태

        toggleBtn.addEventListener('click', () => {
            if (isExpanded) {
                // 접기
                scrollContainerForUX.style.height = '0';
                scrollContainerForUX.style.overflowX = 'hidden'; // 스크롤바 숨기기
                toggleBtn.textContent = '펼쳐서 보기';
                toggleBtn.classList.remove('open');
                toggleBtn.classList.add('closed');
            } else {
                // 펼치기
                scrollContainerForUX.style.height = '100%'; // 필요에 따라 높이를 조정하세요
                scrollContainerForUX.style.overflowX = 'auto'; // 스크롤바 보이기
                toggleBtn.textContent = '닫기';
                toggleBtn.classList.remove('closed');
                toggleBtn.classList.add('open');
            }
            isExpanded = !isExpanded;
        });
    }
});



// ======================= 수량 =============================

// 수량 증가 함수
function increase(event, button) {
    event.preventDefault(); // 버튼 클릭 시 기본 동작 방지
    const quantityInput = button.parentElement.querySelector('#quantity');
    let currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue)) {
        quantityInput.value = currentValue + 1;
    }
}

// 수량 감소 함수
function decrease(event, button) {
    event.preventDefault(); // 버튼 클릭 시 기본 동작 방지
    const quantityInput = button.parentElement.querySelector('#quantity');
    let currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue) && currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const box1 = document.querySelector('.clist');
    const box2 = document.querySelector('.clHeader');


    if (box1) {
        const box1Width = box1.offsetWidth;

        if (box2) {
            box2.style.width = `${box1Width}px`;
        }

    }
});

// ======================선택삭제============================

function deleteSelectedItems() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const item = checkbox.closest('.cBox');
            item.remove();
        }
    });
}


floatingCircle('.pI1', 0.5, 25);
floatingCircle('.pI2', 1, 20);
floatingCircle('.pI3', 1.5, 10);
