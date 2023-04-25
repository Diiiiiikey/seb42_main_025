import styled from 'styled-components';

function Buttons({ buttonType, text, handleClick, id, buttonStyle, color, margin }) {
  return (
    <StyledButton
      id={id}
      type={buttonType}
      onClick={handleClick}
      buttonStyle={buttonStyle}
      color={color}
      margin={margin}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button.attrs(props => ({
  buttonStyle: props.buttonStyle,
}))`
  ${props => console.log(props)};
  background-color: ${props => props.theme.buttons[props.buttonStyle].backgroundColor};
  border: ${props => props.theme.buttons[props.buttonStyle].border};
  border-radius: ${props => props.theme.buttons[props.buttonStyle].borderRadius};
  font-size: ${props => props.theme.buttons[props.buttonStyle].size};
  color: ${props =>
    props.theme.buttons[props.buttonStyle].color || props.theme.colors[props.color]};
  padding: ${props => props.theme.buttons[props.buttonStyle].padding};
  margin: ${props => props.margin};
  font-weight: bold;
  white-space: nowrap;
  width: ${props => props.theme.buttons[props.buttonStyle].width || 'fit-content'};
  height: ${props => props.theme.buttons[props.buttonStyle].height || 'fit-content'};

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default Buttons;
