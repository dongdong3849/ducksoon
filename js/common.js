// 모바일 버전에서 토글 클릭 시 사이드메뉴바가 나오는 이벤트

// main-toggle 클릭 시 사이드바를 여는 이벤트
document.getElementById('main-toggle').addEventListener('click', function() {
    document.getElementById('siderBar').classList.add('active');
});

// side-toggle 클릭 시 사이드바를 닫는 이벤트
document.getElementById('side-toggle').addEventListener('click', function() {
    document.getElementById('siderBar').classList.remove('active');
});