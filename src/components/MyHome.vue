<template>
  <div class="home">
    <!-- Header -->
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <div class="header-right">
        <a href="#">
          <img class="icon" src="@/assets/button1.png" alt="會員登入" />
        </a>
        <a href="#">
          <img class="icon" src="@/assets/button2.png" alt="購物車" />
        </a>
        <div class="menu-icon" @click="toggleMenu">&#9776;</div>
      </div>
    </header>

    <!-- 漢堡選單 -->
    <nav v-if="isMenuOpen" class="main-nav">
      <ul>
        <li><a href="#">首頁</a></li>
        <li><a href="#">購物指南</a></li>
        <li class="dropdown">
          <a href="#" @click.prevent="toggleDropdown">9月品項 ▼</a>
          <ul v-if="isDropdownOpen" class="dropdown-content">
            <li><a href="#">鮮奶油蛋糕</a></li>
            <li><a href="#">巴斯克乳酪蛋糕</a></li>
            <li><a href="#">其他甜點</a></li>
          </ul>
        </li>
        <li><a href="#">關於我們</a></li>
        <li><a href="#">常見問題</a></li>
        <li><a href="#">聯絡我們</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false,
      images1: ["../assets/slide1.jpg", "../assets/slide2.jpg"],
      images2: ["../assets/slide3.jpg", "../assets/slide4.jpg"],
      currentIndex1: 0,
      currentIndex2: 0,
    };
  },
  computed: {
    currentImage1() {
      return this.images1[this.currentIndex1];
    },
    currentImage2() {
      return this.images2[this.currentIndex2];
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      console.log("Dropdown toggled:", this.isDropdownOpen); // 调试输出
    },
    startCarousel() {
      setInterval(() => {
        this.currentIndex1 = (this.currentIndex1 + 1) % this.images1.length;
        this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
      }, 7000); // 7 秒自動輪播
    },
  },
  mounted() {
    this.startCarousel();
  },
};
</script>

<style scoped>
/* Dropdown styling */
.dropdown {
  position: relative;
}

.dropdown-content {
  display: none; /* 默认隐藏 */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content li {
  list-style-type: none;
  padding: 8px 16px;
}

.dropdown-content li a {
  text-decoration: none;
  color: black;
}

.dropdown-content li a:hover {
  background-color: #ddd;
}

/* 只有在 Vue 的 v-if 为 true 时显示下拉内容 */
.dropdown-content {
  display: block;
}

/* General styling */
.home {
  font-family: Arial, sans-serif;
}

/* Header styling */
header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  background-color: #f8f8f8;
}

.logo {
  flex-grow: 1;
  text-align: center;
}

.logo img {
  height: 50px;
}

.header-right {
  position: absolute;
  right: 3rem; /* 距離右邊3rem */
  display: flex;
  align-items: center;
}

.icon {
  height: 24px; /* 會員登入和購物車的大小 */
  margin-left: 10px;
}

.menu-icon {
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
}

/* Hamburger menu styling */
.main-nav {
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 60px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 200px;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.main-nav li {
  padding: 10px;
}

/* Carousel styling */
.carousel-section {
  margin: 20px 0;
  text-align: center;
}

.carousel img {
  width: 100%;
  max-width: 600px;
  height: auto;
}

/* Footer styling */
.footer-columns {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
}

.footer-columns div {
  width: 33%;
  text-align: center;
}
</style>
