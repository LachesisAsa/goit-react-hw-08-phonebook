import { Dna } from 'react-loader-spinner';

export const LoaderUser = () => {
  return (
    <Dna
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{
        marginTop: 100,
        marginLeft: 125,
      }}
      wrapperClass="dna-wrapper"
    />
  );
};