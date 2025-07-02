'use client'

import { InfoTitle } from '@/shared/ui'
import S from './DeveloperSection.styled'

const DeveloperSection = () => {
  return (
    <S.Container title="Разработка">
      <S.DeveloperInfo>
        <InfoTitle
          value="1 год"
          label="коммерческого опыта во фронте"
        />
        <InfoTitle
          value="1.5 года"
          label="опыта во фронте вцелом"
        />
      </S.DeveloperInfo>
      <S.SkillsTypography>
        react · react native · next · typescript · vite · effector · farfetched
        · redux · rtk query · styled-components · mui · tailwind · vitest ·
        testing library
      </S.SkillsTypography>
    </S.Container>
  )
}

export default DeveloperSection
