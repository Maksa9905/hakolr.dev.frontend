'use client'

import { InfoTitle, Section } from '@/shared/ui'
import { DeveloperInfo, SkillsTypography } from './DeveloperSection.styled'

const DeveloperSection = () => {
  return (
    <Section
      title="Разработка"
      flex={7.65}
    >
      <DeveloperInfo>
        <InfoTitle
          value="1 год"
          label="коммерческого опыта во фронте"
        />
        <InfoTitle
          value="1.5 года"
          label="опыта во фронте вцелом"
        />
      </DeveloperInfo>
      <SkillsTypography>
        react · react native · next · typescript · vite · effector · farfetched
        · redux · rtk query · styled-components · mui · tailwind · vitest ·
        testing library
      </SkillsTypography>
    </Section>
  )
}

export default DeveloperSection
