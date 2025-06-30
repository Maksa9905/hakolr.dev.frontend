import { Section } from '@/shared/ui'
import { MusicSectionInfoTitle } from './MusicSection.styled'

const MusicSection = () => {
  return (
    <Section
      title="Музыка"
      flex={10}
    >
      <MusicSectionInfoTitle value="de4lt">
        соло-гитара <br /> бэк-вокалист
      </MusicSectionInfoTitle>
      <MusicSectionInfoTitle value="самочувствие">
        основная <br /> гитара
      </MusicSectionInfoTitle>
      <MusicSectionInfoTitle
        value="вызов завершён"
        label="вокалист и сонграйтер"
      />
    </Section>
  )
}

export default MusicSection
