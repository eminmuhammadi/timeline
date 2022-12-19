import type { NextPage } from 'next';

import ErrorComponent from './_error';

const Error404: NextPage = (): JSX.Element => {
  return (
    <ErrorComponent statusCode={404} />
  );
};

export default Error404;