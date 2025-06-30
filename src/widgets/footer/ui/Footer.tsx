import { GitHubIcon, TgIcon, VkIcon, YaMusicIcon } from '@/shared/icons'
import { FooterContainer, StyledLink } from './Footer.styled'

type FooterProps = {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  return (
    <FooterContainer className={className}>
      <StyledLink
        $column="1"
        $row="1"
        href="https://t.me/hakolr"
      >
        <TgIcon />
      </StyledLink>
      <StyledLink
        $column="2"
        $row="1"
        href="https://m.vk.com/feed"
      >
        <VkIcon />
      </StyledLink>
      <StyledLink
        $column="3"
        $row="1"
        href="https://github.com/Maksa9905"
      >
        <GitHubIcon />
      </StyledLink>
      <StyledLink
        $column="1 / 4"
        $row="2"
        href="https://music.yandex.ru/users/kuznetsov_dmitriy"
      >
        <YaMusicIcon />
      </StyledLink>
    </FooterContainer>
  )
}

export default Footer
