// Write your code here

import {useState} from 'react'

import {
  Container,
  Heading,
  Image,
  DescriptionContainer,
  Paragraph,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedDescription = reactHooksDescription.slice(0, 170)

  const [readMore, setReadMore] = useState('false')

  const onReadMore = () => {
    setReadMore(prevState => !prevState)
  }

  const buttonText = readMore ? 'More' : 'Less'
  console.log(readMore)

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {readMore ? (
        <DescriptionContainer>
          <Paragraph>{slicedDescription}</Paragraph>
        </DescriptionContainer>
      ) : (
        <DescriptionContainer>
          <Paragraph>{reactHooksDescription}</Paragraph>
        </DescriptionContainer>
      )}

      <ReadButton type="button" onClick={onReadMore}>
        Read {buttonText}
      </ReadButton>
    </Container>
  )
}

export default ReadMore
