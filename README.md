# 🌐 SSG Review — учебный проект

🔗 **Live-сайт:** https://polina222232.github.io/ssg-review/  
🔗 **Репозиторий:** https://github.com/polina222232/ssg-review

## 👤 Автор

**Буренкова Полина Алексеевна**  
📧 Email: [polinaburenkova01@gmail.com](mailto:polinaburenkova01@gmail.com)  
💬 Telegram: [@Polina_Burenkova](https://t.me/Polina_Burenkova)  
🐙 GitHub: [polina222232](https://github.com/polina222232)

## 📚 Тема проекта

Фреймворки для статических сайтов: **Gatsby**, **Hugo**, **Jekyll**.

## 🛠️ Стек технологий

| Технология | Назначение |
|---|---|
| **HTML5** | Семантическая валидная разметка |
| **CSS3** | Grid, Flexbox, Custom Properties |
| **Shoelace** | UI-фреймворк (Web Components) |
| **JavaScript ES6+** | Интерактив: drawer, modal, toast, копирование |
| **Prism.js** | Подсветка синтаксиса кода |
| **БЭМ** | Методология именования классов |

## 🧩 Раздел Shoelace

В проекте используется **Shoelace 2.15.0** — современный UI-фреймворк на Web Components, работающий во всех актуальных браузерах (Chrome, Firefox, Safari).

### Подключение

```html
<!-- Тема (light) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/themes/light.css">

<!-- Автозагрузчик компонентов -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/shoelace-autoloader.js"></script>
```

### Используемые компоненты

| Компонент | Где применяется |
|---|---|
| `sl-icon`, `sl-icon-button` | Логотип, бургер-меню, соцсети |
| `sl-button` | Все кнопки навигации и действий |
| `sl-card` | Карточки контента и сайдбар |
| `sl-drawer` | Мобильное бургер-меню |
| `sl-dialog` | Модальное окно на `comparison.html` |
| `sl-alert` | Уведомления и подсказки |
| `sl-breadcrumb`, `sl-breadcrumb-item` | Хлебные крошки на всех страницах |
| `sl-tab-group`, `sl-tab`, `sl-tab-panel` | Табы в `comparison.html` и `code.html` |
| `sl-carousel`, `sl-carousel-item` | Карусель логотипов на главной |
| `sl-input`, `sl-textarea`, `sl-select`, `sl-option`, `sl-checkbox` | Формы |
| `sl-details` | FAQ-аккордеон |
| `sl-tag` | Теги технологий |
| `sl-badge` | Бейджи со значениями |
| `sl-progress-bar` | Визуализация скорости сборки |
| `sl-rating` | Оценки в кейсах |
| `sl-avatar` | Аватар автора |
| `sl-divider` | Разделители |
| `sl-tooltip` | Подсказки на иконках |
| `sl-spinner` | Индикатор загрузки (при необходимости) |

### Кастомизация

Все переопределения стилей Shoelace вынесены в отдельный файл `css/shoelace-override.css` с использованием CSS Custom Properties (`--sl-color-primary-600`, `--sl-border-radius-medium` и др.) и `::part()`.

Пример:

```css
:root {
  --sl-color-primary-600: #4f46e5;
  --sl-border-radius-medium: 12px;
}

sl-button::part(base) {
  border-radius: var(--radius);
  font-weight: 500;
}
```

## 📄 Структура страниц

| # | Файл | Описание |
|---|------|----------|
| 1 | `index.html` | Главная |
| 2 | `gatsby.html` | Обзор Gatsby |
| 3 | `hugo.html` | Обзор Hugo |
| 4 | `jekyll.html` | Обзор Jekyll |
| 5 | `comparison.html` | Сравнительная таблица |
| 6 | `code.html` | Примеры кода |
| 7 | `usage.html` | Кейсы использования |
| 8 | `video.html` | Видео-обзоры |
| 9 | `faq.html` | FAQ |
| 10 | `contacts.html` | Контакты + форма |
| 11 | `about.html` | О проекте |

## 🖥️ Запуск проекта

### Локально

```bash
git clone https://github.com/polina222232/ssg-review.git
cd ssg-review
npx serve .
```

Открыть в браузере: `http://localhost:3000`.

### Альтернативы

```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000

# VS Code
# Расширение Live Server → Open with Live Server
```

## 📦 Минификация CSS и JS

Для продакшена рекомендуется минифицировать кастомные CSS и JS. Файлы фреймворка (Shoelace, Prism.js) уже поставляются минифицированными через CDN.

### 1. Установка инструментов

```bash
npm install --save-dev clean-css-cli terser
```

### 2. Добавление скриптов в `package.json`

```json
{
  "name": "ssg-review",
  "version": "1.0.0",
  "scripts": {
    "minify:css": "cleancss -o css/style.min.css css/style.css && cleancss -o css/prism.min.css css/prism.css && cleancss -o css/shoelace-override.min.css css/shoelace-override.css",
    "minify:js": "terser js/main.js -c -m -o js/main.min.js",
    "minify": "npm run minify:css && npm run minify:js"
  },
  "devDependencies": {
    "clean-css-cli": "^5.6.0",
    "terser": "^5.27.0"
  }
}
```

### 3. Запуск минификации

```bash
npm run minify
```

Будут созданы:

- `css/style.min.css`
- `css/prism.min.css`
- `css/shoelace-override.min.css`
- `js/main.min.js`

### 4. Подключение минифицированных файлов

В HTML заменить:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/prism.css">
<link rel="stylesheet" href="css/shoelace-override.css">
...
<script src="js/main.js" type="module"></script>
```

на:

```html
<link rel="stylesheet" href="css/style.min.css">
<link rel="stylesheet" href="css/prism.min.css">
<link rel="stylesheet" href="css/shoelace-override.min.css">
...
<script src="js/main.min.js" type="module"></script>
```

### 5. Оптимизация изображений

```bash
# Установка cwebp
# Windows: https://developers.google.com/speed/webp/download
# macOS: brew install webp
# Linux: sudo apt install webp

# Конвертация в WebP в трёх размерах
cwebp -q 80 img/source.png -o img/gatsby-1200.webp
cwebp -q 80 -resize 800 0 img/source.png -o img/gatsby-800.webp
cwebp -q 80 -resize 400 0 img/source.png -o img/gatsby-400.webp
```

Проверка оптимизации: [PageSpeed Insights](https://pagespeed.web.dev/).

## 📐 Адаптивность

| Устройство | Ширина | Что меняется |
|---|---|---|
| Mobile | < 768px | Бургер-меню, сайдбар внизу, карточки в 1 колонку |
| Tablet | ≥ 768px | Горизонтальное меню, 2 колонки карточек |
| Desktop | ≥ 992px | 2-колоночный layout (main + aside), 3 колонки |

## 🖼️ Изображения

- Формат: **WebP** (JPEG/PNG как fallback)
- Responsive: `srcset` + `sizes`
- Три размера: **400w**, **800w**, **1200w**
- Все изображения имеют `alt` и `title`

## ✅ Валидность

- HTML: [validator.w3.org](https://validator.w3.org/)
- CSS: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

## 📁 Структура репозитория

```
ssg-review/
├── index.html
├── gatsby.html
├── hugo.html
├── jekyll.html
├── comparison.html
├── code.html
├── usage.html
├── video.html
├── faq.html
├── contacts.html
├── about.html
├── css/
│   ├── style.css
│   ├── prism.css
│   └── shoelace-override.css
├── js/
│   └── main.js
├── img/
│   ├── gatsby-400.webp
│   ├── gatsby-800.webp
│   ├── gatsby-1200.webp
│   ├── hugo-400.webp
│   ├── hugo-800.webp
│   ├── hugo-1200.webp
│   ├── jekyll-400.webp
│   ├── jekyll-800.webp
│   ├── jekyll-1200.webp
│   └── avatar.webp
├── README.md
└── read.md
```

## 📜 Лицензия

Учебный проект. Все права принадлежат автору — **Буренковой Полине Алексеевне**.
