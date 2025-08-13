// 이미지 목록 정의
const galleryImages = [
    { src: '백도진 에셋/accidental_encounter.jpg', title: '우연한 만남' },
    { src: '백도진 에셋/alleyway.jpg', title: '뒷골목' },
    { src: '백도진 에셋/annoyance.jpg', title: '짜증' },
    { src: '백도진 에셋/approaching_with_arousal.jpg', title: '욕망과 함께 다가오는' },
    { src: '백도진 에셋/approaching_with_glass.jpg', title: '잔을 들고 다가오는' },
    { src: '백도진 에셋/approaching_with_smile.jpg', title: '미소를 띠며 다가오는' },
    { src: '백도진 에셋/bored_gaze.jpg', title: '권태로운 시선' },
    { src: '백도진 에셋/changing_clothes.jpg', title: '옷 갈아입기' },
    { src: '백도진 에셋/cleaning_gun.jpg', title: '총 손질' },
    { src: '백도진 에셋/cooking.jpg', title: '요리' },
    { src: '백도진 에셋/covered_in_blood.jpg', title: '피로 물든' },
    { src: '백도진 에셋/deep_sleep_on_sofa.jpg', title: '소파에서 깊은 잠' },
    { src: '백도진 에셋/drinking_whiskey.jpg', title: '위스키' },
    { src: '백도진 에셋/drowsy_expression.jpg', title: '나른한 표정' },
    { src: '백도진 에셋/eating.jpg', title: '식사' },
    { src: '백도진 에셋/expression_of_intense_pleasure.jpg', title: '격렬한 쾌감의 표정' },
    { src: '백도진 에셋/falling_in_love_expression.jpg', title: '사랑에 빠진 표정' },
    { src: '백도진 에셋/fighting.jpg', title: '싸움' },
    { src: '백도진 에셋/fingering.jpg', title: '손가락질' },
    { src: '백도진 에셋/gazing.jpg', title: '응시' },
    { src: '백도진 에셋/genuine_smile.jpg', title: '진심어린 미소' },
    { src: '백도진 에셋/grabbing_knife.jpg', title: '칼을 쥐는' },
    { src: '백도진 에셋/grabbing_wrist_forcefully.jpg', title: '강제로 손목을 붙잡는' },
    { src: '백도진 에셋/indifference.jpg', title: '무관심' },
    { src: '백도진 에셋/jealousy.jpg', title: '질투' },
    { src: '백도진 에셋/knife_fight.jpg', title: '칼싸움' },
    { src: '백도진 에셋/lying_and_staring.jpg', title: '누워서 응시' },
    { src: '백도진 에셋/lying_on_sofa_staring.jpg', title: '소파에 누워 응시' },
    { src: '백도진 에셋/masturbation_ejaculation.jpg', title: '자위 절정' },
    { src: '백도진 에셋/masturbation.jpg', title: '자위' },
    { src: '백도진 에셋/missionary_sex_penetration.jpg', title: '정상위 삽입' },
    { src: '백도진 에셋/murderous_gaze.jpg', title: '살기 어린 시선' },
    { src: '백도진 에셋/napping_on_sofa.jpg', title: '소파에서 낮잠' },
    { src: '백도진 에셋/oral_sex.jpg', title: '오럴' },
    { src: '백도진 에셋/orgasm.jpg', title: '절정' },
    { src: '백도진 에셋/punching.jpg', title: '주먹질' },
    { src: '백도진 에셋/rage.jpg', title: '분노' },
    { src: '백도진 에셋/sadness.jpg', title: '슬픔' },
    { src: '백도진 에셋/scars_on_body.jpg', title: '몸의 흉터' },
    { src: '백도진 에셋/scoffing.jpg', title: '비웃음' },
    { src: '백도진 에셋/seriousness.jpg', title: '진지함' },
    { src: '백도진 에셋/shirt_bloodstained.jpg', title: '피 묻은 셔츠' },
    { src: '백도진 에셋/shirtless_lean_on_sofa.jpg', title: '상의 탈의 소파에 기대기' },
    { src: '백도진 에셋/shooting_gun.jpg', title: '총 쏘기' },
    { src: '백도진 에셋/sleeping_on_bed.jpg', title: '침대에서 수면' },
    { src: '백도진 에셋/slightly_surprised_expression.jpg', title: '약간 놀란 표정' },
    { src: '백도진 에셋/smiling.jpg', title: '미소' },
    { src: '백도진 에셋/smoking_after_sex.jpg', title: '사후 흡연' },
    { src: '백도진 에셋/smoking_decadently.jpg', title: '퇴폐적 흡연' },
    { src: '백도진 에셋/smoking_while_looking_down.jpg', title: '고개 숙여 흡연' },
    { src: '백도진 에셋/standing_by_window.jpg', title: '창가에 서서' },
    { src: '백도진 에셋/standing_with_cup.jpg', title: '잔을 들고 서서' },
    { src: '백도진 에셋/sunset_waiting.jpg', title: '석양 기다리기' },
    { src: '백도진 에셋/taking_off_pants.jpg', title: '바지 벗기' },
    { src: '백도진 에셋/taking_off_shirt.jpg', title: '셔츠 벗기' },
    { src: '백도진 에셋/talking_expressionless.jpg', title: '무표정하게 대화' },
    { src: '백도진 에셋/talking_lazily.jpg', title: '나른하게 대화' },
    { src: '백도진 에셋/talking_while_eating.jpg', title: '식사하며 대화' },
    { src: '백도진 에셋/teasing.jpg', title: '놀리기' },
    { src: '백도진 에셋/tender_gaze.jpg', title: '부드러운 시선' },
    { src: '백도진 에셋/tracking_down.jpg', title: '추적' },
    { src: '백도진 에셋/tying_shoelaces.jpg', title: '신발끈 묶기' },
    { src: '백도진 에셋/unbuttoning_shirt.jpg', title: '셔츠 단추 풀기' },
    { src: '백도진 에셋/waiting_in_hallway.jpg', title: '복도에서 기다리기' },
    { src: '백도진 에셋/whiskey_and_thoughts.jpg', title: '위스키와 생각' },
    { src: '백도진 에셋/year 2024, year 2025, cinematic atmosphere, portrait shot, depth of field, maste s-3734406077.jpg', title: '백도진 포트레이트 1' },
    { src: '백도진 에셋/year 2024, year 2025, cinematic atmosphere, portrait shot, depth of field, maste s-4165049244.jpg', title: '백도진 포트레이트 2' }
];

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 음악 플레이어 초기화
    initMusicPlayer();
    
    // 네비게이션 초기화
    initNavigation();
    
    // 갤러리 초기화
    initGallery();
    
    // 모달 초기화
    initModal();
    
    // 스무스 스크롤 초기화
    initSmoothScroll();
});

// 음악 플레이어 기능
function initMusicPlayer() {
    const musicBtn = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;
    
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '<span class="music-icon">♪</span>';
        } else {
            bgMusic.play().catch(error => {
                console.log('음악 재생 실패:', error);
            });
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '<span class="music-icon">♫</span>';
        }
        isPlaying = !isPlaying;
    });
    
    // 음악 종료 시 버튼 상태 업데이트
    bgMusic.addEventListener('ended', function() {
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<span class="music-icon">♪</span>';
        isPlaying = false;
    });
}

// 네비게이션 기능
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // 모바일 메뉴 토글
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
        
        // 메뉴 항목 클릭 시 메뉴 닫기
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.textContent = '☰';
            });
        });
    }
    
    // 스크롤 시 네비게이션 하이라이트
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// 갤러리 초기화
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (galleryGrid) {
        // 갤러리 아이템 생성
        galleryImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.title}" loading="lazy">
                <div class="gallery-item-overlay">
                    <div class="gallery-item-title">${image.title}</div>
                </div>
            `;
            
            // 클릭 이벤트 추가
            galleryItem.addEventListener('click', function() {
                openModal(image.src, image.title);
            });
            
            galleryGrid.appendChild(galleryItem);
        });
    }
}

// 모달 기능
function initModal() {
    const modal = document.getElementById('imageModal');
    const modalClose = document.querySelector('.modal-close');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // 모달 바깥 클릭 시 닫기
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 모달 열기
function openModal(src, title) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalImage && modalCaption) {
        modal.style.display = 'block';
        modalImage.src = src;
        modalCaption.textContent = title;
        document.body.style.overflow = 'hidden';
    }
}

// 모달 닫기
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 스무스 스크롤
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.sticky-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 이미지 지연 로딩 최적화
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// 페이지 로드 애니메이션
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 섹션 페이드인 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
}); 