import { PublicationContent } from '@/entities/publication'
import { Header } from '@/widgets/header'
import { PageContainer } from '@/widgets/page-container'

const PublicationPage = () => {
  const content = `
## Зачем нужны кастомные алерты?

Кастомные алерты позволяют заменить стандартные браузерные \`alert()\`, \`confirm()\` и \`prompt()\` на стильные, адаптивные модальные окна. В этой статье разберём несколько подходов к их реализации.

1. **Стилизация** — можно полностью контролировать внешний вид
2. **Адаптивность** — корректное отображение на мобильных устройствах
3. **Дополнительные функции** — анимации, иконки, кастомные кнопки
4. **Консистентность** — единый дизайн для всего проекта

## Варианты реализации

### 1. Чистый HTML/CSS/JS

Базовый пример структуры:

~~~html
<div class="custom-alert" id="customAlert">
  <div class="alert-content">
    <h3>Заголовок</h3>
    <p>Сообщение для пользователя</p>
    <div class="alert-buttons">
      <button id="alertOk">OK</button>
      <button id="alertCancel">Cancel</button>
    </div>
  </div>
</div>
~~~

Стилизация:

~~~css
.custom-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.alert-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
~~~

JavaScript логика:

~~~javascript
function showAlert(message, callback) {
  const alert = document.getElementById('customAlert');
  alert.querySelector('p').textContent = message;
  alert.style.display = 'flex';
  
  document.getElementById('alertOk').onclick = function() {
    alert.style.display = 'none';
    if (callback) callback(true);
  };
}
~~~

### 2. Использование библиотек

Популярные решения:
- **SweetAlert2** — одна из самых популярных библиотек
- **Toastify** — для toast-уведомлений
- **AlertifyJS** — лёгкая и настраиваемая

Пример с SweetAlert2:

~~~javascript
Swal.fire({
  title: 'Вы уверены?',
  text: "Это действие нельзя отменить!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Да, удалить!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Удалено!', 'Файл был удалён.', 'success');
  }
});
~~~

### 3. Фреймворковые решения

Для популярных фреймворков существуют свои реализации:

**React:**

~~~jsx
import { useState } from 'react';

function CustomAlert({ message, onConfirm, onCancel }) {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <p>{message}</p>
        <button onClick={onConfirm}>OK</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
~~~

**Vue:**

~~~html
<template>
  <div v-if="show" class="alert-container">
    <div class="alert">
      <slot></slot>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>
~~~

## Лучшие практики

1. **Доступность**:
   - Добавляйте ARIA-атрибуты (\`role="alert"\`, \`aria-live"\`)
   - Управляйте фокусом (переводите на модальное окно)

2. **Анимации**:
   - Плавное появление/исчезновение
   - CSS-анимации вместо JS для производительности

3. **Управление состоянием**:
   - Обрабатывайте все возможные сценарии
   - Не блокируйте основной поток выполнения

4. **Тестирование**:
   - Проверяйте на разных устройствах
   - Тестируйте с screen readers

## Заключение

Кастомные алерты значительно улучшают UX по сравнению с нативными решениями. Выбор реализации зависит от:
- Масштаба проекта (библиотека или своя реализация)
- Технологического стека
- Требований к дизайну и функциональности
`

  return (
    <>
      <Header
        title="Best Practice создания кастомных алертов"
        description="Поговорим о том, как создать кастомные алерты в системе"
      />
      <PageContainer>
        <PublicationContent content={content} />
      </PageContainer>
    </>
  )
}

export default PublicationPage
