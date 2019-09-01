import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  min-height: 260px;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Avatar = styled.Image`
  width: 300px;
  height: 150px;
  border-radius: 4px;
`;

export const Info = styled.View`
  margin: 0px 30px 10px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: 10px 15px 0px;
  color: #333;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 13px;
  color: #999;
`;

export const SubmitButton = styled(Button)`
  margin: 5px 15px 15px;
`;
