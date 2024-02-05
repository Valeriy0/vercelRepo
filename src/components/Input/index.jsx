import React, { forwardRef, useMemo } from 'react';
import InputMask from 'react-input-mask';

const Input = forwardRef(({ className, value, mask, onChange, onBlur, ...props }, ref) => {
  const typeClassName = useMemo(() => {
    switch (props?.type) {
      case 'text': {
        return `w-full bg-white-30 border-[1px] border-white-100 rounded-2xl h-14 px-6 text-white-700 placeholder:text-white-300 outline-none ${
          !props.readOnly && 'focus:border-0 '
        } ${className}`;
      }
      case 'checkbox': {
        return `w-6 h-6 mr-4 ${className} `;
      }
      default: {
        return `w-full bg-white-30 border-[1px] border-white-100 rounded-2xl h-14 py-[21px] px-6 text-white-700 outline-none placeholder:text-white-300 focus:border-0  ${className}`;
      }
    }
  }, [props?.type, className]);

  const renderInput = () => {
    if (mask) {
      return (
        <InputMask {...{ mask, onChange, onBlur, value }} className={typeClassName} {...props}>
          {(inputProps) => <input ref={ref} {...inputProps} value={value} />}
        </InputMask>
      );
    }

    return <input ref={ref} className={typeClassName} {...{ mask, onChange, onBlur, value }} {...props} />;
  };

  return renderInput();
});

export { Input };
