import React from 'react';
import { SignUp } from '../SignUp/SignUp';
type Props = {
  modalClose: VoidFunction
}
export const SignUpContent = (props: Props) => {
  return (
    <div>
      <SignUp modalClose={props.modalClose} />
    </div>
  );
};
