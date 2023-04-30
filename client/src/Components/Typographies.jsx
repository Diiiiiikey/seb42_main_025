import styled from 'styled-components';

function Typographies({ text, variant, typoStyle, margin }) {
  return (
    <StyledFont as={variant} typoStyle={typoStyle} margin={margin}>
      {text}
    </StyledFont>
  );
}

const StyledFont = styled.span.attrs(props => ({
  typoStyle: props.typoStyle,
}))`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  width: 100%;
  margin: ${props => props.margin};
  padding: ${props => props.theme.typos[props.typoStyle].padding};
  max-width: ${props => props.theme.typos[props.typoStyle].width};
  height: ${props => props.theme.typos[props.typoStyle].height};
  color: ${props => props.theme.typos[props.typoStyle].color};
  font-weight: ${props => props.theme.typos[props.typoStyle].bold};
  font-size: ${props => props.theme.typos[props.typoStyle].size};
  white-space: ${props => props.theme.typos[props.typoStyle].space};
  -webkit-line-clamp: ${props => props.theme.typos[props.typoStyle].line};
  line-height: ${props => props.theme.typos[props.typoStyle].lineHeight};
  text-shadow: ${props => props.theme.typos[props.typoStyle].textShadow};
  background-color: ${props => props.theme.typos[props.typoStyle].backgroundColor};
`;

export default Typographies;
