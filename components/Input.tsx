import clsx from 'clsx';

const Input = ({ classname, ...props }) => {
  return (
    <input
      className={clsx(
        'border-solid-border-gray border-solid border-2 border-gray-200 px-6 py-2 text-lg rounded3xl w-full',
        classname,
      )}
      {...props}
    />
  );
};

export default Input;
