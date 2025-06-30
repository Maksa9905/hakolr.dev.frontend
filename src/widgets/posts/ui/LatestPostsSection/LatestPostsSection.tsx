import LatestPostItem from './LatestPostItem'
import { LatestPostsSectionContainer } from './LatestPostsSection.styled'

const LatestPostsSection = () => {
  return (
    <LatestPostsSectionContainer title="Свежее">
      <LatestPostItem
        title="Best Practice создания кастомных алертов"
        paragraph="Пару дней назад я делал задачу по созданию кастомных алертов для мобильного приложения. Сначала я подумал, что это будет простой компонент, но оказалось, что это было не так. "
        datetime="2025-06-29T12:00:00"
      />
      <LatestPostItem
        title="Обновил MUI на легаси проекте - треснуло ебло"
        paragraph="При попытке обновить mui на ОМ произошла некоторая оказия, так сказать, забавный курьез. Лицо, как спелый арбуз в жаркий день, треснуло поплам"
        datetime="2025-06-29T12:00:00"
      />
      <LatestPostItem
        title="Не сладка жизнь на проектах ритейла"
        paragraph="Если вы думаете, что работа фронт ограничивается созданием кнопок и формочек, то вы правильно думаете. Но если вы думаете, что это все, то вы ошибаетесь. "
        datetime="2025-06-29T12:00:00"
      />
    </LatestPostsSectionContainer>
  )
}

export default LatestPostsSection
