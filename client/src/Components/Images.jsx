import styled from 'styled-components';

function Images({ src, alt, imgStyle }) {
  return <StyledImg src={src} alt={alt} imgStyle={imgStyle} />;
}

const StyledImg = styled.img.attrs(props => ({
  imgStyle: props.imgStyle,
}))`
  display: flex;
  width: 100%;
  align-items: center;
  height: auto;
  object-fit: cover;
  aspect-ratio: ${props => props.theme.images[props.imgStyle].imgStyle};
  border-radius: ${props => props.theme.images[props.imgStyle].imgStyle};
  border-radius: ${props => props.theme.images[props.imgStyle].borderRadius};
  max-width: ${props => props.theme.images[props.imgStyle].width};
  border: ${props => props.theme.images[props.imgStyle].border};
`;

export default Images;
