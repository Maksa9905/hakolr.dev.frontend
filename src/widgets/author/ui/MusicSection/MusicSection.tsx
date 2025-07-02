import S from './MusicSection.styled'

const MusicSection = () => {
  return (
    <S.Container title="Музыка">
      <S.MusicInfoTitle value="de4lt">
        соло-гитара <br /> бэк-вокалист
      </S.MusicInfoTitle>
      <S.MusicInfoTitle value="самочувствие">
        основная <br /> гитара
      </S.MusicInfoTitle>
      <S.MusicInfoTitle
        value="вызов завершён"
        label="вокалист и сонграйтер"
      />
    </S.Container>
  )
}

export default MusicSection
