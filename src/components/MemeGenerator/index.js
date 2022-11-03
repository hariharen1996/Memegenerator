import {Component} from 'react'
import {
  BackgroundContainer,
  Heading,
  Input,
  Label,
  Form,
  Select,
  MemeContainer,
  Button,
  ButtonContainer,
  GeneratedMeme,
  Paragraph,
  Container,
  FormContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    bgImage: '',
    upperText: '',
    lowerText: '',
    fontSizeStyle: '',
  }

  onImageChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({topText: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontSizeChange = event => {
    this.setState({fontSize: event.target.value})
  }

  submitData = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state

    this.setState({
      bgImage: imageUrl,
      upperText: topText,
      lowerText: bottomText,
      fontSizeStyle: fontSize,
    })
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      bgImage,
      upperText,
      lowerText,
      fontSizeStyle,
    } = this.state

    return (
      <BackgroundContainer>
        <Heading>Meme Generator</Heading>
        <MemeContainer>
          <FormContainer>
            <Form onSubmit={this.submitData}>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                type="text"
                id="imageUrl"
                placeholder="Enter the Image URL"
                value={imageUrl}
                onChange={this.onImageChange}
              />
              <Label htmlFor="topText">Top Text</Label>
              <Input
                type="text"
                id="topText"
                placeholder="Enter the Top Text"
                value={topText}
                onChange={this.onTopTextChange}
              />
              <Label htmlFor="bottomText">Bottom Text</Label>
              <Input
                type="text"
                id="bottomText"
                placeholder="Enter the Bottom Text"
                value={bottomText}
                onChange={this.onBottomTextChange}
              />
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                id="fontSize"
                value={fontSize}
                onChange={this.onFontSizeChange}
              >
                {fontSizesOptionsList.map(item => (
                  <option key={item.optionId} value={item.optionId}>
                    {item.displayText}
                  </option>
                ))}
              </Select>
              <ButtonContainer>
                <Button type="submit">Generate</Button>
              </ButtonContainer>
            </Form>
          </FormContainer>
          <Container>
            <GeneratedMeme data-testid="meme" backgroundImage={bgImage}>
              <Paragraph fontStyle={fontSizeStyle}>{upperText}</Paragraph>
              <Paragraph fontStyle={fontSizeStyle}>{lowerText}</Paragraph>
            </GeneratedMeme>
          </Container>
        </MemeContainer>
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator
