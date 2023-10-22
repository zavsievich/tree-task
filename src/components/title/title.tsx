type TitleProps = {
  count: number;
};

export const Title = ({ count }: TitleProps) => {
  return <h1 className="text-xxl uppercase">Products count: {count}</h1>;
};
